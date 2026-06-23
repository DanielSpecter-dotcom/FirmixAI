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
    <section id="features" style={{
      padding: '4rem 0',
      background: 'rgba(13,17,23,0.25)',
      borderTop: '1px solid rgba(13,17,23,0.6)',
      borderBottom: '1px solid rgba(13,17,23,0.6)',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 4rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Dolores Resueltos
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#fff', marginTop: '0.5rem' }}>
            La respuesta digital a la burocracia de alquileres
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '1rem', fontWeight: 300, fontSize: '0.9rem' }}>
            Diseñado para jóvenes independientes en Lima Metropolitana que valoran su paz mental y su dinero.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="features-grid">
          {cards.map(card => (
            <div
              key={card.title}
              className="feature-card"
              style={{
                padding: '1.5rem',
                background: 'rgba(13,17,23,0.4)',
                border: '1px solid #1b263b',
                borderRadius: '1rem',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1b263b'}
            >
              <div style={{
                width: '3rem', height: '3rem',
                background: card.bg, color: card.color,
                borderRadius: '0.75rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff' }}>{card.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.75rem', lineHeight: 1.7 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .features-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
