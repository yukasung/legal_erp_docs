import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  whiteListTagsStyling: ['figure', 'figcaption']
})

const nextConfig = withNextra({
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx'
    }
  },
  async redirects() {
    return [
      {
        source: '/docs/architecture/development-workflow',
        destination: '/docs/development/workflow',
        permanent: true
      },
      {
        source: '/docs/architecture/development-rules',
        destination: '/docs/development/rules',
        permanent: true
      },
      {
        source: '/docs/overview',
        destination: '/docs',
        permanent: true
      }
    ]
  }
})

export default nextConfig
