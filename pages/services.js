import Head from 'next/head';
import Link from 'next/link';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import RealScoutSimpleSearch from '../components/RealScoutSimpleSearch';
import RealScoutOfficeListings from '../components/RealScoutOfficeListings';

export default function Services() {
  return (
    <>
      <Head>
        <title>Real Estate Services | Lone Mountain Vistas | Dr. Jan Duffy</title>
        <meta name="description" content="Comprehensive real estate services in Lone Mountain, Las Vegas. Buyer services, seller services, market analysis, home valuations, and expert guidance from Dr. Jan Duffy." />
        <meta property="og:title" content="Real Estate Services | Lone Mountain Vistas" />
        <meta property="og:description" content="Expert real estate services for buyers and sellers in northwest Las Vegas." />
        <meta property="og:url" content="https://lonemountainvistas.com/services" />
        <link rel="canonical" href="https://lonemountainvistas.com/services" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-[#1E6BB8] hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Services</span>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Real Estate Services
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            As Head of the Lone Mountain Heights Team, in real estate since 1983, I provide comprehensive real estate services tailored to your unique needs. Whether you&apos;re buying your dream home or selling your property, I&apos;m here to guide you through every step of the process.
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Buyer Services
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Personalized Home Search</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Save time and find your perfect home faster with personalized search assistance. I&apos;ll help you identify properties that match your criteria, schedule viewings, and provide insights about neighborhoods, schools, and local amenities.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access to exclusive listings and off-market properties</li>
                <li>Automated search alerts based on your preferences</li>
                <li>Neighborhood research and community insights</li>
                <li>Property comparison and analysis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Expert Negotiation</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Get the best possible deal with my negotiation expertise. I&apos;ll represent your interests, handle all communications with sellers, and work to secure favorable terms and pricing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Transaction Management</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                From offer to closing, I&apos;ll coordinate all aspects of your purchase, including inspections, appraisals, financing contingencies, and final walk-throughs. You&apos;ll stay informed every step of the way.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Seller Services
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Free Market Analysis</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Get a comprehensive market analysis to determine your home&apos;s optimal listing price. I&apos;ll analyze comparable properties, current market conditions, and recent sales to help you price competitively and maximize your return.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Professional Marketing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Your property deserves maximum exposure. I use extensive marketing resources, including professional photography, virtual tours, MLS listings, social media promotion, and targeted advertising.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>Professional photography and virtual tours</li>
                <li>MLS and online listing placement</li>
                <li>Social media marketing</li>
                <li>Open house coordination</li>
                <li>Print and digital advertising</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Strategic Pricing & Negotiation</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Pricing strategy is crucial for a successful sale. I&apos;ll help you price your home to attract qualified buyers while maximizing value. When offers come in, I&apos;ll negotiate on your behalf to achieve the best terms.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Additional Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Home Valuations</h3>
              <p className="text-gray-700">
                Curious about your home&apos;s current market value? I provide free, no-obligation home valuations using the latest market data and comparable sales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Investment Properties</h3>
              <p className="text-gray-700">
                Explore investment opportunities in the Lone Mountain area. I can help identify properties with strong rental potential and ROI.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Relocation Assistance</h3>
              <p className="text-gray-700">
                Moving to Las Vegas? I provide comprehensive relocation services to help you find the perfect neighborhood and home.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">24/7 Support</h3>
              <p className="text-gray-700">
                Real estate doesn&apos;t operate on a 9-to-5 schedule. I&apos;m available when you need me, including evenings and weekends.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1E6BB8] p-6 my-8 rounded">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-4">
              Contact me today to discuss how I can help you achieve your real estate goals.
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
            <p className="text-gray-600 mb-4">Search by neighborhood, city, or school</p>
            <div className="bg-blue-50 p-6 rounded-lg mb-8 flex justify-center">
              <RealScoutSimpleSearch className="services-simple-search-widget" />
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
