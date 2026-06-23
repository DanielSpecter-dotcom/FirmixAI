/**
 * Footer — pie de página con links y copyright.
 */
export function Footer() {
  const links = [
    { href: '#features',    label: 'Funcionalidades' },
    { href: '#pricing',     label: 'Planes' },
    { href: '#blog',        label: 'Blog' },
  ];

  return (
    <footer style={{
      background: '#0d1117',
      borderTop: '1px solid #1b263b',
      padding: '3rem 0',
    }}>
      <div className="container">
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'space-between', gap: '1.5rem',
        }} className="footer-inner">

          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '2rem', height: '2rem',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              borderRadius: '0.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '0.25rem',
              boxShadow: '0 0 10px -4px rgba(245,158,11,0.2)',
            }}>
              <img src="/img/LogoFirmix2.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Firmix Logo" />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '0.05em' }}>
              FIRMIX IA
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: '#64748b', textDecoration: 'none',
                  fontSize: '0.875rem', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#f59e0b'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/app.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#f59e0b', textDecoration: 'none',
                fontSize: '0.875rem', fontWeight: 600, transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'}
              onMouseLeave={e => e.currentTarget.style.color = '#f59e0b'}
            >
              App →
            </a>
          </div>

          {/* Copyright */}
          <p style={{ fontSize: '0.6875rem', color: '#475569', textAlign: 'center', maxWidth: '36rem', lineHeight: 1.6 }}>
            © 2026 Firmix IA. Todos los derechos reservados. Las firmas digitales emitidas cumplen con la Ley N° 27269 de Firmas y Certificados Digitales de la República del Perú.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-inner { flex-direction: row !important; }
        }
      `}</style>
    </footer>
  );
}
