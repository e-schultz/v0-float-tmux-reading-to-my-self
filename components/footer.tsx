import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/20 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-marker text-xl mb-4 text-[#ff00ff]">RADICAL EXPRESSIONS</h3>
            <p className="font-typewriter text-sm text-white/70 mb-4">
              A digital altar for queer zines, activism, and community resources.
            </p>
            <div className="flex items-center gap-2">
              <Heart className="text-[#ff5252]" size={16} />
              <span className="font-typewriter text-sm">Made with rage and love</span>
            </div>
          </div>

          <div>
            <h3 className="font-marker text-lg mb-4 text-[#00ffff]">QUICK LINKS</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#about" className="font-typewriter text-sm hover:text-[#00ffff] transition-colors">
                Manifesto
              </Link>
              <Link href="#zines" className="font-typewriter text-sm hover:text-[#00ffff] transition-colors">
                Zines
              </Link>
              <Link href="#workshops" className="font-typewriter text-sm hover:text-[#00ffff] transition-colors">
                Workshops
              </Link>
              <Link href="#downloads" className="font-typewriter text-sm hover:text-[#00ffff] transition-colors">
                Downloads
              </Link>
              <Link href="#activism" className="font-typewriter text-sm hover:text-[#00ffff] transition-colors">
                Activism
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-marker text-lg mb-4 text-[#ffff00]">COMMUNITY</h3>
            <p className="font-typewriter text-sm text-white/70 mb-4">
              Support queer artists, activists, and zine makers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-block bg-[#222] hover:bg-[#333] px-3 py-1 font-typewriter text-sm border border-white/20"
              >
                Donate
              </Link>
              <Link
                href="#"
                className="inline-block bg-[#222] hover:bg-[#333] px-3 py-1 font-typewriter text-sm border border-white/20"
              >
                Resources
              </Link>
              <Link
                href="#"
                className="inline-block bg-[#222] hover:bg-[#333] px-3 py-1 font-typewriter text-sm border border-white/20"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-typewriter text-xs text-white/50">
            © {new Date().getFullYear()} RADICAL EXPRESSIONS. No rights reserved. Copy and distribute freely.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="font-typewriter text-xs text-white/50 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="font-typewriter text-xs text-white/50 hover:text-white">
              Accessibility
            </Link>
            <Link href="#" className="font-typewriter text-xs text-white/50 hover:text-white">
              Community Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
