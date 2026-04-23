import FadeIn from '@/components/FadeIn'
import Image from 'next/image'

const flowers = [
  {
    name: 'Dahlia',
    category: 'Knoller',
    season: 'Jul — Okt',
    description:
      'Vår mest populære blomst. Rikelig blomstring med utallige farger og former — fra de intrikate kafé au lait til dype burgunder.',
    image: '/images/blomst01.png',
    accent: '#9e3e65',
  },
  {
    name: 'Solsikker',
    category: 'Frø',
    season: 'Aug — Sep',
    description:
      'Solens blomst. Vokser høyt og stolt og lyser opp enhver bukett med varme, gyldne toner og en åpen, ærlig skjønnhet.',
    image: '/images/blomst02.png',
    accent: '#c6a96b',
  },
  {
    name: 'Erteblomster',
    category: 'Klatrer',
    season: 'Jun — Aug',
    description:
      'Delikate og duftende. Perfekte til brudeblomster og romantiske arrangementer med sine svevende, silkeaktige kronblad.',
    image: '/images/blomst03.png',
    accent: '#7a6aae',
  },
  {
    name: 'Pioner',
    category: 'Stauder',
    season: 'Mai — Jun',
    description:
      'Overdådig og luksuriøs. Sesongens høydepunkt med sin fyldige, duftende blomst i alt fra kremblankt til dyp koralrosa.',
    image: '/images/blomst04.png',
    accent: '#b86a80',
  },
]

export default function Flowers() {
  return (
    <section className="py-32 px-6 bg-secondary/20" id="blomster">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <div>
              <p className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-5">
                Sesongens blomster
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                Fra gården vår
              </h2>
            </div>
            <p className="font-sans text-muted-green text-sm leading-relaxed max-w-xs md:text-right">
              Alle blomster dyrkes lokalt og plukkes ferske for beste kvalitet og holdbarhet.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {flowers.map((flower, i) => (
            <FadeIn key={flower.name} delay={i * 90}>
              <div className="group cursor-default">
                {/* Color block */}
                <div
                  className="relative w-full mb-7 overflow-hidden"
                  style={{ height: '280px' }}
                >
                  <Image
                    src={flower.image}
                    alt={flower.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Season badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="font-sans text-[0.6rem] tracking-[0.2em] uppercase px-2.5 py-1"
                      style={{
                        background: 'rgba(255,255,255,0.12)',
                        color: 'rgba(255,255,255,0.7)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {flower.season}
                    </span>
                  </div>
                  {/* Bottom shimmer line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: flower.accent }}
                  />
                </div>

                {/* Text */}
                <div className="transition-transform duration-500 group-hover:-translate-y-0.5">
                  <p className="font-sans text-[0.6rem] tracking-[0.25em] uppercase text-gold/80 mb-2">
                    {flower.category}
                  </p>
                  <h3 className="font-serif text-2xl text-forest mb-3 group-hover:italic transition-all duration-300">
                    {flower.name}
                  </h3>
                  <p className="font-sans text-muted-green text-sm leading-[1.8]">
                    {flower.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
