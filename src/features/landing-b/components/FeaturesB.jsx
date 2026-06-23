/**
 * FeaturesB — Cards de funcionalidades variante B.
 * Diferencias: paleta Emerald/Cyan, tags de dolor resuelto en cada card, hover más pronunciado.
 */
export function FeaturesB() {
  const cards = [
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      color: '#f87171', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.2)',
      title: 'Protección real de tu garantía',
      desc:  'Detecta cláusulas abusivas de retención de garantía y obtén sugerencias basadas en el Código Civil para negociar con el propietario.',
      tag:   'Resuelve Miedo a Estafas',   tagColor: '#f87171', tagBg: 'rgba(239,68,68,0.1)',
    },
    {
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      color: '#22d3ee', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.2)',
      title: 'Traducción legal simple',
      desc:  'La IA desglosa la jerga legal compleja en viñetas comprensibles de lenguaje natural para que firmes entendiendo cada palabra.',
      tag:   'Evita Frustración Jurídica', tagColor: '#22d3ee', tagBg: 'rgba(6,182,212,0.1)',
    },
    {
      icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
      color: '#34d399', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)',
      title: 'Firma Biométrica One-Tap',
      desc:  'Formaliza acuerdos válidos ante tribunales con firmas digitales cifradas mediante biometría de RENIEC desde tu celular.',
      tag:   'Elimina Burocracia Notarial', tagColor: '#34d399', tagBg: 'rgba(16,185,129,0.1)',
    },
  ];

  return (
    <section id="features" style={{ padding: '5rem 0', background: 'rgba(6,9,17,0.4)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 4rem' }}>
          <span style={{
            fontSize: '0.75rem', fontWeight: 700, color: '#34d399',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            background: 'rgba(16,185,129,0.1)', padding: '0.25rem 0.75rem',
            borderRadius: '9999px', border: '1px solid rgba(16,185,129,0.2)',
          }}>Dolores Resueltos</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#fff', marginTop: '1rem' }}>
            Solucionamos los dolores del inquilino moderno
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '0.75rem', fontWeight: 300, fontSize: '0.875rem' }}>
            Diseñado para jóvenes independientes en Lima Metropolitana que exigen agilidad y total seguridad jurídica.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="features-b-grid">
          {cards.map(card => (
            <div
              key={card.title}
              className="feature-card-b"
              style={{
                background: 'rgba(13,17,23,0.3)', border: '1px solid rgba(27,38,59,0.8)',
                padding: '2rem', borderRadius: '1.5rem',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(27,38,59,0.8)'}
            >
              <div>
                <div style={{
                  width: '3rem', height: '3rem',
                  background: card.bg, color: card.color,
                  border: `1px solid ${card.border}`,
                  borderRadius: '1rem', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                }}>
                  <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff' }}>{card.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.75rem', lineHeight: 1.7, fontWeight: 300 }}>{card.desc}</p>
              </div>
              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(27,38,59,0.6)' }}>
                <span style={{ fontSize: '0.75rem', color: card.tagColor, fontWeight: 700, background: card.tagBg, padding: '0.25rem 0.625rem', borderRadius: '0.375rem' }}>
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .features-b-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
