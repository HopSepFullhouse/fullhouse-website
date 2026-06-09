"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const problems = [
  {
    text: "offene technische Rollen bereits laufende Projekte ausbremsen.",
    category: "Operations",
  },
  {
    text: "Sie Bewerbungen erhalten, aber kaum passende Kandidaten sprechen.",
    category: "Qualität",
  },
  {
    text: "Fachbereiche Zeit mit unqualifizierten Interviews verlieren.",
    category: "Effizienz",
  },
  {
    text: "wichtige Stellen seit Monaten online sind, ohne echte Bewegung.",
    category: "Time-to-Hire",
  },
  {
    text: "Recruiting-Partner CVs liefern, aber keine planbare Pipeline aufbauen.",
    category: "Prozess",
  },
  {
    text: "Servicetechniker, Bauleiter oder Obermonteure im Markt kaum erreichbar sind.",
    category: "Erreichbarkeit",
  },
]

export function ProblemChecklist() {
  const [checkedItems, setCheckedItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setCheckedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const checkedCount = checkedItems.length

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-18"
        >
          <h2 className="text-headline text-foreground">
            Technisches Recruiting wird zum Problem, wenn ...
          </h2>
        </motion.div>

        {/* Problem grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {problems.map((problem, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => toggleItem(index)}
              className={`group relative flex items-start gap-5 p-6 md:p-7 rounded-xl text-left transition-all duration-300 border
                ${
                  checkedItems.includes(index)
                    ? "bg-accent/5 border-accent shadow-sm"
                    : "bg-card border-border hover:border-muted-foreground/30 card-premium"
                }
              `}
            >
              {/* Checkbox */}
              <div
                className={`flex-shrink-0 w-6 h-6 mt-0.5 rounded-md flex items-center justify-center transition-all duration-300
                  ${
                    checkedItems.includes(index)
                      ? "bg-accent"
                      : "border-2 border-muted-foreground/30 group-hover:border-accent/50"
                  }
                `}
              >
                {checkedItems.includes(index) && (
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <span className="text-xs font-medium uppercase tracking-wider text-accent mb-2 block">
                  {problem.category}
                </span>
                <span
                  className={`text-base leading-relaxed transition-colors duration-300
                    ${
                      checkedItems.includes(index)
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }
                  `}
                >
                  {problem.text}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA for high engagement */}
        {checkedCount >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-foreground mb-6">
              {checkedCount >= 5 
                ? "Ihre Recruiting-Prozesse haben dringenden Optimierungsbedarf."
                : "Es gibt deutliches Verbesserungspotenzial."
              }
            </p>
            <a href="https://calendar.app.google/fgJWbQ63egKF1G778" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors shadow-lg shadow-foreground/10">
                Kostenlose Analyse vereinbaren
              </button>
            </a>
          </motion.div>
        )}

        {/* Contact CTA + inline form */}
        <ContactForm canOpen={checkedCount >= 1} />
      </div>
    </section>
  )
}
