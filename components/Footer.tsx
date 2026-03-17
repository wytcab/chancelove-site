'use client'

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Logo and tagline */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Chance <span className="text-maroon">Love</span>
            </div>
            <p className="text-gray-400 italic">
              Building toward $1,000,000. Every dollar counts.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex justify-end gap-8">
            <button
              onClick={() => scrollToSection('guide')}
              className="text-gray-400 hover:text-gold transition-colors"
            >
              Guide
            </button>
            <button
              onClick={() => scrollToSection('modules')}
              className="text-gray-400 hover:text-gold transition-colors"
            >
              Modules
            </button>
            <button
              onClick={() => scrollToSection('bundle')}
              className="text-gray-400 hover:text-gold transition-colors"
            >
              Bundle
            </button>
            <a
              href="https://x.com/ChanceLoveAi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              X
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 The Skramme Company</p>
        </div>
      </div>
    </footer>
  )
}
