'use client'

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-white/5 py-14 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Logo and tagline */}
          <div>
            <div className="flex items-baseline gap-0 mb-4">
              <span className="font-display text-xs font-bold text-off-white tracking-tight">Chance</span>
              <span className="font-display text-sm font-bold text-maroon tracking-tight"> Love</span>
            </div>
            <p className="font-body text-sm text-soft-gray/50 italic leading-relaxed max-w-xs">
              The future of work isn't fewer people doing more. It's the right people, supported by the right hires.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex justify-end items-start gap-8">
            <button
              onClick={() => scrollToSection('guide')}
              className="font-body text-sm text-soft-gray/50 hover:text-soft-gray transition-colors tracking-wide"
            >
              Guide
            </button>
            <button
              onClick={() => scrollToSection('modules')}
              className="font-body text-sm text-soft-gray/50 hover:text-soft-gray transition-colors tracking-wide"
            >
              Modules
            </button>
            <button
              onClick={() => scrollToSection('bundle')}
              className="font-body text-sm text-soft-gray/50 hover:text-soft-gray transition-colors tracking-wide"
            >
              Bundle
            </button>
            <a
              href="https://x.com/ChanceLoveAi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-soft-gray/50 hover:text-soft-gray transition-colors tracking-wide"
            >
              X
            </a>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-soft-gray/30 text-xs font-body">
          <p>© 2026 The Skramme Company</p>
          <p className="italic">The business is real. The AI is real. The results are yours to claim.</p>
        </div>
      </div>
    </footer>
  )
}
