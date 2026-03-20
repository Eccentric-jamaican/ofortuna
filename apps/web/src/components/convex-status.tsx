"use client";

import { useQuery } from "convex/react";

import { api } from "../../convex/_generated/api";

export function ConvexStatus() {
  const result = useQuery(api.health.status, {});

  return (
    <div className="rounded-2xl border border-border bg-card px-5 py-4 text-left shadow-sm">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
        Backend
      </p>
      <div className="mt-3 flex items-center gap-3">
        <span className="inline-flex size-2 rounded-full bg-emerald-600" />
        <p className="text-sm text-foreground">
          {result?.ok ? "Convex connected" : "Waiting for Convex response..."}
        </p>
      </div>
    </div>
  );
}
