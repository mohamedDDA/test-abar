// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/عن-ابار-حائل', destination: '/about?lang=ar' },
      {
        source: '/المسؤولية-الاجتماعية/:id',
        destination: '/social-responsibility/:id'
      },
      { source: '/الجودة', destination: '/quality?lang=ar' },
      { source: '/الشهادات', destination: '/certification?lang=ar' },
      { source: '/المسؤولية-الاجتماعية', destination: '/social-responsibility?lang=ar' },
      { source: '/الأخبار', destination: '/news?lang=ar' },
      { source: '/المنتجات', destination: '/products?lang=ar' },
      {
        source: '/api/news',
        destination: 'https://abarhail.xo.je/abarhail-api/api/v1/news',
      },
    ];
  },
};

module.exports = nextConfig;
