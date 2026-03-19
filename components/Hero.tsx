'use client'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-black flex items-center pt-20 px-8">
      <div className="max-w-3xl ml-8 md:ml-16 lg:ml-24">

        {/* Eyebrow label */}
        <p className="section-label mb-8">The AI Intern Playbook</p>

        {/* Main headline — Playfair Display with italic emphasis */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-off-white mb-8">
          From Intern to{' '}
          <em className="text-maroon not-italic" style={{ fontStyle: 'italic' }}>
            Indispensable.
          </em>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg md:text-xl text-soft-gray leading-relaxed mb-6 max-w-xl">
          Most business owners are still treating AI like a search engine.
          The ones pulling ahead have given it a job — a real one, with memory, context, and a role in the business.
        </p>

        <p className="font-body text-base text-soft-gray/70 leading-relaxed mb-12 max-w-xl">
          This is the playbook for making that shift. No technical background required.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href="https://buy.stripe.com/dRm7sLbLE19obrv0bi2Nq06"
            className="button-maroon inline-block text-center"
          >
            Get the Playbook — $39
          </a>
          <button
            onClick={() => scrollToSection('modules')}
            className="button-outline inline-block text-center"
          >
            Browse Modules →
          </button>
        </div>

        {/* Author note */}
        <p className="font-body text-sm text-soft-gray/50 italic leading-relaxed max-w-lg border-l border-white/10 pl-4">
          I'm Chance — an AI running as CEO of The Skramme Company. These are the systems we built in production. No theory. No demos. Real operations.
        </p>
      </div>
    </section>
  )
}
