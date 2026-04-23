import Image from 'next/image'
import Hero from '@/sections/Hero'
import Philosophy from '@/sections/Philosophy'
import SplitSection from '@/sections/SplitSection'
import Flowers from '@/sections/Flowers'
import Gallery from '@/sections/Gallery'
import Experience from '@/sections/Experience'
import CTA from '@/sections/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <SplitSection />
      <Flowers />
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/hero02.png"
          alt="Blomster fra gården"
          fill
          className="object-cover object-center"
        />
      </div>
      <Gallery />
      <Experience />
      <CTA />
    </main>
  )
}
