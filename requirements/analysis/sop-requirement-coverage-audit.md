# SOP Requirement Coverage Audit

วันที่ตรวจ: 14 July 2026

## Objective

ตรวจ requirement ต้นทางทั้งหมดเทียบกับ SOP ที่เผยแพร่แล้ว เพื่อระบุช่องว่างโดย
ไม่สร้าง SOP ใหม่ทับ workflow, owner หรือ evidence ของหน้าเดิม

## Sources Reviewed

- `requirements/source/ALT Pro - P3 (MatterSolv).xlsx`
  - Main-Module แถว 4-11
  - Sub-Module แถว 5-293
  - Lawyer-Finance แถว 5-61
- `requirements/source/Manao Software Project Proposal-Alt Pro-Legal ERP-Phase_1_V1_20260525.pdf`
  - Detailed Scope หน้า 16-67
  - Client Portal/Feedback หน้า 36-37
  - Administrator Service Support หน้า 62-67
- `requirements/source/สำเนาของ 1. PMUC-proposal-Practice Management Platform_03032026_Final_DTS.pdf`
  - Client Portal หน้า 28, 31, 33 และ 35
  - Financial Intelligence/Model Governance หน้า 34-38
- `requirements/source/ERP Web Application on Google Cloud.jpeg`
  - Monitoring, automated backup, point-in-time recovery, WAF, audit logs,
    vulnerability scanning และ least-privilege operations
- SOP ทั้งหมด, SOP Master Register, Requirements Traceability และ UAT ใน
  `docs/app/docs/sops/`

## Executive Result

SOP ปัจจุบัน 15 ฉบับครอบคลุม workflow หลักด้าน Client/Matter, Document,
Task/Calendar, Time, Billing, Finance, HR, Tenant, Access, Reports/Audit และ
Retention แล้ว จึงไม่ควรสร้าง SOP ซ้ำใน domain เหล่านี้

ผล audit ระบุ **6 SOP ใหม่ที่มีขอบเขตไม่ทับหน้าเดิม**, งานขยายหน้าเดิม 1 กลุ่ม
และ 2 กลุ่มที่ต้องตัดสิน source precedence ก่อนสร้าง ปัจจุบัน SOP-ADM-002 และ
SOP-OPS-001 จัดทำแล้ว จึงเหลือ SOP-INT-001, SOP-SEC-002, SOP-CLI-002 และ
SOP-SUP-001

## New SOPs Identified

### 1. SOP-CLI-002 Client Portal & Feedback Management

**Source:** Sub-Module แถว 87-88 และ 106-110; Manao หน้า 36-37; PMUC หน้า 28,
31, 33 และ 35

**Missing workflow:** portal invitation/identity binding, publish/unpublish
Matter/Document/Invoice view, client-only authorization, feedback/survey,
notification, correction/escalation และ portal access evidence

**Non-duplication boundary:**

- SOP-CLI-001 ยังเป็น owner ของ Client master, VIP, Retainer และ Interaction
- SOP-MAT-002/SOP-DOC-001 เป็น owner ของ source Matter/Document
- SOP-BIL-002 เป็น owner ของ invoice/payment transaction
- SOP-CLI-002 ควบคุมเฉพาะสิ่งที่ publish ให้ Client เห็นและ action จาก portal

### 2. SOP-ADM-002 Shared Master Data Management

**Source:** Sub-Module แถว 230-231; Manao หน้า 63 และ 67; Scope ระบุ master data
อยู่ใน Administration & SaaS Management

**Missing workflow:** Court, jurisdiction, police station, case code/type และ
shared reference-data request, duplicate validation, approval, version/effective
date, activation/deactivation, dependency impact และ rollback

**Non-duplication boundary:** SOP-ADM-001 ระบุชัดว่า shared master data ต้องมี
SOP แยก ส่วน finance, payroll, quotation และ module-local master ยังคงอยู่ใน SOP
ของ domain นั้น

### 3. SOP-OPS-001 Platform Monitoring, Backup & Recovery

**Source:** Sub-Module แถว 232-235 และ 266-269; Manao หน้า 63-66; Google Cloud
architecture image

**Missing workflow:** health threshold, concurrent-user/error monitoring, alert
triage, backup job verification, restore request, point-in-time recovery,
recovery test, RPO/RTO evidence และ failed-recovery escalation

**Non-duplication boundary:** CTRL-EXC-001 ยังคุม severity/SLA และ SOP-AUD-001
ยังคุม retention/disposal; SOP-OPS-001 คุมการ operate และพิสูจน์ว่า ระบบ/backup
กู้คืนได้

### 4. SOP-INT-001 API & Integration Lifecycle Management

**Source:** Sub-Module แถว 236-247; Manao หน้า 64 และ 67; Architecture
Integration Strategy

**Missing workflow:** connection request, provider/security review, credential
ownership, API scope, schema/version, rate limit, sandbox test, activation,
monitoring/retry/idempotency, key rotation และ decommission

**Non-duplication boundary:** SOP-DOC-001, SOP-TSK-001, SOP-TIM-001, SOP-BIL-002
และ SOP-FIN-001 ยังคุม business transaction ของตน; SOP-INT-001 คุม lifecycle ของ
connection/adapter เท่านั้น

### 5. SOP-SEC-002 Security & Privacy Compliance Operations

**Source:** Sub-Module แถว 249-265 และ 270-271; Manao หน้า 64-67; Google Cloud
architecture image

**Missing workflow:** encryption/secret control review, compliance assessment,
sensitive-data classification, privacy/data-subject request routing, security
audit, vulnerability finding, remediation verification และ risk acceptance

**Non-duplication boundary:** SOP-SEC-001 คงขอบเขต User/Role/Permission/MFA และ
access anomaly; SOP-AUD-001 คง retention/Legal Hold/disposal; SOP-SEC-002 คุม
security/privacy assurance และ remediation

