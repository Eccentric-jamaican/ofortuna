"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import {
  BriefcaseBusiness,
  ChevronDown,
  FileStack,
  Gift,
  Home,
  Inbox,
  Search,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react"

import { cn } from "@ofortuna/ui/lib/utils"

type DashboardSidebarProps = {
  isMobileOpen: boolean
  onCloseMobile: () => void
}

type NavigationLink = {
  href: string
  label: string
  icon: LucideIcon
  shortcut?: string
}

const primaryLinks: readonly NavigationLink[] = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/dashboard/search", label: "Search", icon: Search, shortcut: "Ctrl K" },
  { href: "/dashboard/resources", label: "Resources", icon: ShieldCheck },
]

const projectLinks: readonly NavigationLink[] = [
  { href: "/dashboard", label: "Active matters", icon: BriefcaseBusiness },
  { href: "/dashboard/starred", label: "Priority matters", icon: Star },
  { href: "/dashboard/created", label: "My records", icon: FileStack },
  { href: "/dashboard/shared", label: "Shared access", icon: Users },
]

const recentProjects = [
  "Jamaica incorporation",
  "Founder ownership file",
  "Corporate records set",
] as const

function SidebarBody({
  pathname,
  onNavigate,
}: {
  pathname: string
  onNavigate?: () => void
}) {
  const navigationProps =
    onNavigate == null
      ? {}
      : {
          onClick: () => onNavigate(),
        }

  return (
    <div className="flex h-full flex-col rounded-r-[1.4rem] border-r border-border/35 bg-background px-3.5 py-3.5">
      <div className="mb-3 flex items-center justify-between px-1">
        <Link
          href="/dashboard"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-card"
          aria-label="Dashboard"
          {...navigationProps}
        >
          <Image
            src="/ofortuna-logo.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="sr-only">Dashboard</span>
        </Link>
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent lg:hidden"
          onClick={onNavigate}
          aria-label="Close navigation"
        >
          <X className="size-4.5" />
        </button>
      </div>

      <button
        type="button"
        className="mb-4 flex w-full items-center gap-3 rounded-xl border border-border/35 bg-card px-3 py-2.5 text-left shadow-sm transition-colors hover:bg-muted/35"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
          A
        </div>
        <span className="min-w-0 flex-1 truncate text-sm font-medium">
          Addis&apos;s Ofortuna
        </span>
        <ChevronDown className="size-4 text-muted-foreground" />
      </button>

      <nav className="space-y-1">
        {primaryLinks.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-muted/55",
                isActive ? "bg-accent/45 font-medium" : "font-normal"
              )}
              {...navigationProps}
            >
              <Icon className="size-4.5 text-muted-foreground" />
              <span>{item.label}</span>
              {item.shortcut != null ? (
                <span className="ml-auto rounded-md bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground">
                  {item.shortcut}
                </span>
              ) : null}
            </Link>
          )
        })}
      </nav>

      <div className="mt-7">
        <div className="mb-3 px-3 text-sm text-muted-foreground">Workspaces</div>
        <div className="space-y-1">
          {projectLinks.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-muted/55",
                  isActive ? "bg-accent/45 font-medium" : "font-normal"
                )}
                {...navigationProps}
              >
                <Icon className="size-4.5 text-muted-foreground" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="mt-7">
        <div className="mb-3 flex items-center justify-between px-3 text-sm text-muted-foreground/70">
          <span>Recent</span>
          <ChevronDown className="size-4" />
        </div>
        <div className="space-y-1">
          {recentProjects.map((item) => (
            <button
              key={item}
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-muted/55"
            >
              <div className="size-2 rounded-full bg-primary/35" />
              <span className="truncate">{item}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto space-y-4 pt-5">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-2xl border border-border/35 bg-card px-3.5 py-3 text-left shadow-sm"
        >
          <div>
            <div className="text-base font-medium text-foreground">Referral credit</div>
            <div className="mt-1 text-sm text-muted-foreground">Invite collaborators and earn account credit.</div>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border/40 bg-muted/45">
            <Gift className="size-4.5 text-muted-foreground" />
          </div>
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-between rounded-2xl border border-border/35 bg-card px-3.5 py-3 text-left shadow-sm"
        >
          <div>
            <div className="text-base font-medium text-foreground">Upgrade plan</div>
            <div className="mt-1 text-sm text-muted-foreground">Unlock more team seats and document capacity.</div>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/8">
            <ShieldCheck className="size-4.5 text-primary" />
          </div>
        </button>

        <div className="flex items-center justify-between px-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            A
          </div>
          <button
            type="button"
            className="relative flex h-8 w-8 items-center justify-center rounded-full border border-border/40 bg-card text-muted-foreground"
            aria-label="Inbox"
          >
            <Inbox className="size-4.5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function DashboardSidebar({
  isMobileOpen,
  onCloseMobile,
}: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[17rem] lg:block">
        <SidebarBody pathname={pathname} />
      </aside>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 transition-opacity lg:hidden",
          isMobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onCloseMobile}
        aria-hidden
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[17rem] max-w-[88vw] transition-transform duration-200 ease-out lg:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarBody pathname={pathname} onNavigate={onCloseMobile} />
      </aside>
    </>
  )
}
