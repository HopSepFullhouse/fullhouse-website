"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  { name: "Rieter", src: "/images/logos/rieter.png", size: "default" },
  { name: "DAH Gruppe", src: "/images/logos/dah-gruppe.png", size: "large" },
  { name: "Buena", src: "/images/logos/buena.png", size: "default" },
  { name: "Barilla", src: "/images/logos/barilla.png", size: "default" },
  { name: "B&O Gruppe", src: "/images/logos/bo-gruppe.png", size: "large" },
  { name: "Krombacher", src: "/images/logos/krombacher.png", size: "default" },
  { name: "Hitachi Rail", src: "/images/logos/hitachi-rail.png", size: "default" },
  { name: "Suessen", src: "/images/logos/suessen.png", size: "default" },
  { name: "Geiger Textil", src: "/images/logos/geiger-textil.png", size: "default" },
]

function LogoImage({ logo, suffix = "" }: { logo: typeof logos[0]; suffix?: string }) {
  const sizeClasses = logo.size === "large" 
    ? "h-10 w-32 md:h-14 md:w-44" 
    : "h-8 w-28 md:h-10 md:w-36"
  
  return (
    <div 
      className={`relative ${sizeClasses} shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group`}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        fill
        sizes="144px"
        className="object-contain group-hover:drop-shadow-[0_0_8px_rgba(0,180,180,0.3)]"
      />
    </div>
  )
}

export function TrustSection() {
  return (
    <section className="py-12 md:py-16 border-t border-border bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-10 text-center"
        >
          Vertrauen von Unternehmen aus Bau, Industrie & Infrastruktur
        </motion.p>
      </div>
      
      {/* Marquee container */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling logos */}
        <motion.div 
          className="flex items-center"
          animate={{ x: [0, -1800] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* First set */}
          <div className="flex shrink-0 items-center gap-x-12 md:gap-x-16 px-6 md:px-8">
            {logos.map((logo) => (
              <LogoImage key={logo.name} logo={logo} />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 items-center gap-x-12 md:gap-x-16 px-6 md:px-8">
            {logos.map((logo) => (
              <LogoImage key={`${logo.name}-2`} logo={logo} suffix="-2" />
            ))}
          </div>
          {/* Third set for extra buffer */}
          <div className="flex shrink-0 items-center gap-x-12 md:gap-x-16 px-6 md:px-8">
            {logos.map((logo) => (
              <LogoImage key={`${logo.name}-3`} logo={logo} suffix="-3" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
