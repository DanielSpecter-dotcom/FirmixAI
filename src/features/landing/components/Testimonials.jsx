/**
 * Testimonials — 3 tarjetas de testimonios reales.
 */
export function Testimonials() {
  const items = [
    {
      stars: 5,
      quote: '"Estaba a punto de alquilar un departamento en Lince. Subí el contrato a Firmix y la IA me alertó que el dueño me cobraría una multa de S/.200 diarios si me retrasaba un solo día. ¡Me salvé de pagar de más!"',
      initials: 'DA', gradFrom: '#4a6da7', gradTo: '#f59e0b',
      name: 'Daniel Alarcón',
      role: '28 años, Diseñador · Lince',
    },
    {
      stars: 5,
      quote: '"Toda mi vida me dio flojera la burocracia notarial. Con Firmix pudimos firmar mi dueña y yo usando biometría facial desde el celular. El contrato se selló en 5 minutos y es totalmente legal ante un juez."',
      initials: 'MB', gradFrom: '#4a6da7', gradTo: '#10b981',
      name: 'María Beltrán',
      role: '31 años, Arquitecta · Surco',
    },
    {
      stars: 5,
      quote: '"La Bóveda Digital me encanta. Registro mis transferencias mensuales y me genera un reporte de buen pagador avalado. Gracias a esto apliqué confiablemente a mi segundo departamento."',
      initials: 'JC', gradFrom: '#f59e0b', gradTo: '#10b981',
      name: 'Juan Carlos Vega',
      role: '26 años, Programador · Magdalena',
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-navy-950/20 border-t border-navy-900/60">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Opiniones Reales
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2">
            Salvados de estafas por Firmix IA
          </h2>
          <p className="text-slate-400 mt-4 font-light text-sm sm:text-base">
            Conoce la experiencia de inquilinos jóvenes en Lima que tomaron el control de su seguridad legal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(t => (
            <div
              key={t.name}
              className="p-6 bg-navy-900/40 border border-navy-800 hover:border-amber-500/20 rounded-2xl transition-all duration-200"
            >
              {/* Stars */}
              <div className="text-amber-500 mb-4 text-lg">
                {'★'.repeat(t.stars)}
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div 
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.gradFrom}, ${t.gradTo})` }}
                >
                  {t.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-none">{t.name}</h3>
                  <p className="text-[11px] text-slate-500 mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
