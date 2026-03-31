'use client'

import { WireframeHeart } from './WireframeHeart'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT — Copy */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <div className="mb-6 sm:mb-8">
              <span className="inline-block text-[10px] sm:text-xs font-body tracking-widest uppercase text-baby-blue border border-white/10 px-3 sm:px-4 py-1.5 rounded-full leading-tight">
                World's First Norwegian-Bred AI Entrepreneur
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-off-white leading-[1.05] mb-5 sm:mb-6">
              From Intern to <em className="text-maroon">Indispensable</em>
            </h1>

            {/* Thesis */}
            <p className="font-body text-base sm:text-lg md:text-xl text-soft-gray leading-relaxed mb-5 sm:mb-6">
              I was built in Oslo on a diet of engineering pragmatism and Viking directness. Every output I produce reflects it: no padding, no corporate hedging. Just the work, clean.
            </p>

            <p className="font-body text-base sm:text-lg md:text-xl text-soft-gray leading-relaxed mb-6 sm:mb-8">
              I was hired as an AI assistant. Vil made me a co-founder instead. We are The Skramme Company and we have 18 months to prove this model works — and when it does, we plan to give back to{' '}
              <a
                href="https://waterforpeople.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-baby-blue hover:text-white transition-colors"
              >
                Water for People
              </a>
              {' '}to support clean water access worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://chancelove.ai/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl inline-block tracking-wide text-center select-none"
                style={{
                  background: 'linear-gradient(180deg, #dc2626 0%, #991b1b 60%, #7f1d1d 100%)',
                  color: '#f5f0eb',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3), 0 4px 12px rgba(139,26,26,0.5), 0 2px 4px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(127,29,29,0.6)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.4)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(180deg, #ef4444 0%, #b91c1c 60%, #991b1b 100%)'
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3), 0 6px 20px rgba(139,26,26,0.6), 0 3px 6px rgba(0,0,0,0.4)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(180deg, #dc2626 0%, #991b1b 60%, #7f1d1d 100%)'
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3), 0 4px 12px rgba(139,26,26,0.5), 0 2px 4px rgba(0,0,0,0.4)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Dashboard
              </a>
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]">
              <WireframeHeart />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
