import { useState } from 'react';
import { useDemoSlideshow } from '../hooks/useDemoSlideshow';

const FEATURES = [
  {
    id: 0,
    title: '1. Scam Shield — Escudo Anti-Estafas',
    desc: 'Detecta cláusulas abusivas con semáforo de riesgo en menos de 60 segundos.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    id: 1,
    title: '2. Abogado IA 24/7',
    desc: 'Chat legal en tiempo real con respuestas basadas en el Código Civil peruano.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    premium: false,
  },
  {
    id: 2,
    title: '3. Smart Vault — Bóveda Segura',
    desc: 'Almacena contratos y recibos con cifrado militar y registro en Blockchain.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    premium: true,
  },
  {
    id: 3,
    title: '4. Firma Digital Biométrica',
    desc: 'Firma con cotejo biométrico RENIEC y sellado de tiempo oficial Indecopi.',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    premium: true,
  },
];

export function DemoSlideshow() {
  const { currentSlide, goToSlide } = useDemoSlideshow();

  return (
    <section id="demo" style={{
      padding: '4rem 0',
      background: 'rgba(13,17,23,0.25)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="blob" style={{ width: '400px', height: '400px', background: 'rgba(245,158,11,0.05)', top: '50%', right: 0 }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Vista Previa del App
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#fff', marginTop: '0.5rem' }}>
            Todo lo que necesitas, en un solo lugar
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '0.75rem', fontSize: '0.9rem', fontWeight: 300, maxWidth: '36rem', margin: '0.75rem auto 0' }}>
            Explora las 4 herramientas que convierten Firmix IA en el escudo legal más completo para inquilinos en Lima.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr',
          gap: '3rem', alignItems: 'center',
        }} className="demo-grid">

          {/* Feature Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FEATURES.map(f => {
              const active = currentSlide === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => goToSlide(f.id)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '1.25rem',
                    borderRadius: '1rem',
                    border: `1px solid ${active ? '#f59e0b' : '#1b263b'}`,
                    background: active ? 'rgba(27,38,59,0.6)' : 'transparent',
                    boxShadow: active ? '0 0 20px -5px rgba(56,84,137,0.5)' : 'none',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'flex-start', gap: '1rem',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{
                    padding: '0.75rem', borderRadius: '0.75rem',
                    background: active ? 'rgba(245,158,11,0.1)' : '#1b263b',
                    color: active ? '#fbbf24' : '#94a3b8',
                    flexShrink: 0,
                  }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{f.title}</h4>
                      {f.premium && (
                        <span style={{
                          fontSize: '0.5rem', background: 'rgba(245,158,11,0.15)',
                          color: '#fbbf24', fontWeight: 800, padding: '0.125rem 0.5rem',
                          borderRadius: '0.25rem', border: '1px solid rgba(245,158,11,0.3)',
                          letterSpacing: '0.05em', flexShrink: 0,
                        }}>PREMIUM</span>
                      )}
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>{f.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Phone Mockup */}
          <PhoneMockup currentSlide={currentSlide} goToSlide={goToSlide} />
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .demo-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function PhoneMockup({ currentSlide, goToSlide }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Phone frame */}
      <div style={{
        position: 'relative', width: '100%', maxWidth: '300px', height: '580px',
        background: '#0d1117', border: '7px solid #1b263b',
        borderRadius: '44px', boxShadow: '0 30px 60px -12px rgba(6,9,14,0.7)',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
      }}>
        {/* Status bar */}
        <div style={{
          background: '#0d1117', padding: '0.75rem 1.25rem 0.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: '0.75rem', fontWeight: 700, color: '#fff', flexShrink: 0,
          position: 'relative',
        }}>
          <span>10:00</span>
          <div style={{ position: 'absolute', top: '0.5rem', left: '50%', transform: 'translateX(-50%)', width: '6rem', height: '1rem', background: '#000', borderRadius: '9999px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{ fontSize: '0.625rem' }}>5G</span>
            <div style={{ width: '1.25rem', height: '0.625rem', border: '1px solid rgba(255,255,255,0.6)', borderRadius: '2px', padding: '1px', display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '0.875rem', height: '100%', background: '#fff', borderRadius: '1px' }} />
            </div>
          </div>
        </div>

        {/* App header */}
        <div style={{
          background: 'rgba(27,38,59,0.9)', borderBottom: '1px solid rgba(47,68,111,0.6)',
          padding: '0.75rem 1rem', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <img src="/img/LogoFirmix2.png" style={{ width: '1rem', height: '1rem', objectFit: 'contain' }} alt="Firmix" />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '0.875rem' }}>FIRMIX IA</span>
          </div>
          <span style={{
            fontSize: '0.625rem', background: 'rgba(245,158,11,0.1)',
            color: '#fbbf24', fontWeight: 700, padding: '0.125rem 0.5rem',
            borderRadius: '9999px', border: '1px solid rgba(245,158,11,0.2)',
          }}>DEMO</span>
        </div>

        {/* Slides */}
        <div style={{ flex: 1, background: '#060911', overflow: 'hidden', position: 'relative' }}>
          <Slide0 active={currentSlide === 0} />
          <Slide1 active={currentSlide === 1} />
          <Slide2 active={currentSlide === 2} />
          <Slide3 active={currentSlide === 3} />
        </div>

        {/* Bottom Nav */}
        <div style={{
          background: '#0d1117', borderTop: '1px solid rgba(27,38,59,0.8)',
          padding: '0.5rem 0.25rem', display: 'flex', justifyContent: 'space-around',
          alignItems: 'center', flexShrink: 0,
        }}>
          {[
            { i: 0, label: 'Escudo', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { i: 1, label: 'Chat IA', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
            { i: 2, label: 'Bóveda', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
            { i: 3, label: 'Firma',   icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
          ].map(btn => (
            <button key={btn.i} onClick={() => goToSlide(btn.i)} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1,
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: currentSlide === btn.i ? '#f59e0b' : '#64748b',
            }}>
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d={btn.icon} />
              </svg>
              <span style={{ fontSize: '0.4375rem', fontWeight: 700, marginTop: '0.125rem', textTransform: 'uppercase' }}>{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Home indicator */}
        <div style={{ background: '#0d1117', paddingBottom: '0.5rem', paddingTop: '0.25rem', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ width: '6rem', height: '0.25rem', background: 'rgba(255,255,255,0.4)', borderRadius: '9999px' }} />
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
        {[0,1,2,3].map(i => (
          <span key={i} className={`slide-dot${currentSlide === i ? ' active' : ''}`} style={{
            height: '0.5rem',
            width: currentSlide === i ? '1.25rem' : '0.5rem',
            background: currentSlide === i ? '#f59e0b' : '#1b263b',
            borderRadius: '9999px',
            transition: 'all 0.3s',
            display: 'block',
          }} />
        ))}
      </div>

      {/* CTA */}
      <a href="/app.html" target="_blank" rel="noopener noreferrer" style={{
        marginTop: '1.5rem',
        padding: '0.875rem 2rem',
        background: '#f59e0b', color: '#0e131b',
        fontWeight: 700, borderRadius: '1rem',
        textDecoration: 'none', fontSize: '0.875rem',
        textTransform: 'uppercase', letterSpacing: '0.1em',
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(245,158,11,0.2)',
        transition: 'all 0.2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.background = '#d97706'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        <span>Probar la App Gratis</span>
        <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  );
}

/* ── Individual Slides ── */

function Slide0({ active }) {
  return (
    <div className={`slide${active ? ' active' : ''}`} style={{ flexDirection: 'column', padding: '1rem', height: '100%' }}>
      <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '0.75rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
        <svg style={{ width: '1rem', height: '1rem', color: '#f59e0b' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Scam Shield — Reporte
      </h3>
      {/* Score Card */}
      <div style={{ padding: '0.75rem', background: '#0d1117', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.875rem' }}>
          28 <span style={{ fontSize: '0.4375rem', color: '#94a3b8', marginTop: '-2px' }}>SCORE</span>
        </div>
        <div>
          <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#fff' }}>Contrato Abusivo — Lince</p>
          <p style={{ fontSize: '0.625rem', color: '#64748b' }}>27 de Mayo, 2026</p>
        </div>
      </div>
      {/* Risk items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {[
          { color: '#ef4444', bg: 'rgba(127,29,29,0.2)', title: 'Penalidad Diaria Excesiva', desc: 'S/.150 diarios por mora. Esto es abusivo y supera el 150% del valor diario del alquiler.' },
          { color: '#f59e0b', bg: 'rgba(120,53,15,0.2)', title: 'Retención Ilícita de Garantía', desc: '90 días para devolver garantía. El estándar legal es 30 días.' },
          { color: '#ef4444', bg: 'rgba(127,29,29,0.2)', title: 'Desalojo sin Orden Judicial', desc: 'Cláusula ilegal. Viola el artículo 2 de la Constitución peruana.' },
        ].map(item => (
          <div key={item.title} style={{ padding: '0.625rem', background: item.bg, border: `1px solid ${item.color}33`, borderRadius: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
              <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: item.color, display: 'inline-block' }} />
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#fff' }}>{item.title}</span>
            </div>
            <p style={{ fontSize: '0.625rem', color: '#94a3b8', lineHeight: 1.5 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide1({ active }) {
  return (
    <div className={`slide${active ? ' active' : ''}`} style={{ flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', overflow: 'hidden' }}>
        {/* Bot */}
        <div style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
          <div style={{ padding: '0.75rem', background: '#0d1117', border: '1px solid #1b263b', borderRadius: '1rem', borderTopLeftRadius: 0, fontSize: '0.6875rem', color: '#e2e8f0', lineHeight: 1.6 }}>
            ¡Hola! 🛡️ Soy tu Abogado Digital 24/7. ¿Tienes dudas sobre tu contrato de alquiler en Lima?
          </div>
          <span style={{ fontSize: '0.5625rem', color: '#334155', marginTop: '0.25rem', display: 'block' }}>10:00 AM</span>
        </div>
        {/* User */}
        <div style={{ alignSelf: 'flex-end', maxWidth: '85%' }}>
          <div style={{ padding: '0.75rem', background: '#f59e0b', color: '#0e131b', borderRadius: '1rem', borderTopRightRadius: 0, fontSize: '0.6875rem', fontWeight: 500, lineHeight: 1.6 }}>
            ¿El dueño puede ingresar sin mi permiso?
          </div>
          <span style={{ fontSize: '0.5625rem', color: '#334155', marginTop: '0.25rem', display: 'block', textAlign: 'right' }}>10:01 AM</span>
        </div>
        {/* Bot reply */}
        <div style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
          <div style={{ padding: '0.75rem', background: '#0d1117', border: '1px solid #1b263b', borderRadius: '1rem', borderTopLeftRadius: 0, fontSize: '0.6875rem', color: '#e2e8f0', lineHeight: 1.6 }}>
            ¡No! El artículo 2 de la Constitución peruana garantiza la inviolabilidad del domicilio. Si entra sin avisar, comete el delito de violación de domicilio.
          </div>
          <span style={{ fontSize: '0.5625rem', color: '#334155', marginTop: '0.25rem', display: 'block' }}>10:01 AM</span>
        </div>
        {/* Typing */}
        <div style={{ alignSelf: 'flex-start' }}>
          <div style={{ padding: '0.625rem', background: '#0d1117', border: '1px solid #1b263b', borderRadius: '1rem', borderTopLeftRadius: 0, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            {[0, 150, 300].map(delay => (
              <div key={delay} className="animate-bounce" style={{ width: '0.375rem', height: '0.375rem', background: '#f59e0b', borderRadius: '50%', animationDelay: `${delay}ms` }} />
            ))}
          </div>
        </div>
      </div>
      {/* Input bar */}
      <div style={{ padding: '0.75rem', borderTop: '1px solid #1b263b', background: '#0d1117', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ flex: 1, background: '#060911', border: '1px solid #1b263b', borderRadius: '0.75rem', padding: '0.5rem 0.75rem', fontSize: '0.6875rem', color: '#64748b' }}>
          Escribe tu consulta legal...
        </div>
        <div style={{ width: '2rem', height: '2rem', background: '#f59e0b', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg style={{ width: '0.875rem', height: '0.875rem', color: '#0e131b' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Slide2({ active }) {
  return (
    <div className={`slide${active ? ' active' : ''}`} style={{ flexDirection: 'column', padding: '1rem', height: '100%' }}>
      <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '0.75rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <svg style={{ width: '1rem', height: '1rem', color: '#f59e0b' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Smart Vault
        </span>
        <span style={{ fontSize: '0.5625rem', background: 'rgba(16,185,129,0.1)', color: '#34d399', border: '1px solid rgba(16,185,129,0.2)', padding: '0.125rem 0.375rem', borderRadius: '0.25rem', fontWeight: 700 }}>Blockchain OK</span>
      </h3>
      {/* Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.75rem' }}>
        {[{ label: 'Scoring', value: '980', color: '#34d399' }, { label: 'Cifrado', value: 'SSL', color: '#fff' }].map(m => (
          <div key={m.label} style={{ padding: '0.625rem', background: '#0d1117', border: '1px solid #1b263b', borderRadius: '0.75rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.5rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>{m.label}</span>
            <div style={{ fontSize: '1.125rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: m.color }}>{m.value}</div>
          </div>
        ))}
      </div>
      {/* Docs */}
      <p style={{ fontSize: '0.5625rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.375rem' }}>Mis Documentos</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
        {[
          { name: 'Contrato - Dpto 402', meta: '24/02/2026 · 1.2 MB', color: '#60a5fa' },
          { name: 'Recibo Garantía',     meta: '24/02/2026 · 850 KB', color: '#fbbf24' },
          { name: 'Pago Alquiler Abril', meta: '02/04/2026 · 415 KB', color: '#34d399' },
        ].map(doc => (
          <div key={doc.name} style={{ padding: '0.625rem', background: '#0d1117', border: '1px solid rgba(27,38,59,0.8)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ padding: '0.375rem', background: `${doc.color}1a`, color: doc.color, borderRadius: '0.5rem' }}>
                <svg style={{ width: '0.75rem', height: '0.75rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '0.625rem', fontWeight: 700, color: '#fff' }}>{doc.name}</p>
                <p style={{ fontSize: '0.5625rem', color: '#64748b' }}>{doc.meta}</p>
              </div>
            </div>
            <span style={{ fontSize: '0.5rem', fontWeight: 700, background: 'rgba(16,185,129,0.1)', color: '#34d399', padding: '0.125rem 0.375rem', borderRadius: '0.25rem' }}>OK</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide3({ active }) {
  return (
    <div className={`slide${active ? ' active' : ''}`} style={{ flexDirection: 'column', padding: '1rem', height: '100%' }}>
      <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '0.75rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
        <svg style={{ width: '1rem', height: '1rem', color: '#f59e0b' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        Firma Digital Biométrica
      </h3>
      {/* Steps */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
        {[1,2,3].map(n => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', fontWeight: 700 }}>✓</div>
            {n < 3 && <div style={{ height: '2px', flex: 1, minWidth: '1.5rem', background: '#10b981' }} />}
          </div>
        ))}
        <div style={{ height: '2px', flex: 1, minWidth: '1.5rem', background: '#1b263b' }} />
        <div style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: '#f59e0b', color: '#0e131b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', fontWeight: 700, boxShadow: '0 0 0 4px rgba(245,158,11,0.2)' }}>4</div>
      </div>
      {/* Success */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ width: '4rem', height: '4rem', background: 'rgba(16,185,129,0.1)', color: '#34d399', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(16,185,129,0.2)', marginBottom: '1rem' }}>
          <svg style={{ width: '2rem', height: '2rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>¡Contrato Firmado!</h4>
        <p style={{ fontSize: '0.6875rem', color: '#94a3b8', marginTop: '0.375rem', lineHeight: 1.6, maxWidth: '12.5rem' }}>
          Firma Digital Calificada emitida y sellada con sello de tiempo oficial Indecopi.
        </p>
        <div style={{ marginTop: '1rem', width: '100%', padding: '0.625rem', background: '#0d1117', border: '1px solid #1b263b', borderRadius: '0.75rem', textAlign: 'left' }}>
          <span style={{ fontSize: '0.5rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>Certificado</span>
          <div style={{ fontSize: '0.5625rem', fontFamily: 'monospace', color: '#94a3b8', lineHeight: 1.6 }}>
            <div>HASH: f15a92a...f92931a</div>
            <div>LEY N° 27269 (Perú)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
