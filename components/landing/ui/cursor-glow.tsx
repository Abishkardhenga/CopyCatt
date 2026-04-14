"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 mix-blend-screen transition-opacity duration-300"
      style={{
        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(57,255,20,0.12), transparent 40%)`,
      }}
    />
  )
}
