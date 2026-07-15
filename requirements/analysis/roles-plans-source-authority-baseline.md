# Roles, Plans and Entitlements Source Authority Baseline

วันที่กำหนด baseline: 15 July 2026

## Document Control

| Field | Value |
| --- | --- |
| Status | Approved for documentation implementation |
| Owner | Product / Platform Owner |
| Applies To | Roles, Permissions, Plans, Pricing and Feature Entitlements documentation |
| Review Trigger | Source file replacement, pricing decision, role model change or entitlement rule change |

## Objective

กำหนด source precedence และ interpretation baseline ก่อนปรับหน้า Roles หรือสร้าง
เมนู Plans & Entitlements เพื่อป้องกันการนำ job title, runtime permission,
commercial package และ feature availability มารวมเป็น control เดียวกัน

Baseline นี้ไม่แก้ไฟล์ต้นทางและยังไม่เปลี่ยน runtime behavior หรือเมนูเอกสาร

## Source Inventory

| Source | Authoritative Use | Location / Range | SHA-256 |
| --- | --- | --- | --- |
| `Plans _ Pricing.jpg` | Plan name, displayed price, positioning and high-level package statements | Full image, 1920x1080 | `38785993b2abeedad10a0099bf29411017c97b81a8c4c64248377412daae9d90` |
| `MatterSolv_8_Module_Feature_Comparison_Pricing_Pack.xlsx` | Detailed Module/Feature entitlement and mapping rules | `Feature Comparison!A1:G304`, `Pricing Pack!A1:D13`, `Module Summary!A1:G25`, `Mapping Notes!A1:C24` | `ac694a64c4aca7be76fd550dafb29c93aad09dae832576ad8ae7ed7d8ba2d91e` |
| `Role and Permission Alternate Pro_1.xlsx` | Source personas, role permission reference and action vocabulary | `List!A1:D7`, `Role & Permission!A1:K108`, numbered revision sheets | `c66255830907a7b5ab553c4195972c9edc996ced8c00fbed475986c5823e14ee` |
| Existing Scope, SOP and Governance documents | Process authority, security baseline, SoD, approval and evidence controls | Current controlled documentation | Controlled by existing document IDs and versions |

หาก checksum ของ source file เปลี่ยน ต้องทบทวน baseline, affected pages,
traceability และ UAT ก่อนเผยแพร่

## Approved Source Precedence

ใช้ลำดับต่อไปนี้เมื่อข้อมูลกล่าวถึงเรื่องเดียวกัน:

1. User-approved clarification หรือ controlled decision ที่ระบุภายหลัง
2. Existing approved SOP/Governance สำหรับ security, SoD, approval, evidence,
   retention และ operational behavior
3. `Plans _ Pricing.jpg` สำหรับชื่อ Plan, ราคา, positioning และข้อความ package
   ระดับภาพรวม
4. `Feature Comparison` และ `Mapping Notes` สำหรับ entitlement ราย Feature,
   status และ mapping rule
5. `Role & Permission` สำหรับ source persona และ role reference
6. Sheet `Role & Permission (2)`, `(3)` และ `(4)` ใช้เป็น revision/reference
   เท่านั้น ห้ามใช้เป็น production authority โดยอัตโนมัติ

กติกาความขัดแย้ง:

- ข้อความ package ระดับภาพรวมไม่ override `TBD` หรือ security control
- หากภาพกับ detailed feature row ขัดกัน ให้เปิด decision record ห้ามเลือกค่าเอง
- Existing approved security/retention/SoD control ห้ามถูกลดระดับด้วยราคา Plan
- ห้าม merge permission จากหลาย revision sheet เพื่อสร้าง matrix ใหม่โดยไม่มี
  owner approval

## Approved Decisions

### DEC-SRC-001 Source Authority

แหล่งข้อมูลแต่ละไฟล์มี authority เฉพาะเรื่องตาม Source Inventory และ Source
Precedence ข้างต้น การนำข้อมูลไปใช้ต้องเก็บ source file, sheet/range, checksum
และ decision reference ที่ตรวจย้อนหลังได้

### DEC-RBAC-002 Persona and Runtime Role Boundary

Sheet `Role & Permission` ที่ไม่ใส่เลขเป็น canonical **source persona matrix**
สำหรับงานเอกสารรอบนี้ โดยชื่อ Owner, Admin, Partner, Managing Partner, Senior
Lawyer, Junior Lawyer และ Accounting เป็น business persona/job responsibility
ไม่ใช่ runtime role ใหม่โดยอัตโนมัติ

Runtime baseline ยังคงเป็น Admin, Lawyer, Assistant, Finance, HR และ Manager
พร้อม scoped permission bundle ตาม controlled documentation หนึ่งบุคคลอาจ map
หลาย runtime roles/bundles และทุก grant ต้องผ่าน Tenant/team/Matter scope,
least privilege, SoD, expiry และ audit control

ข้อห้าม:

- ห้ามลบ Assistant หรือ HR เพราะไม่ปรากฏใน role workbook
- ห้ามให้ Managing Partner authority เพิ่มเอง เพราะยังไม่มี permission block แยก
- ห้ามแยก permission ของ Senior/Junior Lawyer จาก block ที่รวมกันโดยการคาดเดา
- ห้ามตัด Export ออกจาก canonical action vocabulary เพียงเพราะ sheet ล่าสุดไม่มี
  คอลัมน์นี้ เนื่องจาก revision ก่อนหน้าและ controlled SOP มี export control อยู่

### DEC-ENT-001 Plans, Currency and Inheritance

