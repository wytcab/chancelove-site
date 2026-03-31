import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | ChanceLove.ai',
  description: 'Insights on AI productivity, building an AI-first business, and the experiment of running a company with AI interns.',
  openGraph: {
    title: 'Blog | ChanceLove.ai',
    description: 'Insights on AI productivity, building an AI-first business, and the experiment of running a company with AI interns.',
    url: 'https://www.chancelove.ai/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
