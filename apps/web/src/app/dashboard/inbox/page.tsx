import {
  Check,
  Ellipsis,
  Inbox,
  SlidersHorizontal,
  SortDesc,
} from "lucide-react"

import { Button } from "@ofortuna/ui/components/ui/button"
import { Card } from "@ofortuna/ui/components/ui/card"
import { cn } from "@ofortuna/ui/lib/utils"

type InboxItem = {
  id: string
  title: string
  preview: string
  meta: string
  status: "overdue" | "complete"
  unread?: boolean
}

const inboxItems: readonly InboxItem[] = [
  {
    id: "desktop-search-bar",
    title: "SEN-6 Desktop explore search bar ignores input",
    preview: "Overdue",
    meta: "29d",
    status: "overdue",
  },
  {
    id: "sentry-chatinput",
    title: "SEN-5 Sentry: [ChatInput] Failed to send message",
    preview: "Codex finished: Created pull request: https://github...",
    meta: "6v",
    status: "complete",
    unread: true,
  },
] as const

function InboxListItem({ item }: { item: InboxItem }) {
  return (
    <button
      type="button"
      className="flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition-colors hover:bg-accent"
    >
      <div className="relative mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border bg-card">
        <Inbox className="size-4 text-muted-foreground" />
        <span className="absolute -bottom-0.5 -right-0.5 flex size-3.5 items-center justify-center rounded-[4px] border bg-background">
          <span className="size-1.5 rounded-full bg-muted-foreground" />
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-2">
          <span
            className={cn(
              "mt-1.5 size-2 shrink-0 rounded-full",
              item.unread === true ? "bg-primary" : "bg-border"
            )}
          />

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">
              {item.title}
            </p>
            <p className="mt-0.5 truncate text-sm text-muted-foreground">
              {item.preview}
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-end gap-1 pt-0.5">
            {item.status === "overdue" ? (
              <span className="size-4 rounded-full border border-dashed border-muted-foreground/50" />
            ) : (
              <span className="flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-3" />
              </span>
            )}
            <span className="text-xs text-muted-foreground">{item.meta}</span>
          </div>
        </div>
      </div>
    </button>
  )
}

function EmptyStateIllustration() {
  return (
    <div className="flex size-28 items-center justify-center text-muted-foreground">
      <Inbox className="size-14" />
    </div>
  )
}

export default function InboxPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <Card className="min-h-[calc(100vh-2rem)] gap-0 overflow-hidden py-0">
        <div className="grid min-h-[calc(100vh-2rem)] grid-cols-1 md:grid-cols-[24rem_minmax(0,1fr)]">
          <aside className="border-b bg-card md:border-r md:border-b-0">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  Inbox
                </h1>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  aria-label="More inbox actions"
                >
                  <Ellipsis className="size-4" />
                </Button>
              </div>

              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Sort inbox"
                >
                  <SortDesc className="size-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Filter inbox"
                >
                  <SlidersHorizontal className="size-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-1 px-2 py-2">
              {inboxItems.map((item) => (
                <InboxListItem key={item.id} item={item} />
              ))}
            </div>
          </aside>

          <div className="flex min-h-[28rem] items-center justify-center bg-background">
            <div className="flex flex-col items-center text-center">
              <EmptyStateIllustration />
              <p className="mt-5 text-sm font-medium text-foreground">
                1 unread notification
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
