export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-soft-gray bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-serif text-forest text-sm tracking-widest">
            Den lille blomstergården
          </span>

          <div className="flex items-center gap-6 md:gap-10">
            <span className="font-sans text-[0.65rem] text-muted-green/70 tracking-widest uppercase">
              Stavanger, Norge
            </span>
            <span className="hidden md:block w-px h-3 bg-soft-gray" />
            <span className="font-sans text-[0.65rem] text-muted-green/70 tracking-widest uppercase">
              @denlilleblomstergarden
            </span>
            <span className="hidden md:block w-px h-3 bg-soft-gray" />
            <span className="font-sans text-[0.65rem] text-muted-green/70 tracking-widest uppercase">
              hei@blomstergarden.no
            </span>
          </div>

          <span className="font-sans text-[0.6rem] text-muted-green/40 tracking-widest uppercase">
            &copy; 2025
          </span>
        </div>
      </div>
    </footer>
  )
}
