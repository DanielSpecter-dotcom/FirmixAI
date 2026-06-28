/**
 * TestimonialsB — 3 tarjetas de testimonios reales, paleta Emerald/Cyan (variante B).
 */
export function TestimonialsB() {
  const items = [
    {
      stars: 5,
      quote: '"Estaba a punto de alquilar un departamento en Lince. Subí el contrato a Firmix y la IA me alertó que el dueño me cobraría una multa de S/.200 diarios si me retrasaba un solo día. ¡Me salvé de pagar de más!"',
      initials: 'DA', gradFrom: '#4a6da7', gradTo: '#10b981',
      name: 'Daniel Alarcón',
      role: '28 años, Diseñador · Lince',
    },
    {
      stars: 5,
      quote: '"Toda mi vida me dio flojera la burocracia notarial. Con Firmix pudimos firmar mi dueña y yo usando biometría facial desde el celular. El contrato se selló en 5 minutos y es totalmente legal ante un juez."',
      initials: 'MB', gradFrom: '#4a6da7', gradTo: '#06b6d4',
      name: 'María Beltrán',
      role: '31 años, Arquitecta · Surco',
    },
    {
      stars: 5,
      quote: '"La Bóveda Digital me encanta. Registro mis transferencias mensuales y me genera un reporte de buen pagador avalado. Gracias a esto apliqué confiablemente a mi segundo departamento."',
      initials: 'JC', gradFrom: '#10b981', gradTo: '#06b6d4',
      name: 'Juan Carlos Vega',
      role: '26 años, Programador · Magdalena',
    },
  ];

  return (
    <section id="testimonials" style={{
      padding: '4rem 0',
      background: 'rgba(13,17,23,0.2)',
      borderTop: '1px solid rgba(13,17,23,0.6)',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 4rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Opiniones Reales
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#fff', marginTop: '0.5rem' }}>
            Salvados de estafas por Firmix IA
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '1rem', fontWeight: 300, fontSize: '0.9rem' }}>
            Conoce la experiencia de inquilinos jóvenes en Lima que tomaron el control de su seguridad legal.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="testimonials-grid">
          {items.map(t => (
            <div
              key={t.name}
              style={{
                padding: '1.5rem',
                background: 'rgba(13,17,23,0.4)',
                border: '1px solid #1b263b',
                borderRadius: '1rem',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(16,185,129,0.2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1b263b'}
            >
              {/* Stars */}
              <div style={{ color: '#34d399', marginBottom: '1rem', fontSize: '1.125rem' }}>
                {'★'.repeat(t.stars)}
              </div>
              <p style={{ fontSize: '0.875rem', color: '#cbd7e9', fontStyle: 'italic', lineHeight: 1.7 }}>{t.quote}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '2.25rem', height: '2.25rem', borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.gradFrom}, ${t.gradTo})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 800, color: '#fff',
                }}>
                  {t.initials}
                </div>
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>{t.name}</h3>
                  <p style={{ fontSize: '0.6875rem', color: '#64748b' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
