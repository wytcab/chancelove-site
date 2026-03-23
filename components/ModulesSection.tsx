'use client'

export function ModulesSection() {
  const modules = [
    {
      id: 'marketing',
      title: 'The Marketing Intern',
      name: 'Morty',
      description: 'Blog strategy, email campaigns, social media calendar, content ideation, copywriting — output at scale without the overhead.',
      url: 'https://buy.stripe.com/14AbJ16rk7xMeDH3nu2Nq00',
      available: true,
    },
    {
      id: 'sales',
      title: 'The Sales Intern',
      name: 'Simon',
      description: 'Lead qualification, email sequences, objection handling, discovery call prep, follow-up strategy — the pipeline stays moving.',
      url: 'https://buy.stripe.com/8x26oH6rkbO2brv6zG2Nq01',
      available: true,
    },
    {
      id: 'operations',
      title: 'The Ops Intern',
      name: 'Oscar',
      description: 'SOPs, scheduling, vendor communication, meeting summaries, internal updates — order where there was chaos.',
      url: 'https://buy.stripe.com/fZu3cv3f89FUanrcY42Nq04',
      available: true,
    },
    {
      id: 'finance',
      title: 'The Finance Intern',
      name: 'Frank',
      description: 'Expense tracking, invoice follow-ups, financial summaries, budget drafts — the numbers, finally manageable.',
      url: 'https://buy.stripe.com/5kQ3cv5ng05kgLP1fm2Nq02',
      available: true,
    },
    {
      id: 'hr',
      title: 'The HR Intern',
      name: 'Hudson',
      description: 'Job descriptions, interview banks, onboarding docs, policy drafts — people operations without a people ops team.',
      url: 'https://buy.stripe.com/4gMaEX8zs7xMgLP6zG2Nq03',
      available: true,
    },
    {
      id: 'creative',
      title: 'The Creative Intern',
      name: 'Chester',
      description: 'Visual direction, brand storytelling, design briefs, creative concepts, campaign mood — the aesthetic layer, handled.',
      url: '#',
      available: false,
    },
    {
      id: 'web3',
      title: 'Web3 + Agents Intro',
      name: 'Playbook',
      description: 'Blockchain, AI agents, and the new economics of independence. Five practical side hustles for the next wave.',
      url: 'https://buy.stripe.com/5kQfZhcPI9FUgLPbU02Nq09',
      available: true,
    },
    {
      id: 'creator',
      title: 'Build Without a Job Title',
      name: 'Playbook',
      description: 'The creator economy playbook for people who have skills but hate self-promotion. Realistic path from zero to first dollar.',
      url: 'https://buy.stripe.com/8x214n02W7xMfHL0bi2Nq0a',
      available: true,
    },
  ]

  return (
    <section id="modules" className="py-28 px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p className="section-label mb-5">Training Modules</p>

        {/* Title */}
        <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white mb-5 leading-tight">
          Teach your intern{' '}
          <em className="text-maroon">new skills.</em>
        </h2>

        {/* Subtitle */}
        <p className="font-body text-lg text-soft-gray mb-16 max-w-2xl leading-relaxed">
          Role-specific prompt packs, pre-filled briefing docs, and copy-paste shortcuts. Drop them in and your AI Intern knows exactly what to do — no setup required.
        </p>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`border rounded-xl p-8 transition-all duration-200 flex flex-col ${
                module.available
                  ? 'border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15'
                  : 'border-white/5 bg-white/[0.01] opacity-60'
              }`}
            >
              {/* Intern name tag */}
              <p className="font-body text-xs tracking-widest uppercase text-soft-gray/50 mb-3">
                {module.available ? module.name : 'Coming Soon'}
              </p>

              <h3 className="font-display text-xl font-bold mb-4 text-off-white leading-snug">{module.title}</h3>
              <p className="font-body text-soft-gray/80 mb-8 leading-relaxed text-sm flex-1">{module.description}</p>

              {/* Price and CTA */}
              <div className="flex items-center justify-between mt-auto">
                {module.available ? (
                  <>
                    <span className="font-display text-xl font-bold text-gold">$19</span>
                    <a
                      href={module.url}
                      className="font-body text-sm text-maroon border border-maroon/40 hover:border-maroon hover:bg-maroon hover:text-white transition-all duration-200 py-2 px-4 rounded-md"
                    >
                      Get Module →
                    </a>
                  </>
                ) : (
                  <>
                    <span className="font-body text-sm text-soft-gray/40 italic">In development</span>
                    <span className="font-body text-xs text-soft-gray/40 border border-white/10 py-2 px-4 rounded-md">
                      Coming Soon
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
