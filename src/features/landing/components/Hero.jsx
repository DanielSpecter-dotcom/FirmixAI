/**
 * Hero — sección principal de la landing page.
 * Composición asimétrica: copy a la izquierda, mascota + dock de confianza a la derecha.
 */
export function Hero() {
  const seals = [
    { icon: 'M6.267 3.455a.75.75 0 00-.708-.523H4.5a2 2 0 00-2 2v1.078a.75.75 0 00.379.65l6 3.464a.75.75 0 00.742 0l6-3.464a.75.75 0 00.379-.65V4.932a2 2 0 00-2-2h-1.059a.75.75 0 00-.708.523L10.25 7.036a.75.75 0 01-.5 0L6.267 3.455zM2.5 9.043v5.457a2 2 0 002 2h11a2 2 0 002-2V9.043l-6.75 3.9a1.75 1.75 0 01-1.5 0L2.5 9.043z', label: 'Validez Ley 27269' },
    { icon: 'M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2V7a5 5 0 00-5-5zM7 7a3 3 0 016 0v2H7V7z', label: 'Seguridad Bancaria' },
    { icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z', label: 'Cotejo RENIEC' },
    { icon: 'M2.166 4.9L10 1.154 17.834 4.9A2 2 0 0119 6.74v4.918a9.023 9.023 0 01-4.84 8.013L10 21l-4.16-2.329A9.023 9.023 0 011 11.658V6.74a2 2 0 011.166-1.84zM10 3.16L3 6.52v4.808c0 3.23 1.76 6.2 4.62 7.74l2.38 1.332 2.38-1.332C15.24 17.528 17 14.558 17 11.328V6.52L10 3.16z', label: 'Firma Encriptada' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '2.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
      }}
      className="bg-grid-pattern"
    >
      {/* Blobs */}
      <div className="blob" style={{ width: '500px', height: '500px', background: 'rgba(245,158,11,0.05)', top: '10%', right: '-8%' }} />
      <div className="blob" style={{ width: '350px', height: '350px', background: 'rgba(74,109,167,0.10)', top: '50%', left: '-6%' }} />

      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr',
          gap: '3rem', alignItems: 'center',
        }} className="hero-grid">

          {/* Copy column */}
          <div style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto' }} className="hero-copy">

            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '0.25rem 0.75rem', borderRadius: '9999px',
              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
              color: '#fbbf24', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem',
            }}>
              <span className="animate-pulse" style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', background: '#fbbf24', marginRight: '0.5rem' }} />
              Nueva versión disponible — Perú 2026
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4.2vw, 3.5rem)',
              color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.15,
            }}>
              La tranquilidad de alquilar seguro,{' '}
              <span className="text-gradient">en un solo toque</span>
            </h1>
            <p style={{
              marginTop: '1.5rem', fontSize: 'clamp(0.95rem, 1.6vw, 1.125rem)',
              color: '#94a3b8', fontWeight: 300, lineHeight: 1.7,
            }}>
              Audita contratos con Inteligencia Artificial, chatea con tu abogado de bolsillo 24/7
              y firma con validez jurídica absoluta. Protege tu garantía y evita estafas desde tu celular.
            </p>

            {/* CTAs */}
            <div style={{
              marginTop: '2rem',
              display: 'flex', flexWrap: 'wrap',
              alignItems: 'center', justifyContent: 'center', gap: '1rem',
            }} className="hero-cta-row">
              <a
                href="/app.html"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-primary"
                style={{
                  padding: '1rem 2rem',
                  background: '#f59e0b', color: '#0e131b',
                  fontWeight: 700, borderRadius: '1rem',
                  textDecoration: 'none', fontSize: '1rem',
                  boxShadow: '0 10px 15px -3px rgba(245,158,11,0.15)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#d97706'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Analizar Contrato Gratis (PDF)
              </a>
              <a
                href="#pricing"
                style={{
                  padding: '1rem 2rem',
                  border: '1px solid #2f446f',
                  background: 'rgba(13,17,23,0.5)',
                  color: '#fff', fontWeight: 600,
                  borderRadius: '1rem', textDecoration: 'none', fontSize: '1rem',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#385489'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#2f446f'}
              >
                Ver Planes desde S/.29
              </a>
            </div>
          </div>

          {/* Visual column — mascota + dock de confianza */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }} className="hero-visual">
            <video
              style={{ width: '15rem', height: '15rem', objectFit: 'contain' }}
              autoPlay loop muted playsInline preload="auto"
            >
              <source src="/img/FirmixAnimate.webm" type="video/webm" />
              <img src="/img/LogoFirmix2.png" alt="Firmix IA" />
            </video>

            <div style={{
              width: '100%', maxWidth: '22rem',
              padding: '1.25rem 1.5rem',
              background: 'rgba(13,17,23,0.45)',
              border: '1px solid rgba(27,38,59,0.8)',
              borderRadius: '1.25rem',
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem 1.25rem',
            }} className="trust-dock">
              {seals.map(seal => (
                <div key={seal.label} style={{
                  display: 'flex', alignItems: 'center',
                  gap: '0.5rem', color: '#94a3b8',
                }}>
                  <svg style={{ width: '1.125rem', height: '1.125rem', color: '#10b981', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={seal.icon} clipRule="evenodd" />
                  </svg>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                    {seal.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-copy, .hero-visual { min-width: 0; width: 100%; }
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; gap: 2.5rem !important; }
          .hero-copy { text-align: left !important; max-width: none !important; margin: 0 !important; }
          .hero-cta-row { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
