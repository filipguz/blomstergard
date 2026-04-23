'use client'

import { useEffect, useState } from 'react'

const links = ['Om oss', 'Blomster', 'Opplevelser', 'Kontakt']

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-soft-gray/70'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-forest text-xs tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300"
        >
          Den lille blomstergården
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="font-sans text-muted-green hover:text-forest text-[0.65rem] tracking-[0.22em] uppercase transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
