import {
  COMMUNITY_CONFIG,
  CURATED_AMENITIES,
  AMENITY_CATEGORIES,
} from '../config/communityAmenities';

const { siteUrl, name, city, center, communityMarker } = COMMUNITY_CONFIG;

export const AMENITIES_FAQ = [
  {
    question: `What grocery stores are near ${name}?`,
    answer: `Albertsons at 6730 N Hualapai Way is a full-service supermarket a short drive from the Lone Mountain area, with grocery delivery and curbside pickup available.`,
  },
  {
    question: `How far is ${name} from the Las Vegas Strip?`,
    answer: `From northwest Las Vegas near Lone Mountain, the Las Vegas Strip is typically about a 25–35 minute drive via the 215 Beltway and I-15, depending on traffic and your starting address.`,
  },
  {
    question: `Are there hospitals near Lone Mountain?`,
    answer: `Yes. Centennial Hills Hospital Medical Center on N Durango Dr and MountainView Hospital on N Tenaya Way serve the northwest valley, both within a reasonable drive of Lone Mountain communities.`,
  },
  {
    question: `What outdoor recreation is closest to Lone Mountain homes?`,
    answer: `Lone Mountain Regional Park at 9825 W Lone Mountain Rd offers hiking trails, equestrian areas, dog parks, and picnic sites at the base of Lone Mountain.`,
  },
  {
    question: `Where do Lone Mountain students attend school?`,
    answer: `Public schools serving the 89129 area include William & Mary Scherkenbach Elementary and Centennial High School; always confirm current attendance zones with the Clark County School District before buying.`,
  },
  {
    question: `Is golf accessible from the Lone Mountain area?`,
    answer: `Badlands Golf Club on Alta Dr is one of the well-known public golf options west of the Strip, reachable by car from northwest Las Vegas neighborhoods.`,
  },
  {
    question: `How long does it take to reach Harry Reid International Airport from Lone Mountain?`,
    answer: `Harry Reid International Airport is approximately a 30–40 minute drive from northwest Las Vegas via the 215 Beltway and I-15, depending on time of day and route.`,
  },
  {
    question: `How close is Downtown Summerlin from Lone Mountain?`,
    answer: `Downtown Summerlin shopping and dining is roughly a 15–20 minute drive south on Durango Dr or via the 215 Beltway, making it a common errand hub for northwest residents.`,
  },
];

export function buildAmenitiesPageSchemas() {
  const pageUrl = `${siteUrl}/amenities`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: AMENITIES_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nearby Amenities',
        item: pageUrl,
      },
    ],
  };

  const communityPlaceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name,
    description: `Luxury real estate and residential communities in the ${COMMUNITY_CONFIG.region} area of ${city}, Nevada.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: 'NV',
      postalCode: COMMUNITY_CONFIG.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: communityMarker.lat,
      longitude: communityMarker.lng,
    },
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Featured amenities near ${name}`,
    itemListElement: CURATED_AMENITIES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: place.address.split(',')[0],
          addressLocality: city,
          addressRegion: 'NV',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: place.lat,
          longitude: place.lng,
        },
      },
    })),
  };

  const agentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    url: `${siteUrl}/about`,
    telephone: '+1-702-222-1964',
    email: 'DrDuffySells@LoneMountainVistas.com',
    image: `${siteUrl}/assets/images/properties/lone-mountain-view.jpg`,
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    areaServed: {
      '@type': 'Place',
      name,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: center.lat,
        longitude: center.lng,
      },
    },
    knowsAbout: AMENITY_CATEGORIES.map((c) => c.label),
  };

  return [faqSchema, breadcrumbSchema, communityPlaceSchema, itemListSchema, agentSchema];
}
