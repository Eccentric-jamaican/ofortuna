"use client"

import * as React from "react"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  ArrowUp,
  BriefcaseBusiness,
  CircleDot,
  Link2,
  MoreHorizontal,
  Mic,
  Paperclip,
  ShieldCheck,
  Workflow,
} from "lucide-react"

import { Button } from "@ofortuna/ui/components/ui/button"
import { Textarea } from "@ofortuna/ui/components/ui/textarea"
import { cn } from "@ofortuna/ui/lib/utils"

type MatterStartingPoint = {
  title: string
  updatedAt: string
  status: string
  icon: LucideIcon
  previewClassName: string
  showActions?: boolean
}

type PromptComposerSurfaceProps = {
  id: string
  prompt: string
  onPromptChange: (value: string) => void
  compact?: boolean
}

const matterStartingPoints: readonly MatterStartingPoint[] = [
  {
    title: "Formation strategy",
    updatedAt: "Edited 3 Jan 2026",
    status: "Active",
    icon: BriefcaseBusiness,
    previewClassName:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,239,233,0.96))] before:absolute before:inset-x-10 before:top-8 before:h-px before:bg-border/30 after:absolute after:left-10 after:top-10 after:h-28 after:w-40 after:rounded-[1rem] after:border after:border-border/20 after:bg-white/75",
  },
  {
    title: "Records and governance",
    updatedAt: "Edited 15 Jul 2025",
    status: "Prepared",
    icon: Workflow,
    showActions: true,
    previewClassName:
      "bg-[radial-gradient(circle_at_top_right,rgba(145,16,20,0.18),transparent_28%),linear-gradient(145deg,#1f1814,#32241f_45%,#6a3425)] before:absolute before:-left-8 before:top-4 before:h-40 before:w-72 before:rotate-6 before:rounded-full before:border before:border-white/10 before:opacity-60 before:blur-[1px] after:absolute after:-right-10 after:bottom-2 after:h-32 after:w-56 after:-rotate-6 after:rounded-full after:border after:border-white/10 after:opacity-40",
  },
  {
    title: "Readiness review",
    updatedAt: "Edited 21 Jul 2025",
    status: "Review",
    icon: ShieldCheck,
    previewClassName:
      "bg-[linear-gradient(180deg,#2d2437,#2a2233)] before:absolute inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] before:bg-[size:3.8rem_3.8rem] after:absolute after:inset-x-0 after:top-0 after:h-full after:bg-[radial-gradient(circle_at_center,rgba(145,16,20,0.16),transparent_55%)]",
  },
]

const promptPlaceholder =
  "Describe what you need to set up, organize, or clarify."

