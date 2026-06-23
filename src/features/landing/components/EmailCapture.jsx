import { useEmailCapture } from '../hooks/useEmailCapture';

/**
 * EmailCapture — formulario de suscripción para lista de espera.
 */
export function EmailCapture() {
  const { name, phone, email, setName, setPhone, setEmail, handleSubmit } = useEmailCapture();

  return (
    <section id="contacto" style={{
      padding: '4rem 0',
      background: 'rgba(13,17,23,0.4)',
      borderTop: '1px solid rgba(13,17,23,0.6)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="blob" style={{ width: '500px', height: '300px', background: 'rgba(245,158,11,0.05)', top: 0, left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container" style={{ maxWidth: '48rem', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Mantente Informado
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#fff', marginTop: '0.5rem' }}>
            ¿Quieres saber cuándo lancemos nuevas funciones?
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '1rem', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.7 }}>
            Déjanos tu correo y te avisaremos antes que nadie sobre actualizaciones de Firmix IA, guías legales exclusivas y ofertas especiales para usuarios tempranos en Lima.
          </p>
        </div>

        {/* Form card */}
        <div style={{
          background: 'rgba(13,17,23,0.8)', border: '1px solid #1b263b',
          borderRadius: '1.5rem', padding: 'clamp(1.5rem, 4vw, 2rem)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Row 1: Nombre + Teléfono */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }} className="form-row">
              <FormField
                id="name-input" type="text" value={name} onChange={setName}
                placeholder="Tu nombre completo" required
                icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
              <FormField
                id="phone-input" type="tel" value={phone} onChange={setPhone}
                placeholder="+51 999 999 999" required
                icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </div>

            {/* Row 2: Email */}
            <FormField
              id="email-input" type="email" value={email} onChange={setEmail}
              placeholder="tu@correo.com" required
              icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />

            {/* Submit */}
            <button
              type="submit"
              id="email-submit-btn"
              style={{
                width: '100%', padding: '0.875rem 1.5rem',
                background: 'linear-gradient(to right, #f59e0b, #d97706)',
                color: '#0e131b', fontWeight: 700,
                borderRadius: '0.75rem', border: 'none', cursor: 'pointer',
                fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(245,158,11,0.2)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(to right, #d97706, #b45309)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(to right, #f59e0b, #d97706)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span>Enviar</span>
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <p style={{ fontSize: '0.6875rem', color: '#475569', textAlign: 'center', lineHeight: 1.6 }}>
              🔒 Tu información es privada. No enviamos spam. Puedes darte de baja en cualquier momento.
            </p>
          </form>

          {/* Perks */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #1b263b', display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="perks-grid">
            {[
              { icon: '⚡', title: 'Acceso Anticipado', desc: 'Sé el primero en probar nuevas funciones' },
              { icon: '📋', title: 'Guías Legales Gratis', desc: 'Recursos exclusivos sobre alquileres en Lima' },
              { icon: '🎁', title: 'Descuentos Exclusivos', desc: 'Ofertas especiales para usuarios tempranos' },
            ].map(perk => (
              <div key={perk.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.125rem', flexShrink: 0, color: '#f59e0b' }}>{perk.icon}</span>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>{perk.title}</p>
                  <p style={{ fontSize: '0.6875rem', color: '#64748b', marginTop: '0.125rem' }}>{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .form-row  { grid-template-columns: 1fr 1fr !important; }
          .perks-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Helper ── */
function FormField({ id, type, value, onChange, placeholder, required, icon }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '0.75rem', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
        <svg style={{ width: '1.25rem', height: '1.25rem', color: '#64748b' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%', background: '#060911',
          border: '1px solid #2f446f',
          borderRadius: '0.75rem',
          paddingLeft: '2.5rem', paddingRight: '1rem',
          paddingTop: '0.875rem', paddingBottom: '0.875rem',
          fontSize: '0.875rem', color: '#fff',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}
