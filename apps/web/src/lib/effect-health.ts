import { Effect } from "effect";

export function getEffectHealthLabel() {
  return Effect.runSync(Effect.succeed("effect ready"));
}
