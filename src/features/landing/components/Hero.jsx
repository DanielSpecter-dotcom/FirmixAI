/**
 * Hero — sección principal de la landing page.
 * Composición asimétrica: copy a la izquierda, mascota + dock de confianza a la derecha.
 */
export function Hero() {
  const seals = [
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      label: 'Validez Ley 27269',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      label: 'Seguridad Bancaria',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      label: 'Cotejo RENIEC',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      label: 'Firma Encriptada',
    },
  ];

  return (
    <section className="relative pt-10 pb-20 overflow-hidden bg-grid-pattern">
      {/* Blobs */}
      <div className="blob w-[500px] h-[500px] bg-amber-500/5 top-[10%] right-[-8%]" />
      <div className="blob w-[350px] h-[350px] bg-navy-500/10 top-[50%] left-[-6%]" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

          {/* Copy column */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

            {/* Eyebrow */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wider uppercase mb-6">
              <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-amber-400 mr-2 inline-block" />
              Nueva versión disponible — Perú 2026
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              La tranquilidad de alquilar seguro,{' '}
              <span className="text-gradient">en un solo toque</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
              Audita contratos con Inteligencia Artificial, chatea con tu abogado de bolsillo 24/7
              y firma con validez jurídica absoluta. Protege tu garantía y evita estafas desde tu celular.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/app.html"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-primary"
                className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-navy-950 font-bold rounded-2xl text-center shadow-lg shadow-amber-500/15 transition-all duration-200 hover:-translate-y-0.5"
              >
                Analizar Contrato Gratis (PDF)
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 border border-navy-700 bg-navy-900/50 hover:border-navy-500 text-white font-semibold rounded-2xl text-center transition-all duration-200"
              >
                Ver Planes desde S/.29
              </a>
            </div>
          </div>

          {/* Visual column — mascota + dock de confianza */}
          <div className="flex flex-col items-center gap-7">
            <video
              className="w-52 h-52 sm:w-60 sm:h-60 object-contain"
              autoPlay loop muted playsInline preload="auto"
            >
              <source src="/img/FirmixAnimate.webm" type="video/webm" />
              <img src="/img/LogoFirmix2.png" alt="Firmix IA" />
            </video>

            {/* Trust seals grid */}
            <div className="w-full max-w-sm px-5 py-4 bg-navy-900 border border-navy-700/60 rounded-2xl grid grid-cols-2 gap-x-6 gap-y-4 shadow-lg">
              {seals.map(seal => (
                <div key={seal.label} className="flex items-center gap-2.5 text-slate-300">
                  {seal.icon}
                  <span className="text-[11px] font-semibold tracking-wide leading-tight">
                    {seal.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
