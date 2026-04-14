"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

import { Container } from "@/components/landing/ui/container"
import { FadeIn } from "@/components/landing/ui/fade-in"
import { Button } from "@/components/ui/button"

const Prism = dynamic(() => import("@/components/Prism"), { ssr: false })

export function HeroSection() {
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
    <section
      ref={sectionRef}
      className="  h-screen relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.4),rgba(0,0,0,0.8))]" />

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

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
          <FadeIn delayMs={60}>
            <h1 className="mt-8 text-balance text-5xl font-bold tracking-[-0.04em] text-zinc-50 sm:text-6xl lg:text-[5.5rem] lg:leading-[0.95] drop-shadow-sm">
              Copy the trade of the
              <br />
              <span className="text-zinc-50 mt-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.18)]">
                1 % of Alpha traders.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delayMs={110}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-300 sm:text-xl">
               Instantly copy proven alpha traders in real time with
              clear risk controls built for those who want market exposure
              without staring at charts all day.
            </p>
          </FadeIn>

          <FadeIn delayMs={160}>
            <Button
              asChild
              size="lg"
              className="mt-10 h-12 rounded-xl px-8 text-[15px] font-semibold tracking-wide"
            >
              <a
                href="https://x.com/copycattdotfun"
                target="_blank"
                rel="noreferrer"
              >
                Join Waitlist
              </a>
            </Button>
          </FadeIn>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,transparent,rgba(8,8,8,1))]" />
    </section>
  )
}

