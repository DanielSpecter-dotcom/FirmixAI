/**
 * Features — cards de funcionalidades resueltas.
 */
export function Features() {
  const cards = [
    {
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      color: '#ef4444', bg: 'rgba(239,68,68,0.1)',
      title: 'Adiós al miedo de perder la garantía',
      desc: 'Nuestra IA resalta inmediatamente cláusulas abusivas de retención de garantía y te provee del marco legal peruano para exigir tu dinero de vuelta.',
    },
    {
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      color: '#f59e0b', bg: 'rgba(245,158,11,0.1)',
      title: 'Traducción a lenguaje humano',
      desc: 'Evita leer páginas repletas de jerga legal incomprensible. La IA traduce todo a viñetas simples en menos de 60 segundos.',
    },
    {
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      color: '#10b981', bg: 'rgba(16,185,129,0.1)',
      title: 'Seguridad legal en un toque ("One-Tap")',
      desc: 'Formaliza contratos válidos ante notarios y juzgados mediante firma digital con biometría facial de RENIEC sin salir de casa.',
    },
  ];

  return (
    <section id="features" className="py-16 bg-navy-950/25 border-t border-b border-navy-900/60 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Dolores Resueltos
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2">
            La respuesta digital a la burocracia de alquileres
          </h2>
          <p className="text-slate-400 mt-4 font-light text-sm sm:text-base">
            Diseñado para jóvenes independientes en Lima Metropolitana que valoran su paz mental y su dinero.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(card => (
            <div
              key={card.title}
              className="feature-card p-6 bg-navy-900/40 border border-navy-800 hover:border-amber-500/30 rounded-2xl transition-all duration-200"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: card.bg, color: card.color }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
