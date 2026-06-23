import { useState } from 'react';

/**
 * HeroB — Hero variante B.
 * Composición asimétrica: copy a la izquierda, dropzone interactivo (el diferenciador
 * de esta variante) a la derecha, en vez de apilado y centrado.
 * Paleta: Emerald/Cyan (sin cambios).
 */
export function HeroB() {
  // Estado: 'idle' | 'scanning' | 'result'
  const [uploadState, setUploadState] = useState('idle');
  const [progress, setProgress]       = useState(0);
  const [statusText, setStatusText]   = useState('Iniciando análisis semántico...');

  const simulateUpload = () => {
    setUploadState('scanning');
    setProgress(0);

    const steps = [
      { pct: 20, msg: 'Extrayendo texto del PDF...' },
      { pct: 45, msg: 'Analizando cláusulas con IA...' },
      { pct: 70, msg: 'Detectando patrones de riesgo...' },
      { pct: 90, msg: 'Generando reporte de riesgo...' },
      { pct: 100, msg: 'Análisis completado.' },
    ];

    let i = 0;
    const tick = () => {
      if (i >= steps.length) {
        setTimeout(() => setUploadState('result'), 300);
        return;
      }
      setProgress(steps[i].pct);
      setStatusText(steps[i].msg);
      i++;
      setTimeout(tick, 700);
    };
    setTimeout(tick, 300);
  };

  const reset = () => { setUploadState('idle'); setProgress(0); };

  const trustBadges = ['Cotejo RENIEC integrado', 'Validez Legal (Ley N° 27269)', 'Respaldo Indecopi Oficial'];

  return (
    <section style={{ position: 'relative', paddingTop: '2.5rem', paddingBottom: '5rem', overflow: 'hidden' }} className="bg-grid-pattern-dark">
      {/* Blobs */}
      <div className="blob-b" style={{ width: '500px', height: '500px', background: 'rgba(16,185,129,0.05)', top: '8%', left: '-8%' }} />
      <div className="blob-b" style={{ width: '350px', height: '350px', background: 'rgba(6,182,212,0.05)', top: '55%', right: '-6%' }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="herob-grid">

          {/* Copy column */}
          <div style={{ textAlign: 'center' }} className="herob-copy">

            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '0.25rem 0.75rem', borderRadius: '9999px',
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
              color: '#34d399', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem',
            }}>
              <span className="animate-pulse" style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', background: '#34d399', marginRight: '0.5rem' }} />
              Variación Estructural B — Perú 2026
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4.2vw, 3.5rem)',
              color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.5rem',
            }}>
              Alquila con tranquilidad. Evita estafas en tu contrato{' '}
              <span className="text-gradient-emerald-cyan">en 60 segundos</span>
            </h1>

            <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.125rem)', color: '#94a3b8', fontWeight: 300, lineHeight: 1.7, maxWidth: '34rem', margin: '0 auto' }} className="herob-lead">
              Usa nuestro escáner gratuito Scam Shield para auditar la letra pequeña, verificar penalidades y firmar digitalmente con validez legal.
            </p>

            {/* Trust badges */}
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', color: '#64748b', fontSize: '0.75rem' }} className="herob-trust">
              {trustBadges.map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#10b981', fontWeight: 700, fontSize: '0.875rem' }}>✓</span>
                  <span style={{ fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual column — Interactive Upload Card (A/B differentiator) */}
          <div className="herob-visual">
            <div style={{
              maxWidth: '32rem', margin: '0 auto',
              background: 'rgba(13,17,23,0.6)',
              border: '1px solid #1b263b',
              borderRadius: '1.5rem',
              padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(12px)',
              position: 'relative', zIndex: 10,
            }}>
              {/* IDLE state */}
              {uploadState === 'idle' && (
                <div
                  onClick={simulateUpload}
                  style={{
                    border: '2px dashed #2f446f', borderRadius: '1rem',
                    padding: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center',
                    cursor: 'pointer', transition: 'all 0.2s',
                    background: 'rgba(6,9,17,0.4)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; e.currentTarget.style.background = 'rgba(6,9,17,0.7)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#2f446f'; e.currentTarget.style.background = 'rgba(6,9,17,0.4)'; }}
                >
                  <div style={{
                    width: '3rem', height: '3rem',
                    background: 'rgba(16,185,129,0.1)', color: '#34d399',
                    borderRadius: '1rem', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', margin: '0 auto 0.875rem',
                    transition: 'transform 0.2s',
                  }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>Prueba el Scam Shield gratis al instante</h3>
                  <p style={{ fontSize: '0.6875rem', color: '#94a3b8', marginTop: '0.25rem', maxWidth: '18rem', margin: '0.25rem auto 0', lineHeight: 1.6 }}>
                    Haz clic aquí para "subir" un contrato de prueba en PDF y detectar cláusulas de riesgo de forma automática.
                  </p>
                  <span style={{
                    display: 'inline-flex', marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    background: '#10b981', color: '#0b0f19',
                    fontWeight: 700, fontSize: '0.6875rem',
                    borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(16,185,129,0.1)',
                  }}>
                    Seleccionar PDF de Prueba
                  </span>
                </div>
              )}

              {/* SCANNING state */}
              {uploadState === 'scanning' && (
                <div style={{ padding: '1.5rem 0', textAlign: 'center' }}>
                  <div style={{ width: '3rem', height: '3rem', background: 'rgba(16,185,129,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
                    <svg className="animate-spin" style={{ width: '1.5rem', height: '1.5rem', color: '#34d399' }} fill="none" viewBox="0 0 24 24">
                      <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>Escaneando contrato de alquiler...</h3>
                  <p style={{ fontSize: '0.6875rem', color: '#34d399', fontWeight: 600, marginTop: '0.25rem' }}>{statusText}</p>
                  <div style={{ maxWidth: '18rem', margin: '1rem auto 0', background: '#060911', height: '0.375rem', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{
                      background: 'linear-gradient(to right, #10b981, #06b6d4)',
                      height: '100%', borderRadius: '9999px',
                      width: `${progress}%`, transition: 'width 0.3s',
                    }} />
                  </div>
                </div>
              )}

              {/* RESULT state */}
              {uploadState === 'result' && (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', background: 'rgba(127,29,29,0.2)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '0.5rem', padding: '0.5rem 0.75rem' }}>
                    <span className="animate-ping" style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                    <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Análisis: Contrato de Alto Riesgo</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    La IA ha detectado cláusulas de riesgo en el borrador de alquiler. Aquí tienes un adelanto:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', marginBottom: '1rem' }}>
                    {[
                      { title: '⚠️ Penalidad Diaria por Mora Excesiva', desc: 'Se estipulan S/.150 diarios. La ley peruana prohíbe usura contractual.', tag: 'Crítico' },
                      { title: '⚠️ Plazo Ilegal para Devolución de Garantía', desc: 'Establece 90 días de plazo. El Código Civil peruano prevé un estándar de 30 días.', tag: 'Crítico' },
                    ].map(item => (
                      <div key={item.title} style={{ padding: '0.625rem', background: 'rgba(127,29,29,0.2)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '0.75rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                        <div>
                          <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#fca5a5' }}>{item.title}</div>
                          <div style={{ fontSize: '0.625rem', color: '#94a3b8', marginTop: '0.25rem', lineHeight: 1.5 }}>{item.desc}</div>
                        </div>
                        <span style={{ fontSize: '0.5rem', fontWeight: 700, background: 'rgba(127,29,29,0.3)', color: '#f87171', padding: '0.125rem 0.375rem', borderRadius: '0.25rem', textTransform: 'uppercase', flexShrink: 0 }}>{item.tag}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <a href="/app.html" target="_blank" rel="noopener noreferrer" style={{
                      flex: 1, minWidth: '10rem', padding: '0.75rem 1.25rem',
                      background: '#10b981', color: '#0b0f19',
                      fontWeight: 700, textAlign: 'center', fontSize: '0.75rem',
                      borderRadius: '0.75rem', textDecoration: 'none',
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                      boxShadow: '0 4px 6px -1px rgba(16,185,129,0.1)',
                    }}>
                      Ver Reporte Completo en la App
                    </a>
                    <button onClick={reset} style={{
                      padding: '0.75rem 1rem',
                      border: '1px solid #2f446f', background: 'transparent',
                      color: '#cbd7e9', fontWeight: 700, fontSize: '0.75rem',
                      borderRadius: '0.75rem', cursor: 'pointer',
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                      transition: 'background 0.2s',
                    }}>
                      Volver a Escanear
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .herob-copy, .herob-visual { min-width: 0; width: 100%; }
        @media (min-width: 1024px) {
          .herob-grid { grid-template-columns: 0.95fr 1.05fr !important; gap: 2.5rem !important; }
          .herob-copy { text-align: left !important; }
          .herob-lead { margin: 0 !important; }
          .herob-trust { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
