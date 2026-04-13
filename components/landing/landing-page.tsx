import { ComparisonSection } from "@/components/landing/sections/comparison-section"
import { CoreFeaturesSection } from "@/components/landing/sections/core-features-section"
import { FaqSection } from "@/components/landing/sections/faq-section"
import { Footer } from "@/components/landing/sections/footer"
import { HeroSection } from "@/components/landing/sections/hero-section"
import { HowItWorksSection } from "@/components/landing/sections/how-it-works-section"
import { Navbar } from "@/components/landing/sections/navbar"
import { SocialProofTicker } from "@/components/landing/sections/social-proof-ticker"
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section"
import { WaitlistCtaSection } from "@/components/landing/sections/waitlist-cta-section"

export function LandingPage() {
  return (
    <div className="bg-void text-zinc-50">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofTicker />
        <HowItWorksSection />
        <CoreFeaturesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <WaitlistCtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

