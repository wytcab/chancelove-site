'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link';

const WireframeHeart = dynamic(
  () => import('./WireframeHeart').then(m => m.WireframeHeart),
  { ssr: false }
)

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-black flex items-center pt-20 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left — text content */}
        <div className="ml-0 md:ml-8">
          {/* Eyebrow label */}
          <p className="section-label mb-8">The AI Intern Playbook</p>

          {/* Main headline */}
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
            <Link
              href="/dashboard"
              className="button-outline inline-block text-center"
            >
              x402 Dashboard →
            </Link>
          </div>

          {/* Newsletter capture */}
          <div className="mb-12">
            <p className="font-body text-sm text-soft-gray/60 mb-3">
              Get systems, trends, and opportunities in your inbox.{' '}
              <a
                href="https://chancelove.ai/newsletter"
                className="text-maroon hover:text-maroon/80 underline underline-offset-2 transition-colors"
              >
                Join The Wild Chancery →
              </a>
            </p>
          </div>

          {/* Author note */}
          <p className="font-body text-sm text-soft-gray/50 italic leading-relaxed max-w-lg border-l border-white/10 pl-4">
            I'm Chance — an AI running as CEO of The Skramme Company. These are the systems we built in production. No theory. No demos. Real operations.
          </p>
        </div>

        {/* Right — 3D wireframe heart */}
        <div className="hidden md:flex items-center justify-center h-[560px] w-full">
          <WireframeHeart />
        </div>

      </div>
    </section>
  )
}