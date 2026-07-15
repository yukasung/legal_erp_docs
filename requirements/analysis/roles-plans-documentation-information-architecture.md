# Roles, Plans and Entitlements Documentation Information Architecture

วันที่กำหนดโครงสร้าง: 15 July 2026

## Document Control

| Field | Value |
| --- | --- |
| Status | Approved for implementation |
| Decision ID | DEC-IA-001 |
| Owner | Product / Platform Owner |
| Applies To | Documentation navigation, routes, page ownership and content boundaries |
| Depends On | DEC-SRC-001, DEC-RBAC-002, DEC-ENT-001 and DEC-ENT-002 |

## Objective

กำหนดตำแหน่งเมนู route และหน้าที่ของเอกสาร Roles กับ Plans & Entitlements
ให้ค้นหาได้ง่ายโดยไม่สร้างเนื้อหาซ้ำกับ Scope, Modules หรือ SOPs

เอกสารนี้เป็น route reservation และ implementation specification ยังไม่เพิ่ม
เมนูจริงจนกว่าหน้าปลายทางจะมีเนื้อหาและผ่าน build เพื่อป้องกัน broken link

## Approved Top-Level Navigation

ลำดับเมนูหลัง implementation:

1. Overview
2. Scope
3. SOPs
4. Roles
5. Plans & Entitlements
6. Modules
7. Technical separator
8. Architecture
9. Database
10. API

เหตุผลของลำดับ:

- SOPs คงความสำคัญตามโครงสร้างเอกสารปัจจุบัน
- Roles อยู่ก่อน Plans เพื่ออธิบาย user authorization ก่อน Tenant entitlement
- Plans & Entitlements อยู่ติด Modules เพื่อเชื่อมว่า capability ใดเปิดใน Plan ใด
- Technical content ยังคงแยกจาก business/operational documentation

## Approved Menu Tree and Routes

```text
Roles
├── Overview                 /docs/roles
├── User Roles               /docs/roles/roles
├── Role Mapping             /docs/roles/role-mapping
└── Permissions              /docs/roles/permissions

Plans & Entitlements
├── Overview                 /docs/plans
├── Pricing Plans            /docs/plans/pricing
├── Feature Entitlements     /docs/plans/feature-entitlements
└── Entitlement Rules        /docs/plans/entitlement-rules
```

Canonical route ใช้คำว่า `plans` ไม่ใช้ `pricing-pack`, `packages` หรือ
`subscriptions` เพื่อให้ URL สั้นและยังครอบคลุมราคา entitlement และ rule

## Page Specifications

### Roles Overview

| Attribute | Specification |
| --- | --- |
| Route | `/docs/roles` |
| H1 | Roles |
| Menu Label | Overview |
| Owner | Admin / Security Owner |
| Purpose | อธิบาย persona, runtime role, permission bundle, scope และ SoD |
| Must Include | Six runtime baseline roles, source persona summary and links to Role Mapping/Permissions |
| Must Not Include | Plan price หรือ feature entitlement matrix |

### User Roles

| Attribute | Specification |
| --- | --- |
| Route | `/docs/roles/roles` |
| H1 | User Roles |
| Menu Label | User Roles |
| Owner | Admin / Security Owner |
| Purpose | อธิบายหน้าที่และ explicit boundary ของ runtime roles |
| Must Include | Admin, Lawyer, Assistant, Finance, HR and Manager |
| Must Not Include | สร้าง runtime role ตาม job title โดยอัตโนมัติ |

### Role Mapping

| Attribute | Specification |
| --- | --- |
| Route | `/docs/roles/role-mapping` |
| H1 | Persona to Role Mapping |
| Menu Label | Role Mapping |
| Owner | Admin / Security Owner |
| Purpose | Map source persona ไป runtime role/bundle/authority โดยไม่อนุมาน gap |
| Must Include | Owner, Admin, Partner, Managing Partner, Senior Lawyer, Junior Lawyer and Accounting |
| Must Not Include | Package availability หรือราคา |

### Permissions

| Attribute | Specification |
| --- | --- |
| Route | `/docs/roles/permissions` |
| H1 | Permissions |
| Menu Label | Permissions |
| Owner | Admin / Security Owner |
| Purpose | กำหนด action, scope, approval, deny และ audit semantics |
| Must Include | View, Create, Edit, Delete, Export, Approve and scoped permission bundles |
| Must Not Include | ถือว่า Plan entitlement ให้ permission ผู้ใช้โดยอัตโนมัติ |

### Plans & Entitlements Overview

| Attribute | Specification |
| --- | --- |
| Route | `/docs/plans` |
| H1 | Plans & Entitlements |
| Menu Label | Overview |
| Owner | Product / Platform Owner |
| Purpose | อธิบายความสัมพันธ์ Plan, Module, Feature, Entitlement และ Permission |
| Must Include | Five Plans, two-gate rule and links to catalog/rules |
| Must Not Include | ทำซ้ำ feature inventory ทั้งหมด |

### Pricing Plans

| Attribute | Specification |
| --- | --- |
| Route | `/docs/plans/pricing` |
| H1 | Pricing Plans |
| Menu Label | Pricing Plans |
| Owner | Product / Commercial Owner |
| Purpose | แสดงชื่อ Plan, ราคา THB, positioning, user/matter limit และ inheritance |
| Must Include | STANDARD, ESSENTIALS, PRO, ADVANCED and ENTERPRISE |
| Must Not Include | อนุมาน billing frequency/ภาษี/ส่วนลด/สัญญาที่ source ไม่กำหนด |

