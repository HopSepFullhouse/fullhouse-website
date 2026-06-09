"use client"

import { motion } from "framer-motion"
import { Megaphone, Bot, Phone, Users, Database } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: "01",
    icon: Megaphone,
    title: "Performance Recruiting Kampagnen",
    description: "Wir erreichen passende Kandidaten auch außerhalb klassischer Jobbörsen.",
  },
  {
    number: "02",
    icon: Bot,
    title: "KI-gestützte Vorqualifizierung gemäß EU AI Act 2027",
    description: "Bewerbungen werden strukturiert vorqualifiziert und sauber eingeordnet.",
  },
  {
    number: "03",
    icon: Phone,
    title: "Telefonische Erstqualifizierung",
    description: "Wir prüfen Kandidaten frühzeitig telefonisch auf fachliche und operative Passung.",
  },
  {
    number: "04",
    icon: Users,
    title: "Vorqualifizierte Kandidaten",
    description: "Ihr Fachbereich investiert Zeit nur in passende Kandidaten.",
  },
  {
    number: "05",
    icon: Database,
    title: "Ihr eigener Kandidatenpool",
    description: "Offene technische Rollen werden schneller und planbarer besetzt.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
      {/* Ambient background images */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-[60%] h-full opacity-[0.12]">
          <Image
            src="/images/techniker-schaltschrank.png"
            alt=""
            fill
            sizes="60vw"
            className="object-cover object-center"
          />
        </div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Ihr Recruiting Operating System
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          
          {/* Steps */}
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative md:flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} md:pb-16 last:pb-0`}
                >
                  {/* Card */}
                  <div className={`md:w-[45%] ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="p-6 rounded-xl bg-background border border-border shadow-sm">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="text-sm font-mono text-accent">{step.number}</span>
                        <h3 className="text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-background border-2 border-accent items-center justify-center z-10 shadow-sm">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  
                  {/* Mobile icon */}
                  <div className="md:hidden flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
