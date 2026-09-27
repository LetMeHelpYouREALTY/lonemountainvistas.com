import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RealScoutWidget from '../components/RealScoutWidget';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import RealScoutSimpleSearch from '../components/RealScoutSimpleSearch';
import RealScoutOfficeListings from '../components/RealScoutOfficeListings';
import AmenityMapSection from '../components/AmenityMapSection';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lone Mountain Vistas | Luxury Real Estate in Northwest Las Vegas</title>
        <meta name="description" content="Lone Mountain Vistas - Premier luxury real estate in northwest Las Vegas. Explore properties near Lone Mountain Regional Park, The Estates at Lone Mountain, and discover the Lone Mountain lifestyle." />
        <link rel="canonical" href="https://lonemountainvistas.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lonemountainvistas.com/" />
        <meta property="og:title" content="Lone Mountain Vistas | Luxury Real Estate in Northwest Las Vegas" />
        <meta property="og:description" content="Premier luxury real estate in northwest Las Vegas. Explore properties near Lone Mountain Regional Park, The Estates at Lone Mountain, and discover the Lone Mountain lifestyle." />
        <meta property="og:image" content="https://lonemountainvistas.com/images/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://lonemountainvistas.com/images/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Lone Mountain Vistas - Luxury Real Estate in Northwest Las Vegas" />
        <meta property="og:site_name" content="Lone Mountain Vistas" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LoneMountainVistas" />
        <meta name="twitter:creator" content="@LoneMountainVistas" />
        <meta name="twitter:url" content="https://lonemountainvistas.com/" />
        <meta name="twitter:title" content="Lone Mountain Vistas | Luxury Real Estate in Northwest Las Vegas" />
        <meta name="twitter:description" content="Premier luxury real estate in northwest Las Vegas. Explore properties near Lone Mountain Regional Park, The Estates at Lone Mountain, and discover the Lone Mountain lifestyle." />
        <meta name="twitter:image" content="https://lonemountainvistas.com/images/og-image.jpg" />
        <meta name="twitter:image:alt" content="Lone Mountain Vistas - Luxury Real Estate in Northwest Las Vegas" />
      </Head>
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Find Your Dream Home in
                <span className="hero-title-accent"> Lone Mountain Vistas</span>
              </h1>
              <p className="hero-subtitle">
                Premier luxury real estate in northwest Las Vegas. Experience the perfect blend of mountain views,
                modern amenities, and exceptional community living.
              </p>

              <div className="hero-cta-group">
                <Link href="/all-properties" className="hero-cta-primary">
                  Browse Properties
                </Link>
                <Link href="/contact" className="hero-cta-secondary">
                  Get Free Valuation
                </Link>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">$127M+</div>
                  <div className="stat-label">Total Sales</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="hero-agent-card">
              <div className="agent-card-header">
                <div className="agent-badge">Top Agent</div>
              </div>
              <div className="agent-card-content">
                <h3 className="agent-card-name">Dr. Jan Duffy</h3>
                <p className="agent-card-company">Berkshire Hathaway HomeServices</p>
                <p className="agent-card-role">Head of Lone Mountain Heights Team</p>
                <div className="agent-card-divider"></div>
                <div className="agent-card-contact">
                  <a href="tel:702-222-1964" className="agent-phone">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    702-222-1964
                  </a>
                  <a href="mailto:DrDuffySells@LoneMountainVistas.com" className="agent-email">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Me
                  </a>
                </div>
                <p className="agent-card-tagline">Local Expert • Global Network</p>
              </div>
            </div>
          </div>

          {/* Search Widget Section */}
          <div className="hero-search-container">
            <h2 className="hero-search-title">Start Your Property Search</h2>
            <p className="hero-search-subtitle">Search by neighborhood, city, or school</p>
            <div className="flex justify-center">
              <RealScoutSimpleSearch className="hero-simple-search-widget" />
            </div>
          </div>
        </section>

        <nav className="navigation">
          <h2 className="nav-title">Explore Lone Mountain</h2>
          <div className="nav-links">
            <Link href="/lone-mountain-park" className="nav-link">
              <span className="nav-link-title">Lone Mountain Regional Park</span>
              <span className="nav-link-desc">Hiking trails, summit views & desert vistas</span>
            </Link>
            <Link href="/estates-lone-mountain" className="nav-link">
              <span className="nav-link-title">The Estates at Lone Mountain</span>
              <span className="nav-link-desc">Luxury custom homes near the park</span>
            </Link>
            <Link href="/living-lone-mountain" className="nav-link">
              <span className="nav-link-title">Living in Lone Mountain</span>
              <span className="nav-link-desc">Community guide & lifestyle</span>
            </Link>
            <Link href="/lone-mountain-vista-v" className="nav-link">
              <span className="nav-link-title">Lone Mountain Vista V</span>
              <span className="nav-link-desc">Walkable neighborhood community</span>
            </Link>
            <Link href="/all-properties" className="nav-link">
              <span className="nav-link-title">All Properties</span>
              <span className="nav-link-desc">Browse available listings</span>
            </Link>
          </div>
        </nav>

        <nav className="navigation" style={{ marginTop: '2rem' }}>
          <h2 className="nav-title">Quick Links</h2>
          <div className="nav-links">
            <Link href="/about" className="nav-link">
              <span className="nav-link-title">About Dr. Jan Duffy</span>
              <span className="nav-link-desc">Meet your real estate expert</span>
            </Link>
            <Link href="/services" className="nav-link">
              <span className="nav-link-title">Our Services</span>
              <span className="nav-link-desc">Buyer & seller services</span>
            </Link>
            <Link href="/contact" className="nav-link">
              <span className="nav-link-title">Contact Us</span>
              <span className="nav-link-desc">Get in touch today</span>
            </Link>
            <Link href="/buyers" className="nav-link">
              <span className="nav-link-title">Buyer's Guide</span>
              <span className="nav-link-desc">Home buying resources</span>
            </Link>
            <Link href="/sellers" className="nav-link">
              <span className="nav-link-title">Seller's Guide</span>
              <span className="nav-link-desc">Home selling resources</span>
            </Link>
            <Link href="/market-reports" className="nav-link">
              <span className="nav-link-title">Market Reports</span>
              <span className="nav-link-desc">Market trends & statistics</span>
            </Link>
            <Link href="/resources" className="nav-link">
              <span className="nav-link-title">Resources</span>
              <span className="nav-link-desc">Helpful tools & information</span>
            </Link>
          </div>
        </nav>

        <AmenityMapSection
          title="What's Nearby"
          subtitle="Life near Lone Mountain Vistas means regional park trails, Centennial Hills shopping, and northwest Las Vegas conveniences within an easy drive."
          compactList={false}
          className="amenity-home-section"
        />

        <section className="office-listings-section">
          <h2 className="listings-title">Featured Properties</h2>
          <RealScoutOfficeListings />
        </section>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          background: linear-gradient(to bottom, #f7f9fc, #e3e8ef);
        }
        main {
          max-width: 800px;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #0A2540;
        }
        .tagline {
          font-size: 1.5rem;
          color: #3A8DDE;
          margin-bottom: 2rem;
        }
        .contact-info {
          margin-top: 2rem;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 600px;
        }
        .agent-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0A2540;
          margin-bottom: 0.5rem;
        }
        .company-name {
          font-size: 1.1rem;
          color: #1E6BB8;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }
        .team-name {
          font-size: 1rem;
          color: #666;
          margin-bottom: 1rem;
        }
        .tagline-sub {
          font-size: 1.2rem;
          color: #0A2540;
          font-weight: 500;
          margin: 1rem 0 0.5rem 0;
        }
        .expertise {
          font-size: 1rem;
          color: #059669;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .contact-details {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 2px solid #e3e8ef;
        }
        .contact-details p {
          margin: 0.8rem 0;
          font-size: 1.1rem;
        }
        .contact-details a {
          color: #1E6BB8;
          text-decoration: underline;
          transition: color 0.2s;
        }
        .contact-details a:hover {
          color: #155A94;
          text-decoration: underline;
        }
        .contact-details a:focus {
          outline: 2px solid #1E6BB8;
          outline-offset: 2px;
        }
        .navigation {
          margin-top: 3rem;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          max-width: 900px;
        }
        .nav-title {
          font-size: 1.8rem;
          color: #0A2540;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .nav-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .nav-link {
          display: block;
          padding: 1.5rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .nav-link-title {
          display: block;
          font-size: 1.2rem;
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 0.5rem;
        }
        .nav-link-desc {
          display: block;
          font-size: 0.9rem;
          color: #666;
        }
        .search-section {
          margin-top: 3rem;
          width: 100%;
          max-width: 900px;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .search-title {
          font-size: 1.8rem;
          color: #0A2540;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .office-listings-section {
          margin-top: 3rem;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          max-width: 1200px;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        :global(.amenity-home-section) {
          max-width: 900px !important;
          text-align: left;
        }
        .listings-title {
          font-size: 1.8rem;
          color: #0A2540;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        @media (max-width: 768px) {
          .nav-links {
            grid-template-columns: 1fr;
          }
          .search-section {
            padding: 1.5rem;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        /* RealScout widget styles - must be global to apply to custom elements */
        .homepage-search-widget,
        .hero-simple-search-widget {
          width: 100%;
          min-height: 200px;
        }
        realscout-simple-search.homepage-search-widget,
        realscout-simple-search.hero-simple-search-widget {
          width: 100%;
          min-height: 200px;
        }
      `}</style>
    </div>
  );
}
