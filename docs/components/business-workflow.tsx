import styles from './business-workflow.module.css'

type Phase = {
  id: string
  shortTitle: string
  title: string
  summary: string
  actions: string[]
  decision: string
  result: string
  detailLabel: string
  detailHref: string
  tone: keyof typeof toneClasses
}

const toneClasses = {
  blue: styles.blue,
  teal: styles.teal,
  amber: styles.amber,
  violet: styles.violet,
  green: styles.green,
  coral: styles.coral,
  graphite: styles.graphite
}

const phases: Phase[] = [
  {
    id: 'phase-signup',
    shortTitle: 'สมัครใช้งาน',
    title: 'สมัครและเปิดใช้งาน',
    summary: 'สร้าง Workspace ที่พร้อมให้ทีมเริ่มทำงาน',
    actions: [
      'สร้างบัญชี',
      'เลือกแผนใช้งาน',
      'ชำระเงินตามแผน',
      'เปิด Workspace',
      'เชิญทีมและกำหนดสิทธิ์'
    ],
    decision:
      'หากชำระเงินไม่สำเร็จ ระบบยังไม่เปิดแผนแบบชำระเงิน และให้ผู้สมัครแก้ไขหรือชำระใหม่',
    result: 'Workspace ใช้งานได้ มี Admin และสมาชิกที่ได้รับสิทธิ์',
    detailLabel: 'Signup, Subscription & Access',
    detailHref: '/docs/plans/subscription-access',
    tone: 'blue'
  },
  {
    id: 'phase-client',
    shortTitle: 'Client',
    title: 'จัดการ Client',
    summary: 'ยืนยันข้อมูลลูกความก่อนสร้างแฟ้มงานกฎหมาย',
    actions: [
      'ค้นหา Client',
      'ตรวจข้อมูลซ้ำ',
      'เลือกข้อมูลเดิมหรือสร้างใหม่',
      'ลงทะเบียน Client',
      'ตรวจสอบข้อมูลให้พร้อมใช้งาน'
    ],
    decision:
      'เมื่อพบข้อมูลที่อาจซ้ำ ให้ใช้ Client เดิม หรือส่ง Manager ตรวจเหตุผลก่อนอนุมัติสร้างใหม่',
    result: 'Client ผ่านการตรวจสอบและพร้อมเชื่อมกับ Matter',
    detailLabel: 'Client Registration & Maintenance',
    detailHref: '/docs/sops/client-registration',
    tone: 'teal'
  },
  {
    id: 'phase-intake',
    shortTitle: 'รับงาน',
    title: 'ประเมินการรับงาน',
    summary: 'ตรวจความซ้ำซ้อน ผลประโยชน์ขัดกัน และความเสี่ยง',
    actions: [
      'สร้าง Matter เป็น Intake Draft',
      'ตรวจ Matter ซ้ำ',
      'ตรวจ Conflict of Interest',
      'ประเมิน Risk',
      'ขออนุมัติรับงาน'
    ],
    decision:
      'หาก Conflict หรือ Risk ไม่ผ่าน ให้ยุติการรับงานและเก็บเหตุผลกับหลักฐานการตัดสินใจ',
    result: 'Matter ผ่านการพิจารณาและพร้อมจัดทำข้อเสนอเชิงพาณิชย์',
    detailLabel: 'Matter Intake & Opening',
    detailHref: '/docs/sops/matter-intake',
    tone: 'amber'
  },
  {
    id: 'phase-quotation',
    shortTitle: 'ใบเสนอราคา',
    title: 'ตกลงราคาและขอบเขต',
    summary: 'ทำให้ราคา ขอบเขต และการยอมรับของ Client ตรวจสอบย้อนหลังได้',
    actions: [
      'จัดทำใบเสนอราคา',
      'อนุมัติราคาและเงื่อนไข',
      'ส่งให้ Client',
      'รับผลตอบกลับ',
      'ยืนยัน Commercial Readiness'
    ],
    decision:
      'เมื่อ Client ขอแก้ไข ให้สร้าง Revision และอนุมัติใหม่ หากปฏิเสธหรือหมดอายุ ให้ยุติรายการโดยเก็บประวัติเดิม',
    result: 'Client ยอมรับใบเสนอราคาหรือ Engagement ที่ตรงกับ Matter',
    detailLabel: 'Quotation & Engagement Approval',
    detailHref: '/docs/sops/quotation-engagement',
    tone: 'violet'
  },
  {
    id: 'phase-work',
    shortTitle: 'ดำเนินงาน',
    title: 'เปิดและดำเนินงาน',
    summary: 'ใช้ Matter เป็นศูนย์กลางของทีม งาน นัดหมาย เอกสาร และเวลา',
    actions: [
      'เปิด Matter เป็น Active',
      'มอบหมาย Lawyer และทีม',
      'ดำเนินงานและติดตามกำหนดเวลา',
      'จัดการเอกสารและบันทึกเวลา',
      'ยืนยันงานตามขอบเขตเสร็จ'
    ],
    decision:
      'เมื่อ Client คู่กรณี ขอบเขต หรือความเสี่ยงเปลี่ยน ให้ตรวจ Conflict, Risk และ Commercial Readiness ใหม่',
    result: 'Manager อนุมัติ Matter เป็น Completed และพร้อมตรวจรายการทางการเงิน',
    detailLabel: 'Matter Operations & Closure',
    detailHref: '/docs/sops/matter-operations',
    tone: 'green'
  },
  {
    id: 'phase-billing',
    shortTitle: 'วางบิล',
    title: 'วางบิลและรับชำระ',
    summary: 'ออกใบแจ้งหนี้ รับเงิน และยืนยันยอดก่อนส่งปิด Matter',
    actions: [
      'ออกใบแจ้งหนี้',
      'หักเงินมัดจำหรือ Retainer',
      'รับการชำระเงิน',
      'จัดสรร Payment ให้ Invoice',
      'กระทบยอดและตรวจหลักฐาน'
    ],
    decision:
      'ยอดไม่ตรงหรือยังค้างต้องได้รับการติดตาม ปรับปรุง หรืออนุมัติข้อยกเว้นตามสิทธิ์',
    result: 'Finance ยืนยันสถานะการเงินและยอดที่ใช้ใน Closure Checklist',
    detailLabel: 'Invoice, Payment & Adjustment',
    detailHref: '/docs/sops/invoice-payment',
    tone: 'coral'
  },
  {
    id: 'phase-closure',
    shortTitle: 'ปิด Matter',
    title: 'ปิด Matter และเก็บรักษาหลักฐาน',
    summary: 'ตรวจความครบถ้วนก่อนจำกัดการทำรายการและเริ่ม Retention',
    actions: [
      'ตรวจงานและกำหนดเวลาค้าง',
      'ตรวจเอกสาร เวลา และการเงิน',
      'ตรวจ Access และ Retention',
      'Manager อนุมัติปิด Matter',
      'Archive หรือรักษาตาม Legal Hold'
    ],
    decision:
      'หาก Closure Checklist ไม่ครบ ให้แก้รายการค้างก่อนปิด และห้ามทำลายหลักฐานที่อยู่ภายใต้ Legal Hold',
    result: 'Matter เป็น Closed และข้อมูลเข้าสู่ Retention หรือ Archive ที่กำหนด',
    detailLabel: 'Matter Operations & Closure',
    detailHref: '/docs/sops/matter-operations',
    tone: 'graphite'
  }
]

