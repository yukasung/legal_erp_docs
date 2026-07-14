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
          'client-registration': 'Client Registration & Maintenance',
          'matter-lifecycle': 'Matter Lifecycle & Approvals',
          'matter-intake': 'Matter Intake & Opening',
          'matter-operations': 'Matter Operations & Closure',
          'document-management': 'Document & Template Management',
          'task-calendar': 'Task & Calendar Management',
          'quotation-engagement': 'Quotation & Engagement Approval',
          'invoice-payment': 'Invoice, Payment & Adjustment',
          'personnel-lifecycle': 'Personnel Lifecycle & Employee Data',
          'payroll-leave': 'Payroll & Leave Management',
          'access-management': 'User, Role & Access Management',
          'reports-audit': 'Reports, Export & Audit Review',
          'retention-disposal': 'Retention & Disposal',
          governance: {
            title: 'Governance & Assurance',
            items: {
              'master-register': 'SOP Master Register',
              'traceability-matrix': 'Requirements Traceability',
              'role-permission-alignment': 'Role & Permission Alignment',
              'forms-evidence-templates': 'Forms & Evidence Templates',
              'exception-escalation': 'Exception & Escalation',
              'terminology-status-standard': 'Terminology & Status Standard',
              'uat-test-cases': 'UAT Scenarios & Test Cases'
            }
          }
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
      implementation: {
        title: 'Implementation Readiness',
        items: {
          index: 'Overview',
          backlog: 'Implementation Backlog',
          'system-mapping': 'Database, API & UI Mapping',
          'rbac-action-matrix': 'RBAC Action Matrix',
          'workflow-configuration': 'Workflow Configuration',
          'uat-test-data': 'UAT Test Data & Fixtures',
          'release-readiness': 'Release Readiness',
          'scope-gap-analysis': 'Scope Gap Analysis'
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
