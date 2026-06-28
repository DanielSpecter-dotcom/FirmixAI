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
    <header className="sticky top-0 z-50 bg-navy-900/80 backdrop-blur-md border-b border-navy-800 transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Brand — paleta Emerald/Cyan (variante B) */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 p-1.5 transition-transform duration-300 hover:rotate-6">
            <img src="/img/LogoFirmix2.png" className="w-full h-full object-contain" alt="Firmix Logo" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl text-white tracking-wide">
              FIRMIX <span className="text-emerald-400 font-extrabold text-xs align-super">IA</span>
            </span>
            <span className="text-[10px] text-slate-500 tracking-widest -mt-0.5 font-semibold uppercase">
              Abogado Digital
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="nav-link-b text-slate-300 hover:text-emerald-400 font-medium text-sm transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA — Emerald */}
        <div className="hidden md:flex gap-4 items-center">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="animate-pulse w-1.5 h-1.5 mr-1.5 rounded-full bg-emerald-400" />
            Demo Activa
          </span>
          <a
            href="/app.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-navy-950 font-bold rounded-xl text-sm flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Ir a la App</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white bg-transparent border-0 cursor-pointer"
          aria-label="Menú"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900 border-b border-navy-800 px-4 py-4 space-y-2">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 border-t border-navy-800 mt-2">
            <a
              href="/app.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 bg-emerald-500 hover:bg-emerald-600 text-navy-950 font-bold rounded-xl text-sm"
            >
              Ir a la App →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
