import { Container } from "@/components/landing/ui/container"
import { FadeIn } from "@/components/landing/ui/fade-in"
import { SectionHeading } from "@/components/landing/ui/section-heading"

const faqs = [
  {
    q: "Is my money safe?",
    a: "Your funds stay in your own wallet. We use read-only API keys or smart contract mirrors — we never take custody of your assets.",
  },
  {
    q: "How are traders verified?",
    a: "All traders on the leaderboard are verified via on-chain PnL data. No screenshots, no self-reported returns. What you see is what happened.",
  },
  {
    q: "Can I lose more than I put in?",
    a: "No. Our risk engine lets you set a maximum drawdown. Once hit, copying pauses automatically. You can never lose more than your defined limit.",
  },
  {
    q: "How much does it cost?",
    a: "Early access is free. We take a small performance fee — only when you profit. If you don't make money, we don't charge.",
  },
  {
    q: "When does it launch?",
    a: "We're onboarding early access users now. Join the waitlist and you'll get access before public launch — with a referral bonus for each friend you bring.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-surface py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                You asked.
                <br />
                We answered.
              </>
            }
          />
        </FadeIn>

        <div className="mt-12 overflow-hidden rounded-2xl border border-glass bg-[rgba(255,255,255,0.02)]">
          <div className="grid gap-px bg-[rgba(255,255,255,0.08)] lg:grid-cols-2">
            {faqs.map((f, idx) => (
              <FadeIn key={f.q} delayMs={70 + idx * 55} className="bg-void/0">
                <div className="h-full bg-surface px-7 py-7">
                  <div className="text-sm font-semibold tracking-[-0.02em] text-zinc-50">
                    {f.q}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-zinc-400">{f.a}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

