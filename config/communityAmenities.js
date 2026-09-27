/**
 * Lone Mountain Vistas — community center and curated nearby places.
 * Map center: Clark County Lone Mountain Regional Park (public geographic anchor for the area).
 */

export const COMMUNITY_CONFIG = {
  name: 'Lone Mountain Vistas',
  shortName: 'Lone Mountain',
  city: 'Las Vegas',
  state: 'NV',
  region: 'Northwest Las Vegas',
  postalCode: '89129',
  siteUrl: 'https://lonemountainvistas.com',
  center: {
    lat: 36.2468,
    lng: -115.3119,
  },
  centerAddress: '9825 W Lone Mountain Rd, Las Vegas, NV 89129',
  centerSource:
    'Lone Mountain Regional Park main address (Clark County Parks & Recreation)',
  /** Marker for the community brand (residential area southeast of the park) */
  communityMarker: {
    name: 'Lone Mountain Vistas',
    lat: 36.238,
    lng: -115.298,
  },
  isActiveAdult: false,
  isHighRise: false,
};

/** @typedef {{ id: string, label: string, primaryTypes: string[], schemaType: string, ariaLabel: string }} AmenityCategory */

/** @type {AmenityCategory[]} */
export const AMENITY_CATEGORIES = [
  {
    id: 'parks',
    label: 'Parks',
    primaryTypes: ['park'],
    schemaType: 'Park',
    ariaLabel: 'Show parks near Lone Mountain',
  },
  {
    id: 'golf',
    label: 'Golf',
    primaryTypes: ['golf_course'],
    schemaType: 'GolfCourse',
    ariaLabel: 'Show golf courses near Lone Mountain',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    primaryTypes: ['restaurant'],
    schemaType: 'Restaurant',
    ariaLabel: 'Show restaurants near Lone Mountain',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    primaryTypes: ['grocery_store', 'supermarket'],
    schemaType: 'GroceryStore',
    ariaLabel: 'Show grocery stores near Lone Mountain',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    primaryTypes: ['hospital', 'doctor'],
    schemaType: 'Hospital',
    ariaLabel: 'Show healthcare near Lone Mountain',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    primaryTypes: ['gym'],
    schemaType: 'ExerciseGym',
    ariaLabel: 'Show fitness centers near Lone Mountain',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    primaryTypes: ['shopping_mall'],
    schemaType: 'ShoppingCenter',
    ariaLabel: 'Show shopping near Lone Mountain',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    primaryTypes: ['cafe', 'coffee_shop'],
    schemaType: 'CafeOrCoffeeShop',
    ariaLabel: 'Show cafes near Lone Mountain',
  },
  {
    id: 'schools',
    label: 'Schools',
    primaryTypes: ['school', 'primary_school', 'secondary_school'],
    schemaType: 'School',
    ariaLabel: 'Show schools near Lone Mountain',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    primaryTypes: ['pharmacy'],
    schemaType: 'Pharmacy',
    ariaLabel: 'Show pharmacies near Lone Mountain',
  },
  {
    id: 'parking',
    label: 'Parking',
    primaryTypes: ['parking'],
    schemaType: 'ParkingFacility',
    ariaLabel: 'Show parking near Lone Mountain',
  },
];

/**
 * Curated places for fallback UI and ItemList schema — each entry verified against a primary source URL.
 * @typedef {{ id: string, name: string, category: string, schemaType: string, address: string, lat: number, lng: number, sourceUrl: string }} CuratedPlace
 */

/** @type {CuratedPlace[]} */
export const CURATED_AMENITIES = [
  {
    id: 'lone-mountain-regional-park',
    name: 'Lone Mountain Regional Park',
    category: 'parks',
    schemaType: 'Park',
    address: '9825 W Lone Mountain Rd, Las Vegas, NV 89129',
    lat: 36.2468,
    lng: -115.3119,
    sourceUrl:
      'https://www.clarkcountynv.gov/government/departments/parks___recreation/services/area_reservations/',
  },
  {
    id: 'floyd-lamb-park',
    name: 'Floyd Lamb Park at Tule Springs',
    category: 'parks',
    schemaType: 'Park',
    address: '9200 Tule Springs Rd, Las Vegas, NV 89131',
    lat: 36.316,
    lng: -115.274,
    sourceUrl: 'https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Floyd-Lamb-Park',
  },
  {
    id: 'albertsons-hualapai',
    name: 'Albertsons',
    category: 'grocery',
    schemaType: 'GroceryStore',
    address: '6730 N Hualapai Way, Las Vegas, NV 89149',
    lat: 36.2845,
    lng: -115.3142,
    sourceUrl: 'https://local.albertsons.com/nv/las-vegas/6730-n-hualapai-way.html',
  },
  {
    id: 'badlands-golf',
    name: 'Badlands Golf Club',
    category: 'golf',
    schemaType: 'GolfCourse',
    address: '9119 Alta Dr, Las Vegas, NV 89145',
    lat: 36.1385,
    lng: -115.298,
    sourceUrl: 'https://www.badlandsgc.com/',
  },
  {
    id: 'centennial-hills-hospital',
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    schemaType: 'Hospital',
    address: '6900 N Durango Dr, Las Vegas, NV 89149',
    lat: 36.2875,
    lng: -115.2868,
    sourceUrl: 'https://www.dignityhealth.org/las-vegas/locations/centennial-hills',
  },
  {
    id: 'mountainview-hospital',
    name: 'MountainView Hospital',
    category: 'healthcare',
    schemaType: 'Hospital',
    address: '3100 N Tenaya Way, Las Vegas, NV 89128',
    lat: 36.2135,
    lng: -115.2495,
    sourceUrl: 'https://www.mountainview-hospital.com/',
  },
  {
    id: 'centennial-hills-shopping',
    name: 'Centennial Hills Marketplace',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    address: '7250 N Durango Dr, Las Vegas, NV 89149',
    lat: 36.293,
    lng: -115.286,
    sourceUrl: 'https://www.centennialhillsmarketplace.com/',
  },
  {
    id: 'centennial-high-school',
    name: 'Centennial High School',
    category: 'schools',
    schemaType: 'School',
    address: '7101 W Alexander Rd, Las Vegas, NV 89129',
    lat: 36.272,
    lng: -115.276,
    sourceUrl: 'https://www.centennialhs.org/',
  },
  {
    id: 'scherkenbach-elementary',
    name: 'William & Mary Scherkenbach Elementary School',
    category: 'schools',
    schemaType: 'School',
    address: '4150 N Cholla Ln, Las Vegas, NV 89129',
    lat: 36.235,
    lng: -115.268,
    sourceUrl: 'https://scherkenbachelementary.com/',
  },
  {
    id: 'cvs-centennial',
    name: 'CVS Pharmacy',
    category: 'pharmacies',
    schemaType: 'Pharmacy',
    address: '7250 N Durango Dr Ste 100, Las Vegas, NV 89149',
    lat: 36.2925,
    lng: -115.2865,
    sourceUrl: 'https://www.cvs.com/store-locator/store/89149',
  },
];

/**
 * @param {string} categoryId
 */
export function getCuratedByCategory(categoryId) {
  return CURATED_AMENITIES.filter((place) => place.category === categoryId);
}

export function getCategoryById(categoryId) {
  return AMENITY_CATEGORIES.find((c) => c.id === categoryId);
}

export function buildEmbedMapUrl(lat, lng, zoom = 14) {
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}

export function buildDirectionsUrl(lat, lng) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
