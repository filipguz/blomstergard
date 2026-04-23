import FadeIn from '@/components/FadeIn'
import Image from 'next/image'

export default function CTA() {
  return (
    <section className="relative py-44 px-6 overflow-hidden" id="kontakt">
      <Image
        src="/images/hero06.png"
        alt=""
        fill
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(247,244,239,0.90)' }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <FadeIn>
          <p className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-8">
            Kom i kontakt
          </p>
        </FadeIn>

        <FadeIn delay={110}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.15] mb-6 text-balance">
            La oss skape noe vakkert
            <br />
            <em>sammen</em>
          </h2>
        </FadeIn>

        <FadeIn delay={210}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="w-10 h-px bg-gold/60" />
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span className="w-10 h-px bg-gold/60" />
          </div>
        </FadeIn>

        <FadeIn delay={310}>
          <p className="font-sans text-muted-green text-base md:text-lg leading-[1.85] mb-14 max-w-md mx-auto">
            Enten det er til et bryllup, et verksted, eller bare et glass friske
            blomster — vi hører gjerne fra deg.
          </p>
        </FadeIn>

        <FadeIn delay={420}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hei@blomstergarden.no"
              className="inline-flex items-center gap-4 font-sans text-[0.7rem] tracking-[0.28em] uppercase bg-gold text-cream px-12 py-5 hover:bg-forest transition-all duration-500"
            >
              Send oss en melding
            </a>
            <a
              href="https://www.instagram.com/denlilleblomstergaarden/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-sans text-[0.7rem] tracking-[0.28em] uppercase text-muted-green px-8 py-5 border border-soft-gray hover:border-forest/40 hover:text-forest transition-all duration-400"
            >
              Følg oss
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={540}>
          <a
            href="https://www.instagram.com/denlilleblomstergaarden/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 font-sans text-[0.65rem] text-muted-green/50 tracking-widest uppercase hover:text-muted-green transition-colors duration-300"
          >
            @denlilleblomstergaarden
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
