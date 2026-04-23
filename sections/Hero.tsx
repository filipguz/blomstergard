'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <Image
        src="/images/hero.jpg"
        alt="Blomsteråker"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(158deg, rgba(26,35,29,0.55) 0%, rgba(26,35,29,0.35) 50%, rgba(26,35,29,0.5) 100%)' }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <p
          className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-white/50 mb-10"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1s ease-out 0.2s',
          }}
        >
          Flekkerøya, Kristiansand &nbsp;&mdash;&nbsp; Siden 2023
        </p>

        <h1 className="font-serif text-white leading-[0.92] tracking-tight mb-10">
          <span
            className="block text-5xl md:text-7xl lg:text-8xl font-normal"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1.1s ease-out 0.15s, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
            }}
          >
            Den lille
          </span>
          <span
            className="block text-6xl md:text-8xl lg:text-[7.5rem] italic"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1.1s ease-out 0.3s, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            blomstergården
          </span>
        </h1>

        <div
          className="flex items-center justify-center gap-4 mb-10"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1s ease-out 0.6s',
          }}
        >
          <span className="w-12 h-px bg-gold/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
          <span className="w-12 h-px bg-gold/60" />
        </div>

        <p
          className="font-sans text-white/70 text-base md:text-lg max-w-sm mx-auto leading-relaxed tracking-wide"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 1s ease-out 0.7s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
          }}
        >
          Økologisk dyrkede snittblomster.
          <br />
          Dyrket med omsorg for jord og natur.
        </p>

        <div
          className="mt-16"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1s ease-out 1s',
          }}
        >
          <a
            href="#om-oss"
            className="inline-flex items-center gap-3 font-sans text-white/50 text-[0.65rem] tracking-[0.3em] uppercase hover:text-white hover:gap-5 transition-all duration-500"
          >
            Utforsk
            <span className="w-8 h-px bg-current transition-all duration-500" />
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #f7f4ef)',
        }}
      />
    </section>
  )
}
