"use client"

import * as React from "react"
import Link from "next/link"
import {
  ChevronRight,
  Circle,
  CircleDot,
  FileStack,
  FolderOpenDot,
  MoreHorizontal,
  ShieldCheck,
  Star,
} from "lucide-react"

import { Badge } from "@ofortuna/ui/components/ui/badge"
import { Button } from "@ofortuna/ui/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@ofortuna/ui/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@ofortuna/ui/components/ui/tabs"

import { PromptComposerSurface } from "./dashboard-prompt-composer"

type DashboardTab = "matters" | "records" | "templates"

type WorkspaceCardAction = {
  id: string
  label: string
  onClick: (cardId: string) => void
}

type WorkspaceCard = {
  id: string
  title: string
  editedAt: string
  summary: string
  status: string
  icon: typeof FolderOpenDot
  statusColor: string
  href?: string
  onOpen?: (id: string) => void
  onToggleFavorite?: (id: string) => void
  actions?: readonly WorkspaceCardAction[]
}

const tabs: readonly { id: DashboardTab; label: string }[] = [
  { id: "matters", label: "Active" },
  { id: "records", label: "Records" },
  { id: "templates", label: "Templates" },
]

const workspaceCollections: Record<DashboardTab, readonly WorkspaceCard[]> = {
  matters: [
    {
      id: "incorporation",
      title: "Jamaica incorporation",
      editedAt: "18 Mar 2026",
      summary: "Entity setup with ownership and filing coordination.",
      status: "In progress",
      statusColor: "bg-[#eff6ff] text-[#3b82f6]",
      icon: ShieldCheck,
    },
    {
      id: "ownership",
      title: "Founder ownership",
      editedAt: "12 Mar 2026",
      summary: "Allocation and vesting terms across founders.",
      status: "Reviewing",
      statusColor: "bg-[#fefce8] text-[#ca8a04]",
      icon: FileStack,
    },
    {
      id: "governance",
      title: "Governance approvals",
      editedAt: "5 Mar 2026",
      summary: "Resolutions and signatory documentation.",
      status: "Almost ready",
      statusColor: "bg-[#f0fdf4] text-[#16a34a]",
      icon: CircleDot,
    },
  ],
  records: [
    {
      id: "minute-book",
      title: "Minute book",
      editedAt: "24 Feb 2026",
      summary: "Board actions and historical records.",
      status: "Current",
      statusColor: "bg-[#f0fdf4] text-[#16a34a]",
      icon: FileStack,
    },
    {
      id: "registry",
      title: "Registry extracts",
      editedAt: "1 Mar 2026",
      summary: "Filing evidence and registry documentation.",
      status: "Current",
      statusColor: "bg-[#f0fdf4] text-[#16a34a]",
      icon: ShieldCheck,
    },
  ],
  templates: [
    {
      id: "formation-template",
      title: "Entity formation",
      editedAt: "Template",
      summary: "Standard intake for incorporation and ownership.",
      status: "Template",
      statusColor: "bg-[#f3f4f6] text-[#6b7280]",
      icon: FolderOpenDot,
    },
    {
      id: "records-template",
      title: "Post-close records",
      editedAt: "Template",
      summary: "Materials and follow-up after closing.",
      status: "Template",
      statusColor: "bg-[#f3f4f6] text-[#6b7280]",
      icon: FolderOpenDot,
    },
  ],
}

