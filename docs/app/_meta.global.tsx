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
    title: 'Documentation',
    items: {
      _start: {
        type: 'separator',
        title: <Section>Start Here</Section>
      },
      index: 'Overview',
      'getting-started': 'Getting Started',
      _foundation: {
        type: 'separator',
        title: <Section>Foundation</Section>
      },
      concepts: {
        title: 'Concepts',
        items: {
          index: 'Overview',
          glossary: 'Glossary'
        }
      },
      _workflows: {
        type: 'separator',
        title: <Section>Workflows</Section>
      },
      workflows: {
        title: 'Workflows',
        items: {
          index: 'Overview',
          intake: 'Intake',
          'matter-lifecycle': 'Matter Lifecycle',
          documents: 'Documents',
          billing: 'Billing'
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
          documents: 'Documents',
          finance: 'Finance',
          reports: 'Reports'
        }
      },
      _administration: {
        type: 'separator',
        title: <Section>Administration</Section>
      },
      administration: {
        title: 'Administration',
        items: {
          index: 'Overview',
          'users-roles': 'Users & Roles',
          permissions: 'Permissions',
          settings: 'Settings'
        }
      },
      _reference: {
        type: 'separator',
        title: <Section>Reference</Section>
      },
      reference: {
        title: 'Reference',
        items: {
          index: 'Overview',
          faq: 'FAQ',
          changelog: 'Changelog'
        }
      }
    }
  }
}
