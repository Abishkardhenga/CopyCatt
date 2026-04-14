import { Footer } from "@/components/landing/sections/footer"
import { HeroSection } from "@/components/landing/sections/hero-section"
import { Navbar } from "@/components/landing/sections/navbar"

export function LandingPage() {
  return (
    <div className="flex h-svh max-w-full flex-col overflow-hidden bg-void text-zinc-50">
      <Navbar />
      <div className="flex min-h-0 flex-1 flex-col">
        <HeroSection />
        <Footer />
      </div>
    </div>
  )
}
