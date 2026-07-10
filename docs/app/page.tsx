import { redirect } from 'next/navigation'

export default function IndexPage() {
  redirect('/docs')

  // Nextra's page-map finder does not include page.ts, so keep this route TSX.
  return <main hidden />
}
