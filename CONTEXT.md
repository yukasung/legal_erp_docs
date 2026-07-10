# Legal ERP Platform

ไฟล์นี้กำหนดภาษากลางและคำศัพท์หลักสำหรับเอกสาร Legal ERP Platform
เพื่อใช้อ้างอิง เมื่อต้องแปลง requirement source files เป็นเอกสารเผยแพร่

## ภาษาหลักของเอกสาร

เอกสารที่เผยแพร่ต้องใช้ภาษาไทยเป็นหลัก โดยคงชื่อ product, module, stack และ
domain term เป็นภาษาอังกฤษเฉพาะกรณีที่เป็นคำมาตรฐานของระบบ พร้อมอธิบายความหมาย
เป็นภาษาไทยเมื่อจำเป็น

## คำศัพท์หลัก

**Legal ERP Platform**: ชื่อระบบอย่างเป็นทางการสำหรับ platform บริหารงานกฎหมาย
_Avoid_: MatterSolv, MatterSlov, Legal ERP, End-to-End Digital Legal Practice
Management Platform

**Matter**: แฟ้มงานกฎหมายหรือรายการงานหลักที่เชื่อมโยง client, document, task,
time record, appointment, quotation, invoice และ profitability analysis ไว้ด้วย
กัน _Avoid_: ใช้ Case เมื่อกล่าวถึงแฟ้มงานแบบ matter-centered

**Client**: บุคคลหรือองค์กรที่รับบริการทางกฎหมาย และสามารถเชื่อมโยงกับ matter
ได้มากกว่าหนึ่งรายการ _Avoid_: Customer

**Tenant**: หนึ่งสำนักงานกฎหมายหรือองค์กรที่ใช้งาน Legal ERP Platform ใน
environment แบบ SaaS ที่แยกข้อมูลออกจาก tenant อื่น _Avoid_: BU, office account
