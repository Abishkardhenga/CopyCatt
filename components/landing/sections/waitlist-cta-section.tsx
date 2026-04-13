"use client"

import { useMemo, useState } from "react"

import { Container } from "@/components/landing/ui/container"
import { FadeIn } from "@/components/landing/ui/fade-in"
import { LimeButton } from "@/components/landing/ui/lime-button"
import { SectionHeading } from "@/components/landing/ui/section-heading"

function formatCount(n: number) {
  return new Intl.NumberFormat("en-US").format(n)
}

export function WaitlistCtaSection() {
  const [email, setEmail] = useState("")
  const [count, setCount] = useState(2847)

  const countLabel = useMemo(() => formatCount(count), [count])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setCount((c) => c + 1)
    setEmail("")
  }

  return (
    <section id="waitlist" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(700px_520px_at_50%_45%,rgba(57,255,20,0.10),transparent_60%)]" />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Early access"
            title={
              <>
                The cat&apos;s out of the bag.
                <br />
                Get in early.
              </>
            }
            description="Early access spots are limited. Be first to copy the most profitable traders before everyone else does. No credit card. No commitment. Just your edge."
          />
        </FadeIn>

        <FadeIn delayMs={120}>
          <div className="mt-7 text-center font-mono text-xs text-zinc-500">
            <span className="text-zinc-200">{countLabel}</span> traders already on the list
          </div>
        </FadeIn>

        <FadeIn delayMs={170}>
          <form onSubmit={onSubmit} className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="your@email.com"
              className="h-12 flex-1 rounded-xl border border-glass bg-[rgba(255,255,255,0.03)] px-4 text-sm text-zinc-50 outline-none placeholder:text-zinc-600 focus-visible:ring-2 focus-visible:ring-[rgba(57,255,20,0.25)]"
            />
            <LimeButton type="submit" size="lg" className="h-12 rounded-xl px-5 text-sm font-semibold">
              Claim My Early Access Spot
            </LimeButton>
          </form>
        </FadeIn>

        <FadeIn delayMs={220}>
          <p className="mt-4 text-center font-mono text-[11px] text-zinc-500">
            Refer 3 friends → skip the line · Early members get 0% performance fees
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

