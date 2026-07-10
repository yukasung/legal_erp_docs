/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'http://127.0.0.1:3000',
  changefreq: 'weekly',
  priority: '0.5',
  generateIndexSitemap: false,
  exclude: ['/icon.svg']
}
