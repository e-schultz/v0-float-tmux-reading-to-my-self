"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Scissors } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 border-b border-white/20">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <Scissors className="text-[#ff00ff] rotate-45" size={28} />
              <div className="absolute -inset-1 bg-[#ff00ff] opacity-30 blur-sm rounded-full"></div>
            </div>
            <span className="font-marker text-2xl md:text-3xl">RADICAL EXPRESSIONS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="font-typewriter hover:text-[#ff00ff] transition-colors">
              Manifesto
            </Link>
            <Link href="#zines" className="font-typewriter hover:text-[#00ffff] transition-colors">
              Zines
            </Link>
            <Link href="#workshops" className="font-typewriter hover:text-[#ffff00] transition-colors">
              Workshops
            </Link>
            <Link href="#downloads" className="font-typewriter hover:text-[#ff5252] transition-colors">
              Downloads
            </Link>
            <Link href="#activism" className="font-typewriter hover:text-[#ff00ff] transition-colors">
              Activism
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden">
          <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-20 mix-blend-overlay"></div>
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 items-center justify-center flex-1">
              <Link href="#about" className="font-marker text-2xl text-[#ff00ff]" onClick={() => setIsMenuOpen(false)}>
                Manifesto
              </Link>
              <Link href="#zines" className="font-marker text-2xl text-[#00ffff]" onClick={() => setIsMenuOpen(false)}>
                Zines
              </Link>
              <Link
                href="#workshops"
                className="font-marker text-2xl text-[#ffff00]"
                onClick={() => setIsMenuOpen(false)}
              >
                Workshops
              </Link>
              <Link
                href="#downloads"
                className="font-marker text-2xl text-[#ff5252]"
                onClick={() => setIsMenuOpen(false)}
              >
                Downloads
              </Link>
              <Link
                href="#activism"
                className="font-marker text-2xl text-[#ff00ff]"
                onClick={() => setIsMenuOpen(false)}
              >
                Activism
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
