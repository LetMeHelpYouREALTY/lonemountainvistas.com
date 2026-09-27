import { useCallback, useEffect, useId, useRef, useState } from 'react';
import {
  AMENITY_CATEGORIES,
  COMMUNITY_CONFIG,
  buildDirectionsUrl,
  buildEmbedMapUrl,
  getCuratedByCategory,
} from '../config/communityAmenities';

const MAP_MIN_HEIGHT = 420;
const SEARCH_RADIUS_METERS = 8000;
const DEFAULT_CATEGORY = AMENITY_CATEGORIES[0]?.id ?? 'parks';

function getApiKey() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
}

function getMapId() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || '';
}

/**
 * @param {string} apiKey
 * @returns {Promise<typeof google>}
 */
function loadGoogleMapsScript(apiKey) {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Google Maps cannot load during SSR'));
  }

  if (window.google?.maps?.importLibrary) {
    return Promise.resolve(window.google);
  }

  const existing = document.querySelector('script[data-amenity-google-maps]');
  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.google?.maps) {
        resolve(window.google);
        return;
      }
      existing.addEventListener('load', () => resolve(window.google));
      existing.addEventListener('error', () => reject(new Error('Maps script failed')));
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&loading=async&libraries=places,marker`;
    script.async = true;
    script.defer = true;
    script.dataset.amenityGoogleMaps = 'true';
    script.onload = () => resolve(window.google);
    script.onerror = () => reject(new Error('Maps script failed to load'));
    document.head.appendChild(script);
  });
}

/**
 * @param {typeof google} google
 * @param {{ lat: number, lng: number }} center
 * @param {{ primaryTypes: string[] }} category
 */
async function fetchPlacesForCategory(google, center, category) {
  const { Place } = await google.maps.importLibrary('places');

  try {
    const centerLatLng = new google.maps.LatLng(center.lat, center.lng);
    const request = {
      fields: ['displayName', 'location', 'formattedAddress', 'rating', 'googleMapsURI'],
      locationRestriction: {
        center: centerLatLng,
        radius: SEARCH_RADIUS_METERS,
      },
      includedPrimaryTypes: category.primaryTypes.slice(0, 1),
      maxResultCount: 15,
    };

    const { places } = await Place.searchNearby(request);

    return (places || []).map((place) => {
      const lat = place.location?.lat?.() ?? place.location?.lat;
      const lng = place.location?.lng?.() ?? place.location?.lng;
      const name =
        typeof place.displayName === 'string'
          ? place.displayName
          : place.displayName?.text || 'Place';

      return {
        name,
        address: place.formattedAddress || '',
        rating: place.rating,
        lat,
        lng,
        directionsUrl:
          place.googleMapsURI ||
          (lat != null && lng != null ? buildDirectionsUrl(lat, lng) : undefined),
      };
    });
  } catch {
    return fetchPlacesLegacy(google, center, category);
  }
}

/**
 * @param {typeof google} google
 * @param {{ lat: number, lng: number }} center
 * @param {{ primaryTypes: string[] }} category
 */
function fetchPlacesLegacy(google, center, category) {
  return new Promise((resolve) => {
    const mapDiv = document.createElement('div');
    const map = new google.maps.Map(mapDiv, {
      center,
      zoom: 13,
    });
    const service = new google.maps.places.PlacesService(map);
    const type = category.primaryTypes[0];

    service.nearbySearch(
      {
        location: center,
        radius: SEARCH_RADIUS_METERS,
        type,
      },
      (results, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
          resolve([]);
          return;
        }
        resolve(
          results.slice(0, 15).map((r) => ({
            name: r.name,
            address: r.vicinity || r.formatted_address || '',
            rating: r.rating,
            lat: r.geometry?.location?.lat(),
            lng: r.geometry?.location?.lng(),
            directionsUrl:
              r.geometry?.location != null
                ? buildDirectionsUrl(
                    r.geometry.location.lat(),
                    r.geometry.location.lng()
                  )
                : undefined,
          }))
        );
      }
    );
  });
}

/**
 * @param {object} props
 * @param {boolean} [props.showCuratedList]
 * @param {string} [props.className]
 */
export default function AmenityMap({ showCuratedList = true, className = '' }) {
  const apiKey = getApiKey();
  const mapId = getMapId();
  const { center, communityMarker } = COMMUNITY_CONFIG;
  const listId = useId();

  const sectionRef = useRef(null);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const infoWindowRef = useRef(null);
  const communityMarkerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(DEFAULT_CATEGORY);
  const [useFallback, setUseFallback] = useState(!apiKey);
  const [loadError, setLoadError] = useState(false);
  const [places, setPlaces] = useState([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px', threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
      communityMarkerRef.current = null;
    }
  }, []);

  const renderMarkers = useCallback(
    async (google, map, categoryId, placeResults) => {
      clearMarkers();
      const infoWindow = infoWindowRef.current || new google.maps.InfoWindow();
      infoWindowRef.current = infoWindow;

      const community = communityMarker;
      const communityPosition = { lat: community.lat, lng: community.lng };

      if (mapId && google.maps.marker?.AdvancedMarkerElement) {
        const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
        const communityPin = new AdvancedMarkerElement({
          map,
          position: communityPosition,
          title: community.name,
        });
        communityMarkerRef.current = communityPin;
        communityPin.addListener('click', () => {
          infoWindow.setContent(
            `<div style="max-width:220px"><strong>${community.name}</strong><br/>Luxury homes in northwest Las Vegas</div>`
          );
          infoWindow.open({ map, anchor: communityPin });
        });
      } else {
        const communityPin = new google.maps.Marker({
          map,
          position: communityPosition,
          title: community.name,
          label: { text: '★', color: '#ffffff', fontWeight: '700' },
        });
        communityMarkerRef.current = communityPin;
        communityPin.addListener('click', () => {
          infoWindow.setContent(
            `<div style="max-width:220px"><strong>${community.name}</strong><br/>Luxury homes in northwest Las Vegas</div>`
          );
          infoWindow.open(map, communityPin);
        });
      }

      placeResults.forEach((place) => {
        if (place.lat == null || place.lng == null) return;

        const position = { lat: place.lat, lng: place.lng };
        const directions =
          place.directionsUrl || buildDirectionsUrl(place.lat, place.lng);
        const ratingLine =
          place.rating != null ? `<br/>Rating: ${place.rating.toFixed(1)}` : '';
        const content = `<div style="max-width:240px"><strong>${place.name}</strong>${ratingLine}<br/>${place.address || ''}<br/><a href="${directions}" target="_blank" rel="noopener noreferrer">Directions</a></div>`;

        const marker = new google.maps.Marker({
          map,
          position,
          title: place.name,
        });
        marker.addListener('click', () => {
          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers, communityMarker, mapId]
  );

  const initInteractiveMap = useCallback(async () => {
    if (!apiKey || !mapContainerRef.current) return;

    try {
      const google = await loadGoogleMapsScript(apiKey);
      const map = new google.maps.Map(mapContainerRef.current, {
        center,
        zoom: 13,
        mapId: mapId || undefined,
        fullscreenControl: true,
        streetViewControl: false,
        mapTypeControl: false,
      });
      mapInstanceRef.current = map;
      setUseFallback(false);
      setLoadError(false);
    } catch {
      setUseFallback(true);
      setLoadError(true);
    }
  }, [apiKey, center, mapId]);

  const loadCategoryPlaces = useCallback(
    async (categoryId) => {
      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!category) return;

      if (useFallback || !mapInstanceRef.current || !apiKey) {
        setPlaces([]);
        return;
      }

      setLoadingPlaces(true);
      try {
        const google = window.google;
        const results = await fetchPlacesForCategory(google, center, category);
        setPlaces(results);
        await renderMarkers(google, mapInstanceRef.current, categoryId, results);
      } catch {
        setPlaces(getCuratedByCategory(categoryId));
      } finally {
        setLoadingPlaces(false);
      }
    },
    [apiKey, center, renderMarkers, useFallback]
  );

  const mapInitializedRef = useRef(false);
  const initStartedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || useFallback || mapInitializedRef.current) {
      return undefined;
    }

    let cancelled = false;

    (async () => {
      await initInteractiveMap();
      if (!cancelled && mapInstanceRef.current) {
        mapInitializedRef.current = true;
        await loadCategoryPlaces(activeCategory);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isVisible, useFallback, initInteractiveMap, loadCategoryPlaces, activeCategory, clearMarkers]);

  useEffect(() => {
    if (useFallback || !mapInitializedRef.current || !mapInstanceRef.current) {
      return undefined;
    }
    loadCategoryPlaces(activeCategory);
    return undefined;
  }, [activeCategory, loadCategoryPlaces, useFallback]);

  const curatedForCategory = getCuratedByCategory(activeCategory);
  const embedUrl = buildEmbedMapUrl(center.lat, center.lng);

  return (
    <div ref={sectionRef} className={`amenity-map-root w-full ${className}`.trim()}>
      <div
        className="amenity-map-filters flex flex-wrap gap-2 mb-4"
        role="tablist"
        aria-label="Filter nearby amenities by category"
      >
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              id={`${listId}-tab-${cat.id}`}
              aria-selected={selected}
              aria-controls={`${listId}-panel`}
              aria-label={cat.ariaLabel}
              className={`px-3 py-2 text-sm font-medium rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6BB8] focus-visible:ring-offset-2 ${
                selected
                  ? 'bg-[#1E6BB8] text-white border-[#1E6BB8]'
                  : 'bg-white text-[#0A2540] border-gray-200 hover:border-[#1E6BB8]'
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${listId}-panel`}
        role="tabpanel"
        aria-labelledby={`${listId}-tab-${activeCategory}`}
        className="amenity-map-frame rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100"
        style={{ minHeight: MAP_MIN_HEIGHT }}
      >
        {useFallback ? (
          <iframe
            title={`Map of ${COMMUNITY_CONFIG.name} area in ${COMMUNITY_CONFIG.city}`}
            src={embedUrl}
            width="100%"
            height={MAP_MIN_HEIGHT}
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={`Embedded map centered on ${COMMUNITY_CONFIG.shortName}, ${COMMUNITY_CONFIG.city}`}
          />
        ) : (
          <div
            ref={mapContainerRef}
            style={{ width: '100%', height: MAP_MIN_HEIGHT }}
            aria-label={`Interactive map of amenities near ${COMMUNITY_CONFIG.name}`}
          />
        )}
      </div>

      {loadError && (
        <p className="text-sm text-gray-600 mt-2" role="status">
          Interactive map unavailable; showing embedded map and curated places below.
        </p>
      )}

      {loadingPlaces && !useFallback && (
        <p className="text-sm text-gray-600 mt-2" role="status">
          Loading places…
        </p>
      )}

      {showCuratedList && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#0A2540] mb-3">
            {useFallback ? 'Nearby places' : 'Featured places in this category'}
          </h3>
          <ul className="space-y-3">
            {(useFallback ? curatedForCategory : places.length ? places : curatedForCategory).map(
              (place) => {
                const lat = place.lat;
                const lng = place.lng;
                const directions =
                  place.directionsUrl ||
                  (lat != null && lng != null ? buildDirectionsUrl(lat, lng) : null);
                const key = place.id || `${place.name}-${place.address}`;

                return (
                  <li
                    key={key}
                    className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm"
                  >
                    <p className="font-semibold text-[#0A2540]">{place.name}</p>
                    {place.address && (
                      <p className="text-sm text-gray-600 mt-1">{place.address}</p>
                    )}
                    {place.rating != null && (
                      <p className="text-sm text-gray-500 mt-1">Rating: {place.rating}</p>
                    )}
                    {directions && (
                      <a
                        href={directions}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm text-[#1E6BB8] font-medium hover:underline"
                      >
                        Directions
                      </a>
                    )}
                  </li>
                );
              }
            )}
          </ul>
          {useFallback && curatedForCategory.length === 0 && (
            <p className="text-gray-600 text-sm">
              Explore other categories using the filters above for more curated locations.
            </p>
          )}
        </div>
      )}

    </div>
  );
}
