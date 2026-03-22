"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Compass,
  Home,
  Inbox,
  LayoutGrid,
  Search,
  Star,
  User,
  Users,
  Lock,
  ChevronDown,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@ofortuna/ui/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ofortuna/ui/components/ui/dropdown-menu"
import { Kbd } from "@ofortuna/ui/components/ui/kbd"

const mainNavItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
    trailing: <Kbd className="ml-auto">Ctrl K</Kbd>,
  },
  {
    title: "Resources",
    url: "/dashboard/resources",
    icon: Compass,
  },
]

const projectsItems = [
  {
    title: "All matters",
    url: "/dashboard/matters",
    icon: LayoutGrid,
  },
  {
    title: "Starred",
    url: "/dashboard/starred",
    icon: Star,
  },
  {
    title: "Vault",
    url: "/dashboard/vault",
    icon: Lock,
  },
  {
    title: "Created by me",
    url: "/dashboard/created",
    icon: User,
  },
  {
    title: "Shared with me",
    url: "/dashboard/shared",
    icon: Users,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()
  const [showAllProjects, setShowAllProjects] = React.useState(false)

  const visibleProjects = showAllProjects
    ? projectsItems
    : projectsItems.slice(0, 4)

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-14 bg-background">
        <div className="flex h-full items-center px-4 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center">
          <Link href="/" className="flex items-center gap-3 font-semibold group-data-[collapsible=icon]:hidden">
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg">
              <Image
                src="/ofortuna-logo.svg"
                alt="Ofortuna"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl tracking-tight text-foreground transition-all overflow-hidden whitespace-nowrap font-headline uppercase font-bold">
              Ofortuna
            </span>
          </Link>
          <div className="ml-auto group-data-[collapsible=icon]:ml-0">
            <SidebarTrigger className="group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8" />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="overflow-x-hidden">
        {/* Organization Switcher */}
        <SidebarGroup className="group-data-[collapsible=icon]:px-0">
          <SidebarMenu>
            <SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8 rounded-lg editorial-shadow"
                    tooltip={state === "collapsed" ? "Addis's Lovable" : ""}
                  >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold shrink-0">
                      A
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                      <span className="truncate font-semibold underline decoration-dotted underline-offset-4">Addis&apos;s Lovable</span>
                    </div>
                    <ChevronDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg" side="bottom" align="start" sideOffset={4}>
                  <DropdownMenuItem>Addis&apos;s Lovable</DropdownMenuItem>
                  <DropdownMenuItem>Other Organization</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Main Navigation */}
        <SidebarGroup className="group-data-[collapsible=icon]:px-0">
          <SidebarMenu>
            {mainNavItems.map((item) => (
              <SidebarMenuItem key={item.title} className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.url}
                  tooltip={item.title}
                  className="group-data-[collapsible=icon]:size-8"
                >
                  <Link href={item.url}>
                    <item.icon className="shrink-0" />
                    <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                    {item.trailing && <div className="ml-auto group-data-[collapsible=icon]:hidden">{item.trailing}</div>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Projects Section */}
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            {visibleProjects.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={pathname === item.url} tooltip={item.title}>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton
                className="text-sidebar-foreground/70"
                onClick={() => setShowAllProjects((current) => !current)}
              >
                <ChevronDown
                  className={showAllProjects ? "size-4 rotate-180 transition-transform" : "size-4 transition-transform"}
                />
                <span>{showAllProjects ? "Show less" : "Show more"}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

      </SidebarContent>

      <SidebarFooter className="p-3 group-data-[collapsible=icon]:px-0 bg-background">
        <SidebarMenu>
          <SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
            <SidebarMenuButton
              asChild
              size="lg"
              className="w-full justify-start gap-3 rounded-md hover:bg-accent/50 data-[state=open]:bg-accent/50 group-data-[collapsible=icon]:size-8 transition-colors p-2"
              tooltip={state === "collapsed" ? "Inbox" : ""}
            >
              <Link href="/dashboard/inbox">
                <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-xs editorial-shadow">
                  <Inbox className="size-4.5" />
                  <span className="absolute right-2 top-2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate font-semibold text-foreground">Inbox</span>
                  <span className="truncate text-[11px] text-muted-foreground font-medium">
                    Updates and next steps
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
