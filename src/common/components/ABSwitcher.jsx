import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

/**
 * ABSwitcher — Botón flotante para alternar entre Landing A y Landing B.
 * Visible siempre en la esquina inferior derecha de ambas landings.
 * Diseñado para presentaciones universitarias del test A/B.
 */
export function ABSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const isLandingB  = location.pathname.startsWith('/landing-b');
  const currentVariant = isLandingB ? 'B' : 'A';
  const targetPath     = isLandingB ? '/'          : '/landing-b';
  const targetLabel    = isLandingB ? 'Landing A'  : 'Landing B';
  const targetDesc     = isLandingB
    ? 'Amber · Mascot · Phone Mockup'
    : 'Emerald · Dropzone · Browser Mockup';

  const accentA = '#f59e0b'; // amber
  const accentB = '#10b981'; // emerald
  const accent  = isLandingB ? accentB : accentA;

  const handleSwitch = () => {
    navigate(targetPath);
    setExpanded(false);
    // Scroll al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Floating Container ── */}
      <div
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.625rem',
        }}
      >
        {/* Expanded panel */}
        {expanded && (
          <div
            style={{
              background: 'rgba(13,17,23,0.95)',
              border: '1px solid #1b263b',
              borderRadius: '1.25rem',
              padding: '1.25rem 1.5rem',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)',
              minWidth: '14rem',
              animation: 'abFadeIn 0.2s ease-out',
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.625rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                Test A/B — FirmixAI
              </p>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                Estás viendo la variante actual:
              </p>
            </div>

            {/* Current variant */}
            <div style={{
              padding: '0.75rem 1rem',
              background: `${accent}18`,
              border: `1px solid ${accent}40`,
              borderRadius: '0.875rem',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <div style={{
                width: '2rem', height: '2rem', borderRadius: '50%',
                background: accent,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: '0.875rem', color: '#0e131b', flexShrink: 0,
              }}>
                {currentVariant}
              </div>
              <div>
                <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#fff' }}>
                  Landing {currentVariant} {isLandingB ? '— Emerald' : '— Amber'}
                </p>
                <p style={{ fontSize: '0.625rem', color: '#64748b', marginTop: '0.125rem' }}>
                  {isLandingB ? 'Dropzone · Browser Mockup' : 'Mascot · Phone Mockup'}
                </p>
              </div>
              <span style={{
                marginLeft: 'auto', fontSize: '0.5rem', fontWeight: 700,
                background: `${accent}20`, color: accent,
                border: `1px solid ${accent}40`,
                padding: '0.125rem 0.5rem', borderRadius: '9999px', textTransform: 'uppercase',
              }}>Activa</span>
            </div>

            {/* Switch button */}
            <button
              onClick={handleSwitch}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: isLandingB ? '#f59e0b' : '#10b981',
                color: '#0e131b',
                fontWeight: 700,
                fontSize: '0.8125rem',
                borderRadius: '0.875rem',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Ir a {targetLabel}
              <span style={{ fontSize: '0.625rem', opacity: 0.7, fontWeight: 400 }}>
                ({targetDesc.split(' · ')[0]})
              </span>
            </button>

            <p style={{ fontSize: '0.5625rem', color: '#475569', textAlign: 'center', marginTop: '0.75rem', lineHeight: 1.5 }}>
              Presentación A/B · Proyecto UPC 2026
            </p>
          </div>
        )}

        {/* ── Toggle pill button ── */}
        <button
          onClick={() => setExpanded(o => !o)}
          title={`Cambiar a ${targetLabel}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            padding: '0.625rem 1rem',
            background: 'rgba(13,17,23,0.95)',
            border: `1px solid ${accent}50`,
            borderRadius: '9999px',
            cursor: 'pointer',
            backdropFilter: 'blur(12px)',
            boxShadow: `0 8px 32px -4px rgba(0,0,0,0.5), 0 0 0 1px ${accent}20`,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 32px -4px rgba(0,0,0,0.6), 0 0 0 2px ${accent}40`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 8px 32px -4px rgba(0,0,0,0.5), 0 0 0 1px ${accent}20`; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          {/* A/B Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{
              width: '1.25rem', height: '1.25rem', borderRadius: '50%',
              background: '#f59e0b',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.5625rem', fontWeight: 800, color: '#0e131b',
              border: isLandingB ? '1px solid transparent' : '2px solid rgba(255,255,255,0.4)',
            }}>A</span>
            <svg style={{ width: '0.75rem', height: '0.75rem', color: '#475569' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span style={{
              width: '1.25rem', height: '1.25rem', borderRadius: '50%',
              background: '#10b981',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.5625rem', fontWeight: 800, color: '#0e131b',
              border: isLandingB ? '2px solid rgba(255,255,255,0.4)' : '1px solid transparent',
            }}>B</span>
          </div>

          {/* Label */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2, textAlign: 'left' }}>
            <span style={{ fontSize: '0.625rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Variante activa</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: accent }}>Landing {currentVariant}</span>
          </div>

          {/* Chevron */}
          <svg
            style={{ width: '0.875rem', height: '0.875rem', color: '#64748b', transition: 'transform 0.2s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes abFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
