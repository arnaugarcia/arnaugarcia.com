const {i18n} = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  env: {
    // Next.js 16 requires env values to be strings; i18next-ssg config parses JSON.
    NEXT_PUBLIC_I18N: JSON.stringify(i18n),
  },
  images: { unoptimized: true },
}

module.exports = nextConfig
