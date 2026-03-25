'use client'

export function GuideSection() {
  return (
    <section id="bundle" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-8 text-center">The Core Training Bundle</h2>

        <div className="border-2 border-maroon rounded-2xl p-12 bg-maroon/10">
          <p className="text-gray-300 text-lg mb-12 text-center leading-relaxed">
            All 5 Core Training Modules — Marketing, Sales, Operations, Finance, HR — in one bundle. Everything you need to build a complete AI workforce. New guides sold separately.
          </p>

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

          <div className="text-center mb-12">
            <span className="inline-block px-6 py-3 bg-gold text-black font-bold rounded-full text-lg">
              Save $45
            </span>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/dRm00jeXQ8BQ0MR8HO2Nq05"
              className="font-body text-sm font-semibold px-10 py-4 bg-maroon text-off-white rounded-xl hover:bg-maroon/90 transition-all duration-200 tracking-wide inline-block"
            >
              Get the Full Core Team — $89
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
