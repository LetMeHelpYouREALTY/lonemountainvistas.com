/** @type {Map<string, Promise<object[]>>} */
const cache = new Map();

const PLACE_FIELDS = ['displayName', 'location', 'formattedAddress', 'googleMapsURI'];

/**
 * One Places searchNearby per category per page session.
 * @param {google.maps.LatLngLiteral} center
 * @param {string} categoryId
 * @param {string[]} types
 * @param {number} [radiusMeters]
 * @returns {Promise<Array<{ name: string, address: string, lat: number, lng: number, directionsUrl?: string }>>}
 */
export function searchCategory(center, categoryId, types, radiusMeters = 5000) {
  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = await google.maps.importLibrary('places');
      const centerLatLng = new google.maps.LatLng(center.lat, center.lng);
      const { places } = await Place.searchNearby({
        fields: PLACE_FIELDS,
        locationRestriction: {
          center: centerLatLng,
          radius: radiusMeters,
        },
        includedPrimaryTypes: types,
        maxResultCount: 10,
        rankPreference: 'POPULARITY',
      });
      return (places || []).map((place) => {
        const loc = place.location;
        const json = loc?.toJSON?.() ?? null;
        const lat = json?.lat ?? (typeof loc?.lat === 'function' ? loc.lat() : loc?.lat);
        const lng = json?.lng ?? (typeof loc?.lng === 'function' ? loc.lng() : loc?.lng);
        const name =
          typeof place.displayName === 'string'
            ? place.displayName
            : place.displayName?.text || 'Place';
        return {
          name,
          address: place.formattedAddress || '',
          lat,
          lng,
          directionsUrl:
            place.googleMapsURI ||
            (lat != null && lng != null
              ? `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
              : undefined),
        };
      });
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
