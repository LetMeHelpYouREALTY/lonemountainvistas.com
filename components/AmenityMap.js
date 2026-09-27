import { useCallback, useEffect, useId, useRef, useState } from 'react';
import {
  AMENITY_CATEGORIES,
  COMMUNITY_CONFIG,
  buildDirectionsUrl,
  buildEmbedMapUrl,
  getCuratedByCategory,
} from '../config/communityAmenities';
import { loadGoogleMaps, mapsAuthFailed } from '../lib/google-maps-loader';
import { searchCategory } from '../lib/searchCategoryPlaces';

const MAP_MIN_HEIGHT = 420;
const DEFAULT_CATEGORY = AMENITY_CATEGORIES[0]?.id ?? 'parks';

function getApiKey() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
}

function getMapId() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || '';
}

/**
 * @param {google.maps.InfoWindow} infoWindow
 * @param {google.maps.Map} map
 * @param {google.maps.Marker | google.maps.marker.AdvancedMarkerElement} anchor
 * @param {{ title: string, lines?: string[], link?: { href: string, text: string } }} content
 */
/**
 * @param {boolean} isAdvancedMarker
 */
function openInfoWindow(infoWindow, map, anchor, content, isAdvancedMarker) {
  const div = document.createElement('div');
  div.style.maxWidth = '240px';
  const strong = document.createElement('strong');
  strong.textContent = content.title;
  div.appendChild(strong);
  (content.lines || []).forEach((line) => {
    if (!line) return;
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createTextNode(line));
  });
  if (content.link?.href) {
    div.appendChild(document.createElement('br'));
    const a = document.createElement('a');
    a.href = content.link.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = content.link.text;
    div.appendChild(a);
  }
  infoWindow.setContent(div);
  if (isAdvancedMarker) {
    infoWindow.open({ map, anchor });
  } else {
    infoWindow.open(map, anchor);
  }
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
  const mapInitializedRef = useRef(false);
  const initStartedRef = useRef(false);

  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(DEFAULT_CATEGORY);
  const [useFallback, setUseFallback] = useState(!apiKey || mapsAuthFailed);
  const [loadError, setLoadError] = useState(false);
  const [places, setPlaces] = useState([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const [useCuratedForList, setUseCuratedForList] = useState(!apiKey || mapsAuthFailed);

  const enterFallback = useCallback(() => {
    setUseFallback(true);
    setLoadError(true);
    setUseCuratedForList(true);
    mapInitializedRef.current = false;
    mapInstanceRef.current = null;
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
      communityMarkerRef.current = null;
    }
  }, []);

  useEffect(() => {
    const onAuthFailure = () => enterFallback();
    window.addEventListener('gmaps:auth-failure', onAuthFailure);
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
  }, [enterFallback]);

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
    async (map, categoryId, placeResults) => {
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
          openInfoWindow(
            infoWindow,
            map,
            communityPin,
            {
              title: community.name,
              lines: ['Residential area in northwest Las Vegas'],
            },
            true
          );
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
          openInfoWindow(
            infoWindow,
            map,
            communityPin,
            {
              title: community.name,
              lines: ['Residential area in northwest Las Vegas'],
            },
            false
          );
        });
      }

      placeResults.forEach((place) => {
        if (place.lat == null || place.lng == null) return;

        const position = { lat: place.lat, lng: place.lng };
        const directions =
          place.directionsUrl || buildDirectionsUrl(place.lat, place.lng);

        const marker = new google.maps.Marker({
          map,
          position,
          title: place.name,
        });
        marker.addListener('click', () => {
          openInfoWindow(
            infoWindow,
            map,
            marker,
            {
              title: place.name,
              lines: [place.address || ''],
              link: { href: directions, text: 'Directions' },
            },
            false
          );
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers, communityMarker, mapId]
  );

  const initInteractiveMap = useCallback(async () => {
    if (!apiKey || !mapContainerRef.current || mapsAuthFailed) {
      enterFallback();
      return;
    }

    try {
      await loadGoogleMaps(apiKey);
      const map = new google.maps.Map(mapContainerRef.current, {
        center,
        zoom: 13,
        mapId: mapId || undefined,
        fullscreenControl: true,
        streetViewControl: false,
        mapTypeControl: false,
      });
      mapInstanceRef.current = map;
      mapInitializedRef.current = true;
      setUseFallback(false);
      setLoadError(false);
      setUseCuratedForList(false);
    } catch {
      enterFallback();
    }
  }, [apiKey, center, enterFallback, mapId]);

  const loadCategoryPlaces = useCallback(
    async (categoryId) => {
      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!category) return;

      if (useFallback || !mapInstanceRef.current || !apiKey) {
        setPlaces([]);
        setUseCuratedForList(true);
        return;
      }

      setLoadingPlaces(true);
      try {
        const results = await searchCategory(
          center,
          categoryId,
          category.primaryTypes
        );
        setPlaces(results);
        setUseCuratedForList(false);
        await renderMarkers(mapInstanceRef.current, categoryId, results);
      } catch {
        const curated = getCuratedByCategory(categoryId);
        setPlaces(curated);
        setUseCuratedForList(true);
        try {
          await renderMarkers(mapInstanceRef.current, categoryId, curated);
        } catch {
          /* keep list fallback only */
        }
      } finally {
        setLoadingPlaces(false);
      }
    },
    [apiKey, center, renderMarkers, useFallback]
  );

  useEffect(() => {
    if (!isVisible || useFallback || initStartedRef.current) {
      return undefined;
    }
    if (mapsAuthFailed) {
      enterFallback();
      return undefined;
    }
    initStartedRef.current = true;

    let cancelled = false;

    loadGoogleMaps(apiKey)
      .then(() => {
        if (cancelled) return undefined;
        return initInteractiveMap();
      })
      .then(() => {
        if (!cancelled && mapInstanceRef.current) {
          return loadCategoryPlaces(DEFAULT_CATEGORY);
        }
        return undefined;
      })
      .catch(() => {
        if (!cancelled) enterFallback();
      });

    return () => {
      cancelled = true;
    };
  }, [isVisible, useFallback, apiKey, initInteractiveMap, loadCategoryPlaces, enterFallback]);

  useEffect(() => {
    if (useFallback || !mapInitializedRef.current || !mapInstanceRef.current) {
      return undefined;
    }
    loadCategoryPlaces(activeCategory);
    return undefined;
  }, [activeCategory, loadCategoryPlaces, useFallback]);

  const curatedForCategory = getCuratedByCategory(activeCategory);
  const embedUrl = buildEmbedMapUrl(center.lat, center.lng);
  const listPlaces = useFallback || useCuratedForList
    ? curatedForCategory
    : places.length
      ? places
      : curatedForCategory;

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
            {useFallback || useCuratedForList ? 'Nearby places' : 'Places in this category'}
          </h3>
          <ul className="space-y-3">
            {listPlaces.map((place) => {
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
            })}
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
