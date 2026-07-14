import { getEnhancedPageMap } from '@components/get-page-map'
import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import type { FC } from 'react'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'https://legal-erp-docs.vercel.app'

export const metadata: Metadata = {
  description:
    'Documentation for Legal ERP workflows, modules, and administration.',
  metadataBase: new URL(siteUrl),
  keywords: [
    'Legal ERP',
    'legal operations',
    'case management',
    'matter management',
    'documentation'
  ],
  generator: 'Next.js',
  applicationName: 'Legal ERP Documentation',
  appleWebApp: {
    title: 'Legal ERP Documentation'
  },
  title: {
    default: 'Legal ERP Documentation',
    template: '%s | Legal ERP Documentation'
  },
  openGraph: {
    url: './',
    title: 'Legal ERP Documentation',
    description:
      'Documentation for Legal ERP workflows, modules, and administration.',
    siteName: 'Legal ERP Documentation',
    images: ['/opengraph-image'],
    locale: 'th_TH',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal ERP Documentation',
    description:
      'Documentation for Legal ERP workflows, modules, and administration.',
    images: ['/opengraph-image']
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  alternates: {
    canonical: './'
  }
}

const navbar = (
  <Navbar
    logo={
      <span className="x:font-semibold x:tracking-normal">
        Legal ERP Documentation
      </span>
    }
  />
)

const footer = (
  <Footer>
    <p className="text-xs">
      © {new Date().getFullYear()} Legal ERP Documentation.
    </p>
  </Footer>
)

const RootLayout: FC<LayoutProps<'/'>> = async ({ children }) => {
  const pageMap = await getEnhancedPageMap()
  return (
    <html lang="th" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/yukasung/legal_erp_docs/tree/main/docs"
          editLink={null}
          feedback={{ content: null }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
