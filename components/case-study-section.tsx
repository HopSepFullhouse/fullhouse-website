"use client"

import { motion } from "framer-motion"
import { ArrowRight, Quote } from "lucide-react"

const metrics = [
  { value: "30.000", label: "Impressionen", sublabel: "Social Reach" },
  { value: "8", label: "Kandidaten vorgestellt", sublabel: "Qualifiziert" },
  { value: "3", label: "Poliere eingestellt", sublabel: "Erfolgreich" },
  { value: "9", label: "Wochen Laufzeit", sublabel: "Time-to-Hire" },
]

export function CaseStudySection() {
  return (
    <section id="case-study" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-4 block">
            Case Study
          </span>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <h2 className="text-headline text-foreground">
              B&O Bau Success Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed lg:pt-2">
              Wie wir für die B&O Gruppe drei Poliere in nur neun Wochen erfolgreich eingestellt haben.
            </p>
          </div>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card p-7 md:p-10 group hover:bg-muted/30 transition-colors"
            >
              <span className="text-xs uppercase tracking-wider text-accent mb-3 block">
                {metric.sublabel}
              </span>
              <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial card - dark for contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative p-8 md:p-12 rounded-2xl bg-surface-dark">
            {/* Quote icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-accent/15" />
            
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-text-dark leading-relaxed mb-8 max-w-3xl">
              &ldquo;Die Polier-Kampagne war für mich der Beweis, dass Fullhouse der richtige Partner ist: klare Prozesse, saubere Daten und kein Leerlauf im Fachbereich.&rdquo;
            </blockquote>
            
            {/* Author row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-base font-semibold text-accent">PH</span>
                </div>
                <div>
                  <div className="font-semibold text-text-dark">
                    Pascal Heimann
                  </div>
                  <div className="text-sm text-text-muted-dark">
                    Personalreferent Active Sourcing, B&O Gruppe
                  </div>
                </div>
              </div>
              
              <a 
                href="https://calendar.app.google/fgJWbQ63egKF1G778" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors group"
              >
                Ähnliche Ergebnisse erzielen
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
