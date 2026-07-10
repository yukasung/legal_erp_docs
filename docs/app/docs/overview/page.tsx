import { redirect } from 'next/navigation'

export default function OverviewRedirectPage() {
  redirect('/docs')

  return <main hidden />
}
