import { Archive, Ellipsis, FolderLock, SlidersHorizontal } from "lucide-react"

import { Button } from "@ofortuna/ui/components/ui/button"
import { Card } from "@ofortuna/ui/components/ui/card"

function VaultIllustration() {
  return (
    <div className="flex size-28 items-center justify-center text-muted-foreground">
      <FolderLock className="size-14" />
    </div>
  )
}

export default function VaultPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <Card className="min-h-[calc(100vh-2rem)] gap-0 overflow-hidden py-0">
        <div className="grid min-h-[calc(100vh-2rem)] grid-cols-1 md:grid-cols-[24rem_minmax(0,1fr)]">
          <aside className="border-b bg-card md:border-r md:border-b-0">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  Vault
                </h1>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  aria-label="More vault actions"
                >
                  <Ellipsis className="size-4" />
                </Button>
              </div>

              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Filter vault"
                >
                  <SlidersHorizontal className="size-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3 px-4 py-4">
              <div className="rounded-lg border bg-background p-3">
                <div className="flex items-start gap-3">
                  <div className="flex size-8 items-center justify-center rounded-md bg-muted text-muted-foreground">
                    <Archive className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      Corporate records
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Formation documents, governance files, and stored materials
                      will appear here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex min-h-[28rem] items-center justify-center bg-background">
            <div className="flex max-w-sm flex-col items-center text-center">
              <VaultIllustration />
              <p className="mt-5 text-sm font-medium text-foreground">
                Secure company records will live in Vault
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Use this space for charters, filings, ownership documents, and
                other core company materials.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
