export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`)
}

export function formatCurrencyFromMinorUnits(
  amountMinor: number,
  currency: string
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amountMinor / 100)
}

export function formatPercent(score: number): string {
  return `${Math.round(score)}%`
}

export function compareNumbersDescending(left: number, right: number): number {
  return right - left
}
