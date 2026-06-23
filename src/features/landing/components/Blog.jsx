/**
 * Blog — 5 tarjetas de artículos con links externos.
 * El primer artículo se destaca en un grid editorial asimétrico (2 columnas en desktop).
 */
export function Blog() {
  const posts = [
    {
      tag:   'Inteligencia Artificial',
      title: 'Cómo la IA te salva de firmar un contrato abusivo en 2 minutos',
      desc:  'Usa herramientas de auditoría inteligente para detectar penalidades ocultas antes de firmar.',
      href:  'https://josue191005.github.io/blog_firmix/',
      featured: true,
    },
    {
      tag:   'Garantías',
      title: '¿El propietario se quedó con tu garantía? Conoce tus derechos',
      desc:  'Pasos legales basados en el Código Civil peruano para recuperar tu depósito.',
      href:  'https://danielspecter-dotcom.github.io/FirmixAI-Blog/',
    },
    {
      tag:   'Contratos',
      title: 'Estafas con contratos en Lima: cómo detectar cláusulas abusivas',
      desc:  'Aprende a reconocer las modalidades de fraude más comunes y protege tu presupuesto.',
      href:  'https://pilcovaleriia.github.io/BlogFirmix/',
    },
    {
      tag:   'Cláusulas Abusivas',
      title: 'Cómo detectar multas excesivas y trampas ocultas a tiempo',
      desc:  'Aprende a identificar penalidades desproporcionadas y retenciones ilegales.',
      href:  'https://pamt16.github.io/firmix_blog/',
    },
    {
      tag:   'Derechos de Inquilinos',
      title: 'Derechos del inquilino en Lima ante cobros abusivos y desalojos',
      desc:  'Conoce el marco legal que te protege y cómo defender tu tranquilidad.',
      href:  'https://adriangth3.github.io/BlogFirmix',
    },
  ];

  return (
    <section id="blog" style={{
      padding: '4rem 0',
      background: '#060911',
      borderTop: '1px solid rgba(13,17,23,0.6)',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 3rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Recursos Gratuitos
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#fff', marginTop: '0.5rem' }}>
            Blog &amp; Guías de Alquiler Seguro
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '0.75rem', fontWeight: 300, fontSize: '0.875rem' }}>
            Aprende sobre tus derechos y deberes como inquilino o propietario en Lima Metropolitana.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="blog-grid">
          {posts.map(post => (
            <div
              key={post.title}
              className={post.featured ? 'blog-card-featured' : undefined}
              style={{
                padding: post.featured ? '2rem' : '1.5rem',
                background: post.featured ? 'rgba(13,17,23,0.55)' : 'rgba(13,17,23,0.4)',
                border: `1px solid ${post.featured ? 'rgba(245,158,11,0.25)' : '#1b263b'}`,
                borderTop: post.featured ? '3px solid #f59e0b' : undefined,
                borderRadius: '1rem',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = post.featured ? 'rgba(245,158,11,0.25)' : '#1b263b'}
            >
              <div>
                <span style={{ fontSize: '0.625rem', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {post.featured ? '★ Destacado · ' : ''}{post.tag}
                </span>
                <h4 style={{
                  fontSize: post.featured ? 'clamp(1.125rem, 2vw, 1.375rem)' : '1rem',
                  fontWeight: 700, color: '#fff',
                  marginTop: '0.5rem', lineHeight: 1.4,
                  transition: 'color 0.2s',
                }}>{post.title}</h4>
                <p style={{ fontSize: post.featured ? '0.8125rem' : '0.75rem', color: '#94a3b8', marginTop: '0.5rem', lineHeight: 1.6 }}>{post.desc}</p>
              </div>
              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(27,38,59,0.6)' }}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.75rem', fontWeight: 700,
                    color: '#f59e0b', textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'}
                  onMouseLeave={e => e.currentTarget.style.color = '#f59e0b'}
                >
                  <span>Leer Artículo</span><span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .blog-card-featured { grid-column: span 2; }
        }
        @media (min-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
