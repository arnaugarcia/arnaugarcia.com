const fs = require('fs');
const path = require('path');
const { i18n } = require('../next-i18next.config');

const SITE_URL = 'https://arnaugarcia.com';
const OUT_DIR = path.join(__dirname, '..', 'out');

function ensureOutDir() {
  if (!fs.existsSync(OUT_DIR)) {
    throw new Error('out/ directory not found. Run `next build` before generating the sitemap.');
  }
}

function buildSitemap(locales, defaultLocale, lastmod) {
  const urls = locales.map((locale) => {
    const loc = `${SITE_URL}/${locale}`;
    const alternates = locales
      .map(
        (alt) =>
          `    <xhtml:link rel="alternate" hreflang="${alt}" href="${SITE_URL}/${alt}"/>`
      )
      .concat(
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/${defaultLocale}"/>`
      )
      .join('\n');

    return `  <url>
    <loc>${loc}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${locale === defaultLocale ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  // Root redirects to a locale; include it for crawlers that start at /.
  urls.unshift(`  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

function buildRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function main() {
  ensureOutDir();
  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemap = buildSitemap(i18n.locales, i18n.defaultLocale, lastmod);
  const robots = buildRobots();

  fs.writeFileSync(path.join(OUT_DIR, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(OUT_DIR, 'robots.txt'), robots);

  console.log(`Generated sitemap.xml and robots.txt in out/ (${i18n.locales.join(', ')})`);
}

main();
