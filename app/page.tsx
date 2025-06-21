"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Scissors, Sparkles, Megaphone, Download, Eye, EyeOff } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ZineCarousel from "@/components/zine-carousel"
import AccessibilityMenu from "@/components/accessibility-menu"

export default function Home() {
  const [showPrivacyMode, setShowPrivacyMode] = useState(false)
  const [taglines, setTaglines] = useState([
    "Zines for survival, sex, spells, and spite.",
    "A glitchy altar. A resource. A scrapbook. A rally cry.",
    "This is not a portfolio. It's a memory hole with glitter on it.",
    "Xerox-drag-punk meets neon sex-ed pamphlet.",
    "Digital DIY with love and rage.",
  ])
  const [currentTagline, setCurrentTagline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [taglines.length])

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <AccessibilityMenu />

      <Header />

      {/* Scrolling Tagline Banner */}
      <div className="relative w-full py-3 overflow-hidden bg-[#ff00ff] border-y-4 border-dashed border-white">
        <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-20 mix-blend-overlay"></div>
        <motion.div
          key={currentTagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="font-marker text-center text-xl md:text-3xl px-4 py-2 text-black"
        >
          {taglines[currentTagline]}
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/textures/photocopy.png')] opacity-30 mix-blend-overlay z-10"></div>
        <div className="container mx-auto px-4 py-12 md:py-24 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-[#ff5252] -rotate-2 px-4 py-2 mb-4">
                <h1 className="font-marker text-4xl md:text-6xl text-black">RADICAL EXPRESSIONS</h1>
              </div>
              <p className="font-typewriter text-lg md:text-xl leading-relaxed">
                A digital altar for queer zines, activism, and community resources. Cut-and-paste, DIY, unapologetically
                loud.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="#zines"
                  className="inline-block bg-[#00ffff] hover:bg-[#00cccc] text-black font-bold py-3 px-6 transform -rotate-1 border-2 border-black hover:rotate-0 transition-transform"
                >
                  Browse Zines
                </Link>
                <button
                  onClick={() => setShowPrivacyMode(!showPrivacyMode)}
                  className="inline-flex items-center gap-2 bg-[#222] hover:bg-[#333] py-3 px-6 border border-white/30 transform rotate-1 hover:rotate-0 transition-transform"
                >
                  {showPrivacyMode ? <EyeOff size={18} /> : <Eye size={18} />}
                  {showPrivacyMode ? "Show Content" : "Privacy Mode"}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] opacity-70 blur-sm"></div>
              <div className="relative bg-black p-1">
                <Image
                  src="/neon-zine-dream.png"
                  alt="Collage of vibrant queer zine covers"
                  width={500}
                  height={500}
                  className="w-full h-auto max-w-md mx-auto"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/textures/scanlines.png')] opacity-20 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Manifesto Section */}
      <section id="about" className="relative py-16 md:py-24 bg-black border-t-4 border-dashed border-[#ff00ff]">
        <div className="absolute inset-0 bg-[url('/textures/coffee-stain.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-[#ffff00] -rotate-2 px-4 py-2 mb-8">
              <h2 className="font-marker text-3xl text-black">MANIFESTO</h2>
            </div>
            <div className="space-y-6 font-typewriter">
              <p className="text-lg leading-relaxed">This is not a portfolio. It's a memory hole with glitter on it.</p>
              <p className="text-lg leading-relaxed">
                Queer zines exist in the margins, in the spaces between mainstream narratives. They're messy, raw,
                unfiltered expressions of identity, desire, rage, and joy.
              </p>
              <p className="text-lg leading-relaxed">
                This digital space is an extension of that tradition—a place to archive, celebrate, and distribute zines
                that document our histories, our struggles, and our triumphs.
              </p>
              <div className="py-4 px-6 bg-[#333] border-l-4 border-[#ff5252] mt-8">
                <p className="italic">
                  "Zines are not just publications; they're acts of resistance, tools for community building, and spaces
                  for voices that are often silenced or ignored."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zine Library Section */}
      <section id="zines" className="py-16 md:py-24 bg-[#111] relative">
        <div className="absolute inset-0 bg-[url('/textures/photocopy.png')] opacity-30 mix-blend-overlay"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="inline-block bg-[#00ffff] rotate-1 px-4 py-2 mb-6 md:mb-0">
              <h2 className="font-marker text-3xl text-black">ZINE LIBRARY</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[#ff00ff]"></div>
              <span className="font-typewriter text-[#ff00ff]">Flip through the archive</span>
            </div>
          </div>

          {!showPrivacyMode && <ZineCarousel />}

          {showPrivacyMode && (
            <div className="bg-[#222] p-8 rounded-sm text-center">
              <Scissors className="mx-auto mb-4 text-[#ff00ff]" size={48} />
              <h3 className="font-marker text-xl mb-4">Content Hidden</h3>
              <p className="font-typewriter">Privacy mode is active. Click "Show Content" to view zines.</p>
            </div>
          )}
        </div>
      </section>

      {/* Workshops & Talks Section */}
      <section id="workshops" className="py-16 md:py-24 bg-black relative border-t-4 border-dashed border-[#00ffff]">
        <div className="absolute inset-0 bg-[url('/textures/tape.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4">
          <div className="inline-block bg-[#ff5252] -rotate-1 px-4 py-2 mb-12">
            <h2 className="font-marker text-3xl text-black">WORKSHOPS & TALKS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Workshop Card 1 */}
            <div className="bg-[#222] p-6 relative workshop-card">
              <div className="absolute -top-4 -right-2 bg-[#ffff00] px-3 py-1 transform rotate-3 z-10">
                <span className="font-marker text-black text-sm">UPCOMING</span>
              </div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-[url('/textures/sticky-note.png')] bg-cover"></div>
              <h3 className="font-marker text-2xl mb-3 text-[#00ffff]">DIY ZINE MAKING WORKSHOP</h3>
              <p className="font-typewriter mb-4">
                Learn how to create your own zines with basic materials and radical intentions.
              </p>
              <div className="flex justify-between items-center mt-6">
                <span className="font-typewriter text-[#ff00ff]">June 15, 2025</span>
                <Link
                  href="#"
                  className="inline-block bg-[#333] hover:bg-[#444] px-4 py-2 font-typewriter border border-white/20"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* Workshop Card 2 */}
            <div className="bg-[#222] p-6 relative workshop-card">
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-[url('/textures/sticky-note.png')] bg-cover"></div>
              <h3 className="font-marker text-2xl mb-3 text-[#ff00ff]">SEX WORK ACTIVISM PANEL</h3>
              <p className="font-typewriter mb-4">
                Join our panel discussion on sex work, harm reduction, and community organizing.
              </p>
              <div className="flex justify-between items-center mt-6">
                <span className="font-typewriter text-[#00ffff]">July 8, 2025</span>
                <Link
                  href="#"
                  className="inline-block bg-[#333] hover:bg-[#444] px-4 py-2 font-typewriter border border-white/20"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads & PDFs Section */}
      <section id="downloads" className="py-16 md:py-24 bg-[#111] relative">
        <div className="absolute inset-0 bg-[url('/textures/photocopy.png')] opacity-30 mix-blend-overlay"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="inline-block bg-[#ffff00] rotate-2 px-4 py-2 mb-6 md:mb-0">
              <h2 className="font-marker text-3xl text-black">STEAL THIS ZINE</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[#ff5252]"></div>
              <span className="font-typewriter text-[#ff5252]">Downloads & Resources</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Download Card 1 */}
            <div className="bg-[#222] p-6 border-l-4 border-[#ff00ff]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-marker text-xl text-[#ff00ff]">CONSENT ZINE</h3>
                <Download size={20} className="text-[#ff00ff]" />
              </div>
              <p className="font-typewriter text-sm mb-4">
                A comprehensive guide to consent practices in various contexts.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-white/60">PDF • 2.4MB</span>
                <Link href="#" className="text-[#00ffff] font-typewriter text-sm hover:underline">
                  Download
                </Link>
              </div>
            </div>

            {/* Download Card 2 */}
            <div className="bg-[#222] p-6 border-l-4 border-[#00ffff]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-marker text-xl text-[#00ffff]">HARM REDUCTION KIT</h3>
                <Download size={20} className="text-[#00ffff]" />
              </div>
              <p className="font-typewriter text-sm mb-4">Resources for safer practices and community care.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-white/60">PDF • 3.1MB</span>
                <Link href="#" className="text-[#ff00ff] font-typewriter text-sm hover:underline">
                  Download
                </Link>
              </div>
            </div>

            {/* Download Card 3 */}
            <div className="bg-[#222] p-6 border-l-4 border-[#ffff00]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-marker text-xl text-[#ffff00]">PROTEST GUIDE</h3>
                <Download size={20} className="text-[#ffff00]" />
              </div>
              <p className="font-typewriter text-sm mb-4">Know your rights and stay safe during direct actions.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-white/60">PDF • 1.8MB</span>
                <Link href="#" className="text-[#ff5252] font-typewriter text-sm hover:underline">
                  Download
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[#222] border-2 border-dashed border-[#ff5252]">
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="text-[#ff5252]" size={24} />
              <h3 className="font-marker text-xl">PAY WHAT YOU CAN</h3>
            </div>
            <p className="font-typewriter mb-6">
              All resources are free, but if you'd like to support this work, contributions are welcome. No one turned
              away for lack of funds. Community over capitalism.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-block bg-[#ff5252] hover:bg-[#ff3333] text-black font-bold py-2 px-4 transform -rotate-1 border-2 border-black hover:rotate-0 transition-transform"
              >
                Support This Work
              </Link>
              <Link
                href="#"
                className="inline-block bg-[#333] hover:bg-[#444] py-2 px-4 font-typewriter border border-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activism Archive Section */}
      <section id="activism" className="py-16 md:py-24 bg-black relative border-t-4 border-dashed border-[#ff5252]">
        <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4">
          <div className="inline-block bg-[#ff00ff] -rotate-1 px-4 py-2 mb-12">
            <h2 className="font-marker text-3xl text-black">ACTIVISM ARCHIVE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="font-typewriter text-lg">
                Documentation of direct actions, community organizing, and resistance. Our history is our power.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="inline-block bg-[#333] px-3 py-1 text-[#ff00ff] font-typewriter text-sm">
                  #harm reduction
                </span>
                <span className="inline-block bg-[#333] px-3 py-1 text-[#00ffff] font-typewriter text-sm">
                  #anti-police
                </span>
                <span className="inline-block bg-[#333] px-3 py-1 text-[#ffff00] font-typewriter text-sm">
                  #sex work is work
                </span>
                <span className="inline-block bg-[#333] px-3 py-1 text-[#ff5252] font-typewriter text-sm">
                  #housing justice
                </span>
                <span className="inline-block bg-[#333] px-3 py-1 text-white font-typewriter text-sm">#mutual aid</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff5252] to-[#ffff00] opacity-70 blur-sm"></div>
              <div className="relative bg-black p-1">
                <Image
                  src="/vibrant-voices.png"
                  alt="Collage of protest signs and activist materials"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/textures/scanlines.png')] opacity-30 mix-blend-overlay"></div>
              </div>
            </div>
          </div>

          {!showPrivacyMode && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Activism Card 1 */}
              <div className="bg-[#222] overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/queer-rights-rally.png"
                    alt="Protest with queer activists holding signs"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="font-marker text-[#ff00ff] text-lg">2023</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-marker text-xl mb-2">TRANS RIGHTS RALLY</h3>
                  <p className="font-typewriter text-sm">
                    Documentation from the citywide protest against anti-trans legislation.
                  </p>
                </div>
              </div>

              {/* Activism Card 2 */}
              <div className="bg-[#222] overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/harm-reduction-outreach.png"
                    alt="Harm reduction outreach table with zines and supplies"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="font-marker text-[#00ffff] text-lg">2024</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-marker text-xl mb-2">HARM REDUCTION OUTREACH</h3>
                  <p className="font-typewriter text-sm">
                    Community care in action: distributing resources and building connections.
                  </p>
                </div>
              </div>

              {/* Activism Card 3 */}
              <div className="bg-[#222] overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/megaphone-rainbow.png"
                    alt="Queer art installation with political messaging"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="font-marker text-[#ffff00] text-lg">2022</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-marker text-xl mb-2">ART AS RESISTANCE</h3>
                  <p className="font-typewriter text-sm">
                    Gallery showing of political art addressing gentrification and displacement.
                  </p>
                </div>
              </div>
            </div>
          )}

          {showPrivacyMode && (
            <div className="bg-[#222] p-8 rounded-sm text-center">
              <Megaphone className="mx-auto mb-4 text-[#ff5252]" size={48} />
              <h3 className="font-marker text-xl mb-4">Content Hidden</h3>
              <p className="font-typewriter">Privacy mode is active. Click "Show Content" to view activism archive.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#111] relative border-t-4 border-dashed border-[#ffff00]">
        <div className="absolute inset-0 bg-[url('/textures/tape.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#ff5252] px-4 py-2 mb-6 transform rotate-2">
              <h2 className="font-marker text-3xl text-black">GET INVOLVED</h2>
            </div>
            <p className="font-typewriter text-lg max-w-2xl mx-auto">
              Want to contribute a zine, organize a workshop, or collaborate on an action? Let's build something
              together.
            </p>
          </div>

          <div className="bg-[#222] p-8 border-2 border-dashed border-[#00ffff]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-typewriter mb-2 text-[#00ffff]">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-black border border-[#333] p-3 font-typewriter focus:border-[#00ffff] focus:outline-none"
                    placeholder="Real or chosen name"
                  />
                </div>
                <div>
                  <label className="block font-typewriter mb-2 text-[#00ffff]">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black border border-[#333] p-3 font-typewriter focus:border-[#00ffff] focus:outline-none"
                    placeholder="For contact purposes only"
                  />
                </div>
              </div>
              <div>
                <label className="block font-typewriter mb-2 text-[#00ffff]">What do you want to collaborate on?</label>
                <textarea
                  className="w-full bg-black border border-[#333] p-3 font-typewriter h-32 focus:border-[#00ffff] focus:outline-none"
                  placeholder="Tell us about your zine, workshop idea, or other collaboration"
                ></textarea>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="consent" className="border-[#333]" />
                <label htmlFor="consent" className="font-typewriter text-sm">
                  I understand my information will be used only for direct communication and won't be shared.
                </label>
              </div>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-block bg-[#ff00ff] hover:bg-[#cc00cc] text-black font-bold py-3 px-8 transform -rotate-1 border-2 border-black hover:rotate-0 transition-transform"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
