import Link from 'next/link';
import AmenityMap from './AmenityMap';
import { COMMUNITY_CONFIG } from '../config/communityAmenities';

/**
 * @param {object} props
 * @param {string} [props.title]
 * @param {string} [props.subtitle]
 * @param {boolean} [props.compactList]
 * @param {string} [props.className]
 */
export default function AmenityMapSection({
  title = `Life Near ${COMMUNITY_CONFIG.shortName}`,
  subtitle = `Explore restaurants, parks, golf, healthcare, and everyday conveniences around ${COMMUNITY_CONFIG.name} in ${COMMUNITY_CONFIG.region}.`,
  compactList = true,
  className = '',
}) {
  return (
    <section
      className={`amenity-map-section w-full max-w-4xl mx-auto my-12 px-4 ${className}`.trim()}
      aria-labelledby="amenity-map-section-heading"
    >
      <div className="text-left mb-6">
        <h2
          id="amenity-map-section-heading"
          className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-3"
        >
          {title}
        </h2>
        <p className="text-gray-700 leading-relaxed">{subtitle}</p>
        <Link
          href="/amenities"
          className="inline-flex mt-4 text-[#1E6BB8] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6BB8] rounded"
        >
          View full nearby amenities guide →
        </Link>
      </div>
      <AmenityMap showCuratedList={!compactList} />
    </section>
  );
}
