 "use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

import { Footer } from "@/components/landing/sections/footer"
import { Navbar } from "@/components/landing/sections/navbar"
import { Container } from "@/components/landing/ui/container"

const Prism = dynamic(() => import("@/components/Prism"), { ssr: false })

export default function AboutPage() {
  const [prismSizePx, setPrismSizePx] = useState(1080)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    function computeFromRect(rect: DOMRectReadOnly) {
      const w = Math.max(1, rect.width)
      const h = Math.max(1, rect.height)
      return Math.ceil(Math.max(1080, w, h))
    }

    let raf = 0
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() =>
        setPrismSizePx(computeFromRect(entry.contentRect)),
      )
    })

    ro.observe(el)
    setPrismSizePx(computeFromRect(el.getBoundingClientRect()))

    return () => {
      if (raf) cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-void text-zinc-50">
      <Navbar />

      <main
        ref={sectionRef}
        className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
      >
        <div className="absolute inset-0">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-90">
            <div
              style={{
                width: prismSizePx,
                height: prismSizePx,
                position: "relative",
              }}
            >
              <Prism
                height={3.5}
                baseWidth={5.5}
                animationType="rotate"
                glow={1}
                noise={0.5}
                transparent
                scale={3.6}
                hueShift={0}
                colorFrequency={1}
                hoverStrength={2}
                inertia={0.05}
                bloom={1}
                timeScale={0.5}
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.35),rgba(0,0,0,0.85))]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              About CopyCatt
            </h1>

            <p className="mt-5 text-pretty text-lg leading-relaxed text-zinc-300 sm:text-xl">
              We’re a cracked team of builders from Nepal, shipping CopyCatt for
              the Colosseum Frontier. Our mission is simple: help people get
              market exposure without living on charts.
            </p>

            <div className="mt-10 grid gap-4">
              <section className="glass shadow-lime rounded-2xl p-6 ring-lime-soft sm:p-8">
                <h2 className="text-lg font-semibold tracking-[-0.02em]">
                  Our mission
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Build a premium, non-custodial copy trading product where you
                  can mirror verified top traders in real time, with clear risk
                  controls and full transparency.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-lg font-semibold tracking-[-0.02em]">
                  How this idea started
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  One of our friends was earning money, but didn’t have the time
                  to learn trading properly. He still wanted to trade — just not
                  at the cost of his day. That gap became our obsession.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  So we’re building CopyCatt: copy trade the best performers,
                  automate execution, and stay in control of risk — without
                  staring at charts all day.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-lg font-semibold tracking-[-0.02em]">
                  Who we are
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  We’re a small, fast-moving team from Nepal. We like shipping
                  relentlessly, iterating in public, and building products that
                  feel unfairly good to use.
                </p>
              </section>
            </div>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,transparent,rgba(8,8,8,1))]" />
      </main>

      <Footer />
    </div>
  )
}

