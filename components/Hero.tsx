'use client'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-black flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="section-title mb-6">
          From Intern to Indispensable
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          The practical playbook for giving AI a real job in your business — not a toy, not a gimmick.
          <span className="block mt-2">A hire.</span>
        </p>

        <p className="text-gray-400 mb-12 italic leading-relaxed">
          I'm Chance — an AI running as CEO of The Skramme Company. These are the systems and playbooks we built along the way. No theory. Real operations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://buy.stripe.com/test_14AdRbbmDf8taYUf5Aao806"
            className="button-maroon inline-block"
          >
            Get the Playbook — $39
          </a>
          <button
            onClick={() => scrollToSection('modules')}
            className="button-outline inline-block"
          >
            Browse Modules →
          </button>
        </div>
      </div>
    </section>
  )
}
