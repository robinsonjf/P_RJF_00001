import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      <main id="hero" className="flex flex-col z-10 pt-40 pr-6 pl-6 relative items-center justify-center">
        {/* Headline */}
        <h1 className="text-center text-5xl md:text-7xl leading-[1.1] max-w-4xl mx-auto font-oswald font-light tracking-tight scroll-item scroll-blur-in delay-100">
          Presença Digital Profissional.{" "}
          <span className="font-light text-blue-500 tracking-tight font-oswald block md:inline">Sites que convertem.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-center text-lg md:text-xl text-gray-400 mt-8 max-w-3xl mx-auto leading-relaxed font-light font-sans scroll-item scroll-fade-up delay-200">
          Criação de landing pages, desenvolvimento e modernização de sites para empresas e profissionais liberais (médicos, dentistas, advogados, engenheiros, veterinários e mais). Destaque sua autoridade e alcance mais clientes com uma estrutura digital inteligente.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 scroll-item scroll-fade-up delay-300 mt-10 items-center">
          {/* Botão Primário Giratório (Beam Button) */}
          <a href="https://wa.me/5521991733502" target="_blank" rel="noopener noreferrer" className="group inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none sm:w-auto text-sm font-medium text-white w-full h-[54px] rounded-full pt-4 pr-8 pb-4 pl-8 relative items-center justify-center" style={{ position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', '--border-radius-before': '9999px' }}>
            <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)] animate-[beam-spin_3s_linear_infinite]"></div>
              <div className="absolute inset-[1px] rounded-full bg-[#050505]"></div>
            </div>
            <div className="overflow-hidden bg-[#0A0A0A] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
              <div className="bg-gradient-to-b from-blue-900/20 to-transparent absolute inset-0"></div>
              <div className="opacity-[0.07] mix-blend-plus-lighter absolute inset-0 animate-[lines-slide_1.5s_linear_infinite]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 8px)', backgroundSize: '24px 100%' }}></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/20 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/40"></div>
            </div>
            <span className="transition-colors group-hover:text-white uppercase font-semibold text-white/90 tracking-tight z-10 relative font-sans">Criar meu site</span>
            <svg className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1 w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7" />
            </svg>
          </a>

          {/* Botão Secundário (Glow Button) */}
          <a href="https://wa.me/5521991733502" target="_blank" rel="noopener noreferrer" className="sm:w-auto hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.6),inset_0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300 flex group text-base font-medium text-white bg-black/60 w-full border-blue-500 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(59,130,246,0.5),inset_0_0_10px_rgba(59,130,246,0.2)] items-center justify-center">
            <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors mr-2 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Falar pelo WhatsApp
          </a>
        </div>
      </main>

      {/* Espaçador do Footer */}
      <div className="h-32"></div>
    </div>
  );
}
