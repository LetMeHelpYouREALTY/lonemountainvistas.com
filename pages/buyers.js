import Head from 'next/head';
import Link from 'next/link';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import RealScoutSimpleSearch from '../components/RealScoutSimpleSearch';
import RealScoutOfficeListings from '../components/RealScoutOfficeListings';

export default function Buyers() {
  return (
    <>
      <Head>
        <title>Buyer&apos;s Guide | Lone Mountain Vistas | Real Estate Buying Guide</title>
        <meta name="description" content="Complete guide for home buyers in Lone Mountain, Las Vegas. Learn about the buying process, financing options, and how to find your dream home with Dr. Jan Duffy." />
        <meta property="og:title" content="Buyer's Guide | Lone Mountain Vistas" />
        <meta property="og:description" content="Expert guidance for home buyers in northwest Las Vegas." />
        <meta property="og:url" content="https://lonemountainvistas.com/buyers" />
        <link rel="canonical" href="https://lonemountainvistas.com/buyers" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-[#1E6BB8] hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Buyers Guide</span>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Buyer&apos;s Guide: Your Path to Homeownership in Lone Mountain
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Buying a home is one of life&apos;s most significant investments. Whether you&apos;re a first-time homebuyer or an experienced investor, this guide will help you navigate the home buying process in the Lone Mountain area of Las Vegas with confidence and clarity.
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 1: Get Pre-Approved for a Mortgage
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Before you start house hunting, it&apos;s essential to understand your budget. Getting pre-approved for a mortgage gives you a clear picture of what you can afford and strengthens your position when making an offer. A pre-approval letter shows sellers that you&apos;re a serious, qualified buyer.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#1E6BB8] p-6 my-8 rounded">
            <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Pre-Approval Checklist</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Review your credit report and score</li>
              <li>Gather financial documents (W-2s, tax returns, bank statements)</li>
              <li>Calculate your debt-to-income ratio</li>
              <li>Shop around for the best mortgage rates</li>
              <li>Get pre-approval from a reputable lender</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 2: Define Your Home Search Criteria
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Knowing what you want in a home will make your search more efficient and focused. Consider factors such as location, size, style, features, and your long-term plans. In the Lone Mountain area, you&apos;ll find a diverse range of properties from luxury custom homes to more modest single-family residences.
          </p>

          <h3 className="text-2xl font-semibold text-[#0A2540] mt-8 mb-4">
            Key Considerations
          </h3>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Location:</strong> Consider proximity to work, schools, parks, and amenities</li>
            <li><strong>Home Type:</strong> Single-family, townhouse, condominium, or custom build</li>
            <li><strong>Size:</strong> Number of bedrooms, bathrooms, and square footage</li>
            <li><strong>Features:</strong> Pool, yard size, garage, updated kitchen, etc.</li>
            <li><strong>Neighborhood:</strong> Community amenities, HOA fees, and property values</li>
            <li><strong>Future Plans:</strong> Will this home meet your needs in 5-10 years?</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 3: Work with a Knowledgeable Real Estate Agent
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            A skilled real estate agent who knows the Lone Mountain market can be invaluable. They&apos;ll help you identify properties that match your criteria, negotiate the best price, navigate inspections and appraisals, and handle all the paperwork and deadlines. As Head of the Lone Mountain Heights Team, I bring 30+ years of local expertise to every transaction.
          </p>

          <h3 className="text-2xl font-semibold text-[#0A2540] mt-8 mb-4">
            What Your Agent Does for You
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Market Knowledge</h4>
              <p className="text-gray-700">
                Insider knowledge of neighborhoods, pricing trends, and property values in Lone Mountain
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Property Access</h4>
              <p className="text-gray-700">
                Access to listings, scheduled showings, and off-market opportunities
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Negotiation</h4>
              <p className="text-gray-700">
                Expert negotiation to secure the best price and terms
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Transaction Management</h4>
              <p className="text-gray-700">
                Coordination of inspections, appraisals, and all closing requirements
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 4: Make an Offer
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Once you find the right home, your agent will help you craft a competitive offer. In a seller&apos;s market, you may need to move quickly and make a strong initial offer. Your agent will guide you on pricing strategy, contingencies, and terms that protect your interests.
          </p>

          <h3 className="text-2xl font-semibold text-[#0A2540] mt-8 mb-4">
            Offer Components
          </h3>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Purchase Price:</strong> Based on comparable sales and market conditions</li>
            <li><strong>Earnest Money:</strong> Deposit showing your serious intent</li>
            <li><strong>Contingencies:</strong> Inspection, appraisal, financing, and sale of current home</li>
            <li><strong>Closing Date:</strong> Timeline that works for both parties</li>
            <li><strong>Personal Property:</strong> Items included or excluded from the sale</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 5: Home Inspection and Due Diligence
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            After your offer is accepted, you&apos;ll have a period to conduct inspections and due diligence. This is your opportunity to thoroughly examine the property, identify any issues, and renegotiate if necessary. Your agent will coordinate inspections and help you understand the results.
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Step 6: Closing
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The closing process involves finalizing your mortgage, completing a final walk-through, signing all documents, and transferring ownership. Your agent and lender will guide you through every step to ensure a smooth closing day.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#1E6BB8] p-6 my-8 rounded">
            <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Ready to Start Your Home Search?</h3>
            <p className="text-gray-700 mb-4">
              Contact me today to begin your home buying journey in Lone Mountain.
            </p>
            <p className="text-gray-700 mb-2">
              📞 <a href="tel:702-222-1964" className="text-[#1E6BB8] hover:underline font-semibold">702-222-1964</a>
            </p>
            <p className="text-gray-700">
              ✉️ <a href="mailto:DrDuffySells@LoneMountainVistas.com" className="text-[#1E6BB8] hover:underline">DrDuffySells@LoneMountainVistas.com</a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Search Available Properties</h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <RealScoutAdvancedSearch className="buyers-search-widget" />
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
