import Image from 'next/image'
import FadeIn from '@/components/FadeIn'

const images = [
  '/images/gallery01.png',
  '/images/hero04.png',
  '/images/gallery02.png',
  '/images/gallery03.png',
  '/images/blomst05.png',
  '/images/gallery04.png',
  '/images/hero05.png',
  '/images/gallery05.png',
  '/images/gallery06.png',
  '/images/gallery07.png',
  '/images/blomstforklaring.png',
  '/images/gallery08.png',
  '/images/gallery09.png',
  '/images/gallery10.png',
  '/images/gallery11.png',
  '/images/gallery12.png',
  '/images/gallery13.png',
]

export default function Gallery() {
  return (
    <section className="py-28 px-6 bg-paper" id="galleri">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
            <div>
              <p className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-5">
                Fra gården
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                I blomst
              </h2>
            </div>
            <p className="font-sans text-muted-green text-sm leading-relaxed max-w-xs md:text-right">
              Et glimt inn i sesongen — fra jord til bukett.
            </p>
          </div>
        </FadeIn>

        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {images.map((src, i) => (
            <FadeIn key={src} delay={i * 35}>
              <div className="break-inside-avoid overflow-hidden group">
                <Image
                  src={src}
                  alt="Blomstergården"
                  width={800}
                  height={1000}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
