import { Footer } from "@/components/landing/sections/footer"
import { HeroSection } from "@/components/landing/sections/hero-section"
import { Navbar } from "@/components/landing/sections/navbar"

export function LandingPage() {
  return (
    <div className=" text-zinc-50  h-screen max-w-full ">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}
