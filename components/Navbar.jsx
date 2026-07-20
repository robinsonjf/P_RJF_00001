export default function Navbar() {
  return (
    <nav className="flex z-50 fixed w-full pt-6 pr-4 pl-4 top-0 right-0 left-0 items-center justify-center">
      <div className="flex scroll-item scroll-fade-up bg-black/90 w-full max-w-5xl border-white/10 border rounded-full pt-1 pr-2 pb-1 pl-6 relative shadow-2xl backdrop-blur-md items-center justify-between min-h-[58px]">
        {/* Logo/Título */}
        <div className="z-10 flex items-center">
          <a className="font-oswald text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-white uppercase" href="#hero">
            Nós construímos o seu desejo<span className="text-blue-500">.</span>
          </a>
        </div>

        {/* Ação à Direita */}
        <div className="flex items-center gap-2 relative z-10">
          <a className="flex group transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.6),inset_0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] items-center justify-center bg-black/60 border-blue-500 border rounded-full pt-2.5 pr-4 md:pr-6 pb-2.5 pl-4 md:pl-6 shadow-[0_0_20px_rgba(59,130,246,0.5),inset_0_0_10px_rgba(59,130,246,0.2)]" href="https://wa.me/5521991733502" target="_blank" rel="noopener noreferrer">
            <span className="uppercase text-[11px] md:text-[13px] transition-colors group-hover:text-white font-semibold text-white/90 tracking-tight font-sans z-10 relative">Entre em contato</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