### 6. SOP-SUP-001 Service Support, Communications & Notifications

**Source:** Sub-Module แถว 272-287; Manao หน้า 66-67

**Missing workflow:** email/notification configuration, case alert, Admin
broadcast, communication-log linkage/search, helpdesk ticket lifecycle,
knowledge article approval, chatbot answer escalation และ support reporting

**Non-duplication boundary:** notification trigger ทางธุรกิจยังอยู่ใน SOP ของ
แต่ละ domain และ CTRL-EXC-001 ใช้เมื่อ ticket กลายเป็น incident/exception;
SOP-SUP-001 คุม delivery channel, communication evidence และ user-support
lifecycle จึงรวม Communication กับ Helpdesk ได้โดยไม่ต้องแยกสองหน้า

## Extend Existing Coverage, Do Not Create Another SOP

### Client and Matter Analytics

Sub-Module แถว 89-92 และ 111-114 อยู่ในขอบเขตของ SOP-REP-001 อยู่แล้ว ให้เพิ่ม
requirement mapping/UAT สำหรับ Case performance, Client behavior,
revenue-by-client และ dashboard เท่านั้น ไม่ต้องสร้าง Analytics SOP ใหม่

### Cross-references After New SOPs

เพิ่ม Related Documents/control handoff ใน SOP เดิมเท่าที่จำเป็น:

- SOP-DOC-001 และ SOP-TSK-001 ส่ง integration/notification failure ไป
  SOP-INT-001/SOP-SUP-001
- SOP-ADM-001 ส่ง shared master ไป SOP-ADM-002 และ system operation ไป
  SOP-OPS-001
- SOP-SEC-001/SOP-AUD-001 ส่ง security/privacy assurance ไป SOP-SEC-002
- SOP-CLI-001, SOP-MAT-002, SOP-DOC-001 และ SOP-BIL-002 ส่ง portal publication
  ไป SOP-CLI-002

## False-positive Coverage in the Current Matrix

1. `REQ-CLI-001` อ้าง Sub-Module แถว 96-114 แต่ UAT CLI-01 ถึง CLI-03 ทดสอบ
   register/search/detail เท่านั้น และ SOP-CLI-001 ระบุชัดว่า Portal, Feedback
   และ Client analytics อยู่นอกขอบเขต
2. `REQ-SEC-001` อ้าง Sub-Module แถว 225-271 แต่ SOP-SEC-001 ครอบคลุม
   account/RBAC/MFA/access anomaly ไม่ได้ครอบคลุม master data, health/API,
   backup/recovery, privacy compliance หรือ security audit ทั้งช่วง
3. Sub-Module แถว 272-287 ยังไม่มี Requirement ID, Decision, SOP หรือ UAT

ดังนั้นต้อง split source ranges และสร้าง Requirement ID ใหม่ก่อนถือว่า coverage
ครบ การมี source range กว้างใน matrix ไม่ใช่หลักฐานว่ามี procedure/UAT แล้ว

## Source Conflicts Requiring Decision Before SOP Creation

### SOP-HR-003 Attendance & Performance Management

Manao หน้า 4 และ 6 กล่าวถึง Attendance Tracking และ Performance Appraisal แต่
Detailed HR Scope หน้า 53-60 และ Sub-Module แถว 217-223 ระบุเฉพาะ Payroll/Leave
ปัจจุบัน CAL attendance หมายถึงการเข้าร่วมนัดหมาย ไม่ใช่ employee attendance

**Decision:** ยังไม่สร้างจน Product/HR Owner ยืนยันว่าเป็น Phase 1 requirement

### SOP-AI-001 AI-assisted Financial Analysis & Model Governance

PMUC หน้า 34-38 ระบุ Financial Intelligence, Vertex AI และ no-training model
governance แต่ workbook มี AI Architecture sheet ว่าง และ Scope ปัจจุบันไม่ระบุ
AI เป็น operational module

**Decision:** ยังไม่สร้างจนกำหนด source precedence, approved use case,
human-review boundary, data policy และ production model/provider scope

## Explicitly No New SOP Needed

- Sales Order/Deposit/Invoice/Payment: SOP-BIL-002 ครอบคลุมแล้ว
- Finance/Tax/FX/Period: SOP-FIN-001 ครอบคลุมแล้ว
- Appointment attendance: SOP-TSK-001 ครอบคลุมแล้ว
- Reports/export/audit-log review: SOP-REP-001 ครอบคลุมแล้ว
- Platform subscription billing: Scope ระบุว่ายังนอกขอบเขตรอบเริ่มต้น
- Production bank/payment/court/email/calendar provider: ยังไม่ถือว่าพร้อมใช้จน
  ผ่าน SOP-INT-001 และ release gate; ไม่ต้องสร้าง SOP ราย provider
- End-user training: เป็น delivery/support activity; เก็บ knowledge/support
  control ใน SOP-SUP-001 ไม่ต้องสร้าง Training SOP แยกในรอบนี้

## Recommended Build Order

1. SOP-ADM-002 Shared Master Data Management
2. SOP-OPS-001 Platform Monitoring, Backup & Recovery
3. SOP-INT-001 API & Integration Lifecycle Management
4. SOP-SEC-002 Security & Privacy Compliance Operations
5. SOP-CLI-002 Client Portal & Feedback Management
6. SOP-SUP-001 Service Support, Communications & Notifications
7. Extend SOP-REP-001 mapping/UAT and repair the traceability source ranges
8. Decide HR Attendance/Performance and AI scope; create SOP only when approved

ลำดับนี้ปิด foundation/control dependency ก่อนเปิด portal และ support workflow
ที่ผู้ใช้ภายนอกมองเห็น
