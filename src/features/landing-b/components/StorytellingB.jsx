/**
 * StorytellingB — sección narrativa con video y stats, paleta Emerald/Cyan (variante B).
 */
export function StorytellingB() {
  const stats = [
    { value: '68%',    color: '#34d399', desc: 'de contratos en Lima tienen cláusulas abusivas' },
    { value: 'S/.800+', color: '#fff',   desc: 'cuesta una consulta de abogado tradicional' },
    { value: '<60s',   color: '#22d3ee', desc: 'tarda Firmix IA en auditar tu contrato completo' },
    { value: 'S/.29',  color: '#34d399', desc: 'mes vs miles en asesoría legal tradicional' },
  ];

  const steps = [
    {
      color: '#ef4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.2)',
      label: 'El Problema', labelColor: '#f87171',
      title: 'Miles de inquilinos pierden su garantía',
      desc: <>En Lima, el <strong style={{ color: '#fff' }}>68% de contratos de alquiler</strong> contienen al menos una cláusula abusiva. La mayoría de inquilinos las firma sin entenderlas porque están redactadas en lenguaje legal incomprensible.</>,
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      showLine: true,
    },
    {
      color: '#22d3ee', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.2)',
      label: 'La Chispa', labelColor: '#22d3ee',
      title: 'Un caso real que lo cambió todo',
      desc: <>Un compañero perdió <strong style={{ color: '#fff' }}>S/.3,500 de garantía</strong> por no notar que el contrato permitía al arrendador retenerla 90 días. Con un abogado habría costado más de S/.800 solo la consulta.</>,
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      showLine: true,
    },
    {
      color: '#10b981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)',
      label: 'La Solución', labelColor: '#34d399',
      title: 'Firmix IA: Tu abogado de bolsillo',
      desc: <>Democratizamos el acceso a la justicia legal para inquilinos. Con IA, cualquier peruano puede entender su contrato, proteger su garantía y firmar con seguridad. <strong style={{ color: '#34d399' }}>Desde S/.0.</strong></>,
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      showLine: false,
    },
  ];

  return (
    <section id="storytelling" style={{
      padding: '5rem 0',
      background: '#060911',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="blob-b" style={{ width: '600px', height: '600px', background: 'rgba(16,185,129,0.04)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 4rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '0.25rem 0.75rem', borderRadius: '9999px',
            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
            color: '#34d399', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
          }}>
            <span className="animate-pulse" style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', background: '#34d399', marginRight: '0.5rem' }} />
            Nuestra Historia
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2 }}>
            ¿Por qué nació <span className="text-gradient-emerald-cyan">Firmix IA</span>?
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '1.25rem', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.7, maxWidth: '36rem', margin: '1.25rem auto 0' }}>
            Una historia real de un inquilino que perdió su garantía por no leer una cláusula abusiva. Esto nos inspiró a crear la solución que todo peruano necesita.
          </p>
        </div>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem 4rem', alignItems: 'center', marginBottom: '5rem' }} className="story-main-grid">
          {/* Video */}
          <div>
            <div style={{
              position: 'relative', background: '#0d1117', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(16,185,129,0.15)',
              aspectRatio: '16/9',
            }}>
              <div className="film-grain" style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', borderRadius: '1rem', opacity: 0.04 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(16,185,129,0.05) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 1 }} />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 20, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  display: 'flex', alignItems: 'center', gap: '0.375rem',
                  padding: '0.25rem 0.625rem',
                  background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px',
                  fontSize: '0.625rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em',
                }}>
                  <span className="animate-pulse" style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', background: '#ef4444' }} />
                  Video
                </span>
              </div>
              <iframe
                src="https://drive.google.com/file/d/1AM_npGaESxKwz_D05ca6TrTzlO4LIs09/preview"
                width="100%" height="100%"
                style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allowFullScreen
                title="Firmix IA — Video Storytelling"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#64748b', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <svg style={{ width: '0.875rem', height: '0.875rem', color: '#34d399' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm12.553 1.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Video de presentación del equipo Firmix IA — UPC 2026
            </p>
          </div>

          {/* Narrative steps */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {steps.map(step => (
                <div key={step.label} className="story-step" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div className="story-step-dot" style={{
                      width: '3rem', height: '3rem', borderRadius: '1rem',
                      background: step.bg, border: `1px solid ${step.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: step.color, transition: 'all 0.3s',
                    }}>
                      <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                      </svg>
                    </div>
                    {step.showLine && (
                      <div className="story-timeline-line-b" style={{ width: '2px', height: '2rem', marginTop: '0.5rem' }} />
                    )}
                  </div>
                  <div style={{ paddingTop: '0.25rem' }}>
                    <span style={{ fontSize: '0.625rem', fontWeight: 700, color: step.labelColor, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{step.label}</span>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff', marginTop: '0.25rem' }}>{step.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.5rem', lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem', padding: '1.5rem 2rem',
          background: 'rgba(13,17,23,0.6)', border: '1px solid #1b263b',
          borderRadius: '1.5rem', backdropFilter: 'blur(8px)',
        }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.value} style={{
              textAlign: 'center',
              borderLeft: i > 0 && i % 2 !== 0 ? '1px solid #1b263b' : 'none',
            }}>
              <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontFamily: 'var(--font-display)', fontWeight: 800, color: s.color }}>{s.value}</div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.375rem', lineHeight: 1.4 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .story-main-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .stats-grid > div { border-left: 1px solid #1b263b !important; }
          .stats-grid > div:first-child { border-left: none !important; }
        }
      `}</style>
    </section>
  );
}
