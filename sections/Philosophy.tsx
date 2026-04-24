import FadeIn from '@/components/FadeIn'

const historyParagraphs = [
  'Mitt navn er Caroline, og sammen med min lille familie driver jeg Den lille blomstergården.',
  'Det hele startet da vi fikk vår første hage. Vi begynte forsiktig med et par pallekarmer med grønnsaker, men det tok ikke lang tid før vi hadde utvidet – og plutselig var halve hagen blitt en kjøkkenhage. Etter hvert plantet jeg også noen blomster, og jeg innså raskt at jeg var helt forelsket i blomsterdyrking. Tenk at en hage kunne bli så vakker!',
  'Året etter delte jeg et innlegg der jeg spurte om noen som skulle gifte seg, ville være med på et lite prøveprosjekt – om de kunne tenke seg å kjøpe blomster fra oss. Responsen var overveldende, og allerede første året leverte vi blomster til fire bryllup.',
  'Det var da drømmen virkelig tok fart. Kunne jeg faktisk leve av å dyrke snittblomster?',
  'Høsten 2024 flyttet vi til et gammelt sørlandshus med låve og stor tomt på Flekkerøy. Tomten var helt gjengrodd, men vi visste at dette var stedet. Med flere bryllup allerede booket – og en nyfødt i armene – var det bare å sette i gang.',
  'Vi jobbet så hardt vi kunne, og klarte å etablere en ordentlig blomsterproduksjon allerede første sesong.',
  'Dette var bare starten. Nå fortsetter arbeidet – steg for steg – for å skape drømmen vår.',
]

export default function Philosophy() {
  return (
    <section className="py-36 px-6 bg-paper" id="om-oss">
      <div className="max-w-3xl mx-auto">

        {/* ── Intro ── */}
        <div className="text-center mb-24">
          <FadeIn>
            <p className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-8">
              Om oss
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-forest leading-[1.15] mb-10 text-balance">
              En liten familiedrevet
              <br />
              <em>blomstergård</em>
            </h2>
          </FadeIn>

          <FadeIn delay={220}>
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className="w-8 h-px bg-gold/70" />
              <span className="w-1 h-1 rounded-full bg-gold/70" />
              <span className="w-8 h-px bg-gold/70" />
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="space-y-5 font-sans text-muted-green text-base md:text-lg leading-[1.9] max-w-xl mx-auto text-left">
              <p>
                Den lille blomstergården er en liten, familiedrevet blomstergård på Flekkerøy.
                Den startet som vår lille familiedrøm, og for hvert år blir den mer og mer virkelig.
              </p>
              <p>
                Vårt hovedfokus er salg av snittblomster til bryllup, eventer og buketter.
                I august og september tilbyr vi også blomsterverksted.
              </p>
              <p>
                Vi drømmer om at stedet vårt skal være til glede for andre. Derfor arrangerer vi
                marked to ganger i året, og åpner hagen når det passer.
              </p>
              <p>
                Mer informasjon om marked, åpen hage og reisen vår deler vi på Instagram:{' '}
                <a
                  href="https://www.instagram.com/denlilleblomstergarden/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest underline underline-offset-4 decoration-gold/50 hover:decoration-gold transition-colors duration-300"
                >
                  @denlilleblomstergarden
                </a>
                .
              </p>
            </div>
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

        {/* ── Vår historie ── */}
        <div className="border-t border-soft-gray pt-20">
          <FadeIn>
            <p className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-8">
              Vår historie
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <h3 className="font-serif text-3xl md:text-4xl text-forest leading-[1.2] mb-12">
              Slik startet det hele
            </h3>
          </FadeIn>

          <div className="space-y-6">
            {historyParagraphs.map((para, i) => (
              <FadeIn key={i} delay={i * 80}>
                <p className="font-sans text-muted-green text-base md:text-lg leading-[1.9]">
                  {para}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={700}>
            <div className="mt-14 flex items-center gap-4">
              <span className="w-10 h-px bg-gold/50" />
              <p className="font-sans text-[0.65rem] tracking-[0.25em] uppercase text-gold/60">
                Caroline
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}
