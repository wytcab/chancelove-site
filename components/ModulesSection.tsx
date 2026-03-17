'use client'

export function ModulesSection() {
  const modules = [
    {
      id: 'marketing',
      title: 'The Marketing Intern',
      description: 'Social content, campaign briefs, copywriting, brand voice — your AI handles the output, you handle the strategy.',
    },
    {
      id: 'sales',
      title: 'The Sales Intern',
      description: 'Lead research, outreach drafts, follow-up sequences, CRM notes — never let a lead go cold again.',
    },
    {
      id: 'operations',
      title: 'The Ops Intern',
      description: 'SOPs, scheduling, vendor communication, process documentation — the admin work that eats your week.',
    },
    {
      id: 'finance',
      title: 'The Finance Intern',
      description: 'Expense tracking, report summaries, invoice follow-ups, financial narrative — numbers without the headache.',
    },
    {
      id: 'hr',
      title: 'The HR Intern',
      description: 'Job descriptions, interview question banks, onboarding docs, policy drafts — people ops without a people ops team.',
    },
  ]

  return (
    <section id="modules" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <p className="section-label mb-4">Training Modules</p>

        {/* Title */}
        <h2 className="section-title mb-4">Teach Your Intern New Skills</h2>

        {/* Subtitle */}
        <p className="text-xl text-gray-300 mb-16">
          Role-specific prompt packs and system files. Drop them in and your AI Intern knows exactly what to do.
        </p>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className="border border-gray-800 rounded-xl p-8 bg-gray-900/20 hover:bg-gray-900/40 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{module.title}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">{module.description}</p>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gold">$19</span>
                <a
                  href="#checkout"
                  className="button-outline inline-block text-sm py-2 px-4"
                >
                  Get Module →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
