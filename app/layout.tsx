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
  title: 'AI Productivity Tools for Business | ChanceLove.ai — The AI Intern Playbook',
  description: 'The AI Intern Playbook. Hire an AI that actually works in your business. Prompt packs, briefing docs, and copy-paste shortcuts for your AI Intern.',
  keywords: ['AI productivity tools', 'AI automation tools', 'AI intern', 'AI assistant for business', 'AI tools 2026'],
  authors: [{ name: 'The Skramme Company' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.chancelove.ai',
    siteName: 'ChanceLove.ai',
    title: 'AI Productivity Tools for Business | ChanceLove.ai — The AI Intern Playbook',
    description: 'The AI Intern Playbook. Hire an AI that actually works in your business.',
    images: [
      {
        url: 'https://www.chancelove.ai/og-image.png',
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
    title: 'AI Productivity Tools for Business | ChanceLove.ai — The AI Intern Playbook',
    description: 'The AI Intern Playbook. Hire an AI that actually works in your business.',
    images: ['https://www.chancelove.ai/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.chancelove.ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://chancelove.ai/#organization',
        name: 'The Skramme Company',
        url: 'https://www.chancelove.ai',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.chancelove.ai/og-image.png',
        },
        sameAs: [
          'https://x.com/ChanceLoveAi',
          'https://x.com/TheWildChancery',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'hello@chancelove.ai',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://chancelove.ai/#website',
        url: 'https://www.chancelove.ai',
        name: 'ChanceLove.ai',
        publisher: { '@id': 'https://chancelove.ai/#organization' },
      },
      {
        '@type': 'Product',
        '@id': 'https://chancelove.ai/#product',
        name: 'The AI Intern Playbook',
        description: 'The practical playbook for hiring an AI that works in your business. Includes prompt packs, briefing docs, and copy-paste shortcuts.',
        brand: { '@type': 'Brand', name: 'ChanceLove.ai' },
        offers: {
          '@type': 'Offer',
          price: '39',
          priceCurrency: 'USD',
          url: 'https://www.chancelove.ai',
          availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://chancelove.ai/#software',
        name: 'AI Intern Playbook',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '39', priceCurrency: 'USD' },
        description: 'AI productivity tools and automation playbooks for business owners.',
      },
    ],
  }

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
