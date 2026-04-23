import FadeIn from '@/components/FadeIn'

export default function Philosophy() {
  return (
    <section className="py-36 px-6 bg-paper" id="om-oss">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-8">
            Vår filosofi
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-forest leading-[1.15] mb-10 text-balance">
            Blomster dyrket i pakt
            <br />
            <em>med naturen</em>
          </h2>
        </FadeIn>

        <FadeIn delay={220}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="w-8 h-px bg-gold/70" />
            <span className="w-1 h-1 rounded-full bg-gold/70" />
            <span className="w-8 h-px bg-gold/70" />
          </div>
        </FadeIn>

        <FadeIn delay={320}>
          <p className="font-sans text-muted-green text-base md:text-lg leading-[1.9] max-w-xl mx-auto">
            Vi dyrker blomster etter økologiske prinsipper — med dyp respekt for
            jordhelse, biodiversitet og sesongens rytme. Hver blomst er et
            resultat av tålmodig arbeid, naturlig gjødsel og et ekte engasjement
            for det levende.
          </p>
        </FadeIn>

        <FadeIn delay={440}>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-soft-gray pt-12">
            {[
              { value: '100%', label: 'Økologisk' },
              { value: '3+', label: 'Sesonger' },
              { value: '40+', label: 'Sorter' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif text-3xl text-forest mb-1">{value}</p>
                <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-muted-green/70">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
