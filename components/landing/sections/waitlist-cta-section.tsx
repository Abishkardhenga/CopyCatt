"use client"

import { useState } from "react"

import { Container } from "@/components/landing/ui/container"
import { FadeIn } from "@/components/landing/ui/fade-in"
import { LimeButton } from "@/components/landing/ui/lime-button"

const WAITLIST_URL = "https://forms.gle/kBjJ4avQdHfmXXbD6"

export function WaitlistCtaSection() {
  const [email, setEmail] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (typeof window === "undefined") return
    window.open(WAITLIST_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="waitlist" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(700px_520px_at_50%_45%,rgba(255,255,255,0.06),transparent_60%)]" />
      <Container className="relative">
        <FadeIn>
          <form onSubmit={onSubmit} className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="Email"
              className="h-12 flex-1 rounded-xl border border-glass bg-[rgba(255,255,255,0.03)] px-4 text-sm text-zinc-50 outline-none placeholder:text-zinc-600 focus-visible:ring-2 focus-visible:ring-[rgba(57,255,20,0.25)]"
            />
            <LimeButton type="submit" size="lg" className="h-12 rounded-xl px-5 text-sm font-semibold">
              Join Waitlist
            </LimeButton>
          </form>
        </FadeIn>
      </Container>
    </section>
  )
}

