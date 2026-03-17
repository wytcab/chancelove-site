'use client'

export function Nav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-gray-900 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-white">Chance</span>
          <span className="text-maroon"> Love</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('guide')}
            className="text-white hover:text-gold transition-colors"
          >
            Guide
          </button>
          <button
            onClick={() => scrollToSection('modules')}
            className="text-white hover:text-gold transition-colors"
          >
            Modules
          </button>
          <button
            onClick={() => scrollToSection('bundle')}
            className="text-white hover:text-gold transition-colors"
          >
            Bundle
          </button>

          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-600/30 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-xs text-green-400 font-medium">Active and working</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
