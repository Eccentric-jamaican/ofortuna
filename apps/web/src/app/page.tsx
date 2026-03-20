import { ConvexStatus } from "@/components/convex-status";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="max-w-2xl space-y-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-stone-500">
          Ofortuna Workspace
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          The monorepo scaffold is ready for the web application.
        </h1>
        <p className="text-lg leading-8 text-stone-600">
          Next.js now lives in <code>apps/web</code>, ready for Convex, WorkOS, and the matter workspace.
        </p>
        <div className="pt-4">
          <ConvexStatus />
        </div>
      </div>
    </main>
  );
}
