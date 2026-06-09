import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { ProblemChecklist } from "@/components/problem-checklist"
import { WhySection } from "@/components/why-section"
import { ProcessSection } from "@/components/process-section"
import { KpiSection } from "@/components/kpi-section"
import { CaseStudySection } from "@/components/case-study-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { RolesSection } from "@/components/roles-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background noise-overlay">
      <Header />
      <HeroSection />
      <TrustSection />
      <section id="why">
        <WhySection />
      </section>
      <ProblemChecklist />
      <section id="process">
        <ProcessSection />
      </section>
      <section id="kpi">
        <KpiSection />
      </section>
      <CaseStudySection />
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="roles">
        <RolesSection />
      </section>
      <CtaSection />
      <Footer />
    </main>
  )
}
