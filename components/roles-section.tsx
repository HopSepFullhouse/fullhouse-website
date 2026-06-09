"use client"

import { motion } from "framer-motion"
import { HardHat, Wrench, Users2, Settings2, Briefcase } from "lucide-react"

const roles = [
  {
    icon: HardHat,
    title: "Bauleiter",
    description: "Projektverantwortliche für Großbaustellen",
  },
  {
    icon: Users2,
    title: "Poliere",
    description: "Erfahrene Vorarbeiter und Teamleiter",
  },
  {
    icon: Wrench,
    title: "Obermonteure",
    description: "Leitende Fachkräfte im Anlagenbau",
  },
  {
    icon: Settings2,
    title: "Servicetechniker",
    description: "Spezialisten für Wartung und Instandhaltung",
  },
  {
    icon: Briefcase,
    title: "Weitere Fachkräfte",
    description: "Operative Spezialisten aller Gewerke",
  },
]

const industries = [
  "Bau",
  "Infrastruktur",
  "Industrie",
  "Rechenzentren",
  "Technischer Außendienst",
  "Service-Technik",
]

export function RolesSection() {
  return (
    <section id="roles" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-4 block">
              Spezialisierung
            </span>
            <h2 className="text-headline text-foreground">
              Rollen, die wir besetzen
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
              Schwer zu besetzende technische Rollen statt Standardprofile. Wir fokussieren uns auf die Positionen, die klassisches Recruiting nicht erreicht.
            </p>
          </motion.div>
        </div>

        {/* Roles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group"
            >
              <div className="relative h-full p-6 md:p-7 rounded-xl bg-card border border-border card-premium transition-all duration-300 text-center">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <role.icon className="w-7 h-7 text-accent" />
                </div>
                
                {/* Title */}
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {role.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-sm text-muted-foreground mr-3">Branchen:</span>
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-4 py-2 rounded-full bg-muted border border-border text-sm text-muted-foreground hover:text-foreground hover:border-accent/30 transition-all duration-300 cursor-default"
            >
              {industry}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
