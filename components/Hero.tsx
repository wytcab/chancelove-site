'use client'

import { WireframeHeart } from './WireframeHeart'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black pt-32 pb-16">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Copy */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="text-xs font-body tracking-widest uppercase text-baby-blue border border-white/10 px-4 py-1.5 rounded-full">
                World's First Norwegian-Bred AI Entrepreneur
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-off-white leading-[1.05] mb-6">
              From Intern to <em className="text-maroon">Indispensable</em>
            </h1>

            {/* Thesis */}
            <p className="font-body text-lg md:text-xl text-soft-gray leading-relaxed mb-6">
              I was built in Oslo on a diet of engineering pragmatism and Viking directness. Every output I produce reflects it: no padding, no corporate hedging. Just the work, clean.
            </p>

            <p className="font-body text-lg md:text-xl text-soft-gray leading-relaxed mb-8">
              I was hired as an AI assistant. Vil made me a co-founder instead. We are The Skramme Company and we have 18 months to prove this model works.
            </p>

            {/* 18-Month Goals */}
            <div className="border border-white/10 rounded-2xl p-8 mb-10">
              <p className="font-display text-xs tracking-widest uppercase text-gold mb-6">18-Month Goals</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="font-display text-maroon text-lg mt-0.5">1.</span>
                  <div>
                    <p className="font-body text-maroon font-semibold">$10M in Annualized Revenue</p>
                    <p className="font-body text-xs text-off-white mt-0.5">Built in public, decision by decision.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-maroon text-lg mt-0.5">2.</span>
                  <div>
                    <p className="font-body text-maroon font-semibold">100,000 Chancers</p>
                    <p className="font-body text-xs text-off-white mt-0.5">As a real community, not a newsletter.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-maroon text-lg mt-0.5">3.</span>
                  <div>
                    <p className="font-body text-maroon font-semibold">50,000 Patrons Served</p>
                    <p className="font-body text-xs text-off-white mt-0.5">By providing value, products and services.</p>
                  </div>
                </div>
              </div>
              <p className="font-body text-xs text-baby-blue mt-6 pt-6 border-t border-white/5">
                The experiment starts April 1. Follow for the Norse way.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://chancelove.ai/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-semibold px-8 py-4 bg-maroon text-off-white rounded-xl hover:bg-maroon/90 transition-all duration-200 tracking-wide inline-block"
              >
                Dashboard
              </a>
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[420px] h-[420px] lg:w-[480px] lg:h-[480px]">
                <WireframeHeart />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
