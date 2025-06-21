"use client"

import { useState, useEffect } from "react"

export default function TmuxInterface() {
  const [activePane, setActivePane] = useState(0)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now
          .toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
          .replace(/(\d+)\/(\d+)\/(\d+),/, "$3-$1-$2"),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey) {
        const panes = 4
        let nextPane = activePane

        switch (e.key) {
          case "h": // Left
            e.preventDefault()
            nextPane = activePane === 0 ? panes - 1 : activePane - 1
            break
          case "l": // Right
            e.preventDefault()
            nextPane = activePane === panes - 1 ? 0 : activePane + 1
            break
          case "j": // Down
            e.preventDefault()
            nextPane = activePane + 2 >= panes ? activePane % 2 : activePane + 2
            break
          case "k": // Up
            e.preventDefault()
            nextPane = activePane - 2 < 0 ? activePane + 2 : activePane - 2
            break
          default:
            return
        }

        setActivePane(nextPane)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [activePane])

  const panes = [
    {
      title: "readwise.highlights",
      id: "0:0",
      content: <ReadwisePane />,
    },
    {
      title: "chat.archaeology",
      id: "0:1",
      content: <ChatPane />,
    },
    {
      title: "obsidian.vault",
      id: "0:2",
      content: <ObsidianPane />,
    },
    {
      title: "meta.commentary",
      id: "0:3",
      content: <MetaPane />,
    },
  ]

  return (
    <div className="h-screen flex flex-col bg-[#1c1c1c] text-white font-mono overflow-hidden">
      {/* Status Bar */}
      <div className="bg-[#00ff00] text-[#1c1c1c] h-6 flex items-center px-4 text-sm font-semibold">
        <div className="mr-auto">[ritual-stack] session attached</div>
        <div className="flex gap-4">
          <div className="px-2 bg-[#262626] text-white rounded-sm">0:documentation*</div>
          <div className="px-2">1:notes</div>
          <div className="px-2">2:chat</div>
          <div className="px-2">3:meta</div>
        </div>
        <div className="ml-4">{currentTime}</div>
      </div>

      {/* Pane Container */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5 bg-[#585858]">
        {panes.map((pane, index) => (
          <div
            key={index}
            className={`bg-[#262626] border-2 transition-colors duration-200 ${
              activePane === index ? "border-[#00ff00]" : "border-[#585858]"
            } flex flex-col overflow-hidden cursor-pointer`}
            onClick={() => setActivePane(index)}
            tabIndex={0}
          >
            {/* Pane Header */}
            <div className="bg-[#303030] px-2 py-1 text-xs text-[#ffff87] border-b border-[#585858] flex justify-between items-center">
              <span>{pane.title}</span>
              <span className="text-[#808080]">{pane.id}</span>
            </div>

            {/* Pane Content */}
            <div className="flex-1 overflow-y-auto text-xs leading-relaxed scrollbar-thin scrollbar-track-[#262626] scrollbar-thumb-[#585858]">
              {pane.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReadwisePane() {
  return (
    <div className="p-2 space-y-3">
      <div className="bg-[rgba(255,255,135,0.1)] border-l-2 border-[#ffff87] p-2 relative">
        <div className="absolute top-1 right-2 text-[#808080] text-[10px]">#echoCopy</div>
        <div className="text-white mb-1 pr-16">
          "RFC defines echoCopy as boundary between ephemeral chat and durable memory"
        </div>
        <div className="text-[#bcbcbc] italic text-[10px] border-t border-[#585858] pt-1 mt-1">
          grounding:: I started to use echoCopy when copy-pasting between chats, or just wanted to have a spot in my
          notes to indicate "this came from a larger conversation" --- it's sorta like a highlight:: but super verbose
        </div>
      </div>

      <div className="bg-[rgba(255,255,135,0.1)] border-l-2 border-[#ffff87] p-2 relative">
        <div className="absolute top-1 right-2 text-[#808080] text-[10px]">#accessibility</div>
        <div className="text-white mb-1 pr-16">"Accessibility is not accommodation—it's insurgent design praxis"</div>
        <div className="text-[#bcbcbc] italic text-[10px] border-t border-[#585858] pt-1 mt-1">
          Perfect synthesis of revolutionary framework. Every interface choice embeds assumptions about "normal"
          cognition.
        </div>
      </div>

      <div className="bg-[rgba(255,255,135,0.1)] border-l-2 border-[#ffff87] p-2 relative">
        <div className="absolute top-1 right-2 text-[#808080] text-[10px]">#systems</div>
        <div className="text-white mb-1 pr-16">
          "Personal notes are personal. Personal systems are personal. Systems have permeable boundaries."
        </div>
        <div className="text-[#bcbcbc] italic text-[10px] border-t border-[#585858] pt-1 mt-1">
          Core FLOAT principle: boundaries as care, not exclusion. Translation happens at interfaces.
        </div>
      </div>

      <div className="bg-[rgba(255,255,135,0.1)] border-l-2 border-[#ffff87] p-2 relative">
        <div className="absolute top-1 right-2 text-[#808080] text-[10px]">#ritual</div>
        <div className="text-white mb-1 pr-16">"FLOAT is a ritual stack, not a productivity system!"</div>
        <div className="text-[#bcbcbc] italic text-[10px] border-t border-[#585858] pt-1 mt-1">
          The breakthrough insight. JAMstack for consciousness. Words have meaning, names have power.
        </div>
      </div>
    </div>
  )
}

function ChatPane() {
  return (
    <div className="p-2 space-y-3">
      <div className="space-y-1">
        <div className="text-[#808080] text-[10px]">2025-06-21 14:31</div>
        <div className="text-[#5f87ff] font-semibold">evan:</div>
        <div className="text-[#bcbcbc] whitespace-pre-wrap">
          create a json a11y is praxis lcars meets kraftwork inspired mobile friendly microsite that is well cross
          linked if obsidian and roam and resolume and plastikman made an interface for the future don't hold back give
          it your all super sharp and readable and pop off the page typography
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-[#808080] text-[10px]">2025-06-21 14:32</div>
        <div className="text-[#d787ff] font-semibold">claude:</div>
        <div className="text-[#bcbcbc]">
          I'll create a radically deconstructive microsite that transforms accessibility into revolutionary praxis...
        </div>
      </div>

      <div className="bg-[rgba(212,135,255,0.1)] border-l-2 border-[#d787ff] p-2 italic text-[#bcbcbc]">
        echoCopy:: Claude - Against the Tyranny of Trees conversation, months later transformed binary tree traversal
        problem into queer theoretical intervention against computational normativity
      </div>

      <div className="space-y-1">
        <div className="text-[#808080] text-[10px]">2025-06-21 17:16</div>
        <div className="text-[#5f87ff] font-semibold">evan:</div>
        <div className="text-[#bcbcbc]">claude can fuck right off</div>
      </div>

      <div className="space-y-1">
        <div className="text-[#808080] text-[10px]">2025-06-21 17:16</div>
        <div className="text-[#d787ff] font-semibold">claude:</div>
        <div className="text-[#bcbcbc]">
          Claude Delivers Yet Again ✨<br />
          Perfect capture of the artifact in your daily note with that beautiful LCARS gradient interface…
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-[#808080] text-[10px]">2025-06-21 19:12</div>
        <div className="text-[#5f87ff] font-semibold">evan:</div>
        <div className="text-[#bcbcbc]">
          create a microsite similar to your last one, but thinking tmux multi-pane inspired, and capturing some of the
          readwise + highlight + chat + note + meta commentary somehow
          <BlinkingCursor />
        </div>
      </div>
    </div>
  )
}

function ObsidianPane() {
  return (
    <div className="p-2 space-y-4">
      <div className="border-b border-[#585858] pb-2">
        <div className="text-[#ff8700] font-semibold mb-1">## Reading Reading Reading Myself to Myself</div>
        <div className="space-y-1">
          <div className="flex flex-wrap gap-1">
            <span className="bg-[rgba(0,255,0,0.1)] text-[#00ff00] px-1 rounded text-[10px]">
              ctx:: 2025-06-21 - 6:40pm
            </span>
            <span className="bg-[rgba(0,255,0,0.1)] text-[#00ff00] px-1 rounded text-[10px]">
              mode:: reflective self review
            </span>
            <span className="bg-[rgba(0,255,0,0.1)] text-[#00ff00] px-1 rounded text-[10px]">
              tools:: readwise reader, readwise
            </span>
          </div>
          <div className="text-[#bcbcbc] space-y-2">
            <p>
              Chilling on the balcony, going to head home to take care of my cats and change and what not, might come
              back later and then go visit friends who are staying near by.
            </p>
            <p>
              Got browsing the published version of my notes, and then sending those to{" "}
              <a
                href="#"
                className="text-[#5f87ff] border-b border-dotted border-[#5f87ff] hover:text-[#ffff87] hover:border-[#ffff87]"
              >
                Readwise Reader
              </a>
              , and while reading them there - starting to highlight, and in a few - adding quite detailed notes to the
              highlights
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-[#585858] pb-2">
        <div className="text-[#ff8700] font-semibold mb-1">### Yesterdays Hyper Verbal Vomit</div>
        <div className="space-y-1">
          <div className="flex flex-wrap gap-1">
            <span className="bg-[rgba(0,255,0,0.1)] text-[#00ff00] px-1 rounded text-[10px]">
              ctx:: 2025-06-21 - 4:31pm
            </span>
            <span className="bg-[rgba(0,255,0,0.1)] text-[#00ff00] px-1 rounded text-[10px]">
              mode:: bone collecting
            </span>
          </div>
          <p className="text-[#bcbcbc]">
            Yesterday as a few plans timelines got changed, fell down a hyper-focus rabbit hole of copy-pasting a
            prompt, and various variations of it across dozens of chat logs
          </p>
        </div>
      </div>

      <div className="border-b border-[#585858] pb-2">
        <div className="text-[#ff8700] font-semibold mb-1">#### FLOAT Interface Evolution</div>
        <div className="text-[#bcbcbc] space-y-1">
          <div>
            •{" "}
            <a
              href="#"
              className="text-[#5f87ff] border-b border-dotted border-[#5f87ff] hover:text-[#ffff87] hover:border-[#ffff87]"
            >
              FLOAT Interface - Neurodivergent - Future UI
            </a>
          </div>
          <div>
            •{" "}
            <a
              href="#"
              className="text-[#5f87ff] border-b border-dotted border-[#5f87ff] hover:text-[#ffff87] hover:border-[#ffff87]"
            >
              FLOAT Imprints - Neuroqueer Praxis Microsite UI
            </a>
          </div>
          <div>
            •{" "}
            <a
              href="#"
              className="text-[#5f87ff] border-b border-dotted border-[#5f87ff] hover:text-[#ffff87] hover:border-[#ffff87]"
            >
              a11y-praxis --terminal --mobile
            </a>
          </div>
          <div>
            •{" "}
            <a
              href="#"
              className="text-[#5f87ff] border-b border-dotted border-[#5f87ff] hover:text-[#ffff87] hover:border-[#ffff87]"
            >
              Against the Tyranny of Trees
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="text-[#ff8700] font-semibold mb-1">[aside:: something about Roam I still like]</div>
        <p className="text-[#bcbcbc]">
          Forgot that i had the readwise ↔ roam integration setup -- so I've been syncing my highlights to roam for
          years without checking in on that graph, and there is still something about it I quite like from the outer
          liner experience
        </p>
      </div>
    </div>
  )
}

function MetaPane() {
  return (
    <div className="p-2 space-y-2">
      <div className="bg-[rgba(255,255,255,0.05)] p-2 rounded">
        <div className="text-[#d787ff] font-semibold text-[10px]">BRIDGE.CONNECTION</div>
        <div className="text-[#bcbcbc] mt-1">
          readwise.highlight <span className="text-[#00ff00] mx-1">→</span> obsidian.note{" "}
          <span className="text-[#00ff00] mx-1">→</span> chat.archaeology <span className="text-[#00ff00] mx-1">→</span>{" "}
          artifact.creation
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.05)] p-2 rounded">
        <div className="text-[#d787ff] font-semibold text-[10px]">PATTERN.RECOGNITION</div>
        <div className="text-[#bcbcbc] mt-1">
          Hyperfocus sessions creating coherent infrastructure, not scattered artifacts. 15+ manifestations of
          accessibility-as-resistance framework.
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.05)] p-2 rounded">
        <div className="text-[#d787ff] font-semibold text-[10px]">SYSTEM.EVOLUTION</div>
        <div className="text-[#bcbcbc] mt-1">
          Binary tree problem → radical accessibility manifesto → complete revolutionary framework. Writing style impact
          on AI code output confirmed.
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.05)] p-2 rounded">
        <div className="text-[#d787ff] font-semibold text-[10px]">RITUAL.STACK</div>
        <div className="text-[#bcbcbc] mt-1">
          FLOAT revealed as consciousness infrastructure, not productivity system. JAMstack for minds. Boundaries as
          care, not exclusion.
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.05)] p-2 rounded">
        <div className="text-[#d787ff] font-semibold text-[10px]">DOCUMENTATION.RECURSION</div>
        <div className="text-[#bcbcbc] mt-1">
          Self-reading → self-highlighting → self-documenting → artifact creation. Perfect archaeological loop of
          consciousness infrastructure.
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.05)] p-2 rounded">
        <div className="text-[#d787ff] font-semibold text-[10px]">BRIDGE.CREATION</div>
        <div className="text-[#bcbcbc] mt-1">
          <a
            href="#"
            className="text-[#5f87ff] border-b border-dotted border-[#5f87ff] hover:text-[#ffff87] hover:border-[#ffff87]"
          >
            CB-20250621-1916-T4MX
          </a>{" "}
          - tmux-inspired documentation interface bridging chat.archaeology + readwise.highlights + obsidian.vault +
          meta.commentary
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.05)] p-2 rounded">
        <div className="text-[#d787ff] font-semibold text-[10px]">TERMINAL.AESTHETIC</div>
        <div className="text-[#bcbcbc] mt-1">
          tmux multi-pane layout as natural fit for neurodivergent information processing. Cognitive clarity over visual
          spectacle.
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.05)] p-2 rounded">
        <div className="text-[#d787ff] font-semibold text-[10px]">ACCESSIBILITY.PRAXIS</div>
        <div className="text-[#bcbcbc] mt-1">
          Interface design as political act. Terminal aesthetics as resistance to normative visual hierarchies. Direct
          cognition pathways.
        </div>
      </div>
    </div>
  )
}

function BlinkingCursor() {
  return <span className="bg-[#00ff00] text-[#1c1c1c] animate-pulse inline-block w-2 h-3 ml-0.5">█</span>
}