function PromptComposerSurface({
  id,
  prompt,
  onPromptChange,
  compact = false,
}: PromptComposerSurfaceProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border border-border/20 bg-[rgba(252,248,242,0.92)] shadow-[0_10px_30px_rgba(45,52,53,0.06)]",
        compact ? "rounded-full px-4 py-3" : "rounded-[0.9rem]"
      )}
    >
      <div className={cn(compact ? "pr-1" : "px-5 pt-5 pb-4 sm:px-6 sm:pt-6")}>
        <label className="sr-only" htmlFor={id}>
          Describe your matter
        </label>
        <Textarea
          id={id}
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
          placeholder={promptPlaceholder}
          className={cn(
            "resize-none border-0 bg-transparent px-0 py-0 text-foreground shadow-none placeholder:text-muted-foreground/80 focus-visible:ring-0",
            compact
              ? "min-h-0 text-sm leading-6"
              : "min-h-16 text-base leading-7 sm:min-h-14"
          )}
        />
      </div>

      <div
        className={cn(
          "flex items-center justify-between",
          compact ? "pt-2" : "px-4 pb-3 sm:px-5 sm:pb-3"
        )}
      >
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="rounded-full text-muted-foreground hover:bg-primary/6 hover:text-foreground"
          aria-label="Attach context"
        >
          <Paperclip className="size-4.5" />
        </Button>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="rounded-full text-muted-foreground hover:bg-primary/6 hover:text-foreground"
            aria-label="Use voice input"
          >
            <Mic className="size-4.5" />
          </Button>
          <Button
            type="button"
            size="icon-sm"
            className="rounded-full bg-foreground text-background hover:bg-foreground/92"
            aria-label="Continue"
          >
            <ArrowUp className="size-4.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export function DashboardPromptComposer() {
  const [prompt, setPrompt] = React.useState("")
  const [isMainComposerVisible, setIsMainComposerVisible] = React.useState(true)
  const [isFloatingExpanded, setIsFloatingExpanded] = React.useState(false)
  const [isFloatingHovered, setIsFloatingHovered] = React.useState(false)
  const [isFloatingFocused, setIsFloatingFocused] = React.useState(false)

  const mainComposerRef = React.useRef<HTMLDivElement | null>(null)
  const floatingComposerRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const mainComposer = mainComposerRef.current
    const scrollRoot = document.querySelector<HTMLElement>("[data-dashboard-scroll-root]")

    if (!mainComposer) {
      return
    }

    const observerRoot =
      scrollRoot != null && scrollRoot.scrollHeight > scrollRoot.clientHeight + 1
        ? scrollRoot
        : null

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMainComposerVisible(entry?.isIntersecting ?? false)
      },
      {
        root: observerRoot,
        threshold: 0.35,
      }
    )

    observer.observe(mainComposer)

    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    if (isMainComposerVisible) {
      setIsFloatingExpanded(false)
      setIsFloatingHovered(false)
      setIsFloatingFocused(false)
    }
  }, [isMainComposerVisible])

  const isFloatingVisible = !isMainComposerVisible

  const handleFloatingOpen = React.useCallback(() => {
    setIsFloatingHovered(true)
    setIsFloatingExpanded(true)
  }, [])

  const handleFloatingClose = React.useCallback(() => {
    setIsFloatingHovered(false)
    if (!isFloatingFocused) {
      setIsFloatingExpanded(false)
    }
  }, [isFloatingFocused])

  const handleFloatingBlur = React.useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const nextFocusedNode = event.relatedTarget

      if (
        nextFocusedNode instanceof Node &&
        floatingComposerRef.current?.contains(nextFocusedNode) === true
      ) {
        return
      }

      setIsFloatingFocused(false)

      if (!isFloatingHovered) {
        setIsFloatingExpanded(false)
      }
    },
    [isFloatingHovered]
  )

  const handleFloatingKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        setIsFloatingExpanded(false)
        setIsFloatingHovered(false)
        setIsFloatingFocused(false)
      }
    },
    []
  )

  return (
    <section className="relative isolate overflow-hidden rounded-[0.9rem] bg-[linear-gradient(180deg,rgba(254,252,248,0.98),rgba(250,245,240,0.96))] sm:mx-[5px] sm:mt-[5px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-x-[16%] top-0 h-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(145,16,20,0.08),rgba(145,16,20,0))] blur-3xl" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(215,228,236,0.55),rgba(215,228,236,0))] blur-3xl" />
        <div className="absolute -right-16 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(84,97,104,0.12),rgba(84,97,104,0))] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,251,247,0.9))]" />
      </div>

      <div className="relative">
        <div className="mx-auto flex min-h-[30rem] w-full max-w-6xl flex-col items-center gap-6 px-4 pt-10 pb-14 text-center sm:px-6 sm:pt-12 sm:pb-16">
          <div className="max-w-3xl space-y-2">
            <h1 className="text-balance font-headline text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[3.35rem]">
              What are you starting?
            </h1>
          </div>
          <div ref={mainComposerRef} className="w-full max-w-[760px]">
            <PromptComposerSurface
              id="dashboard-prompt-composer"
              prompt={prompt}
              onPromptChange={setPrompt}
            />
          </div>
        </div>

        <div className="mx-4 mb-4 rounded-[1.7rem] bg-[rgba(255,248,242,0.78)] p-4 backdrop-blur-sm sm:mx-6 sm:mb-6 sm:p-5 lg:mx-8 lg:mb-8 lg:p-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex w-fit items-center gap-1 rounded-full bg-white/72 p-1 text-sm shadow-[inset_0_0_0_1px_rgba(173,179,180,0.14)]">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-full border-border/20 bg-background px-4 shadow-none"
              >
                My matters
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="rounded-full px-4 text-muted-foreground hover:bg-transparent hover:text-foreground"
              >
                Recently viewed
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="rounded-full px-4 text-muted-foreground hover:bg-transparent hover:text-foreground"
              >
                Templates
              </Button>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-fit rounded-full px-0 text-foreground hover:bg-transparent hover:text-primary"
            >
              Browse all
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="grid gap-x-6 gap-y-8 md:grid-cols-3">
            {matterStartingPoints.map(({ title, updatedAt, status, icon: Icon, previewClassName, showActions }) => (
              <article key={title} className="group">
                <div
                  className={cn(
                    "relative aspect-[1.28/0.82] overflow-hidden rounded-[1.2rem] border border-border/15",
                    previewClassName
                  )}
                >
                  <span className="absolute left-4 bottom-4 rounded-[0.65rem] bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {status}
                  </span>
                  {showActions === true ? (
                    <div className="absolute right-4 top-4 flex items-center gap-1.5">
                      <button
                        type="button"
                        className="flex size-9 items-center justify-center rounded-[0.8rem] bg-white/86 text-foreground shadow-sm transition-colors hover:bg-white"
                        aria-label="Open external link"
                      >
                        <Link2 className="size-4" />
                      </button>
                      <button
                        type="button"
                        className="flex size-9 items-center justify-center rounded-[0.8rem] bg-white/86 text-foreground shadow-sm transition-colors hover:bg-white"
                        aria-label="More options"
                      >
                        <MoreHorizontal className="size-4" />
                      </button>
                    </div>
                  ) : null}
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[rgba(45,52,53,0.06)] text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0 space-y-1">
                    <h2 className="truncate text-[1.05rem] font-semibold tracking-[-0.02em] text-foreground">
                      {title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CircleDot className="size-3.5" />
                      <span>{updatedAt}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="pointer-events-none sticky bottom-14 z-20 hidden justify-center px-4 pb-2 md:flex">
          {isFloatingVisible ? (
            <div
              ref={floatingComposerRef}
              className="pointer-events-auto w-full max-w-[34rem]"
              onMouseEnter={handleFloatingOpen}
              onMouseLeave={handleFloatingClose}
              onFocusCapture={() => {
                setIsFloatingFocused(true)
                setIsFloatingExpanded(true)
              }}
              onBlurCapture={handleFloatingBlur}
              onKeyDown={handleFloatingKeyDown}
            >
              {isFloatingExpanded ? (
                <PromptComposerSurface
                  id="dashboard-floating-prompt-composer"
                  prompt={prompt}
                  onPromptChange={setPrompt}
                  compact
                />
              ) : (
                <button
                  type="button"
                  className="mx-auto flex items-center gap-2 rounded-full border border-border/20 bg-[rgba(252,248,242,0.95)] px-4 py-2 text-sm font-medium text-foreground shadow-[0_10px_30px_rgba(45,52,53,0.08)] transition-colors hover:bg-white"
                  aria-label="Open floating prompt composer"
                >
                  <Paperclip className="size-4" />
                  Continue drafting
                </button>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
