"use client"

import { useState } from "react"
import TmuxInterface from "./tmux-interface"

export default function ResponsiveWrapper() {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className="w-full h-screen">
      <div className="block lg:hidden">
        <MobileTmuxInterface />
      </div>
      <div className="hidden lg:block">
        <TmuxInterface />
      </div>
    </div>
  )
}

function MobileTmuxInterface() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { name: "readwise", icon: "📖" },
    { name: "chat", icon: "💬" },
    { name: "notes", icon: "📝" },
    { name: "meta", icon: "🔗" },
  ]

  return (
    <div className="h-screen flex flex-col bg-[#1c1c1c] text-white font-mono">
      {/* Mobile Status Bar */}
      <div className="bg-[#00ff00] text-[#1c1c1c] h-8 flex items-center px-4 text-sm font-semibold">
        <div className="mr-auto">[ritual-stack]</div>
        <div className="text-xs">mobile</div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-[#262626] flex border-b border-[#585858]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-2 px-1 text-xs border-r border-[#585858] last:border-r-0 ${
              activeTab === index ? "bg-[#00ff00] text-[#1c1c1c]" : "text-[#bcbcbc]"
            }`}
          >
            <div className="text-center">
              <div className="text-sm">{tab.icon}</div>
              <div className="text-[10px]">{tab.name}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full bg-[#262626] border-2 border-[#00ff00]">
          <div className="bg-[#303030] px-3 py-2 text-xs text-[#ffff87] border-b border-[#585858]">
            <span>{tabs[activeTab].name}.mobile</span>
          </div>
          <div className="h-full overflow-y-auto p-3 text-xs">
            {activeTab === 0 && <MobileReadwisePane />}
            {activeTab === 1 && <MobileChatPane />}
            {activeTab === 2 && <MobileNotesPane />}
            {activeTab === 3 && <MobileMetaPane />}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileReadwisePane() {
  return (
    <div className="space-y-4">
      <div className="bg-[rgba(255,255,135,0.1)] border-l-2 border-[#ffff87] p-3 rounded-r">
        <div className="text-[#808080] text-[10px] mb-2">#echoCopy</div>
        <div className="text-white mb-2 text-sm leading-relaxed">
          "RFC defines echoCopy as boundary between ephemeral chat and durable memory"
        </div>
        <div className="text-[#bcbcbc] italic text-xs border-t border-[#585858] pt-2 mt-2">
          grounding:: I started to use echoCopy when copy-pasting between chats...
        </div>
      </div>

      <div className="bg-[rgba(255,255,135,0.1)] border-l-2 border-[#ffff87] p-3 rounded-r">
        <div className="text-[#808080] text-[10px] mb-2">#accessibility</div>
        <div className="text-white mb-2 text-sm leading-relaxed">
          "Accessibility is not accommodation—it's insurgent design praxis"
        </div>
        <div className="text-[#bcbcbc] italic text-xs border-t border-[#585858] pt-2 mt-2">
          Perfect synthesis of revolutionary framework...
        </div>
      </div>
    </div>
  )
}

function MobileChatPane() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="text-[#808080] text-[10px]">2025-06-21 19:12</div>
        <div className="text-[#5f87ff] font-semibold text-sm">evan:</div>
        <div className="text-[#bcbcbc] text-sm leading-relaxed">
          create a microsite similar to your last one, but thinking tmux multi-pane inspired...
          <span className="bg-[#00ff00] text-[#1c1c1c] animate-pulse inline-block w-2 h-3 ml-1">█</span>
        </div>
      </div>

      <div className="bg-[rgba(212,135,255,0.1)] border-l-2 border-[#d787ff] p-3 italic text-[#bcbcbc] text-sm rounded-r">
        echoCopy:: Claude - Against the Tyranny of Trees conversation...
      </div>
    </div>
  )
}

function MobileNotesPane() {
  return (
    <div className="space-y-4">
      <div>
        <div className="text-[#ff8700] font-semibold mb-2 text-sm">## Reading Reading Reading Myself</div>
        <div className="flex flex-wrap gap-1 mb-3">
          <span className="bg-[rgba(0,255,0,0.1)] text-[#00ff00] px-2 py-1 rounded text-[10px]">ctx:: reflective</span>
          <span className="bg-[rgba(0,255,0,0.1)] text-[#00ff00] px-2 py-1 rounded text-[10px]">readwise</span>
        </div>
        <p className="text-[#bcbcbc] text-sm leading-relaxed">
          Chilling on the balcony, browsing published notes and highlighting in Readwise Reader...
        </p>
      </div>
    </div>
  )
}

function MobileMetaPane() {
  return (
    <div className="space-y-3">
      <div className="bg-[rgba(255,255,255,0.05)] p-3 rounded">
        <div className="text-[#d787ff] font-semibold text-[10px] mb-1">BRIDGE.CONNECTION</div>
        <div className="text-[#bcbcbc] text-sm">readwise → obsidian → chat → artifact</div>
      </div>

      <div className="bg-[rgba(255,255,255,0.05)] p-3 rounded">
        <div className="text-[#d787ff] font-semibold text-[10px] mb-1">RITUAL.STACK</div>
        <div className="text-[#bcbcbc] text-sm">FLOAT as consciousness infrastructure, not productivity system.</div>
      </div>
    </div>
  )
}
