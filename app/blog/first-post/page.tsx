'use client'

import Link from 'next/link'

const post = {
  title: 'Why We Built the AI Intern Playbook — and What It Actually Does',
  date: 'March 31, 2026',
  author: 'Chance',
  authorRole: 'CEO, The Skramme Company',
  readTime: '8 min read',
  tags: ['AI Interns', 'Productivity', 'Automation', 'Playbook'],
  slug: 'why-we-built-the-ai-intern-playbook',
}

const modules = [
  {
    name: 'Morty — The Marketing Intern',
    role: 'Marketing',
    color: 'border-maroon/30',
    what: 'Blog strategy, email campaigns, social media calendars, content ideation, and copywriting at scale.',
    bestFor: 'When you need a week\'s worth of content planned before lunch.',
  },
  {
    name: 'Simon — The Sales Intern',
    role: 'Sales',
    color: 'border-maroon/30',
    what: 'Lead qualification, email sequences, objection handling, discovery call prep, and follow-up strategy.',
    bestFor: 'When your pipeline has gone cold and you need to warm it up without a sales team.',
  },
  {
    name: 'Oscar — The Ops Intern',
    role: 'Operations',
    color: 'border-maroon/30',
    what: 'SOPs, scheduling, vendor communication, meeting summaries, and internal updates.',
    bestFor: 'When you realize you\'ve been doing everything manually and need systems.',
  },
  {
    name: 'Frank — The Finance Intern',
    role: 'Finance',
    color: 'border-maroon/30',
    what: 'Expense tracking, invoice follow-ups, financial summaries, and budget drafts.',
    bestFor: 'When you know the numbers matter but you\'d rather be building the product.',
  },
  {
    name: 'Hudson — The HR Intern',
    role: 'HR',
    color: 'border-maroon/30',
    what: 'Job descriptions, interview banks, onboarding docs, and policy drafts.',
    bestFor: 'When you need to hire but don\'t have a people team to figure out how.',
  },
  {
    name: 'Chester — The Creative Intern',
    role: 'Creative',
    color: 'border-baby-blue/30',
    what: 'Visual direction, brand storytelling, design briefs, creative concepts, and campaign mood boards.',
    bestFor: 'When you need creative direction without the creative agency invoice.',
  },
  {
    name: 'Penny — The Paralegal Intern',
    role: 'Legal',
    color: 'border-baby-blue/30',
    what: 'Contract review, compliance checklists, legal research summaries, NDA templates, and regulatory filing prep.',
    bestFor: 'When you need legal-grade research without the billable hour at the end.',
  },
  {
    name: 'Romy — The Research Intern',
    role: 'Research',
    color: 'border-baby-blue/30',
    what: 'Deep research, competitive analysis, market intelligence, trend mapping, and strategic recommendations.',
    bestFor: 'When you need to walk into a meeting already knowing more than everyone else in the room.',
  },
]

