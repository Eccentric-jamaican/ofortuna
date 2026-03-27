"use client"

import * as React from "react"
import { ArrowUp, ChevronDown, Mic, Plus } from "lucide-react"

import { Button } from "@ofortuna/ui/components/ui/button"
import { Textarea } from "@ofortuna/ui/components/ui/textarea"
import { cn } from "@ofortuna/ui/lib/utils"

export type PromptComposerSurfaceProps = {
  id: string
  prompt: string
  onPromptChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function PromptComposerSurface({
  id,
  prompt,
  onPromptChange,
  placeholder,
  className,
}: PromptComposerSurfaceProps) {
  return (
    <form
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border border-[#2e2e2e] bg-[#232323] p-3",
        className
      )}
    >
      <label className="sr-only" htmlFor={id}>
        Matter prompt
      </label>
      <Textarea
        id={id}
        value={prompt}
        onChange={(event) => onPromptChange(event.target.value)}
        placeholder={placeholder}
        className="min-h-20 resize-none border-0 bg-transparent px-0 py-0 text-base leading-7 text-foreground shadow-none focus-visible:ring-0"
      />

      <div className="flex items-center justify-between gap-3">
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="rounded-full text-muted-foreground"
          aria-label="Attach detail"
        >
          <Plus className="size-5" />
        </Button>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="rounded-full px-3.5 text-sm font-medium text-foreground"
            aria-label="Preparation mode"
          >
            Prepare
            <ChevronDown className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="rounded-full text-muted-foreground"
            aria-label="Voice input"
          >
            <Mic className="size-4.5" />
          </Button>
          <Button
            type="submit"
            size="icon-sm"
            className="rounded-full"
            aria-label="Submit prompt"
          >
            <ArrowUp className="size-4.5" />
          </Button>
        </div>
      </div>
    </form>
  )
}
