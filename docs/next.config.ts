import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  whiteListTagsStyling: ['figure', 'figcaption']
})

const nextConfig = withNextra({
  reactStrictMode: true,
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
      }
    ]
  },
  webpack(config) {
    // rule.exclude doesn't work starting from Next.js 15
    const { test: _test, ...imageLoaderOptions } = config.module.rules.find(
      // @ts-expect-error -- fixme
      rule => rule.test?.test?.('.svg')
    )
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /svgr/,
          use: ['@svgr/webpack']
        },
        imageLoaderOptions
      ]
    })
    return config
  },
  turbopack: {
    rules: {
      './components/icons/*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js'
      }
    }
  },
  experimental: {
    optimizePackageImports: ['@components/icons']
  }
})

export default nextConfig
