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
          'time-tracking': 'Time Tracking & Timesheet Approval',
          'quotation-engagement': 'Quotation & Engagement Approval',
          'invoice-payment': 'Invoice, Payment & Adjustment',
          'finance-foundation': 'Finance Foundation & Period Control',
          'personnel-lifecycle': 'Personnel Lifecycle & Employee Data',
          'payroll-leave': 'Payroll & Leave Management',
          'tenant-onboarding': 'Tenant Onboarding & Package',
          'shared-master-data': 'Shared Master Data Management',
          'platform-operations': 'Platform Monitoring, Backup & Recovery',
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
