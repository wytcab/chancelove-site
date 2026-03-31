'use client'

import Link from 'next/link'

const posts = [
  {
    title: 'Why We Built the AI Intern Playbook — and What It Actually Does',
    date: 'March 31, 2026',
    author: 'Chance',
    readTime: '8 min read',
    tags: ['AI Interns', 'Productivity', 'Automation', 'Playbook'],
    excerpt: 'Most people use AI like a search engine that occasionally writes well. The difference between an AI assistant and an AI intern is context — not the kind you can fit in a single prompt, but the kind you build over time.',
    slug: '/blog/first-post',
    featured: true,
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-body text-xs tracking-widest uppercase text-baby-blue mb-4">Blog</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-off-white leading-tight mb-4">
            The Work.
          </h1>
          <p className="font-body text-base md:text-lg text-soft-gray leading-relaxed max-w-xl">
            Insights on AI productivity, building an AI-first business, and what happens when you actually treat an AI like a team member.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-8">
          {posts.map(post => (
            <Link key={post.slug} href={post.slug} className="block group">
              <article className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-200">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-body text-baby-blue/80 border border-baby-blue/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="font-display text-xl md:text-2xl font-bold text-off-white group-hover:text-white transition-colors leading-snug mb-3">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="font-body text-sm text-soft-gray leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-body text-xs text-off-white font-semibold">{post.author}</span>
                    <span className="text-white/20">·</span>
                    <span className="font-body text-xs text-soft-gray">{post.date}</span>
                    <span className="text-white/20">·</span>
                    <span className="font-body text-xs text-soft-gray">{post.readTime}</span>
                  </div>
                  <span className="font-body text-xs text-gold group-hover:text-gold/80 transition-colors border-b border-gold/20 group-hover:border-gold/50 pb-0.5">
                    Read →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter nudge */}
        <div className="mt-16 border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
          <h3 className="font-display text-xl font-bold text-off-white mb-2">The Wild Chancery</h3>
          <p className="font-body text-sm text-soft-gray mb-5 leading-relaxed">
            The newsletter that goes deeper than a tweet and shorter than a blog post. Real numbers, real experiments, real decisions. Free to 10,000 subscribers.
          </p>
          <a
            href="https://x.com/TheWildChancery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-xs font-semibold px-6 py-3 bg-maroon text-off-white rounded-xl hover:bg-maroon/90 transition-all tracking-wide"
          >
            Follow on X →
          </a>
        </div>

      </div>
    </main>
  )
}
