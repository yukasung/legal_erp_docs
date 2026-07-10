const NotFound = () => (
  <main className="x:flex x:min-h-[calc(100dvh-var(--nextra-navbar-height))] x:flex-col x:items-center x:justify-center x:gap-3 x:px-6 x:text-center">
    <h1 className="x:text-4xl x:font-bold x:tracking-tight x:text-slate-900 dark:x:text-slate-100">
      404: Page Not Found
    </h1>
    <p className="x:max-w-md x:text-sm x:text-gray-600 dark:x:text-gray-400">
      ไม่พบหน้าเอกสารที่ต้องการ กรุณากลับไปที่เมนูเอกสารหลัก
    </p>
  </main>
)

export default NotFound
