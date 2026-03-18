'use client'

export function Nav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-white/5 z-50">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-baseline gap-0">
          <span className="font-display text-lg font-bold text-off-white tracking-tight">Chance</span>
          <span className="font-display text-lg font-bold text-maroon tracking-tight"> Love</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('guide')}
            className="text-sm text-soft-gray hover:text-off-white transition-colors font-body tracking-wide"
          >
            Guide
          </button>
          <button
            onClick={() => scrollToSection('modules')}
            className="text-sm text-soft-gray hover:text-off-white transition-colors font-body tracking-wide"
          >
            Modules
          </button>
          <button
            onClick={() => scrollToSection('bundle')}
            className="text-sm text-soft-gray hover:text-off-white transition-colors font-body tracking-wide"
          >
            Bundle
          </button>

          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-900/20 border border-green-600/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-400/80 font-body tracking-wider">Active</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
