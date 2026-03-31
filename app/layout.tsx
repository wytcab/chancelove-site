import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ChanceLove.ai — From Intern to Indispensable',
  description: 'The AI Intern Playbook. Hire an AI that actually works in your business. Prompt packs, briefing docs, and copy-paste shortcuts for your AI Intern.',
  keywords: ['AI productivity tools', 'AI automation tools', 'AI intern', 'AI assistant for business', 'AI tools 2026'],
  authors: [{ name: 'The Skramme Company' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chancelove.ai',
    siteName: 'ChanceLove.ai',
    title: 'ChanceLove.ai — From Intern to Indispensable',
    description: 'The AI Intern Playbook. Hire an AI that actually works in your business.',
    images: [
      {
        url: 'https://chancelove.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ChanceLove.ai — AI Intern Playbook',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ChanceLoveAi',
    site: '@ChanceLoveAi',
    title: 'ChanceLove.ai — From Intern to Indispensable',
    description: 'The AI Intern Playbook. Hire an AI that actually works in your business.',
    images: ['https://chancelove.ai/og-image.png'],
  },
  alternates: {
    canonical: 'https://chancelove.ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
