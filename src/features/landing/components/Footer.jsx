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
    <footer className="bg-[#0d1117] border-t border-navy-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center p-1 shadow-md shadow-amber-500/10">
              <img src="/img/LogoFirmix2.png" className="w-full h-full object-contain" alt="Firmix Logo" />
            </div>
            <span className="font-display font-bold text-base text-white tracking-wide">
              FIRMIX IA
            </span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 flex-wrap justify-center text-sm">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-500 hover:text-amber-500 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/app.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 font-semibold transition-colors duration-200"
            >
              App →
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-slate-600 text-center md:text-right max-w-md leading-relaxed">
            © 2026 Firmix IA. Todos los derechos reservados. Las firmas digitales emitidas cumplen con la Ley N° 27269 de Firmas y Certificados Digitales de la República del Perú.
          </p>
        </div>
      </div>
    </footer>
  );
}
