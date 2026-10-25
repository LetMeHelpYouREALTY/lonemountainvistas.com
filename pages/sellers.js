import Head from 'next/head';
import Link from 'next/link';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import RealScoutSimpleSearch from '../components/RealScoutSimpleSearch';
import RealScoutOfficeListings from '../components/RealScoutOfficeListings';

export default function Sellers() {
  return (
    <>
      <Head>
        <title>Seller&apos;s Guide | Lone Mountain Vistas | Home Selling Guide</title>
        <meta name="description" content="Complete guide for home sellers in Lone Mountain, Las Vegas. Learn how to prepare, price, and market your home for sale with expert guidance from Dr. Jan Duffy." />
        <meta property="og:title" content="Seller's Guide | Lone Mountain Vistas" />
        <meta property="og:description" content="Expert guidance for home sellers in northwest Las Vegas." />
        <meta property="og:url" content="https://lonemountainvistas.com/sellers" />
        <link rel="canonical" href="https://lonemountainvistas.com/sellers" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-[#1E6BB8] hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Sellers Guide</span>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Seller&apos;s Guide: Maximize Your Home&apos;s Value in Lone Mountain
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Selling your home is a major decision that requires careful planning and strategic execution. This guide will help you understand the selling process, prepare your home for the market, and achieve the best possible price in the Lone Mountain area of Las Vegas.
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 1: Get a Free Market Analysis
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Understanding your home&apos;s current market value is the foundation of a successful sale. A Comparative Market Analysis (CMA) examines similar properties that have recently sold, are currently on the market, or were listed but didn&apos;t sell. This analysis helps determine the optimal listing price to attract buyers while maximizing your return.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#1E6BB8] p-6 my-8 rounded">
            <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Free Home Valuation</h3>
            <p className="text-gray-700 mb-4">
              Contact me for a complimentary, no-obligation market analysis of your home. I&apos;ll analyze recent sales, current market conditions, and your home&apos;s unique features to provide an accurate price estimate.
            </p>
            <p className="text-gray-700 mb-2">
              📞 <a href="tel:702-222-1964" className="text-[#1E6BB8] hover:underline font-semibold">702-222-1964</a>
            </p>
            <p className="text-gray-700">
              ✉️ <a href="mailto:DrDuffySells@LoneMountainVistas.com" className="text-[#1E6BB8] hover:underline">DrDuffySells@LoneMountainVistas.com</a>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 2: Prepare Your Home for Sale
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            First impressions matter. Preparing your home for sale can significantly impact how quickly it sells and the price you receive. From simple decluttering and deep cleaning to strategic updates and staging, proper preparation makes your home more appealing to potential buyers.
          </p>

          <h3 className="text-2xl font-semibold text-[#0A2540] mt-8 mb-4">
            Essential Preparation Tasks
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Declutter & Depersonalize</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Remove personal items and photos</li>
                <li>Clear countertops and surfaces</li>
                <li>Organize closets and storage areas</li>
                <li>Create a neutral, welcoming environment</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Deep Clean</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Professional cleaning service</li>
                <li>Clean windows and screens</li>
                <li>Shampoo carpets if needed</li>
                <li>Polish fixtures and hardware</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Repairs & Updates</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Fix any obvious defects</li>
                <li>Update lighting fixtures</li>
                <li>Fresh paint in neutral colors</li>
                <li>Update hardware and fixtures</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Curb Appeal</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Landscaping and lawn care</li>
                <li>Power wash exterior surfaces</li>
                <li>Update front door and hardware</li>
                <li>Ensure exterior lighting works</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 3: Price Your Home Strategically
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Pricing is one of the most critical factors in selling your home. Price too high, and your home may sit on the market. Price too low, and you leave money on the table. Your real estate agent will analyze comparable sales, current market conditions, and your home&apos;s unique features to recommend an optimal listing price.
          </p>

          <h3 className="text-2xl font-semibold text-[#0A2540] mt-8 mb-4">
            Pricing Strategy Considerations
          </h3>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Comparable Sales:</strong> Recent sales of similar homes in your area</li>
            <li><strong>Current Listings:</strong> What competing properties are priced at</li>
            <li><strong>Market Conditions:</strong> Whether it&apos;s a buyer&apos;s or seller&apos;s market</li>
            <li><strong>Home Condition:</strong> Your home&apos;s condition relative to comparables</li>
            <li><strong>Location:</strong> Neighborhood desirability and amenities</li>
            <li><strong>Timing:</strong> Seasonal trends and market timing</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 4: Professional Marketing
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Effective marketing reaches the right buyers and showcases your home in its best light. I use comprehensive marketing strategies including professional photography, virtual tours, MLS listings, online advertising, social media promotion, and open houses.
          </p>

          <h3 className="text-2xl font-semibold text-[#0A2540] mt-8 mb-4">
            Marketing Components
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Professional Photography</h4>
              <p className="text-gray-700">
                High-quality photos and virtual tours that showcase your home&apos;s best features
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">MLS & Online Listings</h4>
              <p className="text-gray-700">
                Maximum exposure through Multiple Listing Service and popular real estate websites
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Social Media Marketing</h4>
              <p className="text-gray-700">
                Targeted social media campaigns to reach potential buyers
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Open Houses</h4>
              <p className="text-gray-700">
                Strategically scheduled open houses to generate interest and showings
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 5: Showings and Negotiations
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Once your home is listed, you&apos;ll receive showings from interested buyers. Your agent will coordinate showings, provide feedback, and handle all negotiations. When offers come in, your agent will help you evaluate each offer and negotiate terms that work in your favor.
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 6: Closing
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            After accepting an offer, the buyer will conduct inspections and secure financing. Your agent will coordinate with all parties, handle any issues that arise, and guide you through to closing day when you&apos;ll sign the final documents and transfer ownership.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#1E6BB8] p-6 my-8 rounded">
            <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Ready to Sell Your Home?</h3>
            <p className="text-gray-700 mb-4">
              Contact me for a free market analysis and to discuss how I can help you achieve your selling goals.
            </p>
            <p className="text-gray-700 mb-2">
              📞 <a href="tel:702-222-1964" className="text-[#1E6BB8] hover:underline font-semibold">702-222-1964</a>
            </p>
            <p className="text-gray-700">
              ✉️ <a href="mailto:DrDuffySells@LoneMountainVistas.com" className="text-[#1E6BB8] hover:underline">DrDuffySells@LoneMountainVistas.com</a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">See What&apos;s on the Market</h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <RealScoutAdvancedSearch className="sellers-search-widget" />
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
