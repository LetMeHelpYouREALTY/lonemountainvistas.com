import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

// RealScout Agent ID - Update this with your actual RealScout agent encoded ID
const REALSCOUT_AGENT_ID = "QWdlbnQtMjI1MDUw";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
      </Head>

      {/* RealScout Widget Script - Loaded with lazy strategy to improve initial page load */}
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="lazyOnload"
        type="module"
      />
      <style jsx global>{`
        realscout-office-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
        }
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: #4a90e2;
          --rs-as-widget-width: 500px !important;
        }
        realscout-simple-search {
          --rs-ss-font-primary-color: #000000;
          --rs-ss-searchbar-border-color: #8b572a;
          --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
          --rs-ss-widget-width: 500px !important;
        }
      `}</style>

      <Navbar />
            <div className="pt-16 lg:pt-20">
        <Component {...pageProps} />
      </div>
      <footer className="bg-[#0A2540] text-gray-300 text-sm text-center py-6 px-4">
        <p>&copy; {new Date().getFullYear()} Lone Mountain Vistas · Dr. Jan Duffy, REALTOR®</p>
        <p className="mt-1">Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC</p>
      </footer>
    </>
  );
}

export default MyApp;
