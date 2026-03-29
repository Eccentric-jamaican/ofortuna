"use client"

import * as React from "react"
import type { LucideIcon } from "lucide-react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "./ui/sidebar"

export type AppSidebarUser = {
  name: string
  email: string
  avatar: string
}

export type AppSidebarTeam = {
  name: string
  plan: string
}

export type AppSidebarNavItem = {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}

export type AppSidebarProject = {
  name: string
  url: string
  icon?: string
}

export type AppSidebarProps = {
  user: AppSidebarUser
  teams: AppSidebarTeam[]
  navMain: AppSidebarNavItem[]
  projects: AppSidebarProject[]
} & React.ComponentProps<typeof Sidebar>

export function AppSidebar({
  user,
  teams,
  navMain,
  projects,
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row items-center justify-between gap-2">
        <TeamSwitcher teams={teams} />
        <SidebarTrigger className="shrink-0" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavProjects projects={projects} />
      </SidebarContent>
      <SidebarFooter className="mt-auto">
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

// Sample data fixture for Storybook/testing
export const appSidebarSampleData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Starred", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Models",
      url: "#",
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
    },
  ],
  projects: [
    { name: "Design Engineering", url: "#" },
    { name: "Sales & Marketing", url: "#" },
    { name: "Travel", url: "#" },
  ],
}
