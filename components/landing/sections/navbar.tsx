"use client"

import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface NavLink {
  label: string
  href: string
  isExternal?: boolean
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50  flex justify-center px-4 pt-6">
      <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-white/10 bg-transparent px-4 py-2 backdrop-blur-md shadow-[0_14px_60px_rgba(0,0,0,0.35)]">
        <Link
          href="/"
          className={cn(
            "inline-flex items-center justify-center rounded-full px-2 py-1",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          )}
          aria-label="Home"
        >
          {/* <Image src="/public/logo.png" alt="Hero" width={500} height={300} /> */}
          <Image
            src="/logo.png"
            alt="CopyCatt"
            width={28}
            height={28}
            className="rounded-md"
          />
        </Link>

        <div className="mx-1 h-6 w-px bg-white/10" />

        <nav className="flex items-center gap-1">
          {navLinks.map((l) => (
            <Button
              key={l.href}
              asChild
              variant="ghost"
              size="sm"
              className="h-8 rounded-full px-3 text-xs font-medium text-zinc-200 hover:bg-white/10 hover:text-white"
            >
              {l.href.startsWith("/") && !l.isExternal ? (
                <Link href={l.href}>{l.label}</Link>
              ) : (
                <a
                  href={l.href}
                  target={l.isExternal ? "_blank" : undefined}
                  rel={l.isExternal ? "noreferrer" : undefined}
                >
                  {l.label}
                </a>
              )}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}

