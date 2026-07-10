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
    items: {
      _overview: {
        type: 'separator',
        title: <Section>ภาพรวม</Section>
      },
      index: 'หน้าแรกเอกสาร',
      overview: {
        title: 'ภาพรวม',
        items: {
          index: 'ภาพรวม',
          introduction: 'บทนำ',
          scope: 'ขอบเขต',
          architecture: 'สถาปัตยกรรม'
        }
      },
      _access: {
        type: 'separator',
        title: <Section>สิทธิ์การใช้งาน</Section>
      },
      roles: {
        title: 'บทบาทผู้ใช้งาน',
        items: {
          index: 'ภาพรวม',
          roles: 'บทบาทผู้ใช้งาน',
          permissions: 'สิทธิ์การใช้งาน'
        }
      },
      _modules: {
        type: 'separator',
        title: <Section>โมดูล</Section>
      },
      modules: {
        title: 'โมดูล',
        items: {
          index: 'ภาพรวม',
          clients: 'Client',
          matters: 'Matter',
          tasks: 'Task',
          documents: 'Document',
          billing: 'Billing',
          finance: 'Finance'
        }
      },
      _process: {
        type: 'separator',
        title: <Section>กระบวนการ</Section>
      },
      flows: {
        title: 'Flow'
      },
      _technical: {
        type: 'separator',
        title: <Section>เทคนิค</Section>
      },
      database: {
        title: 'ฐานข้อมูล'
      },
      api: {
        title: 'API'
      },
      ui: {
        title: 'UI'
      },
      _changes: {
        type: 'separator',
        title: <Section>การเปลี่ยนแปลง</Section>
      },
      changelog: {
        title: 'บันทึกการเปลี่ยนแปลง'
      }
    }
  }
}
