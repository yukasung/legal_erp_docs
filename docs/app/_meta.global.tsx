import type { ReactNode } from 'react'

const Section = ({ children }: { children: ReactNode }) => (
  <span className="x:text-xs x:font-semibold x:uppercase x:tracking-normal x:text-gray-500 dark:x:text-gray-400">
    {children}
  </span>
)

export default {
  index: {
    type: 'page',
    display: 'hidden'
  },
  docs: {
    type: 'page',
    title: 'Legal ERP Platform',
    href: '/docs',
    items: {
      index: 'Overview',
      scope: 'Scope',
      sops: {
        title: 'SOPs',
        items: {
          index: 'Overview',
          'matter-lifecycle': 'Matter Lifecycle & Approvals',
          'matter-intake': 'Matter Intake & Opening'
        }
      },
      roles: {
        title: 'Roles',
        items: {
          index: 'Overview',
          roles: 'User Roles',
          permissions: 'Permissions'
        }
      },
      modules: {
        title: 'Modules',
        items: {
          index: 'Overview',
          clients: 'Clients',
          matters: 'Matters',
          tasks: 'Tasks',
          documents: 'Documents',
          billing: 'Billing',
          finance: 'Finance'
        }
      },
      _technical: {
        type: 'separator',
        title: <Section>Technical</Section>
      },
      architecture: 'Architecture',
      database: {
        title: 'Database'
      },
      api: {
        title: 'API'
      },
      overview: {
        display: 'hidden'
      }
    }
  }
}
