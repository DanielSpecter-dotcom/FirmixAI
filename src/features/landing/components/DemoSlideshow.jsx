import { useState } from 'react';
import { useDemoSlideshow } from '../hooks/useDemoSlideshow';

const FEATURES = [
  {
    id: 0,
    title: '1. Scam Shield — Escudo Anti-Estafas',
    desc: 'Detecta cláusulas abusivas con semáforo de riesgo en menos de 60 segundos.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    id: 1,
    title: '2. Abogado IA 24/7',
    desc: 'Chat legal en tiempo real con respuestas basadas en el Código Civil peruano.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    premium: false,
  },
  {
    id: 2,
    title: '3. Smart Vault — Bóveda Segura',
    desc: 'Almacena contratos y recibos con cifrado militar y registro en Blockchain.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    premium: true,
  },
  {
    id: 3,
    title: '4. Firma Digital Biométrica',
    desc: 'Firma con cotejo biométrico RENIEC y sellado de tiempo oficial Indecopi.',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    premium: true,
  },
];

export function DemoSlideshow() {
  const { currentSlide, goToSlide } = useDemoSlideshow();

  return (
    <section id="demo" className="py-16 bg-navy-950/25 relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-amber-500/5 top-1/2 right-0" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Vista Previa del App
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2">
            Todo lo que necesitas, en un solo lugar
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Explora las 4 herramientas que convierten Firmix IA en el escudo legal más completo para inquilinos en Lima.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Feature Selector */}
          <div className="flex flex-col gap-3">
            {FEATURES.map(f => {
              const active = currentSlide === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => goToSlide(f.id)}
                  className={`w-full text-left p-5 rounded-2xl border flex items-start gap-4 transition-all duration-300 bg-transparent ${
                    active 
                      ? 'border-amber-500 bg-navy-800/60 shadow-glow-navy' 
                      : 'border-navy-800 hover:border-navy-700'
                  }`}
                >
                  <div className={`p-3 rounded-xl flex-shrink-0 transition-colors duration-200 ${
                    active ? 'bg-amber-500/10 text-amber-400' : 'bg-navy-800 text-slate-400'
                  }`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-white text-sm sm:text-base truncate">{f.title}</h3>
                      {f.premium && (
                        <span className="text-[9px] bg-amber-500/15 text-amber-400 font-extrabold px-2 py-0.5 rounded border border-amber-500/30 tracking-wide flex-shrink-0">PREMIUM</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{f.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Phone Mockup */}
          <div className="flex flex-col items-center">
            <PhoneMockup currentSlide={currentSlide} goToSlide={goToSlide} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ currentSlide, goToSlide }) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Phone frame */}
      <div className="relative w-full max-w-[290px] h-[570px] bg-[#0d1117] border-[7px] border-navy-800 rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Status bar */}
        <div className="bg-[#0d1117] px-5 pt-3 pb-2 flex justify-between items-center text-xs font-bold text-white flex-shrink-0 relative">
          <span>10:00</span>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full" />
          <div className="flex items-center gap-1">
            <span className="text-[10px]">5G</span>
            <div className="w-5 h-2.5 border border-white/60 rounded-[2px] p-[1px] flex items-center">
              <div className="w-3.5 h-full bg-white rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* App header */}
        <div className="bg-navy-800/90 border-b border-navy-700/60 px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <img src="/img/LogoFirmix2.png" className="w-4 h-4 object-contain" alt="Firmix" />
            <span className="font-display font-extrabold color-[#fff] text-white text-xs tracking-wider">FIRMIX IA</span>
          </div>
          <span className="text-[9px] bg-amber-500/10 text-amber-400 font-bold px-2 py-0.5 rounded-full border border-amber-500/20">DEMO</span>
        </div>

        {/* Slides */}
        <div className="flex-1 bg-[#060911] overflow-hidden relative">
          <Slide0 active={currentSlide === 0} />
          <Slide1 active={currentSlide === 1} />
          <Slide2 active={currentSlide === 2} />
          <Slide3 active={currentSlide === 3} />
        </div>

        {/* Bottom Nav */}
        <div className="bg-[#0d1117] border-t border-navy-800/80 py-2 px-1 flex justify-around items-center flex-shrink-0">
          {[
            { i: 0, label: 'Escudo', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { i: 1, label: 'Chat IA', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
            { i: 2, label: 'Bóveda', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
            { i: 3, label: 'Firma',   icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
          ].map(btn => (
            <button 
              key={btn.i} 
              onClick={() => goToSlide(btn.i)} 
              className={`flex flex-col items-center flex-1 bg-transparent border-0 cursor-pointer transition-colors duration-200 ${
                currentSlide === btn.i ? 'text-amber-500' : 'text-slate-500'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d={btn.icon} />
              </svg>
              <span className="text-[7px] font-bold mt-0.5 uppercase tracking-wide">{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Home indicator */}
        <div className="bg-[#0d1117] pb-2 pt-1 flex justify-center flex-shrink-0">
          <div className="w-24 h-1 bg-white/40 rounded-full" />
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-5">
        {[0,1,2,3].map(i => (
          <span 
            key={i} 
            className={`block h-2 rounded-full transition-all duration-300 ${
              currentSlide === i ? 'w-5 bg-amber-500' : 'w-2 bg-navy-800'
            }`} 
          />
        ))}
      </div>

      {/* CTA */}
      <a 
        href="/app.html" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-6 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-navy-950 font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/10 transition-all duration-200 hover:-translate-y-0.5"
      >
        <span>Probar la App Gratis</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  );
}

/* ── Individual Slides ── */

function Slide0({ active }) {
  return (
    <div className={`absolute inset-0 flex flex-col p-4 transition-opacity duration-300 ${active ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
      <h3 className="font-bold text-white text-xs mb-3 flex items-center gap-1.5">
        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Scam Shield — Reporte
      </h3>
      {/* Score Card */}
      <div className="p-3 bg-navy-950 border border-red-500/25 rounded-xl flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex flex-col items-center justify-center font-display font-extrabold text-sm">
          28 <span className="text-[7px] text-slate-500 -mt-0.5">SCORE</span>
        </div>
        <div>
          <p className="text-[11px] font-bold text-white leading-none">Contrato Abusivo — Lince</p>
          <p className="text-[9px] text-slate-500 mt-1">27 de Mayo, 2026</p>
        </div>
      </div>
      {/* Risk items */}
      <div className="flex flex-col gap-2 overflow-y-auto pr-1">
        {[
          { color: 'bg-red-500', border: 'border-red-500/20', bg: 'bg-red-950/20', title: 'Penalidad Diaria Excesiva', desc: 'S/.150 diarios por mora. Esto es abusivo y supera el 150% del valor diario del alquiler.' },
          { color: 'bg-amber-500', border: 'border-amber-500/20', bg: 'bg-amber-950/20', title: 'Retención Ilícita de Garantía', desc: '90 días para devolver garantía. El estándar legal es 30 días.' },
          { color: 'bg-red-500', border: 'border-red-500/20', bg: 'bg-red-950/20', title: 'Desalojo sin Orden Judicial', desc: 'Cláusula ilegal. Viola el artículo 2 de la Constitución peruana.' },
        ].map(item => (
          <div key={item.title} className={`p-2.5 ${item.bg} border ${item.border} rounded-xl`}>
            <div className="flex items-center gap-1.5 mb-1">
              <span className={`w-1.5 h-1.5 rounded-full ${item.color} inline-block`} />
              <span className="text-[10px] font-bold text-white leading-none">{item.title}</span>
            </div>
            <p className="text-[9px] text-slate-400 leading-normal">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide1({ active }) {
  return (
    <div className={`absolute inset-0 flex flex-col justify-between transition-opacity duration-300 ${active ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
      <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto">
        {/* Bot */}
        <div className="self-start max-w-[85%]">
          <div className="p-3 bg-navy-950 border border-navy-800 rounded-2xl rounded-tl-none text-[10px] text-slate-200 leading-relaxed">
            ¡Hola! 🛡️ Soy tu Abogado Digital 24/7. ¿Tienes dudas sobre tu contrato de alquiler en Lima?
          </div>
          <span className="text-[8px] text-slate-600 mt-1 block">10:00 AM</span>
        </div>
        {/* User */}
        <div className="self-end max-w-[85%]">
          <div className="p-3 bg-amber-500 text-navy-950 rounded-2xl rounded-tr-none text-[10px] font-semibold leading-relaxed">
            ¿El dueño puede ingresar sin mi permiso?
          </div>
          <span className="text-[8px] text-slate-600 mt-1 block text-right">10:01 AM</span>
        </div>
        {/* Bot reply */}
        <div className="self-start max-w-[85%]">
          <div className="p-3 bg-navy-950 border border-navy-800 rounded-2xl rounded-tl-none text-[10px] text-slate-200 leading-relaxed">
            ¡No! El artículo 2 de la Constitución peruana garantiza la inviolabilidad del domicilio. Si entra sin avisar, comete el delito de violación de domicilio.
          </div>
          <span className="text-[8px] text-slate-600 mt-1 block">10:01 AM</span>
        </div>
        {/* Typing */}
        <div className="self-start">
          <div className="px-3 py-2.5 bg-navy-950 border border-navy-800 rounded-2xl rounded-tl-none flex items-center gap-1">
            {[0, 150, 300].map(delay => (
              <div key={delay} className="animate-bounce w-1 h-1 bg-amber-500 rounded-full" style={{ animationDelay: `${delay}ms` }} />
            ))}
          </div>
        </div>
      </div>
      {/* Input bar */}
      <div className="p-3 border-t border-navy-850 bg-navy-950 flex items-center gap-2 flex-shrink-0">
        <div className="flex-1 bg-navy-900 border border-navy-800 rounded-xl px-3 py-2 text-[10px] text-slate-500">
          Escribe tu consulta...
        </div>
        <div className="w-8 h-8 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-navy-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Slide2({ active }) {
  return (
    <div className={`absolute inset-0 flex flex-col p-4 transition-opacity duration-300 ${active ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
      <h3 className="font-bold text-white text-xs mb-3 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Smart Vault
        </span>
        <span className="text-[8px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold">Blockchain OK</span>
      </h3>
      {/* Metrics */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[{ label: 'Scoring', value: '980', color: 'text-emerald-400' }, { label: 'Cifrado', value: 'SSL', color: 'text-white' }].map(m => (
          <div key={m.label} className="p-2 bg-navy-950 border border-navy-800 rounded-xl text-center">
            <span className="text-[8px] font-bold text-slate-500 uppercase">{m.label}</span>
            <div className={`text-sm font-display font-black ${m.color} mt-0.5`}>{m.value}</div>
          </div>
        ))}
      </div>
      {/* Docs */}
      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Mis Documentos</p>
      <div className="flex flex-col gap-2 overflow-y-auto">
        {[
          { name: 'Contrato - Dpto 402', meta: '24/02/2026 · 1.2 MB', color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { name: 'Recibo Garantía',     meta: '24/02/2026 · 850 KB', color: 'text-amber-400', bg: 'bg-amber-500/10' },
          { name: 'Pago Alquiler Abril', meta: '02/04/2026 · 415 KB', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
        ].map(doc => (
          <div key={doc.name} className="p-2 bg-navy-950 border border-navy-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <div className={`p-1.5 ${doc.bg} ${doc.color} rounded-lg`}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-white truncate">{doc.name}</p>
                <p className="text-[8px] text-slate-500 mt-0.5">{doc.meta}</p>
              </div>
            </div>
            <span className="text-[8px] font-bold bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded">OK</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide3({ active }) {
  return (
    <div className={`absolute inset-0 flex flex-col p-4 transition-opacity duration-300 ${active ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
      <h3 className="font-bold text-white text-xs mb-3 flex items-center gap-1.5">
        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        Firma Digital Biométrica
      </h3>
      {/* Steps */}
      <div className="flex items-center justify-center gap-2 mb-4">
        {[1,2,3].map(n => (
          <div key={n} className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">✓</div>
            {n < 3 && <div className="h-0.5 w-6 bg-emerald-500" />}
          </div>
        ))}
        <div className="h-0.5 w-6 bg-navy-800" />
        <div className="w-5 h-5 rounded-full bg-amber-500 text-navy-950 flex items-center justify-center text-[9px] font-bold shadow-glow-amber">4</div>
      </div>
      {/* Success */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/20 mb-3">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="font-bold text-white text-xs">¡Contrato Firmado!</h4>
        <p className="text-[9px] text-slate-400 mt-1 leading-relaxed max-w-[170px]">
          Firma Digital Calificada emitida y sellada con sello de tiempo oficial Indecopi.
        </p>
        <div className="mt-3.5 w-full p-2.5 bg-navy-950 border border-navy-850 rounded-xl text-left">
          <span className="text-[8px] font-bold text-emerald-400 uppercase block mb-0.5">Certificado</span>
          <div className="text-[8px] font-mono text-slate-400 leading-normal">
            <div>HASH: f15a92a...f92931a</div>
            <div>LEY N° 27269 (Perú)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
