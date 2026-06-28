import { useEmailCapture } from '../../landing/hooks/useEmailCapture';

/**
 * EmailCaptureB — formulario de suscripción, paleta Emerald/Cyan (variante B).
 * Layout: 2 columnas en desktop (copy + beneficios | formulario compacto)
 */
export function EmailCaptureB() {
  const { name, phone, email, setName, setPhone, setEmail, handleSubmit } = useEmailCapture();

  const perks = [
    { icon: '⚡', title: 'Acceso Anticipado', desc: 'Sé el primero en probar nuevas funciones' },
    { icon: '📋', title: 'Guías Legales Gratis', desc: 'Recursos exclusivos sobre alquileres en Lima' },
    { icon: '🎁', title: 'Descuentos Exclusivos', desc: 'Ofertas especiales para usuarios tempranos' },
  ];

  return (
    <section id="contacto" className="py-20 bg-navy-900/40 border-t border-navy-800/60 relative overflow-hidden">
      {/* Ambient blob */}
      <div className="blob-b w-[600px] h-[400px] bg-emerald-500/5 top-0 right-0 absolute pointer-events-none rounded-full filter blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">

          {/* ── Left column: copy + perks ── */}
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Mantente Informado
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-3 leading-snug">
              ¿Quieres saber cuándo lancemos nuevas funciones?
            </h2>
            <p className="text-slate-400 mt-4 font-light text-sm leading-relaxed max-w-md">
              Déjanos tu correo y te avisaremos antes que nadie sobre actualizaciones de Firmix IA, guías legales exclusivas y ofertas especiales para usuarios tempranos en Lima.
            </p>

            {/* Perks list */}
            <div className="mt-8 flex flex-col gap-5">
              {perks.map(perk => (
                <div key={perk.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-lg flex-shrink-0">
                    {perk.icon}
                  </div>
                  <div className="pt-0.5">
                    <p className="text-sm font-bold text-white">{perk.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: form card ── */}
          <div className="bg-navy-900 border border-navy-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="font-bold text-white text-base mb-1">Únete a la lista de espera</h3>
            <p className="text-xs text-slate-500 mb-6">Sin spam. Cancela cuando quieras.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <FormFieldB
                id="name-input-b" type="text" value={name} onChange={setName}
                placeholder="Tu nombre completo" required label="Nombre"
                icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
              <FormFieldB
                id="phone-input-b" type="tel" value={phone} onChange={setPhone}
                placeholder="+51 999 999 999" required label="Teléfono"
                icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
              <FormFieldB
                id="email-input-b" type="email" value={email} onChange={setEmail}
                placeholder="tu@correo.com" required label="Correo electrónico"
                icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />

              <button
                type="submit"
                id="email-submit-btn-b"
                className="w-full mt-1 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Enviar</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>

            <p className="text-[11px] text-slate-600 text-center mt-4 flex items-center justify-center gap-1.5">
              <span>🔒</span> Tu información es privada. No enviamos spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Helper ── */
function FormFieldB({ id, type, value, onChange, placeholder, required, icon, label }) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        <div className="absolute top-1/2 left-3.5 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
          className="w-full bg-[#060911] border border-navy-800 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-colors duration-200"
        />
      </div>
    </div>
  );
}
