import { Container } from "@/components/landing/ui/container"
import { FadeIn } from "@/components/landing/ui/fade-in"
import { SectionHeading } from "@/components/landing/ui/section-heading"

const steps = [
  {
    num: "01 / Browse",
    title: "Browse Top Traders",
    body: "Filter by ROI, risk score, trade frequency, and win rate. See their full history before you commit a single dollar.",
  },
  {
    num: "02 / Configure",
    title: "Set Your Copy Settings",
    body: "Choose how much to allocate. Set a stop-loss. One click and you're live — copying their next trade automatically.",
  },
  {
    num: "03 / Earn",
    title: "Sit Back & Watch",
    body: "When they enter, you enter. When they exit, you exit. Profits hit your wallet — no babysitting required.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how" className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                Three steps.
                <br />
                That&apos;s all.
              </>
            }
            description="No tutorials, no chart reading, no anxiety. Just connect, configure, and let the cat do the work."
          />
        </FadeIn>

        <div className="mt-10 overflow-hidden rounded-2xl border border-glass bg-[rgba(255,255,255,0.02)]">
          <div className="grid gap-px bg-[rgba(255,255,255,0.08)] lg:grid-cols-3">
            {steps.map((s, idx) => (
              <FadeIn key={s.num} delayMs={80 + idx * 70} className="bg-void/0">
                <div className="h-full bg-surface px-7 py-8 transition-colors hover:bg-[rgba(255,255,255,0.03)]">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-[var(--copycatt-lime)]">
                    {s.num}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-zinc-50">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