export function BusinessWorkflow() {
  return (
    <div className={`${styles.root} business-workflow-print`}>
      <section className={styles.overview} aria-labelledby="workflow-map-title">
        <h3 id="workflow-map-title" className={styles.sectionTitle}>
          ภาพรวม 7 Phase
        </h3>
        <ol className={styles.rail}>
          {phases.map((phase, index) => (
            <li key={phase.id} className={styles.railItem}>
              <a href={`#${phase.id}`}>
                <span className={styles.railNumber}>{index + 1}</span>
                <span>{phase.shortTitle}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <div className={styles.phases}>
        {phases.map((phase, phaseIndex) => (
          <section
            id={phase.id}
            key={phase.id}
            className={`${styles.phase} ${toneClasses[phase.tone]}`}
          >
            <header className={styles.phaseHeader}>
              <span className={styles.phaseNumber} aria-hidden="true">
                {phaseIndex + 1}
              </span>
              <div>
                <h3>{phase.title}</h3>
                <p>{phase.summary}</p>
              </div>
            </header>

            <ol className={styles.actions}>
              {phase.actions.map((action, actionIndex) => (
                <li key={action} className={styles.action}>
                  <span className={styles.actionNumber}>
                    {phaseIndex + 1}.{actionIndex + 1}
                  </span>
                  <span>{action}</span>
                </li>
              ))}
            </ol>

            <div className={styles.controlRow}>
              <div className={styles.decision}>
                <strong>จุดตัดสินใจ</strong>
                <p>{phase.decision}</p>
              </div>
              <div className={styles.result}>
                <strong>ผลลัพธ์</strong>
                <p>{phase.result}</p>
              </div>
            </div>

            <p className={styles.detailLink}>
              รายละเอียด:{' '}
              <a href={phase.detailHref}>{phase.detailLabel}</a>
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}
