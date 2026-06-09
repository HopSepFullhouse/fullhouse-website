"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      {/* Subtle ambient image - very light */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y }}
          className="absolute right-0 top-[15%] w-[55%] h-[70%] opacity-[0.45]"
        >
          <Image
            src="/images/bauleiter.png"
            alt=""
            fill
            sizes="55vw"
            className="object-cover object-center"
            priority
          />
        </motion.div>
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Subtle accent glow */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-[30%] right-[15%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" 
      />
      
      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent border border-accent/20 rounded-full bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Recruiting von Fachkräften für Bauprojekte, Industrieanlagen und den Außendienst
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display text-foreground mb-8"
          >
            <span className="block">Fachkräfte</span>
            <span className="block text-muted-foreground">finden, bevor Projekte</span>
            <span className="block">stillstehen.</span>
          </motion.h1>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a href="https://calendar.app.google/fgJWbQ63egKF1G778" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8 h-14 text-base font-medium rounded-full group shadow-lg shadow-foreground/10">
                Erstgespräch buchen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#case-study">
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-6 h-14 text-base font-medium">
                Case Study ansehen
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.div>


    </section>
  )
}
