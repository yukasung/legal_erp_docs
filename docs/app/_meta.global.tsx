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
      architecture: 'Architecture',
      _access: {
        type: 'separator',
        title: <Section>Access</Section>
      },
      roles: {
        title: 'Roles',
        items: {
          index: 'Overview',
          roles: 'User Roles',
          permissions: 'Permissions'
        }
      },
      _modules: {
        type: 'separator',
        title: <Section>Modules</Section>
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
      _process: {
        type: 'separator',
        title: <Section>Process</Section>
      },
      flows: {
        title: 'Flows'
      },
      _technical: {
        type: 'separator',
        title: <Section>Technical</Section>
      },
      database: {
        title: 'Database'
      },
      api: {
        title: 'API'
      },
      ui: {
        title: 'UI'
      },
      _changes: {
        type: 'separator',
        title: <Section>Changes</Section>
      },
      changelog: {
        title: 'Changelog'
      }
    }
  }
}
