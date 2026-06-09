"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const kpis = [
  {
    value: "48",
    unit: "h",
    label: "Erste qualifizierte Bewerbungen",
    description: "Von Kampagnenstart bis erste Kandidaten",
  },
  {
    value: "35–45",
    unit: "%",
    label: "Interview-Quote",
    description: "Der gelieferten Kandidaten werden eingeladen",
  },
  {
    value: "3–7",
    unit: "",
    label: "Passende Kandidaten",
    description: "Pro Stelle in nur 14 Tagen",
  },
  {
    value: "40–60",
    unit: "%",
    label: "Kostenersparnis",
    description: "Gegenüber klassischen Personalvermittlern",
  },
  {
    value: "<5",
    unit: "min",
    label: "Aufwand pro Kandidat",
    description: "Für den Kunden durch Vorqualifizierung",
  },
]

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  return (
    <span className="tabular-nums">
      {value}
    </span>
  )
}

export function KpiSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="kpi" className="py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-4 block">
            Messbare Ergebnisse
          </span>
          <h2 className="text-headline text-text-dark mb-6">
            Ergebnisse in nur 7 Tagen
          </h2>
          <p className="text-lg text-text-muted-dark max-w-2xl mx-auto">
            Transparente Leistungskennzahlen aus echten Recruiting-Projekten
          </p>
        </motion.div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative bg-surface-dark p-7 md:p-8 ${
                index === kpis.length - 1 ? 'col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Hover state */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Large metric */}
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-dark tracking-tight">
                    <AnimatedNumber value={kpi.value} inView={isInView} />
                  </span>
                  {kpi.unit && (
                    <span className="text-xl md:text-2xl font-medium text-accent ml-1">
                      {kpi.unit}
                    </span>
                  )}
                </div>
                
                {/* Label */}
                <h3 className="text-sm font-medium text-text-dark mb-1">
                  {kpi.label}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-text-muted-dark leading-relaxed">
                  {kpi.description}
                </p>
              </div>
              
              {/* Accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
