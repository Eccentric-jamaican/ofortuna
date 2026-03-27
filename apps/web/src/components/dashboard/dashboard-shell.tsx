"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { DashboardSidebar } from "./dashboard-sidebar"

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-[#1c1c1c]">
      <DashboardSidebar
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col lg:pl-[17rem]">
        <header className="sticky top-0 z-20 flex items-center justify-between bg-[#fcfbf8]/95 px-4 py-3 backdrop-blur lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileSidebarOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#4b4a46] transition-colors hover:bg-black/5"
            aria-label="Open navigation"
          >
            <Menu className="size-5.5" />
          </button>
          <div className="text-xl font-semibold tracking-[-0.04em]">Ofortuna</div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6c37d6] text-sm font-semibold text-white">
            A
          </div>
        </header>

        <main
          className="min-w-0 flex-1 overflow-y-auto"
          data-dashboard-scroll-root=""
        >
          {children}
        </main>
      </div>
    </div>
  )
}
