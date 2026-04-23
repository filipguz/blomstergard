'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const links = [
  { label: 'Om oss', href: '#om-oss' },
  { label: 'Blomster', href: '#blomster' },
  { label: 'Galleri', href: '#galleri' },
  { label: 'Opplevelser', href: '#opplevelser' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled && !menuOpen
            ? 'bg-cream/95 backdrop-blur-md border-b border-soft-gray/70'
            : !menuOpen
            ? 'bg-gradient-to-b from-black/30 to-transparent'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <a href="#" onClick={closeMenu} className="flex items-center">
            {scrolled && !menuOpen ? (
              <Image
                src="/images/logo01.png"
                alt="Den lille blomstergården"
                width={160}
                height={64}
                className="h-10 w-auto"
              />
            ) : (
              <span className="font-serif text-xs tracking-[0.2em] uppercase text-white/85 hover:text-white transition-colors duration-500">
                Den lille blomstergården
              </span>
            )}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-sans text-[0.65rem] tracking-[0.22em] uppercase transition-colors duration-500 ${
                  scrolled
                    ? 'text-muted-green hover:text-forest'
                    : 'text-white/65 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 relative z-[60]"
          >
            <span
              className={`block h-px w-6 transition-all duration-400 origin-center ${
                menuOpen
                  ? 'bg-white rotate-45 translate-y-[7px]'
                  : scrolled
                  ? 'bg-forest'
                  : 'bg-white/85'
              }`}
            />
            <span
              className={`block h-px transition-all duration-400 ${
                menuOpen ? 'w-0 opacity-0 bg-white' : 'w-5 bg-white/85 ' + (scrolled ? '!bg-forest' : '')
              }`}
            />
            <span
              className={`block h-px w-6 transition-all duration-400 origin-center ${
                menuOpen
                  ? 'bg-white -rotate-45 -translate-y-[7px]'
                  : scrolled
                  ? 'bg-forest'
                  : 'bg-white/85'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'linear-gradient(155deg, #1a231d 0%, #263826 55%, #1a231d 100%)' }}
      >
        <div className="flex flex-col justify-center items-start h-full px-10 pb-20 pt-28 gap-2">

          <p className="font-sans text-[0.6rem] tracking-[0.35em] uppercase text-gold/60 mb-8">
            Flekkerøya, Kristiansand
          </p>

          {links.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="group flex items-center gap-5 py-4 border-b border-white/8 w-full"
              style={{
                transitionDelay: menuOpen ? `${i * 60 + 80}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <span className="font-serif text-4xl text-white/85 group-hover:italic transition-all duration-300">
                {item.label}
              </span>
              <span className="w-0 group-hover:w-6 h-px bg-gold/60 transition-all duration-400 mt-1" />
            </a>
          ))}

          <a
            href="https://www.instagram.com/denlilleblomstergaarden/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-12 font-sans text-[0.65rem] tracking-[0.3em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300"
            style={{
              transitionDelay: menuOpen ? '340ms' : '0ms',
              opacity: menuOpen ? 1 : 0,
              transition: 'opacity 0.5s ease 340ms',
            }}
          >
            @denlilleblomstergaarden
          </a>
        </div>
      </div>
    </>
  )
}
