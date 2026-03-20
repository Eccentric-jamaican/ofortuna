import { query } from "./_generated/server";

export const status = query({
  args: {},
  handler: () => {
    return {
      ok: true,
      service: "convex",
      timestamp: Date.now(),
    };
  },
});
