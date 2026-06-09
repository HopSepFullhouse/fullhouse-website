"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 md:py-20 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                Fullhouse
              </span>
              <p className="text-muted-foreground mt-2 max-w-md">
                Recruiting von Fachkräften für Bauprojekte, Industrieanlagen und den Außendienst.
              </p>
            </div>
            
            <a 
              href="https://calendar.app.google/fgJWbQ63egKF1G778" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <span className="text-base font-medium">Erstgespräch buchen</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Links row */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-12">
          <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Warum Fullhouse
          </a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Prozess
          </a>
          <a href="#kpi" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Ergebnisse
          </a>
          <a href="#roles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Rollen
          </a>
          <a href="#impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Impressum
          </a>
          <a href="/datenschutz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Datenschutz
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-12" />

        {/* Impressum Section */}
        <div id="impressum" className="mb-12">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] mb-6">
            Impressum
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-1.5">
              <p className="text-foreground font-medium">Fullhouse UG (haftungsbeschränkt)</p>
              <p className="text-muted-foreground">Kolonnenstraße 8</p>
              <p className="text-muted-foreground">10827 Berlin</p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-0.5">Vertreten durch</p>
                <p className="text-foreground">Jaro Müller & Sebastian Hoppen</p>
              </div>
              <div>
                <p className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-0.5">E-Mail</p>
                <a 
                  href="mailto:sebastian@full-house.io" 
                  className="text-foreground hover:text-accent transition-colors"
                >
                  sebastian@full-house.io
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-0.5">USt-IdNr.</p>
                <p className="text-foreground">DE462043828</p>
              </div>
              <div>
                <p className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-0.5">Handelsregister</p>
                <p className="text-foreground">HRB 283496 B</p>
                <p className="text-muted-foreground text-xs mt-0.5">Amtsgericht Charlottenburg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fullhouse UG. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-muted-foreground">
            <a href="/datenschutz" className="hover:text-foreground transition-colors">
              Wir verarbeiten Daten gemäß DSGVO.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
