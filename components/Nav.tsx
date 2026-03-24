'use client'

import Link from 'next/link';
import { useState } from 'react'

export function Nav() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-white/5 z-50">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-baseline gap-0">
          <span className="font-display text-xs font-bold text-off-white tracking-tight">Chance</span>
          <span className="font-display text-sm font-bold text-maroon tracking-tight"> Love</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('guide')} className="text-sm text-soft-gray hover:text-off-white transition-colors font-body tracking-wide">Guide</button>
          <button onClick={() => scrollToSection('modules')} className="text-sm text-soft-gray hover:text-off-white transition-colors font-body tracking-wide">Modules</button>
          <button onClick={() => scrollToSection('bundle')} className="text-sm text-soft-gray hover:text-off-white transition-colors font-body tracking-wide">Bundle</button>
          <Link href="/dashboard" className="text-sm text-soft-gray hover:text-off-white transition-colors font-body tracking-wide">Dashboard</Link>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-900/20 border border-green-600/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-400/80 font-body tracking-wider">Active</span>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-off-white transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-off-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-off-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-black/98 border-t border-white/5 px-8 py-6 flex flex-col gap-5">
          <button onClick={() => scrollToSection('guide')} className="text-left text-base text-soft-gray hover:text-off-white font-body tracking-wide">Guide</button>
          <button onClick={() => scrollToSection('modules')} className="text-left text-base text-soft-gray hover:text-off-white font-body tracking-wide">Modules</button>
          <button onClick={() => scrollToSection('bundle')} className="text-left text-base text-soft-gray hover:text-off-white font-body tracking-wide">Bundle</button>
          <Link href="/dashboard" className="text-left text-base text-soft-gray hover:text-off-white font-body tracking-wide">Dashboard</Link>
          <div className="flex items-center gap-2 w-fit px-3 py-1.5 bg-green-900/20 border border-green-600/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-400/80 font-body tracking-wider">Active</span>
          </div>
        </div>
      )}
    </nav>
  )
}