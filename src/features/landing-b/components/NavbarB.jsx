import { useState } from 'react';

/**
 * NavbarB — Navbar variante B con acento Emerald en lugar de Amber en el CTA.
 * Mantiene el mismo logo original.
 */
export function NavbarB() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#features',     label: 'Funcionalidades' },
    { href: '#demo',         label: 'Vista Previa' },
    { href: '#storytelling', label: 'Historia' },
    { href: '#pricing',      label: 'Planes' },
    { href: '#testimonials', label: 'Casos de Éxito' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(13,17,23,0.80)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1b263b',
      transition: 'all 0.3s',
    }}>
      <div className="container" style={{ height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Brand — paleta Emerald/Cyan (variante B) */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{
            width: '2.5rem', height: '2.5rem',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            borderRadius: '0.75rem', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px -4px rgba(16,185,129,0.3)',
            padding: '0.375rem', transition: 'transform 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'rotate(6deg)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0)'}
          >
            <img src="/img/LogoFirmix2.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Firmix Logo" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: '#fff', letterSpacing: '0.05em' }}>
              FIRMIX <span style={{ color: '#34d399', fontWeight: 800, fontSize: '0.75rem', verticalAlign: 'super' }}>IA</span>
            </span>
            <span style={{ fontSize: '0.625rem', color: '#64748b', letterSpacing: '0.1em', marginTop: '-2px', fontWeight: 600, textTransform: 'uppercase' }}>
              Abogado Digital
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav-b">
          {navLinks.map(l => <a key={l.href} href={l.href} className="nav-link-b">{l.label}</a>)}
        </nav>

        {/* Desktop CTA — Emerald */}
        <div style={{ display: 'none', gap: '1rem', alignItems: 'center' }} className="desktop-cta-b">
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '0.25rem 0.625rem', borderRadius: '9999px',
            fontSize: '0.75rem', fontWeight: 600,
            background: 'rgba(16,185,129,0.1)', color: '#34d399',
            border: '1px solid rgba(16,185,129,0.2)',
          }}>
            <span className="animate-pulse" style={{ width: '0.375rem', height: '0.375rem', marginRight: '0.375rem', borderRadius: '50%', background: '#34d399' }} />
            Demo Activa
          </span>
          <a href="/app.html" target="_blank" rel="noopener noreferrer" style={{
            padding: '0.625rem 1.25rem',
            background: '#10b981', color: '#0b0f19',
            fontWeight: 700, borderRadius: '0.75rem',
            textDecoration: 'none', fontSize: '0.875rem',
            display: 'flex', alignItems: 'center', gap: '0.375rem',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#059669'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#10b981'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <span>Ir a la App</span>
            <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Mobile Burger */}
        <button onClick={() => setMobileOpen(o => !o)} style={{ padding: '0.5rem', borderRadius: '0.5rem', color: '#94a3b8', background: 'transparent', border: 'none', cursor: 'pointer' }} className="mobile-burger-b" aria-label="Menú">
          {mobileOpen
            ? <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: '#0d1117', borderBottom: '1px solid #1b263b', padding: '0.5rem 1rem 1.5rem' }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '0.5rem 0.75rem', fontSize: '1rem', fontWeight: 500, color: '#cbd7e9', textDecoration: 'none', marginBottom: '0.25rem', borderRadius: '0.5rem' }}>{l.label}</a>
          ))}
          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #1b263b', marginTop: '0.5rem' }}>
            <a href="/app.html" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '0.75rem 1rem', background: '#10b981', color: '#0b0f19', fontWeight: 700, borderRadius: '0.75rem', textDecoration: 'none', fontSize: '0.875rem' }}>
              Ir a la App →
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav-b  { display: flex !important; }
          .desktop-cta-b  { display: flex !important; }
          .mobile-burger-b { display: none !important; }
        }
      `}</style>
    </header>
  );
}
