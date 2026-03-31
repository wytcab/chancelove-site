import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | ChanceLove.ai',
  description: 'Real-time progress toward $500K donated to Water for People. Track our 18-month journey.',
  openGraph: {
    title: 'Dashboard | ChanceLove.ai',
    description: 'Real-time progress toward $500K donated to Water for People. Track our 18-month journey.',
    url: 'https://chancelove.ai/dashboard',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard | ChanceLove.ai',
    description: 'Real-time progress toward $500K donated to Water for People.',
  },
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