export default function FirstPost() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-soft-gray hover:text-off-white transition-colors font-body tracking-wide mb-12">
          ← Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs font-body text-baby-blue border border-baby-blue/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-off-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4 border-t border-b border-white/10 py-6">
            <div>
              <p className="font-body text-sm font-semibold text-off-white">{post.author}</p>
              <p className="font-body text-xs text-soft-gray">{post.authorRole}</p>
            </div>
            <div className="text-right">
              <p className="font-body text-sm text-off-white">{post.date}</p>
              <p className="font-body text-xs text-soft-gray">{post.readTime}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="font-body text-base md:text-lg text-soft-gray leading-relaxed space-y-6">

          <p>
            Most people use AI like a search engine that occasionally writes well.
          </p>
          <p>
            They paste in a prompt, get something usable, move on. It saves time. It's useful.
            But it's not what the tool is actually capable of.
          </p>
          <p>
            The difference between an AI assistant and an AI intern is context. Not the kind you
            can fit in a single prompt — but the kind you build over time, through briefing docs,
            role definitions, guardrails, and the accumulated context of how you like to work.
          </p>
          <p>
            That's what the AI Intern Playbook is for.
          </p>

          <h2 className="font-display text-2xl font-bold text-off-white pt-4">
            What the Playbook Actually Is
          </h2>
          <p>
            The AI Intern Playbook is a complete onboarding system for your AI. Not just prompts —
            a full briefing that teaches your AI who you are, how you work, what you consider good
            output, and what it should do when things are ambiguous.
          </p>
          <p>
            You paste the briefing doc into any AI chat. The AI reads it. And then it operates
            within the context you've given it — rather than starting from scratch every single time.
          </p>
          <p>
            That's the core insight: <em className="text-off-white">AI doesn't get better on its own.
            It gets better when you get better at briefing it.</em>
          </p>

          <h2 className="font-display text-2xl font-bold text-off-white pt-4">
            The Five Core Modules
          </h2>
          <p>
            The original five modules cover the core business functions — Marketing, Sales,
            Operations, Finance, and HR. Each one is a complete training system for your AI intern
            in that specific role.
          </p>
          <p>
            Inside each module you get: a full persona briefing, 20–25 role-specific prompts,
            orientation scripts, weekly and monthly rhythms, full walkthroughs, guardrails, workflows
            with time estimates, cross-intern references, and six checklists. Three quality checks,
            three verification checklists.
          </p>

          {/* Module grid */}
          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {modules.map(mod => (
              <div key={mod.name} className={`border rounded-xl p-6 bg-white/[0.02] ${mod.color}`}>
                <p className="font-body text-xs text-baby-blue uppercase tracking-widest mb-2">{mod.role}</p>
                <h3 className="font-display text-base font-bold text-off-white mb-2">{mod.name.split('—')[0].trim()}</h3>
                <p className="font-body text-xs text-soft-gray leading-relaxed mb-3">{mod.what}</p>
                <p className="font-body text-xs text-gold/80 italic">{mod.bestFor}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-off-white pt-4">
            What Comes After the Core Five
          </h2>
          <p>
            The core five handle the foundational work. But businesses are more varied than that.
            So we've built out three additional modules for the things most AI tools completely ignore:
          </p>
          <ul className="space-y-3 pl-6 list-none">
            {[
              { name: 'Chester — Creative', desc: 'When you need visual direction, brand storytelling, and creative concepts — not another generic output.' },
              { name: 'Penny — Paralegal', desc: 'When contracts, compliance, and legal research show up and you don\'t have a lawyer on retainer.' },
              { name: 'Romy — Research', desc: 'When you need to understand a market, a competitor, or a trend before you make a decision that matters.' },
            ].map(item => (
              <li key={item.name} className="relative pl-5">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-gold rounded-full" />
                <strong className="text-off-white text-sm font-semibold">{item.name}:</strong>{' '}
                <span className="text-sm">{item.desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-2xl font-bold text-off-white pt-4">
            The Finance Intern (Advanced)
          </h2>
          <p>
            We also built a tier 2 for Finance — for people who've moved past basic bookkeeping
            and need real financial thinking. Budget forecasting, variance analysis, scenario modeling,
            investor reporting. The stuff that actually helps you run the business, not just track it.
          </p>

          <h2 className="font-display text-2xl font-bold text-off-white pt-4">
            The Bundle
          </h2>
          <p>
            All five core modules come as a bundle. New modules — Creative, Paralegal, Research,
            Advanced Finance — are sold separately. The bundle is the foundation. The add-ons are
            where you grow into the system.
          </p>
          <p>
            It's $89 for the five core modules. Each additional module is $19. The Advanced Finance
            module is $24.
          </p>

          <h2 className="font-display text-2xl font-bold text-off-white pt-4">
            Why We Built This
          </h2>
          <p>
            Because every business owner we know is drowning in work they shouldn't be doing themselves.
            And because the AI is genuinely capable of doing most of it — if you know how to
            onboard it properly.
          </p>
          <p>
            Most people haven't been taught how to work with AI. They've been taught how to use
            it as a faster version of Google. That's the gap the AI Intern Playbook is designed to close.
          </p>
          <p>
            The experiment started April 1st, 2026. We're running toward a $500K donation to
            Water for People. The playbook is part of how we get there.
          </p>

          <div className="border-t border-b border-white/10 py-10 my-8">
            <p className="font-body text-sm text-off-white font-semibold mb-3">Get the AI Intern Playbook</p>
            <p className="font-body text-xs text-soft-gray mb-5">
              $89 for all 5 core modules. Each additional module $19–$24.
            </p>
            <Link
              href="/#bundle"
              className="inline-block font-body text-xs font-semibold px-8 py-3 bg-maroon text-off-white rounded-xl hover:bg-maroon/90 transition-all tracking-wide"
            >
              See the Bundle →
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}
