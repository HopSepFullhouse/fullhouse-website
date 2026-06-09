"use client"

import { motion } from "framer-motion"
import { Zap, Target, Cog } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Geschwindigkeit",
    description: "Schnelle Prozesse statt monatelanger Vakanz. Erste relevante Profile innerhalb von 48 Stunden.",
    metric: "48 Stunden",
    metricLabel: "Bis zu den ersten relevanten Profilen",
  },
  {
    icon: Target,
    title: "Qualifizierung",
    description: "Qualifizierte Vorselektion statt CV-Flut. Nur relevante Kandidaten erreichen Sie.",
    metric: "95%",
    metricLabel: "passgenaue Vorauswahl",
  },
  {
    icon: Cog,
    title: "Operative Umsetzung",
    description: "Recruiting-Pipelines statt Einzelbesetzungen. Skalierbare Prozesse für Ihr Wachstum.",
    metric: "Skalierbar",
    metricLabel: "für jede Teamgröße",
  },
]

export function WhySection() {
  return (
    <section id="why" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-4 block">
              Warum Fullhouse
            </span>
            <h2 className="text-headline text-foreground">
              Ihre Hands-On Recruiting-Agentur
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:pt-10"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Operative Umsetzung statt Beratung. Wir übernehmen Ihren gesamten Recruiting-Prozess – für Fachkräfte in Bauprojekten, Industrieanlagen und im Außendienst.
            </p>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 md:p-10 rounded-2xl bg-card border border-border card-premium transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                
                {/* Metric highlight */}
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                    {feature.metric}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-1">
                    {feature.metricLabel}
                  </span>
                </div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
