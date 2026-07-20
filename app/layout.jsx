import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'lab3dia — Presença Digital Profissional.',
  description: 'Criação de landing pages, desenvolvimento e modernização de sites para empresas e profissionais liberais.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oswald:wght@200;300;400;500;600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden text-white bg-[#000000]">
        {/* Efeito de Background WebGL do Unicorn Studio */}
        <div
          className="aura-background-component -z-10 w-full top-0 absolute h-[800px] saturate-150 brightness-125 pointer-events-none"
          data-alpha-mask="50"
          style={{
            maskImage: 'linear-gradient(transparent, black 0%, black 50%, transparent)',
            WebkitMaskImage: 'linear-gradient(transparent, black 0%, black 50%, transparent)'
          }}
        >
          <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
            <div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>
            <Script id="unicorn-studio-script" strategy="lazyOnload">
              {`
                !function () { if (!window.UnicornStudio) { window.UnicornStudio = { isInitialized: !1 }; var i = document.createElement("script"); i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js", i.onload = function () { window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0) }, (document.head || document.body).appendChild(i) } }();
              `}
            </Script>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
