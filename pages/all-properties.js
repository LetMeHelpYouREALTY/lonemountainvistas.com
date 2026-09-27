import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import propertiesData from '../assets/data/properties.json';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import RealScoutSimpleSearch from '../components/RealScoutSimpleSearch';
import RealScoutOfficeListings from '../components/RealScoutOfficeListings';
import AmenityMapSection from '../components/AmenityMapSection';

export default function AllProperties({ properties }) {
  return (
    <>
      <Head>
        <title>All Properties | Lone Mountain Vistas</title>
        <meta name="description" content="Browse our exclusive collection of luxury properties in the Lone Mountain area of Las Vegas, Nevada." />
        <meta property="og:title" content="All Properties | Lone Mountain Vistas" />
        <meta property="og:description" content="Browse our exclusive collection of luxury properties in the Lone Mountain area of Las Vegas, Nevada." />
        <link rel="canonical" href="https://lonemountainvistas.com/all-properties" />
        <meta property="og:url" content="https://lonemountainvistas.com/all-properties" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#0A2540] mb-8">Available Properties</h1>

        <div className="mb-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-[#0A2540] mb-4 text-center">Search Properties</h2>
          <p className="text-gray-600 mb-4 text-center">Search by neighborhood, city, or school</p>
          <div className="flex justify-center">
            <RealScoutSimpleSearch className="all-properties-simple-search-widget" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={property.imageUrl || '/assets/images/properties/fallback-card.jpg'}
                  alt={property.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#0A2540] mb-2">{property.title}</h2>
                <p className="text-lg font-bold text-[#16B286] mb-4">${property.price.toLocaleString()}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <span className="font-medium">{property.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{property.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{property.sqft.toLocaleString()} sq ft</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{property.description}</p>
                <Link
                  href={`/property/${property.id}`}
                  className="inline-block bg-[#3A8DDE] text-white px-6 py-2 rounded-lg hover:bg-[#2D7BC7] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <AmenityMapSection
          title="Explore the neighborhood"
          subtitle="See parks, schools, grocery, and healthcare near Lone Mountain listings before you tour."
        />

        <section className="office-listings-section mt-12">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-6 text-center">All Office Listings</h2>
          <RealScoutOfficeListings />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Map the properties data to match the component's expected format
  const properties = propertiesData.properties.map(property => ({
    id: property.id,
    title: property.address,
    price: property.price,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    sqft: property.squareFeet,
    description: property.description,
    imageUrl: `/assets/images/properties/${property.id}.jpg` // Default image path
  }));

  return {
    props: {
      properties,
    },
  };
}
