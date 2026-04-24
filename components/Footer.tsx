import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-soft-gray bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#">
            <Image
              src="/images/logo01.png"
              alt="Den lille blomstergården"
              width={320}
              height={128}
              className="h-24 w-auto mix-blend-multiply"
            />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-10">
            <span className="font-sans text-[0.65rem] text-muted-green/70 tracking-widest uppercase">
              Flekkerøya, Kristiansand
            </span>
            <span className="hidden md:block w-px h-3 bg-soft-gray" />
            <a
              href="https://www.instagram.com/denlilleblomstergaarden/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[0.65rem] text-muted-green/70 tracking-widest uppercase hover:text-forest transition-colors duration-300"
            >
              @denlilleblomstergaarden
            </a>
            <span className="hidden md:block w-px h-3 bg-soft-gray" />
            <span className="font-sans text-[0.65rem] text-muted-green/70 tracking-widest uppercase">
              hei@blomstergarden.no
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-sans text-[0.6rem] text-muted-green/40 tracking-widest uppercase">
              &copy; 2025
            </span>
            <span className="hidden md:block w-px h-3 bg-soft-gray" />
            <a
              href="https://github.com/filipguz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[0.6rem] text-muted-green/40 tracking-widest uppercase hover:text-muted-green transition-colors duration-300"
            >
              Laget av filipguz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
