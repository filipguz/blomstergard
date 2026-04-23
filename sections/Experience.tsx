import FadeIn from '@/components/FadeIn'
import Image from 'next/image'

const offerings = [
  {
    number: '01',
    title: 'Bryllup',
    description:
      'Vi skaper vakre blomsterarrangementer til din spesielle dag. Brudebukett, brudepike-blomster, bordpynt og buedekorasjon — alt bundet for hand med lokalt dyrkede blomster.',
    detail: 'Konsultasjon inkludert',
  },
  {
    number: '02',
    title: 'Verksted',
    description:
      'Lær kunsten å binde blomster i intime grupper direkte på gården. Du får hendene i jord og blomstersap, og tar med deg en bukett du har laget selv.',
    detail: 'Maks 8 deltakere',
  },
  {
    number: '03',
    title: 'Åpen hage',
    description:
      'Kom og opplev blomstergården i full blomst. Plukk dine egne blomster direkte fra bedet og ta med deg et stykke stille natur hjem.',
    detail: 'Sommersesong',
  },
]

export default function Experience() {
  return (
    <section
      className="py-32 px-6 overflow-hidden"
      id="opplevelser"
      style={{ background: '#1a231d' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-gold/70 mb-6">
                Opplevelser
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1]">
                Mer enn
                <br />
                <em>bare blomster</em>
              </h2>
            </div>
            <p className="font-sans text-clay/50 text-sm leading-relaxed max-w-xs">
              Vi inviterer deg inn i gårdens rytme — til å se, lære og oppleve det som vokser.
            </p>
          </div>
        </FadeIn>

        {/* Mood image */}
        <FadeIn>
          <div className="relative w-full h-64 md:h-80 mb-16 overflow-hidden">
            <Image
              src="/images/hero03.png"
              alt="Opplevelser på blomstergården"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(26,35,29,0.35)' }} />
          </div>
        </FadeIn>

        {/* Offerings grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-soft-gray/10">
          {offerings.map((offering, i) => (
            <FadeIn key={offering.number} delay={i * 130}>
              <div className="group py-14 md:py-16 px-0 md:px-10 border-b md:border-b-0 md:border-r border-soft-gray/10 last:border-r-0 last:border-b-0 hover:bg-cream/[0.03] transition-colors duration-700">
                <p
                  className="font-serif text-[4rem] leading-none mb-10 transition-colors duration-500"
                  style={{ color: 'rgba(198,169,107,0.2)' }}
                >
                  {offering.number}
                </p>

                <h3 className="font-serif text-2xl md:text-3xl text-cream mb-5 group-hover:italic transition-all duration-300">
                  {offering.title}
                </h3>

                <p className="font-sans text-clay/45 text-sm leading-[1.9] mb-8">
                  {offering.description}
                </p>

                <div className="flex items-center gap-3">
                  <span className="w-4 h-px bg-sage/50" />
                  <span className="font-sans text-[0.6rem] tracking-[0.25em] uppercase text-sage/50">
                    {offering.detail}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA row */}
        <FadeIn delay={420}>
          <div className="mt-16 pt-12 border-t border-soft-gray/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-sans text-clay/35 text-xs tracking-wide max-w-sm">
              Alle bestillinger og henvendelser håndteres personlig. Vi svarer innen 24 timer.
            </p>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-5 font-sans text-[0.7rem] tracking-[0.28em] uppercase text-cream border border-cream/20 px-8 py-4 hover:bg-cream hover:text-forest transition-all duration-500"
            >
              Ta kontakt
              <span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-500" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
