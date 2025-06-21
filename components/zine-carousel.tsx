"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const zines = [
  {
    id: 1,
    title: "CONSENT ZINE FOR THAT ONE EX",
    cover:
      "/placeholder.svg?height=400&width=300&query=bright neon pink zine cover with handwritten text about consent",
    description: "A personal exploration of boundaries and communication in relationships.",
    year: "2023",
  },
  {
    id: 2,
    title: "WORKSHOP HANDOUT TURNED SPELLBOOK",
    cover:
      "/placeholder.svg?height=400&width=300&query=yellow and black zine cover with occult symbols and protest imagery",
    description: "Rituals for resistance and community protection during direct actions.",
    year: "2022",
  },
  {
    id: 3,
    title: "FAGDEMIC",
    cover: "/placeholder.svg?height=400&width=300&query=black and teal zine cover with drug harm reduction information",
    description: "A harm reduction resource for queer men who party, created during COVID-19.",
    year: "2020",
  },
  {
    id: 4,
    title: "QUEERS CRASH THE BEAT",
    cover: "/placeholder.svg?height=400&width=300&query=red and black zine cover with anti-police messaging",
    description: "Documentation of queer resistance to police violence and surveillance.",
    year: "2021",
  },
  {
    id: 5,
    title: "GENDER EUPHORIA FIELD GUIDE",
    cover: "/placeholder.svg?height=400&width=300&query=purple and green zine cover with collaged gender symbols",
    description: "Personal narratives and practical advice for gender exploration.",
    year: "2023",
  },
]

export default function ZineCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % zines.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + zines.length) % zines.length)
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full"
          aria-label="Previous zine"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex overflow-hidden relative h-[500px] w-full max-w-4xl mx-auto">
          {zines.map((zine, index) => {
            // Calculate position: -1 for left, 0 for center, 1 for right
            let position = index - currentIndex

            // Handle wrap-around for the carousel
            if (position < -1) position = zines.length - 1
            if (position > 1) position = -zines.length + 1

            return (
              <div
                key={zine.id}
                className={`absolute top-0 w-full h-full transition-all duration-500 flex flex-col md:flex-row items-center gap-8 p-4
                  ${position === -1 ? "left-[-100%] opacity-0" : ""}
                  ${position === 0 ? "left-0 opacity-100" : ""}
                  ${position === 1 ? "left-[100%] opacity-0" : ""}
                `}
              >
                <div className="relative w-full max-w-[300px] h-[400px]">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] opacity-70 blur-sm"></div>
                  <div className="relative h-full w-full bg-black p-1">
                    <Image src={zine.cover || "/placeholder.svg"} alt={zine.title} fill className="object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/textures/scanlines.png')] opacity-20 mix-blend-overlay"></div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="inline-block bg-[#222] px-3 py-1 mb-2">
                    <span className="font-typewriter text-sm text-[#ff5252]">{zine.year}</span>
                  </div>
                  <h3 className="font-marker text-2xl md:text-3xl text-[#00ffff]">{zine.title}</h3>
                  <p className="font-typewriter">{zine.description}</p>
                  <div className="pt-4 flex gap-4">
                    <button className="bg-[#333] hover:bg-[#444] px-4 py-2 font-typewriter text-sm border border-white/20">
                      View Zine
                    </button>
                    <button className="bg-[#333] hover:bg-[#444] px-4 py-2 font-typewriter text-sm border border-white/20">
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full"
          aria-label="Next zine"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {zines.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-[#ff00ff]" : "bg-[#333]"}`}
            aria-label={`Go to zine ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
