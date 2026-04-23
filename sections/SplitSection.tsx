import FadeIn from '@/components/FadeIn'
import Image from 'next/image'

interface SplitSectionProps {
  reverse?: boolean
}

export default function SplitSection({ reverse = false }: SplitSectionProps) {
  const colorBlock = (
    <div className="relative w-full min-h-[480px] md:min-h-[600px] overflow-hidden">
      <Image
        src="/images/hero01.png"
        alt="Blomsteråker"
        fill
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(26,35,29,0.18)' }}
      />
      <div className="absolute bottom-10 left-10">
        <p className="font-sans text-[0.6rem] tracking-[0.35em] uppercase text-white/40">
          Jord &mdash; Frø &mdash; Blomst
        </p>
      </div>
    </div>
  )

  const textBlock = (
    <div className="flex items-center w-full px-8 md:px-16 lg:px-20 py-24 md:py-0 bg-cream">
      <div className="max-w-md">
        <FadeIn>
          <p className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-6">
            Dyrking
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.15] mb-8">
            Fra frø til
            <br />
            <em>snittblomst</em>
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="w-10 h-px bg-gold/60 mb-8" />
        </FadeIn>

        <FadeIn delay={280}>
          <p className="font-sans text-muted-green leading-[1.85] mb-5 text-[0.9375rem]">
            Vi starter forkultivering tidlig på våren og følger plantene gjennom
            hele vekstsesongen. Jorda er vår viktigste ressurs — vi bygger den
            opp med tang, løv og kompost.
          </p>
        </FadeIn>

        <FadeIn delay={360}>
          <p className="font-sans text-muted-green leading-[1.85] text-[0.9375rem]">
            Alt dyrkes uten syntetisk gjødsel eller sprøytemidler. Resultatet er
            blomster med karakter, duft og naturlig holdbarhet.
          </p>
        </FadeIn>

        <FadeIn delay={440}>
          <div className="mt-10 flex flex-col gap-3">
            {['Egenprodusert kompost', 'Naturlig gjødsel', 'Null sprøytemidler'].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-px bg-sage" />
                  <span className="font-sans text-[0.75rem] tracking-[0.15em] uppercase text-muted-green/80">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  )

  return (
    <section className="grid md:grid-cols-2 min-h-[560px]">
      {reverse ? (
        <>
          {textBlock}
          {colorBlock}
        </>
      ) : (
        <>
          {colorBlock}
          {textBlock}
        </>
      )}
    </section>
  )
}
