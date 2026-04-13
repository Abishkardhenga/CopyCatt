import { Container } from "@/components/landing/ui/container"
import { FadeIn } from "@/components/landing/ui/fade-in"
import { SectionHeading } from "@/components/landing/ui/section-heading"

const rows = [
  { label: "Trade execution", left: "Milliseconds", right: "Manual — often late" },
  { label: "PnL verification", left: "On-chain, audited", right: "Twitter screenshots" },
  { label: "Learning curve", left: "None", right: "6 months of chart study" },
  { label: "Risk control", left: "Automated stop-loss", right: "Margin call at 3am" },
  { label: "Custody", left: "Non-custodial", right: "Deposit required" },
]

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Comparison"
            title={
              <>
                The old way
                <br />
                is broken.
              </>
            }
            description="CopyCatt is built for speed, proof, and control — without the stress loop."
          />
        </FadeIn>

        <div className="mt-12 overflow-hidden rounded-2xl border border-glass bg-[rgba(255,255,255,0.02)]">
          <div className="grid grid-cols-[1fr_64px_1fr] bg-[rgba(255,255,255,0.08)]">
            <div className="bg-[rgba(57,255,20,0.06)] px-6 py-4 text-center text-sm font-semibold text-[var(--copycatt-lime)]">
              CopyCatt
            </div>
            <div className="bg-surface" />
            <div className="bg-[rgba(255,255,255,0.03)] px-6 py-4 text-center text-sm font-semibold text-zinc-400">
              Old way
            </div>
          </div>

          <div className="grid grid-cols-[1fr_64px_1fr]">
            {rows.map((r, idx) => (
              <FadeIn key={r.label} delayMs={80 + idx * 55} className="contents">
                <div className="flex items-center gap-2 border-t border-glass bg-surface px-6 py-4 text-sm text-[var(--copycatt-lime)]">
                  <span className="font-semibold">✓</span>
                  <span>{r.left}</span>
                </div>
                <div className="flex items-center justify-center border-t border-glass bg-surface px-2 font-mono text-[11px] text-zinc-500">
                  vs
                </div>
                <div className="flex items-center gap-2 border-t border-glass bg-surface px-6 py-4 text-sm text-zinc-400">
                  <span className="font-semibold text-red-400">✗</span>
                  <span>{r.right}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

