"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Mit Fullhouse konnten wir eine schwer zu besetzende Bauleitungs-/Projektleitungsrolle erfolgreich besetzen, an der wir intern lange festgehangen haben. Besonders überzeugt hat uns das Verständnis für unser spezielles technisches Umfeld und die konsequente operative Umsetzung.",
    name: "Andreas Groicher",
    role: "Personalleiter",
    company: "DAH Gruppe",
    initials: "AG",
    metric: "Erfolgreich",
    metricLabel: "besetzt",
  },
  {
    quote: "Gerade bei technischen Service-Rollen sind Geschwindigkeit, Qualität und eine gute Vorauswahl entscheidend. Fullhouse hat uns hier über die letzten zwei Jahre mit schnellen Prozessen, einem klar strukturierten Recruiting-Setup und einer sehr guten operativen Zusammenarbeit überzeugt.",
    name: "Recruiting Specialist",
    role: "Weltweit führender Anbieter",
    company: "Infrastruktur- & Bahnprojekte",
    initials: "RS",
    metric: "2 Jahre",
    metricLabel: "Partnerschaft",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-18"
        >
          <span className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-4 block">
            Kundenstimmen
          </span>
          <div className="grid lg:grid-cols-2 gap-8">
            <h2 className="text-headline text-foreground">
              Was unsere Kunden sagen
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed lg:pt-2">
              Stimmen von Entscheidern aus Bau, Industrie und Infrastruktur, die mit Fullhouse ihre technischen Rollen besetzt haben.
            </p>
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 md:p-10 rounded-xl bg-card border border-border card-premium transition-all duration-300">
                {/* Quote icon */}
                <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/10" />
                
                {/* Metric highlight */}
                <div className="mb-6 pb-6 border-b border-border">
                  <span className="text-2xl md:text-3xl font-semibold text-accent">
                    {testimonial.metric}
                  </span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {testimonial.metricLabel}
                  </span>
                </div>
                
                {/* Quote text */}
                <blockquote className="text-base md:text-lg text-foreground leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-border flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-accent">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
