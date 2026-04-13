import { Container } from "@/components/landing/ui/container"

const items = [
  { label: "Mirrored Volume", value: "$4.2M" },
  { label: "Top Trader 90d", value: "+312%" },
  { label: "Waitlist", value: "2,847" },
  { label: "Avg Copy Return", value: "+68%" },
  { label: "Top 10 Liquidations", value: "Zero" },
  { label: "Traders Verified", value: "On-chain" },
]

function TickerRow() {
  return (
    <div className="flex min-w-max items-center">
      {items.map((it) => (
        <div
          key={it.label}
          className="flex items-center gap-2 border-r border-glass px-8 py-3 font-mono text-[12px] text-zinc-400"
        >
          <span className="size-1 rounded-full bg-[var(--copycatt-lime)]" />
          <span>{it.label}</span>
          <span className="font-semibold text-[var(--copycatt-lime)]">{it.value}</span>
        </div>
      ))}
    </div>
  )
}

export function SocialProofTicker() {
  return (
    <section aria-label="Social proof metrics" className="border-y border-glass bg-surface">
      <Container className="relative overflow-hidden">
        <div className="flex w-full items-center overflow-hidden">
          <div className="flex animate-[copycatt-ticker_30s_linear_infinite]">
            <TickerRow />
            <TickerRow />
          </div>
        </div>
      </Container>
    </section>
  )
}

