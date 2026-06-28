import { useState, useRef, useEffect } from 'react';

const YOUTUBE_ID = 'h7s2HbhJkfA';

function LazyVideo({ title }) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);
  const src = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&rel=0&modestbranding=1`;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLoaded(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      {loaded ? (
        <iframe
          src={src}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={title}
        />
      ) : (
        <button
          onClick={() => setLoaded(true)}
          aria-label={`Reproducir: ${title}`}
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'transparent', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
          }}
        >
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'rgba(245,158,11,0.15)', border: '2px solid rgba(245,158,11,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="30" height="30" fill="#f59e0b" viewBox="0 0 24 24" style={{ marginLeft: 4 }}>
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span style={{ color: '#94a3b8', fontSize: '0.8125rem', fontWeight: 500 }}>
            Clic para reproducir el video
          </span>
        </button>
      )}
    </div>
  );
}

/**
 * Storytelling — sección narrativa con video y stats.
 */
export function Storytelling() {
  const stats = [
    { value: '68%',    color: '#fbbf24', desc: 'de contratos en Lima tienen cláusulas abusivas' },
    { value: 'S/.800+', color: '#fff',   desc: 'cuesta una consulta de abogado tradicional' },
    { value: '<60s',   color: '#34d399', desc: 'tarda Firmix IA en auditar tu contrato completo' },
    { value: 'S/.29',  color: '#fbbf24', desc: 'mes vs miles en asesoría legal tradicional' },
  ];

  const steps = [
    {
      color: '#ef4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.2)',
      label: 'El Problema', labelColor: '#f87171',
      title: 'Miles de inquilinos pierden su garantía',
      desc: <>En Lima, el <strong className="text-white">68% de contratos de alquiler</strong> contienen al menos una cláusula abusiva. La mayoría de inquilinos las firma sin entenderlas porque están redactadas en lenguaje legal incomprensible.</>,
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      showLine: true,
    },
    {
      color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)',
      label: 'La Chispa', labelColor: '#fbbf24',
      title: 'Un caso real que lo cambió todo',
      desc: <>Un compañero perdió <strong className="text-white">S/.3,500 de garantía</strong> por no notar que el contrato permitía al arrendador retenerla 90 días. Con un abogado habría costado más de S/.800 solo la consulta.</>,
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      showLine: true,
    },
    {
      color: '#10b981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)',
      label: 'La Solución', labelColor: '#34d399',
      title: 'Firmix IA: Tu abogado de bolsillo',
      desc: <>Democratizamos el acceso a la justicia legal para inquilinos. Con IA, cualquier peruano puede entender su contrato, proteger su garantía y firmar con seguridad. <strong className="text-amber-400">Desde S/.0.</strong></>,
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      showLine: false,
    },
  ];

  return (
    <section id="storytelling" className="py-20 bg-[#060911] relative overflow-hidden">
      <div className="blob w-[600px] h-[600px] bg-amber-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wider uppercase mb-5">
            <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-amber-400 mr-2" />
            Nuestra Historia
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            ¿Por qué nació <span className="text-gradient">Firmix IA</span>?
          </h2>
          <p className="text-slate-400 mt-5 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Una historia real de un inquilino que perdió su garantía por no leer una cláusula abusiva. Esto nos inspiró a crear la solución que todo peruano necesita.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Video */}
          <div>
            <div
              className="story-video-wrapper rounded-2xl overflow-hidden border border-navy-800 bg-navy-950 shadow-xl"
              style={{ position: 'relative', paddingTop: '56.25%' /* 16:9 */ }}
            >
              <div className="film-grain absolute inset-0 z-10 pointer-events-none rounded-2xl opacity-5" />
              <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/70 border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                  <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-red-500" />
                  Video
                </span>
              </div>
              <LazyVideo title="Firmix IA — Video Storytelling" />
            </div>
            <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-2">
              <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm12.553 1.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Video de presentación del equipo Firmix IA — UPC 2026
            </p>
          </div>

          {/* Narrative steps */}
          <div>
            <div className="flex flex-col gap-8">
              {steps.map(step => (
                <div key={step.label} className="story-step flex items-start gap-5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="story-step-dot w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{ background: step.bg, border: `1px solid ${step.border}`, color: step.color }}
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                      </svg>
                    </div>
                    {step.showLine && (
                      <div className="story-timeline-line w-[2px] h-8 bg-navy-800 mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: step.labelColor }}>{step.label}</span>
                    <h3 className="text-lg font-bold text-white mt-1">{step.title}</h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 bg-navy-900 border border-navy-800 rounded-3xl">
          {stats.map((s) => (
            <div
              key={s.value}
              className="text-center py-2 lg:border-l lg:first:border-l-0 border-navy-800"
            >
              <div className="text-2xl sm:text-3xl font-display font-black" style={{ color: s.color }}>{s.value}</div>
              <p className="text-xs text-slate-400 mt-2 px-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
