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
    <section id="blog" className="py-16 bg-[#060911] border-t border-navy-900/60">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Recursos Gratuitos
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-2">
            Blog &amp; Guías de Alquiler Seguro
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base font-light">
            Aprende sobre tus derechos y deberes como inquilino o propietario en Lima Metropolitana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div
              key={post.title}
              className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-200 bg-navy-900/40 border border-navy-800 hover:border-amber-500/30 ${
                post.featured 
                  ? 'sm:col-span-2 bg-navy-900/55 border-t-4 border-t-amber-500 border-amber-500/25 p-8' 
                  : ''
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider">
                  {post.featured ? '★ Destacado · ' : ''}{post.tag}
                </span>
                <h4 className={`font-bold text-white mt-3 leading-snug ${
                  post.featured ? 'text-lg sm:text-xl' : 'text-base'
                }`}>{post.title}</h4>
                <p className={`text-slate-400 mt-3 leading-relaxed ${
                  post.featured ? 'text-sm' : 'text-xs'
                }`}>{post.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-800/80">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-500 hover:text-amber-400 flex items-center gap-1.5 transition-colors duration-200"
                >
                  <span>Leer Artículo</span><span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
