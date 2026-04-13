import { Shield, Zap, KeyRound, BadgeCheck } from "lucide-react"

import { Container } from "@/components/landing/ui/container"
import { FadeIn } from "@/components/landing/ui/fade-in"
import { SectionHeading } from "@/components/landing/ui/section-heading"

const features = [
  {
    title: "Real-time mirroring",
    body: "Trades execute within milliseconds of the master trader — not delayed signals.",
    Icon: Zap,
  },
  {
    title: "Verified trader leaderboard",
    body: "Every trader audited. On-chain PnL, verified. No fake screenshots.",
    Icon: BadgeCheck,
  },
  {
    title: "Smart risk engine",
    body: "Set your max drawdown. We stop copying automatically if limits are hit.",
    Icon: Shield,
  },
  {
    title: "Non-custodial",
    body: "Your keys, your funds. We never touch your assets — just mirror the moves.",
    Icon: KeyRound,
  },
]

export function CoreFeaturesSection() {
  return (
    <section id="features" className="bg-surface py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Features"
            title={
              <>
                Built different.
                <br />
                For a reason.
              </>
            }
            description="Trust-first copy trading: verified performance, fast execution, and safety controls you can actually set."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <FadeIn key={f.title} delayMs={70 + idx * 60}>
              <div className="glass ring-lime-soft group relative h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(600px_250px_at_30%_20%,rgba(57,255,20,0.10),transparent_55%)]" />
                <div className="relative">
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl border border-[rgba(57,255,20,0.25)] bg-[rgba(57,255,20,0.08)]">
                    <f.Icon className="size-5 text-[var(--copycatt-lime)]" />
                  </div>
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-zinc-50">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{f.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

