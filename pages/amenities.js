import Head from 'next/head';
import Link from 'next/link';
import AmenityMap from '../components/AmenityMap';
import AgentTrustBlock from '../components/AgentTrustBlock';
import { COMMUNITY_CONFIG } from '../config/communityAmenities';
import { AMENITIES_FAQ, buildAmenitiesPageSchemas } from '../lib/amenitiesPageSchema';

const pageTitle = `Nearby Amenities in ${COMMUNITY_CONFIG.name}, Las Vegas | Local Map & Guide`;
const pageDescription = `Interactive map and hyperlocal guide to restaurants, parks, golf, grocery, healthcare, schools, and shopping near ${COMMUNITY_CONFIG.name} in northwest Las Vegas.`;
const canonicalUrl = `${COMMUNITY_CONFIG.siteUrl}/amenities`;

export default function AmenitiesPage() {
  const schemas = buildAmenitiesPageSchemas();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:site_name" content={COMMUNITY_CONFIG.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {schemas.map((schema, index) => (
          <script
            key={`amenities-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="text-[#1E6BB8] hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Nearby Amenities</span>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Nearby Amenities in {COMMUNITY_CONFIG.name}, Las Vegas
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {COMMUNITY_CONFIG.name} sits in northwest Las Vegas (89129), where Lone Mountain Regional
            Park, Centennial Hills services, and quick access to the 215 Beltway shape daily life. Use
            the interactive map below to explore dining, recreation, healthcare, and errands near your
            future address — then read the category guide for context buyers ask about every week.
          </p>

          <AmenityMap showCuratedList />

          <h2 className="text-3xl font-bold text-[#0A2540] mt-14 mb-6">
            Dining &amp; Cafes
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Northwest Las Vegas dining clusters along Durango Dr, Ann Rd, and the Centennial Hills
            marketplace. National chains, local favorites, and fast-casual options are within a short
            drive of Lone Mountain neighborhoods; use the map filters for live restaurant results when
            your Google Maps API key is configured.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            For coffee and casual meetings, Centennial Hills and Durango corridor cafes are popular
            with residents who want to stay close to home instead of heading to the Strip.
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Parks &amp; Recreation
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Lone Mountain Regional Park (9825 W Lone Mountain Rd) is the signature outdoor asset: a
            2.1-mile base loop, summit trail, equestrian facilities, dog parks, and picnic areas open
            daily from 7:00 AM to 10:00 PM per Clark County Parks.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Floyd Lamb Park at Tule Springs adds lakeside paths, historic ranch buildings, and additional
            picnic space a few miles north — a common weekend destination for northwest residents.
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Golf
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Badlands Golf Club on Alta Dr offers a well-known public course west of the Strip. Many Lone
            Mountain owners also join private clubs in Summerlin or Henderson; drive times vary by tee
            time and traffic.
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Healthcare &amp; Pharmacies
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Centennial Hills Hospital Medical Center (6900 N Durango Dr) anchors emergency and inpatient
            care for the northwest valley. MountainView Hospital (3100 N Tenaya Way) adds another full-service
            option toward the central northwest valley.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Retail pharmacies, including a CVS at Centennial Hills Marketplace on Durango Dr, cover
            prescriptions and everyday health items without a long drive.
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Shopping &amp; Grocery
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Albertsons at 6730 N Hualapai Way is a primary grocery run for Lone Mountain and Centennial
            Hills residents. Centennial Hills Marketplace on N Durango Dr adds big-box retail, services,
            and restaurants in one stop.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            For broader luxury retail and dining, Downtown Summerlin is the regional hub — typically about
            a 15–20 minute drive south, depending on route and traffic (approximate).
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Schools
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Which CCSD schools are assigned to Lone Mountain Vistas addresses depends on the exact
            street. Use the Clark County School District Zoning Search to verify assignments for any
            address you are considering before you write an offer.
          </p>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Commute &amp; Key Destinations
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li>
              <strong>Las Vegas Strip:</strong> approximately 25–35 minutes via the 215 Beltway and I-15
              (approximate, traffic dependent).
            </li>
            <li>
              <strong>Harry Reid International Airport:</strong> approximately 30–40 minutes via the 215
              and I-15 (approximate).
            </li>
            <li>
              <strong>Downtown Summerlin:</strong> approximately 15–20 minutes south on Durango Dr or via
              the 215 (approximate).
            </li>
            <li>
              <strong>Centennial Hills Hospital:</strong> typically under 15 minutes from Lone Mountain
              neighborhoods (approximate).
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {AMENITIES_FAQ.map((item) => (
              <div key={item.question} className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm">
                <dt className="text-lg font-semibold text-[#0A2540]">{item.question}</dt>
                <dd className="text-gray-700 mt-2 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>

          <AgentTrustBlock heading="Questions about amenities or listings?" />
        </article>
      </main>
    </>
  );
}
