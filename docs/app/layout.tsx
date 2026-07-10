import { getEnhancedPageMap } from '@components/get-page-map'
import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import type { FC } from 'react'
import './globals.css'

export const metadata: Metadata = {
  description:
    'Documentation for Legal ERP workflows, modules, and administration.',
  keywords: [
    'Legal ERP',
    'legal operations',
    'case management',
    'matter management',
    'documentation'
  ],
  generator: 'Next.js',
  applicationName: 'Legal ERP Docs',
  appleWebApp: {
    title: 'Legal ERP Docs'
  },
  title: {
    default: 'Legal ERP Documentation',
    template: '%s | Legal ERP Docs'
  },
  openGraph: {
    url: './',
    siteName: 'Legal ERP Docs',
    locale: 'th_TH',
    type: 'website'
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
      <span className="x:font-semibold x:tracking-normal">Legal ERP Docs</span>
    }
    projectLink="https://github.com/yukasung/legal_erp_docs"
  />
)

const footer = (
  <Footer>
    <p className="text-xs">© {new Date().getFullYear()} Legal ERP.</p>
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
          editLink="Edit this page on GitHub"
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