### Feature Entitlements

| Attribute | Specification |
| --- | --- |
| Route | `/docs/plans/feature-entitlements` |
| H1 | Module & Feature Entitlements |
| Menu Label | Feature Entitlements |
| Owner | Product / Platform Owner |
| Purpose | เป็น catalog ราย Feature ว่า Plan ใด Included, Not Included, View Only, Baseline หรือ TBD |
| Must Include | M1-M8, 216-feature control population and Plan columns |
| Must Not Include | แปลง TBD เป็น Included หรือทำหน้าที่แทน Module capability documentation |

### Entitlement Rules

| Attribute | Specification |
| --- | --- |
| Route | `/docs/plans/entitlement-rules` |
| H1 | Entitlement Rules |
| Menu Label | Entitlement Rules |
| Owner | Product / Platform Owner |
| Purpose | กำหนด inheritance, two-gate authorization, baseline, view-only, upgrade/downgrade และ evidence |
| Must Include | DEC-ENT-001/002, security baseline, data preservation and unresolved downgrade values |
| Must Not Include | กำหนด grace period/export window โดยไม่มี approval |

## Content Ownership Boundaries

| Documentation Area | Answers | Does Not Own |
| --- | --- | --- |
| Scope | ระบบรอบนี้ครอบคลุมอะไร | รายการ permission หรือราคา Plan |
| Roles | ผู้ใช้/บุคคลรับผิดชอบอะไร | Tenant ซื้อ Feature อะไร |
| Permissions | ผู้ใช้ทำ action ใดใน scope ใด | Commercial entitlement |
| Plans & Entitlements | Tenant เปิด Module/Feature ใดได้ | Business workflow หรือ record approval |
| Modules | ระบบรองรับ capability/data/rule อะไร | ราคาและ user authorization |
| SOPs | ผู้ใช้ปฏิบัติงานและเก็บ evidence อย่างไร | ทำหน้าที่เป็น feature catalog |
| Technical | ระบบ implement/integrate อย่างไร | Business authority และ commercial decision |

## Feature Entitlements Page Structure

ไม่สร้างเมนูย่อยแยก 8 Modules เพราะจะทำให้ navigation ยาวเกินไป หน้าเดียวแบ่ง
section ดังนี้:

1. Legend and control totals
2. M1 Document Automation Management
3. M2 Quotation System & Service Fee Definition
4. M3 Case Management
5. M4 Calendar & Scheduling
6. M5 Task & Team Management
7. M6 Quotation and Payment Collection
8. M7 Human Resource Management
9. M8 Administrator Service Support
10. Source, version and reconciliation summary

แต่ละ section ใช้ตารางรูปแบบเดียวกัน:

| Feature | STANDARD | ESSENTIALS | PRO | ADVANCED | ENTERPRISE |
| --- | --- | --- | --- | --- | --- |

สถานะในตารางต้องใช้ canonical label จาก DEC-ENT-002 และจัด plan/status
กึ่งกลาง ส่วน Feature ชิดซ้ายเพื่ออ่านง่าย

## Cross-Reference Design

| Source Page | Target Page | Link Purpose |
| --- | --- | --- |
| Roles Overview | Role Mapping | อธิบาย source persona conversion |
| Roles Overview | Permissions | ลงรายละเอียด action/scope |
| Role Mapping | SOP-SEC-001 | Grant/revoke and recertification procedure |
| Permissions | CTRL-RBAC-001 | Authority, SoD and permission alignment |
| Plans Overview | Pricing Plans | ราคาและ positioning |
| Plans Overview | Feature Entitlements | Plan-to-feature catalog |
| Plans Overview | Entitlement Rules | Runtime and lifecycle rules |
| Pricing Plans | SOP-ADM-001 | Tenant package assignment/change procedure |
| Feature Entitlements | Modules | Capability details โดยไม่ทำซ้ำ |
| Entitlement Rules | SOP-ADM-001 | Upgrade/downgrade/suspension control |
| Entitlement Rules | SOP-SEC-001 | User permission gate |

Cross-reference ต้องเป็นสองทางเมื่อหน้าปลายทางถูกสร้างแล้ว

## Navigation Implementation Sequence

1. ปรับ Roles pages เดิม
2. สร้าง Role Mapping route
3. สร้าง Plans routes ทั้งสี่หน้า
4. ตรวจทุก route ด้วย local build
5. เพิ่มรายการใน `_meta.global.tsx` ครั้งเดียว
6. ตรวจ sidebar, previous/next navigation และ mobile overflow

ลำดับนี้ป้องกันเมนูชี้ไปหน้าที่ยังไม่มีอยู่

## Acceptance Criteria

- [x] ระบุ top-level order และตำแหน่งเมนูใหม่
- [x] ระบุ canonical route และ H1 ทุกหน้า
- [x] แยก Roles, Permissions, Plans, Modules และ SOP ownership
- [x] กำหนด Feature Entitlements เป็นหน้าเดียว 8 sections
- [x] กำหนด cross-reference ที่ต้องมี
- [x] กำหนด implementation sequence ที่ไม่สร้าง broken route
- [x] ห้าม duplicate content และ unsupported policy inference
