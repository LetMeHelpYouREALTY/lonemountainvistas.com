/**
 * Post-build script to inject Open Graph and Twitter Card meta tags
 * into the generated HTML files for Next.js static export
 * 
 * This is a workaround for Next.js static export limitation where
 * the <Head> component doesn't reliably render all meta tags.
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(process.cwd(), 'out');
const INDEX_HTML = path.join(OUT_DIR, 'index.html');

// Meta tags for homepage
const META_TAGS = `
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lonemountainvistas.com/" />
        <meta property="og:title" content="Lone Mountain Vistas | Luxury Real Estate in Northwest Las Vegas" />
        <meta property="og:description" content="Homes near Lone Mountain in northwest Las Vegas. Search listings, book a buyer consult, or call Dr. Jan Duffy, REALTOR®, at 702-222-1964." />
        <meta property="og:image" content="https://lonemountainvistas.com/images/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://lonemountainvistas.com/images/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Lone Mountain Vistas - Luxury Real Estate in Northwest Las Vegas" />
        <meta property="og:site_name" content="Lone Mountain Vistas" />
        <meta property="og:locale" content="en_US" />

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LoneMountainVistas" />
        <meta name="twitter:creator" content="@LoneMountainVistas" />
        <meta name="twitter:url" content="https://lonemountainvistas.com/" />
        <meta name="twitter:title" content="Lone Mountain Vistas | Luxury Real Estate in Northwest Las Vegas" />
        <meta name="twitter:description" content="Homes near Lone Mountain in northwest Las Vegas. Search listings, book a buyer consult, or call Dr. Jan Duffy, REALTOR®, at 702-222-1964." />
        <meta name="twitter:image" content="https://lonemountainvistas.com/images/og-image.jpg" />
        <meta name="twitter:image:alt" content="Lone Mountain Vistas - Luxury Real Estate in Northwest Las Vegas" />
`;

function injectMetaTags() {
  try {
    // Check if out directory exists
    if (!fs.existsSync(OUT_DIR)) {
      console.error('Error: out/ directory not found. Run "npm run build" first.');
      process.exit(1);
    }

    // Check if index.html exists
    if (!fs.existsSync(INDEX_HTML)) {
      console.error('Error: out/index.html not found. Build may have failed.');
      process.exit(1);
    }

    // Read the HTML file
    let html = fs.readFileSync(INDEX_HTML, 'utf8');

    // Check if meta tags are already injected (to avoid duplicates)
    if (html.includes('og:title') && html.includes('og:description')) {
      console.log('Meta tags already present in index.html, skipping injection.');
      return;
    }

    // Find the position to insert meta tags (after og:url or before </head>)
    let insertPosition;
    
    // Try to find after og:url
    const ogUrlIndex = html.indexOf('<meta property="og:url"');
    if (ogUrlIndex !== -1) {
      // Find the end of the og:url tag
      const ogUrlEndIndex = html.indexOf('>', ogUrlIndex);
      if (ogUrlEndIndex !== -1) {
        insertPosition = ogUrlEndIndex + 1;
      }
    }

    // Fallback: insert before </head>
    if (!insertPosition) {
      const headEndIndex = html.indexOf('</head>');
      if (headEndIndex !== -1) {
        insertPosition = headEndIndex;
      }
    }

    if (!insertPosition) {
      console.error('Error: Could not find insertion point in HTML. Structure may have changed.');
      process.exit(1);
    }

    // Inject meta tags
    html = html.slice(0, insertPosition) + META_TAGS + html.slice(insertPosition);

    // Write the modified HTML back
    fs.writeFileSync(INDEX_HTML, html, 'utf8');
    console.log('✅ Successfully injected Open Graph and Twitter Card meta tags into index.html');

  } catch (error) {
    console.error('Error injecting meta tags:', error.message);
    process.exit(1);
  }
}

// Run the script
injectMetaTags();
