import Head from 'next/head';
import Link from 'next/link';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import RealScoutSimpleSearch from '../components/RealScoutSimpleSearch';
import RealScoutOfficeListings from '../components/RealScoutOfficeListings';

export default function MarketReports() {
  return (
    <>
      <Head>
        <title>Lone Mountain Real Estate Market Reports | Las Vegas Market Trends</title>
        <meta name="description" content="Stay informed about the Lone Mountain real estate market with current trends, statistics, and market analysis for northwest Las Vegas neighborhoods." />
        <meta property="og:title" content="Market Reports | Lone Mountain Vistas" />
        <meta property="og:description" content="Real estate market trends and statistics for Lone Mountain, Las Vegas." />
        <meta property="og:url" content="https://lonemountainvistas.com/market-reports" />
        <link rel="canonical" href="https://lonemountainvistas.com/market-reports" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-[#1E6BB8] hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Market Reports</span>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Lone Mountain Real Estate Market Reports
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Stay informed about the latest real estate trends, statistics, and market conditions in the Lone Mountain area of northwest Las Vegas. Understanding the market helps you make informed decisions whether you&apos;re buying or selling.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#1E6BB8] p-6 my-8 rounded">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Request a Custom Market Report</h2>
            <p className="text-gray-700 mb-4">
              Get a detailed market analysis for your specific neighborhood or property. Contact me for a personalized market report tailored to your needs.
            </p>
            <p className="text-gray-700 mb-2">
              📞 <a href="tel:702-222-1964" className="text-[#1E6BB8] hover:underline font-semibold">702-222-1964</a>
            </p>
            <p className="text-gray-700">
              ✉️ <a href="mailto:DrDuffySells@LoneMountainVistas.com" className="text-[#1E6BB8] hover:underline">DrDuffySells@LoneMountainVistas.com</a>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Current Market Overview
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The Lone Mountain area continues to be one of the most desirable locations in northwest Las Vegas, offering a unique combination of natural beauty, luxury amenities, and convenient access to the city. The market reflects strong demand for quality homes in older communities like The Estates at Lone Mountain and Lone Mountain Vista V.
          </p>

          <h3 className="text-2xl font-semibold text-[#0A2540] mt-8 mb-4">
            Key Market Indicators
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-[#0A2540] mb-3">Average Home Prices</h4>
              <p className="text-gray-700 mb-2">
                The Lone Mountain area features a range of properties from mid-range single-family homes to luxury custom estates. Property values are influenced by location, size, condition, and proximity to amenities like Lone Mountain Regional Park.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-[#0A2540] mb-3">Days on Market</h4>
              <p className="text-gray-700 mb-2">
                Well-priced properties in desirable Lone Mountain neighborhoods typically sell efficiently. Market conditions vary, but properties that are properly priced and well-maintained tend to attract qualified buyers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-[#0A2540] mb-3">Inventory Levels</h4>
              <p className="text-gray-700 mb-2">
                Inventory levels in the Lone Mountain area reflect the balance between supply and demand. Seasonal variations and market conditions influence available properties, creating opportunities for both buyers and sellers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-[#0A2540] mb-3">Price Trends</h4>
              <p className="text-gray-700 mb-2">
                The Lone Mountain market has shown stability and growth over time, making it an attractive area for both primary residences and investment properties. Location near recreational amenities adds value.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Neighborhood Market Trends
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">The Estates at Lone Mountain</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This luxury community continues to attract buyers seeking custom-built homes with mountain views and premium amenities. Properties in The Estates command premium prices due to the custom construction quality and desirable location near Lone Mountain Regional Park.
              </p>
              <Link href="/estates-lone-mountain" className="text-[#1E6BB8] hover:underline font-semibold">
                Learn more about The Estates →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Lone Mountain Vista V</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This walkable neighborhood offers a mix of single-family homes and has gained popularity for its community atmosphere and convenient location. The area appeals to families and professionals seeking a balance of affordability and quality of life.
              </p>
              <Link href="/lone-mountain-vista-v" className="text-[#1E6BB8] hover:underline font-semibold">
                Learn more about Lone Mountain Vista V →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">General Lone Mountain Area</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The broader Lone Mountain area benefits from its proximity to recreational opportunities, nearby public schools, and easy access to major employment centers. The market reflects steady demand for quality homes in well-maintained neighborhoods.
              </p>
              <Link href="/living-lone-mountain" className="text-[#1E6BB8] hover:underline font-semibold">
                Learn more about living in Lone Mountain →
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Factors Influencing the Market
          </h2>

          <div className="space-y-4 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Location Advantages</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Proximity to Lone Mountain Regional Park and recreational amenities</li>
                <li>Convenient access to the 215 freeway and major employment centers</li>
                <li>Nearby schools and master-planned neighborhoods</li>
                <li>Mountain views and natural desert landscape</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Economic Factors</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Las Vegas job market growth and economic stability</li>
                <li>Interest rates and financing availability</li>
                <li>Population growth and demographic trends</li>
                <li>Infrastructure improvements and development</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            What This Means for You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">For Buyers</h3>
              <p className="text-gray-700 mb-4">
                Understanding market conditions helps you make competitive offers and identify good value. Working with an experienced agent who knows the Lone Mountain market is key to finding the right property at the right price.
              </p>
              <Link href="/buyers" className="text-[#1E6BB8] hover:underline font-semibold">
                View Buyer&apos;s Guide →
              </Link>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">For Sellers</h3>
              <p className="text-gray-700 mb-4">
                Market knowledge enables you to price your home competitively and maximize your return. A current market analysis is essential for making informed decisions about timing and pricing strategy.
              </p>
              <Link href="/sellers" className="text-[#1E6BB8] hover:underline font-semibold">
                View Seller&apos;s Guide →
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Explore Current Listings</h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <RealScoutAdvancedSearch className="market-reports-search-widget" />
            </div>
          </div>
        </article>

        <section className="office-listings-section mt-12">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-6 text-center">Featured Properties</h2>
          <RealScoutOfficeListings />
        </section>
      </main>
    </>
  );
}
