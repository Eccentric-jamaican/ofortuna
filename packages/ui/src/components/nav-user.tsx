"use client"

import * as React from "react"
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar"

function getInitials(name: string): string {
  const trimmed = name.trim()
  if (trimmed.length === 0) {
    return "?"
  }

  const parts = trimmed.split(/\s+/).filter((part) => part.length > 0)
  if (parts.length === 0) {
    return "?"
  }

  if (parts.length === 1) {
    const first = parts[0]
    if (first && first.length > 0) {
      return first.slice(0, 2).toUpperCase()
    }
    return "?"
  }

  const firstPart = parts[0]
  const lastPart = parts[parts.length - 1]
  const firstChar = firstPart && firstPart.length > 0 ? firstPart.charAt(0) : ""
  const lastChar = lastPart && lastPart.length > 0 ? lastPart.charAt(0) : ""
  return (firstChar + lastChar).toUpperCase()
}

export type NavUserProps = {
  user: {
    name: string
    email: string
    avatar: string
  }
  onAccount?: () => void
  onBilling?: () => void
  onNotifications?: () => void
  onSignOut?: () => void
}

export function NavUser({
  user,
  onAccount,
  onBilling,
  onNotifications,
  onSignOut,
}: NavUserProps) {
  const { isMobile } = useSidebar()
  const initials = React.useMemo(() => getInitials(user.name), [user.name])

  return (
    <SidebarMenu className="mt-auto">
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-[#f3f4f6] data-[state=open]:text-sidebar-foreground h-[44px] border-t border-[#e5e7eb] rounded-none"
            >
              <Avatar className="h-[22px] w-[22px] rounded-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-full text-[10px]">{initials}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate text-[13px] font-medium">{user.name}</span>
                <span className="truncate text-[11px] text-[#9ca3af]">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-3 text-[#9ca3af]" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {onAccount && (
                <DropdownMenuItem onClick={onAccount}>
                  <BadgeCheck />
                  Account
                </DropdownMenuItem>
              )}
              {onBilling && (
                <DropdownMenuItem onClick={onBilling}>
                  <CreditCard />
                  Billing
                </DropdownMenuItem>
              )}
              {onNotifications && (
                <DropdownMenuItem onClick={onNotifications}>
                  <Bell />
                  Notifications
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
            {(onAccount || onBilling || onNotifications) && onSignOut && (
              <DropdownMenuSeparator />
            )}
            {onSignOut && (
              <DropdownMenuItem onClick={onSignOut}>
                <LogOut />
                Log out
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
