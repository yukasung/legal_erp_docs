import { getEnhancedPageMap } from '@components/get-page-map'
import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import type { FC } from 'react'
import './globals.css'

const productionUrl = 'https://legal-erp-docs.vercel.app'

export const metadata: Metadata = {
  description:
    'Documentation for Legal Practice ERP Platform workflows, modules, and administration.',
  metadataBase: new URL(productionUrl),
  keywords: [
    'Legal Practice ERP Platform',
    'legal operations',
    'case management',
    'matter management',
    'documentation'
  ],
  generator: 'Next.js',
  applicationName: 'Legal Practice ERP Platform Documentation',
  appleWebApp: {
    title: 'Legal Practice ERP Platform Documentation'
  },
  title: {
    default: 'Legal Practice ERP Platform Documentation',
    template: '%s | Legal Practice ERP Platform Documentation'
  },
  openGraph: {
    url: './',
    title: 'Legal Practice ERP Platform Documentation',
    description:
      'Documentation for Legal Practice ERP Platform workflows, modules, and administration.',
    siteName: 'Legal Practice ERP Platform Documentation',
    images: ['/opengraph-image'],
    locale: 'th_TH',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Practice ERP Platform Documentation',
    description:
      'Documentation for Legal Practice ERP Platform workflows, modules, and administration.',
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
      <span className="x:text-sm x:font-semibold x:tracking-normal x:sm:text-base">
        Legal Practice ERP Platform Documentation
      </span>
    }
  />
)

const footer = (
  <Footer>
    <p className="text-xs">
      © {new Date().getFullYear()} Legal Practice ERP Platform Documentation.
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
