import Head from 'next/head';
import Link from 'next/link';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import RealScoutSimpleSearch from '../components/RealScoutSimpleSearch';

export default function Resources() {
  return (
    <>
      <Head>
        <title>Real Estate Resources | Lone Mountain Vistas | Helpful Tools & Information</title>
        <meta name="description" content="Helpful real estate resources, tools, and information for buyers and sellers in Lone Mountain, Las Vegas. Mortgage calculators, neighborhood guides, and more." />
        <meta property="og:title" content="Resources | Lone Mountain Vistas" />
        <meta property="og:description" content="Real estate resources and tools for Lone Mountain area." />
        <meta property="og:url" content="https://lonemountainvistas.com/resources" />
        <link rel="canonical" href="https://lonemountainvistas.com/resources" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-[#1E6BB8] hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Resources</span>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Real Estate Resources
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Whether you&apos;re buying, selling, or just exploring the Lone Mountain real estate market, these resources and tools can help you make informed decisions. From neighborhood information to mortgage calculators, we&apos;ve compiled useful resources to assist you on your real estate journey.
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Buyer Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Buyer&apos;s Guide</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive guide covering the entire home buying process from pre-approval to closing.
              </p>
              <Link href="/buyers" className="text-[#1E6BB8] hover:underline font-semibold">
                View Buyer&apos;s Guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Property Search</h3>
              <p className="text-gray-700 mb-4">
                Search available properties in the Lone Mountain area with our advanced search tool.
              </p>
              <Link href="/all-properties" className="text-[#1E6BB8] hover:underline font-semibold">
                Browse Properties →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Neighborhood Guides</h3>
              <p className="text-gray-700 mb-4">
                Learn about neighborhoods, amenities, schools, and lifestyle in the Lone Mountain area.
              </p>
              <div className="flex flex-col space-y-2">
                <Link href="/lone-mountain-park" className="text-[#1E6BB8] hover:underline">Lone Mountain Park →</Link>
                <Link href="/estates-lone-mountain" className="text-[#1E6BB8] hover:underline">The Estates →</Link>
                <Link href="/living-lone-mountain" className="text-[#1E6BB8] hover:underline">Living in Lone Mountain →</Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Market Reports</h3>
              <p className="text-gray-700 mb-4">
                Stay informed about current market trends, statistics, and conditions in Lone Mountain.
              </p>
              <Link href="/market-reports" className="text-[#1E6BB8] hover:underline font-semibold">
                View Market Reports →
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Seller Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Seller&apos;s Guide</h3>
              <p className="text-gray-700 mb-4">
                Complete guide to selling your home, from preparation to closing.
              </p>
              <Link href="/sellers" className="text-[#1E6BB8] hover:underline font-semibold">
                View Seller&apos;s Guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Home Valuation</h3>
              <p className="text-gray-700 mb-4">
                Get an estimate of your home&apos;s current market value. Contact me for a detailed, no-obligation market analysis.
              </p>
              <div className="text-gray-700">
                <p className="mb-2">📞 <a href="tel:702-222-1964" className="text-[#1E6BB8] hover:underline font-semibold">702-222-1964</a></p>
                <p>✉️ <a href="mailto:DrDuffySells@LoneMountainVistas.com" className="text-[#1E6BB8] hover:underline">DrDuffySells@LoneMountainVistas.com</a></p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Services</h3>
              <p className="text-gray-700 mb-4">
                Learn about the comprehensive services I provide to help you sell your home successfully.
              </p>
              <Link href="/services" className="text-[#1E6BB8] hover:underline font-semibold">
                View Services →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Market Analysis</h3>
              <p className="text-gray-700 mb-4">
                Understand current market conditions and pricing trends to price your home competitively.
              </p>
              <Link href="/market-reports" className="text-[#1E6BB8] hover:underline font-semibold">
                View Market Reports →
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Helpful Tools & Information
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Mortgage Calculators</h3>
              <p className="text-gray-700 mb-4">
                While we don&apos;t provide mortgage calculators directly on this site, there are many excellent online resources. Consult with a mortgage professional for accurate calculations based on current rates and your specific situation.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Moving Checklist</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Change your address with USPS</li>
                <li>Transfer utilities (electric, water, gas, internet)</li>
                <li>Update driver&apos;s license and vehicle registration</li>
                <li>Notify banks, credit cards, and insurance companies</li>
                <li>Register children for new schools</li>
                <li>Update voter registration</li>
                <li>Schedule movers or plan your move</li>
                <li>Pack and label boxes systematically</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Home Maintenance Tips</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Regular HVAC system maintenance</li>
                <li>Check and clean gutters seasonally</li>
                <li>Inspect roof and windows for damage</li>
                <li>Maintain landscaping and irrigation systems</li>
                <li>Test smoke detectors and carbon monoxide alarms</li>
                <li>Service appliances regularly</li>
                <li>Keep detailed records of repairs and improvements</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Local Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Lone Mountain Regional Park</h3>
              <p className="text-gray-700 mb-4">
                Explore hiking trails, enjoy desert vistas, and experience the natural beauty of Lone Mountain.
              </p>
              <Link href="/lone-mountain-park" className="text-[#1E6BB8] hover:underline font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Schools & Education</h3>
              <p className="text-gray-700 mb-4">
                The Lone Mountain area is served by the Clark County School District. Research specific schools, ratings, and programs to find the best fit for your family.
              </p>
              <p className="text-gray-700 text-sm">
                Contact me for information about schools in specific neighborhoods.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1E6BB8] p-6 my-8 rounded">
            <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Need More Information?</h3>
            <p className="text-gray-700 mb-4">
              Have questions about the Lone Mountain real estate market or need assistance with your home buying or selling goals? I&apos;m here to help.
            </p>
            <p className="text-gray-700 mb-2">
              📞 <a href="tel:702-222-1964" className="text-[#1E6BB8] hover:underline font-semibold">702-222-1964</a>
            </p>
            <p className="text-gray-700">
              ✉️ <a href="mailto:DrDuffySells@LoneMountainVistas.com" className="text-[#1E6BB8] hover:underline">DrDuffySells@LoneMountainVistas.com</a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Search Properties</h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <RealScoutAdvancedSearch className="resources-search-widget" />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
