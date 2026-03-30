'use client'

export function ModulesSection() {
  const modules = [
    {
      id: 'marketing',
      title: 'The Marketing Intern',
      name: 'Morty',
      badge: 'CORE',
      price: '$19',
      description: 'Blog strategy, email campaigns, social media calendar, content ideation, copywriting — output at scale without the overhead.',
      url: 'https://buy.stripe.com/14AbJ16rk7xMeDH3nu2Nq00',
      available: true,
    },
    {
      id: 'sales',
      title: 'The Sales Intern',
      name: 'Simon',
      badge: 'CORE',
      price: '$19',
      description: 'Lead qualification, email sequences, objection handling, discovery call prep, follow-up strategy — the pipeline stays moving.',
      url: 'https://buy.stripe.com/8x26oH6rkbO2brv6zG2Nq01',
      available: true,
    },
    {
      id: 'operations',
      title: 'The Ops Intern',
      name: 'Oscar',
      badge: 'CORE',
      price: '$19',
      description: 'SOPs, scheduling, vendor communication, meeting summaries, internal updates — order where there was chaos.',
      url: 'https://buy.stripe.com/fZu3cv3f89FUanrcY42Nq04',
      available: true,
    },
    {
      id: 'finance',
      title: 'The Finance Intern',
      name: 'Frank',
      badge: 'CORE',
      price: '$19',
      description: 'Expense tracking, invoice follow-ups, financial summaries, budget drafts — the numbers, finally manageable.',
      url: 'https://buy.stripe.com/5kQ3cv5ng05kgLP6fm2Nq02',
      available: true,
    },
    {
      id: 'finance-advanced',
      title: 'The Finance Intern (Advanced)',
      name: 'Frank',
      nameColor: 'gold',
      badge: null,
      price: '$24',
      description: 'From record-keeping to financial strategy. Budget forecasting, variance analysis, scenario modeling, and investor reporting.',
      url: 'https://buy.stripe.com/dRm7sL5ngf0e9jne282Nq0g',
      available: true,
    },
    {
      id: 'hr',
      title: 'The HR Intern',
      name: 'Hudson',
      badge: 'CORE',
      price: '$19',
      description: 'Job descriptions, interview banks, onboarding docs, policy drafts — people operations without a people ops team.',
      url: 'https://buy.stripe.com/4gMaEX8zs7xMgLP6zG2Nq03',
      available: true,
    },
    {
      id: 'creative',
      title: 'The Creative Intern',
      name: 'Chester',
      badge: 'NEW',
      price: '$19',
      description: 'Visual direction, brand storytelling, design briefs, creative concepts, campaign mood — the aesthetic layer, handled.',
      url: 'https://buy.stripe.com/3cI14n9Dw7xMgLP1fm2Nq0f',
      available: true,
    },
    {
      id: 'paralegal',
      title: 'The Paralegal Intern',
      name: 'Penny',
      badge: 'NEW',
      price: '$19',
      description: 'Contract review, compliance checklists, legal research summaries, NDA templates, regulatory filing prep — legal precision without the billable hour.',
      url: 'https://buy.stripe.com/28E14n5ng9FU9jn1fm2Nq0d',
      available: true,
    },
    {
      id: 'research',
      title: 'The Research Intern',
      name: 'Romy',
      badge: 'NEW',
      price: '$19',
      description: 'Deep research, competitive analysis, market intelligence, trend mapping, strategic recommendations — answers before you know the questions.',
      url: 'https://buy.stripe.com/9B65kDaHA4lAgLPaPW2Nq0e',
      available: true,
    },
    {
      id: 'prediction-market',
      title: 'Prediction Market Playbook',
      name: 'Playbook',
      nameColor: 'green',
      badge: null,
      price: null,
      description: 'Event contracts, probability trading, market structure, and extracting consistent edges from prediction markets.',
      url: null,
      available: false,
    },
    {
      id: 'web3',
      title: 'Web3 + Agents Intro',
      name: 'Playbook',
      nameColor: 'green',
      badge: null,
      price: '$29',
      description: 'Blockchain, AI agents, and the new economics of independence. Five practical side hustles for the next wave.',
      url: 'https://buy.stripe.com/5kQfZhcPI9FUgLPbU02Nq09',
      available: true,
    },
    {
      id: 'creator',
      title: 'Build Without a Job Title',
      name: 'Playbook',
      nameColor: 'green',
      badge: null,
      price: '$29',
      description: 'The creator economy playbook for people who have skills but hate self-promotion. Realistic path from zero to first dollar.',
      url: 'https://buy.stripe.com/8x214n02W7xMfHL0bi2Nq0a',
      available: true,
    },
  ]

  return (
    <section id="modules" className="py-28 px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-5">Training Modules</p>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white mb-5 leading-tight">
          Teach your intern{' '}
          <em className="text-maroon">new skills.</em>
        </h2>

        <p className="font-body text-lg text-soft-gray mb-16 max-w-2xl leading-relaxed">
          Role-specific prompt packs, pre-filled briefing docs, and copy-paste shortcuts. Drop them in and your AI Intern knows exactly what to do — no setup required.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`border rounded-xl p-8 transition-all duration-200 flex flex-col ${
                module.available
                  ? 'border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15'
                  : 'border-white/5 bg-white/[0.01] opacity-40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <p className={`font-body text-xs tracking-widest uppercase ${
                  module.nameColor === 'gold'
                    ? 'text-gold'
                    : module.nameColor === 'green'
                    ? 'text-baby-green'
                    : 'text-baby-blue'
                }`}>{module.name}</p>
                {module.badge && (
                  <span className={`font-body text-xs tracking-widest uppercase px-2 py-0.5 rounded-full ${
                    module.badge === 'NEW'
                      ? 'bg-baby-blue/20 text-baby-blue border border-baby-blue/30'
                      : 'bg-maroon/20 text-maroon border border-maroon/30'
                  }`}>
                    {module.badge}
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl font-bold text-off-white mb-3 leading-tight">{module.title}</h3>
              <p className="font-body text-sm text-soft-gray leading-relaxed flex-1">{module.description}</p>

              {module.available && module.price && (
                <div className="mt-6 flex items-center justify-between gap-4">
                  <a
                    href={module.url || '#'}
                    className="font-body text-xs text-gold hover:text-gold/80 transition-colors tracking-wide border-b border-gold/20 hover:border-gold/50 pb-0.5"
                  >
                    Get the Module
                  </a>
                  <span className="font-body text-xs text-gold font-semibold">{module.price}</span>
                </div>
              )}
              {!module.available && (
                <p className="font-body text-xs mt-6 text-soft-gray/40 tracking-wide">Coming soon</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
