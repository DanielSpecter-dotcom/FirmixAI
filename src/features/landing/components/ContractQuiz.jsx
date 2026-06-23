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
    <section id="contract-quiz" style={{
      padding: '4rem 0',
      background: 'rgba(6,9,17,0.6)',
      borderTop: '1px solid rgba(13,17,23,0.6)',
      borderBottom: '1px solid rgba(13,17,23,0.6)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="blob" style={{ width: '300px', height: '300px', background: 'rgba(245,158,11,0.05)', top: '10px', right: '10px' }} />
      <div className="blob" style={{ width: '300px', height: '300px', background: 'rgba(74,109,167,0.05)', bottom: '10px', left: '10px' }} />

      <div className="container" style={{ maxWidth: '48rem', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 3rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Pon a prueba tu conocimiento
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#fff', marginTop: '0.5rem' }}>
            ¿Realmente entiendes los contratos que firmas?
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '0.75rem', fontSize: '0.9rem', fontWeight: 300 }}>
            Muchos inquilinos y propietarios en Lima firman cláusulas que les cuestan miles de soles o les causan problemas legales graves.
          </p>
        </div>

        {/* Quiz Card */}
        <div style={{
          background: 'rgba(13,17,23,0.4)', border: '1px solid #1b263b',
          borderRadius: '1.5rem', padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          backdropFilter: 'blur(12px)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        }}>
          {/* Progress bar */}
          {step >= 1 && step <= 3 && (
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                <span>Progreso del Test</span>
                <span>Pregunta {step} de 3</span>
              </div>
              <div style={{ width: '100%', background: '#060911', height: '0.5rem', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{
                  background: 'linear-gradient(to right, #f59e0b, #d97706)',
                  height: '100%', borderRadius: '9999px',
                  width: `${(step / 3) * 100}%`,
                  transition: 'width 0.3s',
                }} />
              </div>
            </div>
          )}

          {/* Step 0: Lead capture */}
          {step === 0 && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '3rem', height: '3rem', background: 'rgba(245,158,11,0.1)',
                  color: '#f59e0b', borderRadius: '50%', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem',
                  fontSize: '1.25rem',
                }}>📝</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                  ¡Te damos la bienvenida al Test Legal de Firmix IA!
                </h3>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8', maxWidth: '24rem', margin: '0.5rem auto 0', lineHeight: 1.6 }}>
                  Descubre en menos de 2 minutos qué tan protegido estás contra estafas y cláusulas abusivas en el mercado peruano.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '28rem', margin: '0 auto' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.375rem' }}>Nombre completo</label>
                  <input
                    type="text"
                    value={leadName}
                    onChange={e => setLeadName(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    style={{ width: '100%', background: '#060911', border: '1px solid #1b263b', borderRadius: '0.75rem', padding: '0.75rem 1rem', fontSize: '0.75rem', color: '#fff' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.375rem' }}>Correo electrónico</label>
                  <input
                    type="email"
                    value={leadEmail}
                    onChange={e => setLeadEmail(e.target.value)}
                    placeholder="Ej. juan@correo.com"
                    style={{ width: '100%', background: '#060911', border: '1px solid #1b263b', borderRadius: '0.75rem', padding: '0.75rem 1rem', fontSize: '0.75rem', color: '#fff' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.375rem' }}>¿Cuál es tu objetivo?</label>
                  <select
                    value={leadGoal}
                    onChange={e => setLeadGoal(e.target.value)}
                    style={{ width: '100%', background: '#060911', border: '1px solid #1b263b', borderRadius: '0.75rem', padding: '0.75rem 1rem', fontSize: '0.75rem', color: leadGoal ? '#fff' : '#64748b' }}
                  >
                    <option value="" disabled>Selecciona tu objetivo...</option>
                    <option value="inquilino-residencial">Alquilar un departamento/casa (Inquilino)</option>
                    <option value="inquilino-comercial">Alquilar un local comercial/oficina (Inquilino)</option>
                    <option value="propietario">Poner en alquiler mi propiedad (Dueño)</option>
                  </select>
                </div>
                <button
                  onClick={startQuiz}
                  style={{
                    width: '100%', padding: '0.875rem',
                    background: 'linear-gradient(to right, #f59e0b, #d97706)',
                    color: '#0e131b', fontWeight: 700, fontSize: '0.75rem',
                    borderRadius: '0.75rem', border: 'none', cursor: 'pointer',
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    boxShadow: '0 4px 6px -1px rgba(245,158,11,0.2)',
                    transition: 'all 0.2s',
                  }}
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
            <div style={{ marginTop: '2rem', padding: '1.25rem', borderRadius: '1rem', border: `1px solid ${currentFeedback.correct ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`, background: currentFeedback.correct ? 'rgba(16,185,129,0.05)' : 'rgba(239,68,68,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: currentFeedback.correct ? '#10b981' : '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#fff', flexShrink: 0, marginTop: '0.125rem' }}>
                  {currentFeedback.correct ? '✓' : '✗'}
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff' }}>
                    {currentFeedback.correct ? 'Respuesta correcta' : 'Respuesta incorrecta'}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#cbd7e9', marginTop: '0.25rem', lineHeight: 1.6 }}>{currentFeedback.explanation}</p>
                </div>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={nextQuestion}
                  style={{
                    background: '#f59e0b', color: '#0e131b',
                    fontWeight: 700, fontSize: '0.75rem',
                    padding: '0.625rem 1rem', borderRadius: '0.75rem',
                    border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                  }}
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
      <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.5 }}>{q.q}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {q.options.map(opt => (
          <button
            key={opt.key}
            onClick={() => !selected && onSelect(step, opt.key)}
            style={{
              width: '100%', textAlign: 'left',
              background: selected === opt.key ? 'rgba(245,158,11,0.1)' : '#060911',
              border: `1px solid ${selected === opt.key ? 'rgba(245,158,11,0.4)' : '#1b263b'}`,
              color: selected === opt.key ? '#fff' : '#cbd7e9',
              borderRadius: '1rem', padding: '1rem',
              fontSize: '0.875rem', cursor: selected ? 'default' : 'pointer',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: '1rem', transition: 'all 0.2s',
            }}
          >
            <span>{opt.text}</span>
            <span style={{
              width: '1.25rem', height: '1.25rem', borderRadius: '50%',
              border: `1px solid ${selected === opt.key ? '#f59e0b' : '#334155'}`,
              background: selected === opt.key ? '#f59e0b' : 'transparent',
              flexShrink: 0, transition: 'all 0.2s',
            }} />
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
    ? { label: '🔴 Riesgo Alto',   bg: 'rgba(239,68,68,0.1)',   color: '#f87171',   border: 'rgba(239,68,68,0.3)' }
    : riskPct >= 34
    ? { label: '🟡 Riesgo Medio',  bg: 'rgba(245,158,11,0.1)',  color: '#fbbf24',   border: 'rgba(245,158,11,0.3)' }
    : { label: '🟢 Riesgo Bajo',   bg: 'rgba(16,185,129,0.1)', color: '#34d399',  border: 'rgba(16,185,129,0.3)' };

  const scoreText = riskPct >= 67
    ? 'Tu nivel de conocimiento legal es bajo. Necesitas protección urgente antes de firmar cualquier contrato de alquiler.'
    : riskPct >= 34
    ? 'Tienes conocimiento básico, pero hay brechas importantes que podrían costarte caro. Firmix IA puede cubrirte.'
    : '¡Excelente! Tienes un buen conocimiento legal. Igual, Firmix IA puede ahorrarte tiempo y darte la certeza total.';

  return (
    <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
      {/* Risk Gauge */}
      <div style={{
        width: '6rem', height: '6rem', borderRadius: '50%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 1.5rem',
        border: `4px solid ${badge.color}`,
        boxShadow: `0 0 20px -4px ${badge.color}`,
      }}>
        <span style={{ fontSize: '1.875rem', fontWeight: 900, color: '#fff' }}>{riskPct}%</span>
        <span style={{ fontSize: '0.5625rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '-2px' }}>Riesgo</span>
      </div>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>
        Reporte de Riesgo para <span style={{ color: '#f59e0b' }}>{leadName || 'ti'}</span>
      </h3>
      <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>
        Objetivo: <span style={{ color: '#fff', fontWeight: 500 }}>{goalMap[leadGoal] || 'No especificado'}</span>
      </p>
      <div style={{
        display: 'inline-block', marginTop: '0.75rem', padding: '0.375rem 1rem',
        borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.1em',
        background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`,
      }}>{badge.label}</div>
      <p style={{ color: '#cbd7e9', fontSize: '0.875rem', marginTop: '1rem', maxWidth: '28rem', margin: '1rem auto 0', lineHeight: 1.6 }}>
        {scoreText}
      </p>

      <hr style={{ borderColor: '#1b263b', margin: '2rem 0' }} />

      {/* CTA */}
      <div style={{ padding: '1.5rem', background: '#060911', border: '1px solid #1b263b', borderRadius: '1rem', maxWidth: '30rem', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(245,158,11,0.05), transparent)', pointerEvents: 'none' }} />
        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', letterSpacing: '0.03em' }}>¡No arriesgues tu dinero ni tu tranquilidad!</h4>
        <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
          La Inteligencia Artificial de Firmix IA escanea tu contrato en segundos, detecta penalidades excesivas y te alerta antes de que firmes.
        </p>
        <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <a href="/app.html" target="_blank" rel="noopener noreferrer" style={{
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(to right, #f59e0b, #d97706)',
            color: '#0e131b', fontWeight: 700, fontSize: '0.75rem',
            borderRadius: '0.75rem', textDecoration: 'none',
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            Probar Firmix IA Gratis
          </a>
          <button onClick={onReset} style={{ fontSize: '0.75rem', color: '#94a3b8', background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline', textDecorationStyle: 'dotted' }}>
            Volver a intentar el test
          </button>
        </div>
      </div>
    </div>
  );
}
