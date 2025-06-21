"use client"

import { useState } from "react"
import { Accessibility, X } from "lucide-react"

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const resetFontSize = () => {
    setFontSize(100)
    document.documentElement.style.fontSize = "100%"
  }

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    document.body.classList.toggle("high-contrast")
  }

  const toggleReduceMotion = () => {
    setReduceMotion(!reduceMotion)
    document.body.classList.toggle("reduce-motion")
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed bottom-6 right-6 z-50 bg-[#ff00ff] text-black p-3 rounded-full shadow-lg"
        aria-label="Accessibility options"
      >
        <Accessibility size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-[#222] max-w-md w-full p-6 rounded-sm border border-[#ff00ff] relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
              aria-label="Close accessibility menu"
            >
              <X size={20} />
            </button>

            <h2 className="font-marker text-2xl mb-6 text-[#ff00ff]">Accessibility Options</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-typewriter text-lg mb-3">Text Size</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={decreaseFontSize}
                    className="bg-[#333] hover:bg-[#444] px-4 py-2 font-bold"
                    aria-label="Decrease text size"
                  >
                    A-
                  </button>
                  <button onClick={resetFontSize} className="bg-[#333] hover:bg-[#444] px-4 py-2 font-typewriter">
                    Reset
                  </button>
                  <button
                    onClick={increaseFontSize}
                    className="bg-[#333] hover:bg-[#444] px-4 py-2 font-bold"
                    aria-label="Increase text size"
                  >
                    A+
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-typewriter text-lg mb-3">Display Options</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="high-contrast" checked={highContrast} onChange={toggleHighContrast} />
                    <label htmlFor="high-contrast" className="font-typewriter">
                      High Contrast Mode
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="reduce-motion" checked={reduceMotion} onChange={toggleReduceMotion} />
                    <label htmlFor="reduce-motion" className="font-typewriter">
                      Reduce Motion
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-typewriter text-lg mb-3">Alt Text</h3>
                <p className="font-typewriter text-sm text-white/70 mb-2">
                  All images on this site include descriptive alt text that can be read by screen readers.
                </p>
                <p className="font-typewriter text-sm text-white/70">
                  Our alt text is written as protest poetry, describing both the visual content and its political
                  context.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={toggleMenu}
                  className="w-full bg-[#ff00ff] hover:bg-[#cc00cc] text-black font-bold py-2"
                >
                  Close Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
