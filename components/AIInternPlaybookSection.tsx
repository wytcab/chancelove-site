'use client'

export function AIInternPlaybookSection() {
  const modules = [
    { name: 'Morty', role: 'Marketing Intern', desc: 'Blog, email, social, content — at scale.' },
    { name: 'Simon', role: 'Sales Intern', desc: 'Leads, sequences, objection handling — pipeline moving.' },
    { name: 'Oscar', role: 'Ops Intern', desc: 'SOPs, scheduling, vendor comms — order from chaos.' },
    { name: 'Frank', role: 'Finance Intern', desc: 'Expenses, invoices, summaries — numbers manageable.' },
    { name: 'Hudson', role: 'HR Intern', desc: 'Job descriptions, onboarding, policies — without the HR team.' },
  ]

  return (
    <section id="ai-intern-playbook" className="py-28 px-8 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-5">Flagship Product</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white mb-6 leading-tight">
            The AI Intern Playbook
          </h2>
          <p className="font-body text-lg text-soft-gray max-w-2xl mx-auto leading-relaxed">
            A complete briefing document for your AI Intern. Each module gives your AI the context, commands, and frameworks it needs to run that function autonomously — no prompting, no hand-holding.
          </p>
        </div>

        {/* The Team Grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {modules.map((m) => (
            <div key={m.name} className="border border-white/10 rounded-xl p-6 bg-white/[0.02] text-center">
              <p className="font-body text-xs text-gold tracking-widest uppercase mb-2">{m.name}</p>
              <p className="font-display text-sm text-off-white font-bold mb-3">{m.role}</p>
              <p className="font-body text-xs text-soft-gray leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="border border-white/10 rounded-xl p-8">
            <p className="font-display text-2xl text-gold mb-4">01</p>
            <h3 className="font-display text-lg font-bold text-off-white mb-3">Drop it in</h3>
            <p className="font-body text-sm text-soft-gray leading-relaxed">Paste the briefing doc into your AI Intern. One copy-paste. The AI reads it and understands the role, the context, and what good output looks like.</p>
          </div>
          <div className="border border-white/10 rounded-xl p-8">
            <p className="font-display text-2xl text-gold mb-4">02</p>
            <h3 className="font-display text-lg font-bold text-off-white mb-3">It runs</h3>
            <p className="font-body text-sm text-soft-gray leading-relaxed">Your AI Intern knows the brief. It operates within the guardrails, applies the frameworks, and delivers outputs that actually match what you need.</p>
          </div>
          <div className="border border-white/10 rounded-xl p-8">
            <p className="font-display text-2xl text-gold mb-4">03</p>
            <h3 className="font-display text-lg font-bold text-off-white mb-3">You own the output</h3>
            <p className="font-body text-sm text-soft-gray leading-relaxed">No more vague AI outputs. No more re-prompting five times. The Intern knows the standard. It hits it or it tells you why it can't.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-display text-3xl text-off-white mb-2">Full Playbook + Launch Kit</p>
          <p className="font-body text-soft-gray mb-8">Everything you need to onboard your AI Intern and start running it by end of day.</p>
          <a
            href="https://buy.stripe.com/dRm7sLbLE19obrv0bi2Nq06"
            className="font-body text-sm font-semibold px-10 py-4 bg-maroon text-off-white rounded-xl hover:bg-maroon/90 transition-all duration-200 tracking-wide inline-block"
          >
            Get the AI Intern Playbook + Launch Kit — $39
          </a>
          <p className="font-body text-xs text-soft-gray/50 mt-4">One-time purchase. Keep it forever. Use it on any AI.</p>
        </div>

      </div>
    </section>
  )
}
