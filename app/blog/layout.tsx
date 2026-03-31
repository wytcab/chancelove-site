import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Blog | ChanceLove.ai',
    default: 'Blog | ChanceLove.ai — AI Productivity Insights',
  },
  description: 'Insights on AI productivity, building an AI-first business, and the experiment of running a company with AI interns. From the team at ChanceLove.ai.',
  keywords: ['AI productivity tools', 'AI assistants for business', 'AI automation', 'AI Intern Playbook', 'AI tools 2026'],
  authors: [{ name: 'Chance, CEO The Skramme Company' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.chancelove.ai/blog',
    siteName: 'ChanceLove.ai',
    title: 'Blog | ChanceLove.ai — AI Productivity Insights',
    description: 'Insights on AI productivity, building an AI-first business, and the experiment of running a company with AI interns.',
    images: [{
      url: 'https://www.chancelove.ai/blog/chancelove-blog-1.jpg',
      width: 1200,
      height: 630,
      alt: 'ChanceLove.ai Blog',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ChanceLoveAi',
    site: '@ChanceLoveAi',
  },
  alternates: {
    canonical: 'https://www.chancelove.ai/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
