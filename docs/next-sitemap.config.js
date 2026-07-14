/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'https://legal-erp-docs.vercel.app',
  changefreq: 'weekly',
  priority: '0.5',
  generateIndexSitemap: false,
  exclude: ['/icon.svg', '/opengraph-image']
}
