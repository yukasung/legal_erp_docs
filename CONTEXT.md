# Legal ERP Platform

ไฟล์นี้กำหนดภาษากลางและคำศัพท์หลักสำหรับ Legal ERP Platform เพื่อใช้อ้างอิงเมื่อ
แปลง requirement source files เป็นเอกสารเผยแพร่

## Language

**Legal ERP Platform**: ชื่อระบบอย่างเป็นทางการสำหรับ platform บริหารงานกฎหมาย
_Avoid_: MatterSolv, MatterSlov, Legal ERP, End-to-End Digital Legal Practice
Management Platform

**Tenant**: หนึ่งสำนักงานกฎหมายหรือองค์กรที่ใช้งาน Legal ERP Platform ใน
environment แบบ SaaS ที่แยกข้อมูลออกจาก tenant อื่น _Avoid_: BU, office account

**User**: บุคคลที่เข้าใช้งานระบบภายใต้ tenant ใด tenant หนึ่ง และได้รับสิทธิ์ตาม
role หรือ permission ที่กำหนด _Avoid_: Staff account, employee account

**Role**: กลุ่มหน้าที่ของ user ที่ใช้กำหนดชุด permission พื้นฐาน เช่น
administrator, lawyer, finance หรือ assistant _Avoid_: Position, job title

**Permission**: สิทธิ์เฉพาะสำหรับการดู สร้าง แก้ไข อนุมัติ ส่งออก
หรือลบข้อมูลในระบบ _Avoid_: Access flag

**Client**: บุคคลหรือองค์กรที่รับบริการทางกฎหมาย และสามารถเชื่อมโยงกับหลาย
matter ได้ _Avoid_: Customer

**Matter**: แฟ้มงานกฎหมายหรือรายการงานหลักที่เชื่อมโยง client, document, task,
calendar activity, quotation, invoice, payment และ profitability analysis
ไว้ด้วยกัน _Avoid_: ใช้ Case เมื่อกล่าวถึงแฟ้มงานแบบ matter-centered

**Matter Workspace**: พื้นที่ทำงานของ matter ที่รวมข้อมูลและกิจกรรมทั้งหมดของ
งานกฎหมายเรื่องนั้น _Avoid_: Case file screen

**Document**: เอกสารที่สร้าง อัปโหลด หรือจัดเก็บในระบบและเชื่อมกับ matter หรือ
client _Avoid_: File เฉพาะเมื่อต้องการสื่อถึง metadata และ workflow ของเอกสาร

**Document Template**: แม่แบบเอกสารที่ใช้สร้าง document โดยเติมข้อมูลจาก matter,
client หรือข้อมูลอื่นในระบบ _Avoid_: Form file

**Task**: งานย่อยที่มอบหมายให้ user หรือทีมรับผิดชอบภายใต้ matter หรือ workflow
ที่เกี่ยวข้อง _Avoid_: To-do

**Calendar Activity**: กิจกรรม วันนัด หรือ deadline ที่ผูกกับ matter, task หรือ
user _Avoid_: Appointment เมื่อหมายถึงกิจกรรมทุกประเภท

**Quotation**: ใบเสนอราคาหรือข้อเสนอค่าบริการสำหรับ matter หรือ service package
_Avoid_: Quote

**Invoice**: เอกสารเรียกเก็บเงินที่ออกหลังจาก quotation หรือ billing condition
พร้อมเรียกชำระ _Avoid_: Bill เมื่อหมายถึงเอกสาร invoice อย่างเป็นทางการ

**Payment**: ข้อมูลการรับชำระเงินที่เชื่อมกับ invoice, matter หรือ client
_Avoid_: Collection record เมื่อหมายถึงรายการชำระเงินจริง

**Billing**: กระบวนการติดตามการวางบิล เงื่อนไขการชำระ invoice และสถานะ
collection _Avoid_: Accounting

**Finance Foundation**: ข้อมูลพื้นฐานด้านการเงินที่เตรียมไว้สำหรับ receivable,
payable, tax-related setup และ financial reporting _Avoid_: Full accounting
module

**Audit Log**: ประวัติการเปลี่ยนแปลงข้อมูลสำคัญที่บันทึก user, tenant, action,
target record และเวลาเกิดเหตุการณ์ _Avoid_: Activity feed เมื่อหมายถึงหลักฐาน
audit

**External Integration**: จุดเชื่อมต่อกับระบบภายนอก เช่น e-signature, payment
gateway, accounting system หรือ government service _Avoid_: Plugin
