"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface FadeInProps extends React.ComponentProps<"div"> {
  delayMs?: number
}

export function FadeIn({ className, delayMs = 0, ...props }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          setIsVisible(true)
          observer.disconnect()
          break
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform",
        "transition-[opacity,transform] duration-700 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
      {...props}
    />
  )
}

