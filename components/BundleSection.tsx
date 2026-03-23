'use client'

export function BundleSection() {
  return (
    <section id="bundle" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-8 text-center">The Full Team</h2>

        <div className="border-2 border-maroon rounded-2xl p-12 bg-maroon/10">
          <p className="text-gray-300 text-lg mb-12 text-center leading-relaxed">
            The AI Intern Playbook + all 5 Training Modules. Everything you need to build a complete AI workforce — at a discount. New guides sold separately.
          </p>

          {/* Pricing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <p className="text-gray-400 mb-2">Regular price</p>
              <p className="text-4xl line-through text-gray-500">$134</p>
            </div>

            <div className="hidden sm:block text-gold text-2xl font-bold">vs</div>

            <div className="text-center">
              <p className="text-gray-400 mb-2">Bundle price</p>
              <p className="text-5xl font-bold text-maroon">$89</p>
            </div>
          </div>

          {/* Savings */}
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-3 bg-gold text-black font-bold rounded-full text-lg">
              Save $45
            </span>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://buy.stripe.com/dRm00jeXQ8BQ0MR8HO2Nq05"
              className="button-maroon inline-block text-lg"
            >
              Get the Full Team — $89
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
