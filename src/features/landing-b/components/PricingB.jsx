/**
 * PricingB — 3 planes de suscripción, paleta Emerald/Cyan (variante B).
 */
export function PricingB() {
  const plans = [
    {
      name: 'Plan Freemium',
      sub:  'Ideal para probar la IA',
      price: 'S/.0',
      period: '/ único',
      cta:    'Probar Gratis',
      highlight: false,
      features: [
        { ok: true,  label: '3 Escaneos Scam Shield gratuitos' },
        { ok: true,  label: 'Reporte de Riesgos Encontrados' },
        { ok: false, label: 'Abogado IA ilimitado' },
        { ok: false, label: 'Firma Digital Certificada' },
      ],
    },
    {
      name: 'Plan AI Premium',
      sub:  'Tranquilidad Absoluta',
      price: 'S/.29',
      period: '/ mensual',
      cta:    'Obtener Plan Premium',
      highlight: true,
      badge:  'Más Popular',
      features: [
        { ok: true, label: 'Escaneos ilimitados Scam Shield' },
        { ok: true, label: 'Traducción completa a lenguaje simple' },
        { ok: true, label: 'Abogado IA Chatbot ilimitado 24/7' },
        { ok: true, label: 'Firma Digital Certificada RENIEC' },
        { ok: true, label: 'Smart Vault de contratos y recibos' },
      ],
    },
    {
      name: 'Plan Inmobiliario / Anual',
      sub:  'Para arrendadores seriales',
      price: 'S/.69',
      period: '/ mensual',
      cta:    'Obtener Plan Anual',
      highlight: false,
      features: [
        { ok: true, label: 'Hasta 5 propiedades administradas' },
        { ok: true, label: 'Todo lo del Plan Premium incluido' },
        { ok: true, label: 'Reporte financiero histórico' },
        { ok: true, label: 'Integración Yape/Plin automatizada' },
      ],
    },
  ];

  return (
    <section id="pricing" style={{
      padding: '4rem 0',
      background: '#060911',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="blob-b" style={{ width: '400px', height: '400px', background: 'rgba(16,185,129,0.05)', top: '50%', left: '25%' }} />

      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 4rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Precios Transparentes
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#fff', marginTop: '0.5rem' }}>
            Planes a tu medida para alquilar con paz mental
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '1rem', fontWeight: 300, fontSize: '0.9rem' }}>
            Ahorra miles de soles en abogados tradicionales. Elige el plan ideal para tu alquiler.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'stretch' }} className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                background: plan.highlight ? '#0d1117' : 'rgba(13,17,23,0.3)',
                border: `${plan.highlight ? '2' : '1'}px solid ${plan.highlight ? '#10b981' : '#1b263b'}`,
                borderRadius: '1.5rem',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                position: 'relative',
                boxShadow: plan.highlight ? '0 0 20px -5px rgba(16,185,129,0.4)' : 'none',
                transform: plan.highlight ? 'translateY(-1rem)' : 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { if (!plan.highlight) e.currentTarget.style.borderColor = '#2f446f'; }}
              onMouseLeave={e => { if (!plan.highlight) e.currentTarget.style.borderColor = '#1b263b'; }}
            >
              {plan.badge && (
                <div style={{
                  position: 'absolute', top: 0, right: '50%', transform: 'translate(50%, -50%)',
                  background: 'linear-gradient(to right, #10b981, #06b6d4)',
                  color: '#0b0f19', fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em',
                  padding: '0.375rem 1rem', borderRadius: '9999px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.2)',
                }}>{plan.badge}</div>
              )}
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff' }}>{plan.name}</h4>
                <p style={{ fontSize: '0.75rem', color: plan.highlight ? '#34d399' : '#64748b', marginTop: '0.25rem', fontWeight: plan.highlight ? 600 : 400 }}>{plan.sub}</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontSize: '2.25rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff' }}>{plan.price}</span>
                  <span style={{ fontSize: '0.75rem', color: plan.highlight ? '#94a3b8' : '#64748b' }}>{plan.period}</span>
                </div>
                <ul style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: plan.highlight ? '#cbd7e9' : '#94a3b8', listStyle: 'none' }}>
                  {plan.features.map(f => (
                    <li key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <svg style={{ width: '1rem', height: '1rem', color: f.ok ? '#34d399' : '#4b5563', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {f.ok
                          ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                        }
                      </svg>
                      <span style={{ textDecoration: f.ok ? 'none' : 'line-through', color: f.ok ? 'inherit' : '#4b5563' }}>{f.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/app.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '2rem', display: 'block', width: '100%',
                  padding: '1rem', textAlign: 'center',
                  background: plan.highlight ? 'linear-gradient(to right, #10b981, #06b6d4)' : 'rgba(13,17,23,0.5)',
                  border: plan.highlight ? 'none' : '1px solid #2f446f',
                  color: plan.highlight ? '#0b0f19' : '#fff',
                  fontWeight: 700, fontSize: '0.875rem',
                  borderRadius: '1rem', textDecoration: 'none',
                  textTransform: plan.highlight ? 'uppercase' : 'none',
                  letterSpacing: plan.highlight ? '0.05em' : 0,
                  transition: 'all 0.2s',
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .pricing-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
