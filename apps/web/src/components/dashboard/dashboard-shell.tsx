"use client"

import { SidebarInset, SidebarProvider } from "@ofortuna/ui/components/ui/sidebar"
import { DashboardSidebar } from "./dashboard-sidebar"

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background font-sans">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col min-w-0">
          <div className="flex-1 overflow-auto" data-dashboard-scroll-root="">
            <div className="px-4 pb-6 pt-0 md:px-0">
              {children}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
