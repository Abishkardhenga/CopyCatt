"use client"

import Link from "next/link"

import { CatMark } from "@/components/landing/ui/cat-mark"
import { Container } from "@/components/landing/ui/container"
import { LimeButton } from "@/components/landing/ui/lime-button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Comparison", href: "#comparison" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.05] bg-black/20 backdrop-blur-md transition-all duration-300">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="#"
          className={cn(
            "inline-flex items-center",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(57,255,20,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-transform hover:scale-[1.03] active:scale-[0.97]"
          )}
          aria-label="Home"
        >
          <CatMark className="size-9 drop-shadow-[0_0_10px_rgba(57,255,20,0.2)]" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-[0.02em] text-zinc-400 transition-colors hover:text-zinc-50"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LimeButton
            size="sm"
            className="h-9 rounded-lg px-4 text-xs font-semibold tracking-[-0.01em]"
            onClick={() => document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join Waitlist
          </LimeButton>
        </div>
      </Container>
    </header>
  )
}

