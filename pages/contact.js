import Head from 'next/head';
import Link from 'next/link';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import RealScoutSimpleSearch from '../components/RealScoutSimpleSearch';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Dr. Jan Duffy | Lone Mountain Vistas Real Estate</title>
        <meta name="description" content="Contact Dr. Jan Duffy for expert real estate services in Lone Mountain, Las Vegas. Phone: 702-222-1964 | Email: DrDuffySells@LoneMountainVistas.com" />
        <meta property="og:title" content="Contact Dr. Jan Duffy | Lone Mountain Vistas" />
        <meta property="og:description" content="Get in touch with Dr. Jan Duffy for all your real estate needs in northwest Las Vegas." />
        <meta property="og:url" content="https://lonemountainvistas.com/contact" />
        <link rel="canonical" href="https://lonemountainvistas.com/contact" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-[#1E6BB8] hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Contact</span>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Contact Dr. Jan Duffy
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Ready to buy or sell in the Lone Mountain area? I&apos;m here to help you navigate the real estate market with expertise, integrity, and personalized service. Get in touch today to discuss your real estate goals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Phone</h2>
              <p className="text-gray-700 mb-4">
                Call or text me directly:
              </p>
              <p className="text-2xl font-semibold text-[#1E6BB8]">
                <a href="tel:702-222-1964" className="hover:underline">702-222-1964</a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Email</h2>
              <p className="text-gray-700 mb-4">
                Send me an email:
              </p>
              <p className="text-lg">
                <a href="mailto:DrDuffySells@LoneMountainVistas.com" className="text-[#1E6BB8] hover:underline break-all">
                  DrDuffySells@LoneMountainVistas.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1E6BB8] p-6 my-8 rounded">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Office Information</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Dr. Jan Duffy</strong></p>
                            <p>Head of Lone Mountain Heights Team</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Services I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">For Buyers</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Free home search assistance</li>
                <li>Market analysis and insights</li>
                <li>Negotiation expertise</li>
                <li>Property inspections coordination</li>
                <li>Closing assistance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">For Sellers</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Free market analysis</li>
                <li>Strategic pricing guidance</li>
                <li>Professional marketing</li>
                <li>Open house coordination</li>
                <li>Transaction management</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Start Your Property Search</h3>
            <p className="text-gray-600 mb-4">Search by neighborhood, city, or school</p>
            <div className="bg-blue-50 p-6 rounded-lg mb-8 flex justify-center">
              <RealScoutSimpleSearch className="contact-simple-search-widget" />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
