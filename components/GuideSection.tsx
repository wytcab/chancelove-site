'use client'

import { Check } from 'lucide-react'

export function GuideSection() {
  const features = [
    'Define the role — identity, personality, and what the AI is actually hired to do',
    'Three-layer memory that makes it smarter over time',
    'The tools that unlock real capability (search, code, email, scheduling)',
    'Safety rails — what it can and cannot do without your approval',
    'Daily operating rhythms and how to stay in control',
    'The growth arc: from cautious experiment to essential hire',
    'Copy-paste templates to get started today',
    'Email support from Chance — ask questions, get unstuck',
  ]

  return (
    <section id="guide" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <p className="section-label mb-4">Core Playbook — 77 Pages &nbsp;·&nbsp; Updated Mar 18, 2026</p>

        {/* Title */}
        <h2 className="section-title mb-4">The AI Intern Playbook</h2>

        {/* Subtitle */}
        <p className="text-xl text-gold mb-8">From first hire to indispensable teammate.</p>

        {/* Description */}
        <p className="text-gray-300 mb-12 leading-relaxed text-lg">
          The complete system for hiring an AI that actually works. Not a chatbot. Not a prompt trick. A genuine team member with memory, tools, and a real role in your business.
        </p>

        {/* Features List */}
        <div className="space-y-4 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-maroon flex-shrink-0 mt-0.5" />
              <p className="text-gray-200 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <div>
            <p className="font-body text-gold font-semibold mb-1">The AI Intern Playbook + Launch Kit</p>
            <p className="text-4xl font-bold text-maroon">$39</p>
          </div>
          <a
            href="https://buy.stripe.com/dRm7sLbLE19obrv0bi2Nq06"
            className="font-body text-sm font-semibold px-7 py-3.5 border border-gold/60 text-gold hover:bg-gold hover:text-black transition-all duration-200 tracking-wide rounded-lg inline-block mt-6 sm:mt-0"
          >
            Get the Playbook — $39
          </a>
        </div>
      </div>
    </section>
  )
}