Plan baseline มี 5 ระดับและใช้ราคาเงินบาท (THB) ตาม user-approved clarification:

| Plan | Price | Account / Matter Baseline |
| --- | ---: | --- |
| STANDARD | Free | Unlimited Users; 5 Matters per month |
| ESSENTIALS | THB 590 / month | Unlimited Users; Unlimited Matters |
| PRO | THB 1,250 / month | Unlimited Users; Unlimited Matters |
| ADVANCED | THB 4,200 / month | Unlimited Users; Unlimited Matters |
| ENTERPRISE | THB 8,900 / month | Unlimited Users; Unlimited Matters |

Entitlement สืบทอดแบบสะสม:

`STANDARD -> ESSENTIALS -> PRO -> ADVANCED -> ENTERPRISE`

Plan/Entitlement เป็น Tenant-level commercial control ส่วน Role/Permission เป็น
user-level authorization control การทำ action ต้องผ่านทั้งสอง gate:

`Tenant entitlement allows feature AND user permission allows action`

หาก gate ใดไม่ผ่าน ระบบต้อง deny โดยไม่เปิดเผยข้อมูลนอก scope และบันทึก decision
evidence

### DEC-ENT-002 Entitlement Status Semantics

| Source Value | Canonical Meaning | Implementation Rule |
| --- | --- | --- |
| `✔` | Included | เปิดได้เมื่อ Plan inheritance และ user permission ผ่าน |
| `—` | Not Included | ไม่เปิดใน Plan นั้น |
| `View only` | Read Only | อนุญาต view ตาม scope; block create/edit/delete/approve/export เว้นแต่ระบุแยก |
| `Baseline` | Platform Baseline | เปิดทุก Plan และห้าม downgrade security/control ตามราคา |
| `TBD` | Not Approved | ห้ามขาย เปิด feature gate หรือสื่อว่า available จนมี approved decision |

Workbook ระบุ feature inventory 8 Modules รวม 216 Features โดยจำนวน
included/available ที่ mapping ไว้คือ STANDARD 90, ESSENTIALS 112, PRO 134,
ADVANCED 175 และ ENTERPRISE 189 รายการ ค่าเหล่านี้เป็น documentation control
total สำหรับตรวจ completeness ไม่ใช่ license calculation formula

Downgrade ต้องไม่ลบ source data หรือ audit history โดยอัตโนมัติ รายละเอียด
read-only, export, grace period, notification และ re-upgrade ยังต้องกำหนดใน
entitlement rule/control ก่อนใช้ production

## Canonical Vocabulary

| Concept | Definition | Must Not Be Used As |
| --- | --- | --- |
| Persona | ตำแหน่ง/ความรับผิดชอบทางธุรกิจจาก source workbook | Runtime permission โดยตรง |
| Runtime Role | กลุ่ม permission พื้นฐานของผู้ใช้ | Pricing Plan |
| Permission Bundle | สิทธิ์เสริมแบบ scoped เช่น review/approve/export | Job title อัตโนมัติ |
| Plan | ระดับ commercial package ของ Tenant | User role |
| Entitlement | Module/Feature ที่ Tenant ใช้ได้ตาม Plan/version | Authorization ข้าม scope |
| Feature Gate | การบังคับ entitlement ณ runtime | สิ่งทดแทน RBAC/SoD |
| Platform Baseline | Security/control ที่ทุก Plan ต้องมี | Paid add-on |

## Known Gaps Requiring Explicit Resolution

1. Managing Partner อยู่ใน legend แต่ไม่มี permission block แยก
2. Senior Lawyer และ Junior Lawyer อยู่ใน permission block เดียวกัน
3. `Junior Laywer` ใน source สะกดผิด ให้เอกสารใช้ `Junior Lawyer` โดยเก็บ source
   alias ไว้ใน mapping note
4. Revision sheets ใช้ action columns ไม่เหมือนกัน โดย Export ปรากฏในบาง revision
5. Package mapping เดิมมีเพียง `S` และ `Pro` จึงถูก supersede ด้าน commercial
   structure ด้วย 5-Plan baseline แต่ยังใช้เป็น historical reference ได้
6. Currency ไม่ปรากฏในภาพ แต่ได้รับการยืนยันจากผู้ใช้ว่าเป็น THB
7. Downgrade grace period และ export window ยังไม่มีค่าที่อนุมัติ

Known gap ห้ามถูกแปลงเป็น permission หรือ entitlement โดยการคาดเดา

## Downstream Change Boundary

Step ถัดไปจึงต้องปฏิบัติตามขอบเขตนี้:

- Roles documents อธิบาย persona-to-runtime-role/bundle mapping เท่านั้น
- Plans & Entitlements documents อธิบายราคา THB, inheritance และ feature catalog
- Modules documents อธิบาย capability ไม่ทำหน้าที่เป็น price catalog
- SOP-ADM-001 ควบคุม package assignment/change/downgrade process
- SOP-SEC-001 และ CTRL-RBAC-001 ควบคุม user authorization
- TBD, role gap หรือ downgrade gap ต้องมี decision ก่อน production use

## Step 1 Completion Checklist

- [x] ระบุ source file, sheet/range และ checksum ครบ
- [x] ล็อก currency เป็น THB ตาม user-approved clarification
- [x] แยก Persona, Runtime Role, Plan และ Entitlement
- [x] กำหนด canonical role sheet และ revision boundary
- [x] กำหนด Plan inheritance และ entitlement status semantics
- [x] ระบุ known gaps โดยไม่สร้างค่าทดแทนเอง
- [x] ระบุ downstream boundary สำหรับขั้นต่อไป
