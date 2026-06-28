import { useState } from 'react';

/**
 * HeroB — Hero variante B.
 * Composición asimétrica: copy a la izquierda, dropzone interactivo (el diferenciador
 * de esta variante) a la derecha, en vez de apilado y centrado.
 * Paleta: Emerald/Cyan.
 */
export function HeroB() {
  // Estado: 'idle' | 'scanning' | 'result'
  const [uploadState, setUploadState] = useState('idle');
  const [progress, setProgress]       = useState(0);
  const [statusText, setStatusText]   = useState('Iniciando análisis semántico...');

  const simulateUpload = () => {
    setUploadState('scanning');
    setProgress(0);

    const steps = [
      { pct: 20, msg: 'Extrayendo texto del PDF...' },
      { pct: 45, msg: 'Analizando cláusulas con IA...' },
      { pct: 70, msg: 'Detectando patrones de riesgo...' },
      { pct: 90, msg: 'Generando reporte de riesgo...' },
      { pct: 100, msg: 'Análisis completado.' },
    ];

    let i = 0;
    const tick = () => {
      if (i >= steps.length) {
        setTimeout(() => setUploadState('result'), 300);
        return;
      }
      setProgress(steps[i].pct);
      setStatusText(steps[i].msg);
      i++;
      setTimeout(tick, 700);
    };
    setTimeout(tick, 300);
  };

  const reset = () => { setUploadState('idle'); setProgress(0); };

  const trustBadges = ['Cotejo RENIEC integrado', 'Validez Legal (Ley N° 27269)', 'Respaldo Indecopi Oficial'];

  return (
    <section className="relative pt-10 pb-20 overflow-hidden bg-grid-pattern-dark">
      {/* Blobs */}
      <div className="blob-b w-[500px] h-[500px] bg-emerald-500/5 top-[8%] left-[-8%]" />
      <div className="blob-b w-[350px] h-[350px] bg-cyan-500/5 top-[55%] right-[-6%]" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">

          {/* Copy column */}
          <div className="text-center lg:text-left">

            {/* Eyebrow */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-6">
              <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2" />
              Scam Shield Activo — Lima, Perú 2026
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              Alquila con tranquilidad, evita estafas en tu contrato{' '}
              <span className="text-gradient-emerald-cyan">en 60 segundos</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Usa nuestro escáner gratuito Scam Shield para auditar la letra pequeña, verificar penalidades y firmar digitalmente con validez legal.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-slate-500">
              {trustBadges.map(b => (
                <div key={b} className="flex items-center gap-2">
                  <span className="text-emerald-500 font-extrabold text-sm">✓</span>
                  <span className="font-semibold">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual column — Interactive Upload Card (A/B differentiator) */}
          <div>
            <div className="w-full max-w-lg mx-auto bg-navy-900/85 border border-navy-800 rounded-3xl p-6 sm:p-8 shadow-xl relative z-10">
              {/* IDLE state */}
              {uploadState === 'idle' && (
                <div
                  onClick={simulateUpload}
                  className="border-2 border-dashed border-navy-700 hover:border-emerald-500/40 rounded-2xl p-6 sm:p-10 text-center cursor-pointer transition-all duration-200 bg-[#060911]/40 hover:bg-[#060911]/70"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">Prueba el Scam Shield gratis al instante</h3>
                  <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto leading-relaxed">
                    Haz clic aquí para "subir" un contrato de prueba en PDF y detectar cláusulas de riesgo de forma automática.
                  </p>
                  <span className="inline-flex mt-5 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-navy-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md">
                    Seleccionar PDF de Prueba
                  </span>
                </div>
              )}

              {/* SCANNING state */}
              {uploadState === 'scanning' && (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="animate-spin w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-white">Escaneando contrato de alquiler...</h3>
                  <p className="text-xs text-emerald-400 font-semibold mt-1.5">{statusText}</p>
                  <div className="max-w-xs mx-auto mt-5 bg-[#060911] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* RESULT state */}
              {uploadState === 'result' && (
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-4 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                    <span className="animate-ping w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Análisis: Contrato de Alto Riesgo</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    La IA ha detectado cláusulas de riesgo en el borrador de alquiler. Aquí tienes un adelanto:
                  </p>
                  <div className="flex flex-col gap-2.5 mb-5">
                    {[
                      { title: '⚠️ Penalidad Diaria por Mora Excesiva', desc: 'Se estipulan S/.150 diarios. La ley peruana prohíbe usura contractual.', tag: 'Crítico' },
                      { title: '⚠️ Plazo Ilegal para Devolución de Garantía', desc: 'Establece 90 días de plazo. El Código Civil peruano prevé un estándar de 30 días.', tag: 'Crítico' },
                    ].map(item => (
                      <div key={item.title} className="p-3 bg-red-950/20 border border-red-500/20 rounded-xl flex items-start justify-between gap-4">
                        <div>
                          <div className="text-xs font-bold text-red-300">{item.title}</div>
                          <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">{item.desc}</div>
                        </div>
                        <span className="text-[9px] font-bold bg-red-950/40 text-red-400 px-2 py-0.5 rounded uppercase flex-shrink-0">{item.tag}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/app.html" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 text-navy-950 font-bold text-center text-xs uppercase tracking-wider rounded-xl shadow-md">
                      Ver Reporte Completo en la App
                    </a>
                    <button onClick={reset} className="px-5 py-3 border border-navy-700 hover:border-navy-500 text-slate-300 font-bold text-xs uppercase tracking-wider rounded-xl bg-transparent transition-all duration-200">
                      Volver a Escanear
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
