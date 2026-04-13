"use client"

import { ArrowRight } from "lucide-react"

import { AuroraBackground } from "@/components/react-bits/aurora"
import { CatMark } from "@/components/landing/ui/cat-mark"
import { Container } from "@/components/landing/ui/container"
import { FadeIn } from "@/components/landing/ui/fade-in"
import { GlassButton, LimeButton } from "@/components/landing/ui/lime-button"
import { Card } from "@/components/ui/card"



export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.4),rgba(0,0,0,0.8))]" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_10%,transparent_80%)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[length:48px_48px]" />
        </div>
        <AuroraBackground 
          opacity={0.3} 
          speed={0.5} 
          blend={0.6} 
          amplitude={1.2} 
          colorStops={["#1c3815", "#39FF14", "#0f210d"]} 
        />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3">
              <CatMark className="hidden sm:inline-flex" />
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(57,255,20,0.24)] bg-[rgba(57,255,20,0.06)] px-4 py-1.5 font-mono text-[11px] tracking-[0.14em] text-[var(--copycatt-lime)] backdrop-blur-md transition-colors hover:bg-[rgba(57,255,20,0.1)] cursor-pointer">
                <span className="size-1.5 rounded-full bg-[var(--copycatt-lime)] [box-shadow:0_0_18px_rgba(57,255,20,0.8)] animate-pulse" />
                EARLY ACCESS OPEN NOW
              </div>
            </div>
          </FadeIn>

          <FadeIn delayMs={60}>
            <h1 className="mt-8 text-balance text-5xl font-bold tracking-[-0.04em] text-zinc-50 sm:text-6xl lg:text-[5.5rem] lg:leading-[0.95] drop-shadow-sm">
              Copy the best.
              <br />
              <span className="text-[var(--copycatt-lime)] drop-shadow-[0_0_30px_rgba(57,255,20,0.3)]">Skip the rest.</span>
            </h1>
          </FadeIn>

          <FadeIn delayMs={110}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-300 sm:text-xl">
              Automatically mirror the trades of the top 1% of crypto traders — in real time, with full risk
              control. No charts. No stress. Just results.
            </p>
          </FadeIn>

          <FadeIn delayMs={160}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center w-full sm:w-auto">
              <LimeButton
                size="lg"
                className="h-12 w-full sm:w-auto rounded-xl px-8 text-[15px] font-semibold tracking-wide shadow-[0_0_40px_-10px_rgba(57,255,20,0.4)] transition-all hover:shadow-[0_0_60px_-10px_rgba(57,255,20,0.6)]"
                onClick={() => document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join the Waitlist — It&apos;s Free
              </LimeButton>

              <GlassButton
                size="lg"
                className="group h-12 w-full sm:w-auto rounded-xl px-8 text-[15px] font-medium bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 transition-all duration-300"
                onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
              >
                See Top Traders <ArrowRight className="ml-2 size-4 opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
              </GlassButton>
            </div>
          </FadeIn>

          <FadeIn delayMs={210}>
            <div className="mt-10 flex items-center justify-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="size-8 rounded-full border-2 border-void bg-zinc-800" />
                ))}
              </div>
              <p className="font-mono text-xs text-zinc-400">
                <span className="text-zinc-200 font-medium">2,847</span> traders already on the list
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,transparent,rgba(8,8,8,1))]" />
    </section>
  )
}

