import Link from 'next/link';

/** Reuses site-wide Dr. Jan Duffy contact details from existing pages. */
export default function AgentTrustBlock({ heading = 'Your Lone Mountain Local Expert' }) {
  return (
    <aside
      className="bg-blue-50 border-l-4 border-[#1E6BB8] p-6 md:p-8 rounded-lg my-10"
      aria-label="Contact Dr. Jan Duffy"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-4">{heading}</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Dr. Jan Duffy is the hyperlocal REALTOR® for Lone Mountain Vistas and northwest Las Vegas
        luxury communities. Whether you are comparing neighborhoods, schools, or daily conveniences,
        she brings decades of on-the-ground market knowledge to every conversation.
      </p>
      <div className="space-y-2 text-gray-700 mb-6">
        <p>
          <strong>Dr. Jan Duffy</strong>
        </p>
        <p>Berkshire Hathaway HomeServices Nevada Properties</p>
        <p>Head of Lone Mountain Heights Team</p>
        <p>
          <strong>License #:</strong> S.0197614.LLC
        </p>
        <p>
          <a href="tel:702-222-1964" className="text-[#1E6BB8] font-semibold hover:underline">
            702-222-1964
          </a>
        </p>
        <p>
          <a
            href="mailto:DrDuffySells@LoneMountainVistas.com"
            className="text-[#1E6BB8] hover:underline break-all"
          >
            DrDuffySells@LoneMountainVistas.com
          </a>
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center px-5 py-2.5 bg-[#1E6BB8] hover:bg-[#155A94] text-white font-semibold rounded-lg transition-colors"
        >
          Contact Dr. Duffy
        </Link>
        <Link
          href="/all-properties"
          className="inline-flex items-center px-5 py-2.5 border border-[#1E6BB8] text-[#1E6BB8] hover:bg-white font-semibold rounded-lg transition-colors"
        >
          Search Lone Mountain Homes
        </Link>
      </div>
    </aside>
  );
}