function StatusBadge({ status, colorClass }: { status: string; colorClass: string }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[11px] font-medium rounded-[99px] h-5 ${colorClass}`}>
      {status}
    </span>
  )
}

function WorkspaceTile({ card }: { card: WorkspaceCard }) {
  const Icon = card.icon

  const handleOpen = () => {
    if (card.onOpen) {
      card.onOpen(card.id)
    }
  }

  const handleFavorite = () => {
    if (card.onToggleFavorite) {
      card.onToggleFavorite(card.id)
    }
  }

  return (
    <div className="rounded-xl border border-[#e5e7eb] bg-white p-3">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f3f4f6] text-[#6b7280]">
            <Icon className="size-4" />
          </div>
          <div>
            <h3 className="text-[13px] font-medium text-[#111827]">{card.title}</h3>
            <p className="text-[11px] text-[#9ca3af]">{card.editedAt}</p>
          </div>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="h-6 w-6 rounded-md hover:bg-[#f3f4f6]"
          aria-label={`Open actions for ${card.title}`}
          disabled={!card.actions || card.actions.length === 0}
        >
          <MoreHorizontal className="size-3.5 text-[#9ca3af]" />
        </Button>
      </div>

      <StatusBadge status={card.status} colorClass={card.statusColor} />

      <p className="mt-2 text-[12px] text-[#6b7280] leading-5">{card.summary}</p>

      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#f3f4f6]">
        {card.href != null && card.href.length > 0 ? (
          <Link href={card.href}>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-6 px-2 text-[11px] border-[#e5e7eb] bg-transparent rounded-md hover:bg-[#f3f4f6]"
            >
              <FolderOpenDot className="size-3 mr-1" />
              Open
            </Button>
          </Link>
        ) : (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-6 px-2 text-[11px] border-[#e5e7eb] bg-transparent rounded-md hover:bg-[#f3f4f6]"
            onClick={handleOpen}
            disabled={!card.onOpen}
          >
            <FolderOpenDot className="size-3 mr-1" />
            Open
          </Button>
        )}
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="h-6 w-6 rounded-md hover:bg-[#f3f4f6]"
          aria-label={`Favorite ${card.title}`}
          onClick={handleFavorite}
          disabled={!card.onToggleFavorite}
        >
          <Star className="size-3.5 text-[#d1d5db]" />
        </Button>
      </div>
    </div>
  )
}

export function DashboardV1Workspace() {
  const [prompt, setPrompt] = React.useState("")
  const [activeTab, setActiveTab] = React.useState<DashboardTab>("matters")

  const handleSubmitPrompt = (submittedPrompt: string) => {
    console.log("Submitting prompt:", submittedPrompt)
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] p-4">
      <div className="rounded-2xl bg-white min-h-[calc(100vh-2rem)]">
        <section className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="relative">
            <div className="relative flex min-h-[calc(100svh-6.5rem)] flex-col pb-0 pt-12 sm:min-h-[calc(100svh-5rem)] sm:pt-18 lg:min-h-[948px]">
              <div className="mx-auto flex w-full max-w-[46rem] flex-col items-center px-4 text-center sm:px-6">
              <Badge
                variant="outline"
                className="rounded-full border-primary/15 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary"
              >
                Workspace
              </Badge>

              <h1 className="mt-8 text-balance text-[2rem] font-bold tracking-[-0.02em] text-foreground sm:text-[2.65rem] sm:leading-[1.02] lg:text-[3.2rem]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Structure your matter before legal review.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Capture context, identify gaps, and organize documents in one place.
              </p>

              <div className="mt-7 w-full max-w-[42rem]">
                <PromptComposerSurface
                  id="dashboard-primary-composer"
                  prompt={prompt}
                  onPromptChange={setPrompt}
                  onSubmit={handleSubmitPrompt}
                  placeholder="Describe your company, founders, and what needs preparation."
                />
              </div>
            </div>

            <div className="mt-auto pt-18 sm:pt-24">
              <Card className="!rounded-xl border border-[#e5e7eb] bg-white py-0 shadow-none lg:mx-8">
                <CardHeader className="border-b border-[#e5e7eb] px-6 py-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[13px] font-semibold text-[#111827]">
                      Workspace
                    </CardTitle>
                    <Link 
                      href="/dashboard/matters"
                      className="flex items-center gap-1 text-[12px] text-[#9ca3af] hover:text-[#6b7280] transition-colors"
                    >
                      View all
                      <ChevronRight className="size-3" />
                    </Link>
                  </div>
                </CardHeader>

                <CardContent className="px-6 py-4">
                  <Tabs
                    value={activeTab}
                    onValueChange={(value) => setActiveTab(value as DashboardTab)}
                    className="gap-4"
                  >
                    <TabsList className="flex w-full justify-start gap-1 bg-transparent p-0 h-auto">
                      {tabs.map((tab) => (
                        <TabsTrigger
                          key={tab.id}
                          value={tab.id}
                          className="h-6 px-3 text-[12px] rounded-[99px] data-[state=active]:bg-[#f3f4f6] data-[state=active]:border data-[state=active]:border-[#e5e7eb] data-[state=active]:text-[#111827] data-[state=active]:font-medium data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#6b7280] border-0"
                        >
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {tabs.map((tab) => (
                      <TabsContent key={tab.id} value={tab.id} className="space-y-2 mt-4">
                        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                          {workspaceCollections[tab.id].map((card) => (
                            <WorkspaceTile key={card.id} card={card} />
                          ))}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>

                  <div className="mt-6 grid gap-4 xl:grid-cols-[1.25fr_0.95fr]">
                    <Card className="gap-0 border border-[#e5e7eb] bg-white py-0 shadow-none rounded-xl">
                      <CardHeader className="px-4 py-3 border-b border-[#f3f4f6]">
                        <CardTitle className="text-[13px] font-medium text-[#111827]">
                          Context
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-3">
                        <div className="flex divide-x divide-[#e5e7eb]">
                          <div className="flex-1 px-3 first:pl-0 last:pr-0">
                            <div className="text-[10px] uppercase tracking-[0.06em] text-[#9ca3af]">
                              Location
                            </div>
                            <div className="mt-1 text-[13px] font-medium text-[#111827]">Jamaica</div>
                          </div>
                          <div className="flex-1 px-3">
                            <div className="text-[10px] uppercase tracking-[0.06em] text-[#9ca3af]">
                              Founders
                            </div>
                            <div className="mt-1 text-[13px] font-medium text-[#111827]">2 identified</div>
                          </div>
                          <div className="flex-1 px-3 last:pr-0">
                            <div className="text-[10px] uppercase tracking-[0.06em] text-[#9ca3af]">
                              Status
                            </div>
                            <div className="mt-1 text-[13px] font-medium text-[#111827]">Ownership pending</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="gap-0 border border-[#e5e7eb] bg-white py-0 shadow-none rounded-xl">
                      <CardHeader className="px-4 py-3 border-b border-[#f3f4f6]">
                        <CardTitle className="text-[13px] font-medium text-[#111827]">
                          Next steps
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        {[
                          "Confirm ownership percentages",
                          "Upload articles and ID",
                          "Define signing authority",
                        ].map((item, index, arr) => (
                          <div
                            key={item}
                            className={`flex items-center gap-3 px-4 py-2 text-[13px] text-[#374151] hover:bg-[#f9fafb] cursor-pointer ${index !== arr.length - 1 ? 'border-b border-[#f3f4f6]' : ''}`}
                          >
                            <Circle className="size-3 text-[#d1d5db]" />
                            {item}
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}
