/**
 * Pricing — 3 planes de suscripción.
 */
export function Pricing() {
  const plans = [
    {
      name: 'Plan Freemium',
      sub:  'Ideal para probar la IA',
      price: 'S/.0',
      period: '/ único',
      cta:    'Probar Gratis',
      highlight: false,
      features: [
        { ok: true,  label: '3 Escaneos Scam Shield gratuitos' },
        { ok: true,  label: 'Reporte de Riesgos Encontrados' },
        { ok: false, label: 'Abogado IA ilimitado' },
        { ok: false, label: 'Firma Digital Certificada' },
      ],
    },
    {
      name: 'Plan AI Premium',
      sub:  'Tranquilidad Absoluta',
      price: 'S/.29',
      period: '/ mensual',
      cta:    'Obtener Plan Premium',
      highlight: true,
      badge:  'Más Popular',
      features: [
        { ok: true, label: 'Escaneos ilimitados Scam Shield' },
        { ok: true, label: 'Traducción completa a lenguaje simple' },
        { ok: true, label: 'Abogado IA Chatbot ilimitado 24/7' },
        { ok: true, label: 'Firma Digital Certificada RENIEC' },
        { ok: true, label: 'Smart Vault de contratos y recibos' },
      ],
    },
    {
      name: 'Plan Inmobiliario / Anual',
      sub:  'Para arrendadores seriales',
      price: 'S/.69',
      period: '/ mensual',
      cta:    'Obtener Plan Anual',
      highlight: false,
      features: [
        { ok: true, label: 'Hasta 5 propiedades administradas' },
        { ok: true, label: 'Todo lo del Plan Premium incluido' },
        { ok: true, label: 'Reporte financiero histórico' },
        { ok: true, label: 'Integración Yape/Plin automatizada' },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-[#060911] relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-amber-500/5 top-1/2 left-1/4" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Precios Transparentes
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2">
            Planes a tu medida para alquilar con paz mental
          </h2>
          <p className="text-slate-400 mt-4 font-light text-sm sm:text-base">
            Ahorra miles de soles en abogados tradicionales. Elige el plan ideal para tu alquiler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative transition-all duration-200 ${
                plan.highlight 
                  ? 'bg-navy-900 border-2 border-amber-500 shadow-glow-navy md:-translate-y-6 z-10' 
                  : 'bg-navy-900/30 border border-navy-800 hover:border-navy-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-display font-extrabold text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}
              <div>
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className={`text-xs mt-1 font-semibold ${plan.highlight ? 'text-amber-500' : 'text-slate-500'}`}>
                  {plan.sub}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-display font-black text-white">{plan.price}</span>
                  <span className={`text-xs ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                </div>
                <ul className={`mt-8 flex flex-col gap-4 text-sm ${plan.highlight ? 'text-slate-300' : 'text-slate-400'} list-none`}>
                  {plan.features.map(f => (
                    <li key={f.label} className="flex items-center gap-3">
                      <svg className={`w-4 h-4 flex-shrink-0 ${f.ok ? (plan.highlight ? 'text-emerald-400' : 'text-amber-500') : 'text-slate-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {f.ok
                          ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                        }
                      </svg>
                      <span className={f.ok ? '' : 'line-through text-slate-600'}>{f.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/app.html"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block w-full py-4 text-center font-bold text-sm rounded-2xl transition-all duration-200 ${
                  plan.highlight 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-navy-950 uppercase tracking-wide shadow-md shadow-amber-500/10' 
                    : 'bg-navy-900/50 border border-navy-700 hover:border-navy-500 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
