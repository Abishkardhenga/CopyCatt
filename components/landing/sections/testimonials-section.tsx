import { Container } from "@/components/landing/ui/container"
import { FadeIn } from "@/components/landing/ui/fade-in"
import { SectionHeading } from "@/components/landing/ui/section-heading"

const testimonials = [
  {
    quote:
      "I was down 40% trying to trade on my own. Three months of copying @alpha_whale and I'm finally green. This thing actually works.",
    author: "@defi_dan · 2.1k followers",
  },
  {
    quote:
      "Set it up on a Sunday night. By Monday morning it had already made 4 trades. I literally did nothing. I'm obsessed.",
    author: "@krypto_kate · 890 followers",
  },
  {
    quote:
      "The risk cap feature is everything. I told it not to risk more than 5% and it has respected that every single time. Feels safe.",
    author: "@pragmatic_pete · 4.2k followers",
  },
  {
    quote:
      "I've tried 4 copy trading platforms. This is the first one where the trades actually execute at the right price. The speed is insane.",
    author: "@scalp_samira · 7.8k followers",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                They copied.
                <br />
                They won.
              </>
            }
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, idx) => (
            <FadeIn key={t.author} delayMs={90 + idx * 60}>
              <div className="glass ring-lime-soft group flex h-full flex-col rounded-2xl p-6 transition-colors hover:bg-[rgba(255,255,255,0.06)]">
                <div className="font-mono text-xs tracking-[0.25em] text-[var(--copycatt-lime)]">
                  ★★★★★
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-50/95 italic">&quot;{t.quote}&quot;</p>
                <div className="mt-auto pt-6 font-mono text-[11px] text-zinc-500">{t.author}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

