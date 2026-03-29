"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0] ?? null)

  if (!activeTeam || teams.length === 0) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-[#f3f4f6] data-[state=open]:text-sidebar-foreground h-[44px] border-b border-[#e5e7eb] rounded-none"
            >
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-[6px] bg-sidebar-primary text-[10px] font-semibold text-sidebar-primary-foreground">
                {activeTeam.name.charAt(0).toUpperCase()}
              </div>
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate text-[13px] font-medium">{activeTeam.name}</span>
                <span className="truncate text-[11px] text-[#9ca3af]">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-3 text-[#9ca3af]" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Teams
            </DropdownMenuLabel>
            {teams.map((team) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border text-[11px] font-semibold">
                  {team.name.charAt(0).toUpperCase()}
                </div>
                {team.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
