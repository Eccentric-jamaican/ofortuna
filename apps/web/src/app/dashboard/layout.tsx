import { AppSidebar } from "@ofortuna/ui/components/app-sidebar"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@ofortuna/ui/components/ui/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex min-h-svh flex-1 flex-col bg-[#f9fafb]">
        <header className="sticky top-0 z-20 flex items-center justify-between bg-[#f9fafb]/95 px-4 py-3 backdrop-blur lg:hidden">
          <SidebarTrigger
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-black/5"
            aria-label="Open navigation"
          />
          <div className="text-xl font-semibold tracking-[-0.04em]">Ofortuna</div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            A
          </div>
        </header>

        <main className="min-w-0 flex-1 overflow-y-auto" data-dashboard-scroll-root="">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
