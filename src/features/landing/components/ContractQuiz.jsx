import { useContractQuiz } from '../hooks/useContractQuiz';

/**
 * ContractQuiz — quiz interactivo de 3 preguntas con captura de leads.
 */
export function ContractQuiz() {
  const {
    step, answers, leadName, leadEmail, leadGoal, quizScore,
    setLeadName, setLeadEmail, setLeadGoal,
    startQuiz, selectOption, nextQuestion, resetQuiz,
    currentFeedback, showFeedback,
  } = useContractQuiz();

  return (
    <section id="contract-quiz" className="py-16 bg-navy-950/60 border-t border-b border-navy-900/60 relative overflow-hidden">
      <div className="blob w-[300px] h-[300px] bg-amber-500/5 top-[10px] right-[10px]" />
      <div className="blob w-[300px] h-[300px] bg-navy-500/5 bottom-[10px] left-[10px]" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Pon a prueba tu conocimiento
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2">
            ¿Realmente entiendes los contratos que firmas?
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base font-light leading-relaxed">
            Muchos inquilinos y propietarios en Lima firman cláusulas que les cuestan miles de soles o les causan problemas legales graves.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="bg-navy-900 border border-navy-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          {/* Progress bar */}
          {step >= 1 && step <= 3 && (
            <div className="mb-8">
              <div className="flex justify-between text-xs text-slate-400 mb-2">
                <span>Progreso del Test</span>
                <span>Pregunta {step} de 3</span>
              </div>
              <div className="w-full bg-navy-950 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Step 0: Lead capture */}
          {step === 0 && (
            <div>
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  📝
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  ¡Te damos la bienvenida al Test Legal de Firmix IA!
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto mt-2 leading-relaxed">
                  Descubre en menos de 2 minutos qué tan protegido estás contra estafas y cláusulas abusivas en el mercado peruano.
                </p>
              </div>
              <div className="flex flex-col gap-4 max-w-md mx-auto">
                <div>
                  <label htmlFor="lead-name" className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Nombre completo</label>
                  <input
                    id="lead-name"
                    type="text"
                    value={leadName}
                    onChange={e => setLeadName(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-[#060911] border border-navy-800 focus:border-amber-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lead-email" className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Correo electrónico</label>
                  <input
                    id="lead-email"
                    type="email"
                    value={leadEmail}
                    onChange={e => setLeadEmail(e.target.value)}
                    placeholder="Ej. juan@correo.com"
                    className="w-full bg-[#060911] border border-navy-800 focus:border-amber-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lead-goal" className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">¿Cuál es tu objetivo?</label>
                  <select
                    id="lead-goal"
                    value={leadGoal}
                    onChange={e => setLeadGoal(e.target.value)}
                    className="w-full bg-[#060911] border border-navy-800 focus:border-amber-500 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                  >
                    <option value="" disabled>Selecciona tu objetivo...</option>
                    <option value="inquilino-residencial">Alquilar un departamento/casa (Inquilino)</option>
                    <option value="inquilino-comercial">Alquilar un local comercial/oficina (Inquilino)</option>
                    <option value="propietario">Poner en alquiler mi propiedad (Dueño)</option>
                  </select>
                </div>
                <button
                  onClick={startQuiz}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-navy-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/10 transition-all duration-200"
                >
                  Comenzar Test Legal
                </button>
              </div>
            </div>
          )}

          {/* Questions 1–3 */}
          {step >= 1 && step <= 3 && !showFeedback && (
            <QuizQuestion step={step} onSelect={selectOption} answers={answers} />
          )}

          {/* Feedback */}
          {showFeedback && step <= 3 && currentFeedback && (
            <div className={`mt-8 p-5 rounded-2xl border ${
              currentFeedback.correct 
                ? 'border-emerald-500/30 bg-emerald-500/5' 
                : 'border-red-500/30 bg-red-500/5'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0 mt-0.5 ${
                  currentFeedback.correct ? 'bg-emerald-500' : 'bg-red-500'
                }`}>
                  {currentFeedback.correct ? '✓' : '✗'}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">
                    {currentFeedback.correct ? 'Respuesta correcta' : 'Respuesta incorrecta'}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{currentFeedback.explanation}</p>
                </div>
              </div>
              <div className="mt-5 flex justify-end">
                <button
                  onClick={nextQuestion}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-navy-950 font-bold text-xs rounded-xl transition-all duration-200"
                >
                  {step < 3 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                </button>
              </div>
            </div>
          )}

          {/* Results */}
          {step === 4 && (
            <QuizResult score={quizScore} leadName={leadName} leadGoal={leadGoal} onReset={resetQuiz} />
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ── */

const QUESTIONS = [
  {
    q: '1. Si tu contrato dice que el depósito de garantía se devolverá "dentro de los 30 días de desocupado el inmueble previa conformidad del propietario", ¿qué riesgo corres?',
    options: [
      { key: 'A', text: 'A) Ninguno, la ley obliga a devolver la garantía a los 30 días de todas formas.' },
      { key: 'B', text: 'B) Alto riesgo. La frase "previa conformidad" le permite retenerla indefinidamente inventando desperfectos sin justificación formal.' },
    ],
    correct: 'B',
    explanation: 'La cláusula "previa conformidad del propietario" es una trampa legal frecuente. El propietario puede alegar daños inexistentes para retener tu dinero indefinidamente. Firmix IA detecta este patrón automáticamente.',
  },
  {
    q: '2. Tu contrato especifica: "El pago del alquiler se realizará en efectivo en el domicilio del arrendador". Sin embargo, le transfieres por Yape o banco mensualmente. ¿Es esto legalmente seguro?',
    options: [
      { key: 'A', text: 'A) No. Legalmente el contrato rige el lugar y forma de pago. El arrendador podría demandar falta de pago y tendrías que ir a juicio para validarlo.' },
      { key: 'B', text: 'B) Sí, los comprobantes de depósito bancario o captura de Yape anulan cualquier regla escrita en el contrato.' },
    ],
    correct: 'A',
    explanation: 'El contrato escrito tiene primacía. Si el contrato dice efectivo y pagas digital, el propietario podría argumentar incumplimiento. Siempre modifica el contrato o añade una adenda firmada por ambas partes.',
  },
  {
    q: '3. ¿Qué implicancia tiene firmar una cláusula de "Allanamiento Futuro" y "Desalojo con Intervención Notarial" (Ley N. 30933) si te atrasas más de 2 meses?',
    options: [
      { key: 'A', text: 'A) Permite al dueño desalojarte rápidamente mediante un trámite notarial y policial en pocos días, saltándose juicios largos.' },
      { key: 'B', text: 'B) No tiene efecto si eres puntual; de todos modos, un desalojo siempre toma de 2 a 3 años por vía judicial ordinaria.' },
    ],
    correct: 'A',
    explanation: 'La Ley 30933 permite un proceso de desalojo express. Si firmaste esta cláusula y te atrasas 2+ meses, el propietario puede desalojarte en días con apoyo notarial y policial. ¡Muy importante saberlo antes de firmar!',
  },
];

function QuizQuestion({ step, onSelect, answers }) {
  const q = QUESTIONS[step - 1];
  const selected = answers[step];
  return (
    <div>
      <h3 className="font-bold text-white text-base mb-6 leading-relaxed">{q.q}</h3>
      <div className="flex flex-col gap-3.5">
        {q.options.map(opt => (
          <button
            key={opt.key}
            onClick={() => !selected && onSelect(step, opt.key)}
            className={`w-full text-left rounded-2xl p-4 text-sm border flex justify-between items-center gap-4 transition-all duration-200 bg-transparent ${
              selected === opt.key 
                ? 'bg-amber-500/10 border-amber-500/40 text-white' 
                : 'border-navy-800 text-slate-300 hover:border-navy-700'
            } ${selected ? 'cursor-default' : 'cursor-pointer'}`}
          >
            <span>{opt.text}</span>
            <span className={`w-5 h-5 rounded-full border flex-shrink-0 transition-all duration-200 ${
              selected === opt.key ? 'border-amber-500 bg-amber-500' : 'border-slate-700'
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
}

function QuizResult({ score, leadName, leadGoal, onReset }) {
  const goalMap = {
    'inquilino-residencial': 'Alquilar departamento',
    'inquilino-comercial':   'Alquilar local comercial',
    'propietario':           'Poner en alquiler propiedad',
  };
  const pct = Math.round((score / 3) * 100);
  const riskPct = 100 - pct;

  const badge = riskPct >= 67
    ? { label: '🔴 Riesgo Alto',   bg: 'bg-red-500/10',   color: 'text-red-400',   border: 'border-red-500/20' }
    : riskPct >= 34
    ? { label: '🟡 Riesgo Medio',  bg: 'bg-amber-500/10',  color: 'text-amber-400',   border: 'border-amber-500/20' }
    : { label: '🟢 Riesgo Bajo',   bg: 'bg-emerald-500/10', color: 'text-emerald-400',  border: 'border-emerald-500/20' };

  const scoreText = riskPct >= 67
    ? 'Tu nivel de conocimiento legal es bajo. Necesitas protección urgente antes de firmar cualquier contrato de alquiler.'
    : riskPct >= 34
    ? 'Tienes conocimiento básico, pero hay brechas importantes que podrían costarte caro. Firmix IA puede cubrirte.'
    : '¡Excelente! Tienes un buen conocimiento legal. Igual, Firmix IA puede ahorrarte tiempo y darte la certeza total.';

  return (
    <div className="text-center pt-4">
      {/* Risk Gauge */}
      <div className={`w-24 h-24 rounded-full flex flex-col items-center justify-center mx-auto mb-6 border-4 ${badge.color} shadow-lg`} style={{ boxShadow: '0 0 20px -4px currentColor' }}>
        <span className="text-3xl font-black text-white">{riskPct}%</span>
        <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wide -mt-0.5">Riesgo</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white">
        Reporte de Riesgo para <span className="text-amber-500">{leadName || 'ti'}</span>
      </h3>
      <p className="text-xs text-slate-400 mt-1">
        Objetivo: <span className="text-white font-medium">{goalMap[leadGoal] || 'No especificado'}</span>
      </p>
      <div className={`inline-block mt-3.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${badge.bg} ${badge.color} ${badge.border}`}>{badge.label}</div>
      <p className="text-slate-300 text-sm mt-5 max-w-md mx-auto leading-relaxed">
        {scoreText}
      </p>

      <hr className="border-navy-800 my-8" />

      {/* CTA */}
      <div className="p-6 bg-navy-950/60 border border-navy-800 rounded-2xl max-w-md mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
        <h4 className="text-base font-bold text-white tracking-wide">¡No arriesgues tu dinero ni tu tranquilidad!</h4>
        <p className="text-slate-400 text-xs mt-2.5 leading-relaxed">
          La Inteligencia Artificial de Firmix IA escanea tu contrato en segundos, detecta penalidades excesivas y te alerta antes de que firmes.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-3">
          <a href="/app.html" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-navy-950 font-bold text-xs uppercase tracking-wider rounded-xl text-center">
            Probar Firmix IA Gratis
          </a>
          <button onClick={onReset} className="text-xs text-slate-400 hover:text-slate-300 underline underline-offset-4 decoration-dotted bg-transparent border-0 cursor-pointer">
            Volver a intentar el test
          </button>
        </div>
      </div>
    </div>
  );
}
