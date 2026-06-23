import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ChatWidget — isla flotante con el chatbot informativo simulado.
 * Vive en MainLayout (fuera de ambas landings, junto al ABSwitcher), así que
 * resuelve su propio acento de color según la ruta para no mezclar paletas.
 * Se ubica abajo-IZQUIERDA para no superponerse con el ABSwitcher (abajo-derecha).
 */

const SUGGESTED_QUESTIONS = [
  '¿Qué es Firmix IA?',
  '¿Firmix IA es seguro?',
  '¿Cómo analizo mi contrato de alquiler?',
];

const QNA = {
  '¿Qué es Firmix IA?': '**Firmix IA** es una plataforma inteligente que te ayuda a auditar, analizar y firmar tus contratos de alquiler de forma segura y rápida en Lima.\n\nContamos con:\n- **Auditoría de contratos con IA** para detectar cláusulas abusivas.\n- **Abogado virtual 24/7** para resolver tus dudas legales.\n- **Firma digital certificada** con validez bajo la Ley N° 27269.',
  '¿Firmix IA es seguro?': '¡Totalmente seguro! En **Firmix IA** ciframos toda tu información confidencial. Además, nuestras firmas digitales cumplen estrictamente con la **Ley N° 27269 de Firmas y Certificados Digitales del Perú**, garantizando que el contrato tenga el mismo valor legal que una firma en papel.',
  '¿Cómo analizo mi contrato de alquiler?': 'Es muy fácil analizar tu contrato:\n\n1. Abre nuestra **App** (botón "Ir a la App").\n2. Regístrate con tu correo.\n3. Sube tu contrato en PDF o Word.\n4. La IA escaneará el texto y te mostrará una calificación de riesgo, además de alertas sobre cláusulas abusivas en cuestión de segundos.',
};

function processInput(message) {
  const text = message.toLowerCase().trim();
  if (text.includes('que es') || text.includes('quien') || text.includes('que hace')) {
    return QNA['¿Qué es Firmix IA?'];
  }
  if (text.includes('segur') || text.includes('confiabl') || text.includes('validez') || text.includes('legal')) {
    return QNA['¿Firmix IA es seguro?'];
  }
  if (text.includes('como') && (text.includes('analiz') || text.includes('subir') || text.includes('usar') || text.includes('contrat'))) {
    return QNA['¿Cómo analizo mi contrato de alquiler?'];
  }
  if (text.includes('hola') || text.includes('buenos dias') || text.includes('buenas') || text.includes('saludo')) {
    return '¡Hola! Soy el asistente virtual de **Firmix IA**. ¿En qué te puedo ayudar hoy? Puedes preguntarme sobre seguridad, cómo analizar contratos o qué servicios ofrecemos.';
  }
  if (text.includes('precio') || text.includes('gratis') || text.includes('costo') || text.includes('cobro')) {
    return '¡El registro y tus primeros 3 análisis con **Scam Shield** son gratis! Para análisis ilimitados y firma digital, contamos con planes desde **S/.29 al mes**.';
  }
  if (text.includes('app') || text.includes('aplicacion') || text.includes('aplicación') || text.includes('probar') || text.includes('link')) {
    return '¡Prueba nuestra App ahora mismo con el botón **"Ir a la App"**! Ahí podrás subir contratos y chatear directamente con el Abogado IA.';
  }
  return 'Interesante pregunta. Como asistente de información básica, te recomiendo abrir nuestra **App** completa, donde podrás auditar contratos de alquiler reales, chatear con el abogado IA 24/7 y firmar documentos de forma digital y segura.';
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, (tag) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  }[tag] || tag));
}

function markdownToHtml(text) {
  let html = escapeHTML(text);
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/`(.*?)`/g, '<code style="background:#060911;padding:0 4px;border-radius:4px;font-size:10px;">$1</code>');
  html = html.replace(/\n/g, '<br>');
  return html;
}

export function ChatWidget() {
  const location = useLocation();
  const isLandingB = location.pathname.startsWith('/landing-b');

  const accent      = isLandingB ? '#10b981' : '#f59e0b';
  const accentDark  = isLandingB ? '#059669' : '#d97706';
  const accentSoft  = isLandingB ? 'rgba(16,185,129,0.3)'  : 'rgba(245,158,11,0.3)';
  const accentGlow  = isLandingB ? 'rgba(16,185,129,0.2)'  : 'rgba(245,158,11,0.2)';
  const onAccentTxt = isLandingB ? '#0b0f19' : '#0e131b';

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, open]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { sender: 'user', text: trimmed }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const reply = QNA[trimmed] ?? processInput(trimmed);
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', left: '1.5rem', zIndex: 99998, fontFamily: 'var(--font-sans)' }}>
      {/* ── Chat Window ── */}
      {open && (
        <div style={{
          position: 'absolute', bottom: '4.5rem', left: 0,
          width: 'min(380px, calc(100vw - 3rem))',
          height: 'min(480px, 70vh)',
          background: 'rgba(13,17,23,0.97)',
          border: '1px solid #1b263b',
          borderRadius: '1.25rem',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)',
          backdropFilter: 'blur(16px)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          animation: 'chatBoxIn 0.25s ease-out',
        }}>
          {/* Header */}
          <div style={{
            padding: '1rem', background: 'linear-gradient(to right, #0d1117, #161e2c)',
            borderBottom: '1px solid #1b263b',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '2.25rem', height: '2.25rem',
                background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
                borderRadius: '0.5rem', padding: '0.3rem',
                boxShadow: `0 0 10px -2px ${accentGlow}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <img src="/img/LogoFirmix2.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Firmix Logo" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>Asistente Informativo</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <span className="animate-pulse" style={{ width: '0.4rem', height: '0.4rem', borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ fontSize: '0.625rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>IA Activa</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', padding: '0.25rem' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              <svg style={{ width: '1.125rem', height: '1.125rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Welcome */}
            <BotBubble accent={accent} html="¡Hola! Soy tu asistente informativo de <strong>Firmix IA</strong>. ¿Tienes alguna duda sobre nuestra plataforma? Puedes hacer clic en una pregunta sugerida o escribirme." />

            {/* Suggested questions */}
            <div>
              <p style={{ fontSize: '0.625rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Preguntas sugeridas:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {SUGGESTED_QUESTIONS.map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    style={{
                      textAlign: 'left', background: '#0d1117', border: '1px solid #1b263b',
                      color: '#cbd7e9', borderRadius: '0.75rem', padding: '0.625rem',
                      fontSize: '0.75rem', cursor: 'pointer', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#1b263b'; e.currentTarget.style.borderColor = accentSoft; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#0d1117'; e.currentTarget.style.borderColor = '#1b263b'; e.currentTarget.style.color = '#cbd7e9'; }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Conversation */}
            {messages.map((m, i) => m.sender === 'user'
              ? <UserBubble key={i} text={m.text} accent={accent} onAccentTxt={onAccentTxt} />
              : <BotBubble key={i} accent={accent} html={markdownToHtml(m.text)} />
            )}
            {typing && <TypingBubble accent={accent} />}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} style={{ padding: '0.75rem', background: '#0d1117', borderTop: '1px solid #1b263b', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              placeholder="Escribe tu pregunta..."
              style={{
                flex: 1, background: '#060911', border: `1px solid ${inputFocused ? accent : '#1b263b'}`,
                borderRadius: '0.75rem', padding: '0.5rem 0.75rem',
                fontSize: '0.75rem', color: '#fff', outline: 'none',
                boxShadow: inputFocused ? `0 0 0 3px ${accentGlow}` : 'none',
                transition: 'border-color 0.15s, box-shadow 0.15s',
              }}
            />
            <button
              type="submit"
              aria-label="Enviar mensaje"
              style={{
                width: '2rem', height: '2rem', flexShrink: 0,
                background: accent, color: onAccentTxt,
                borderRadius: '0.75rem', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* ── Toggle Button ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Cerrar chat informativo' : 'Abrir chat informativo'}
        style={{
          width: '3.5rem', height: '3.5rem', borderRadius: '50%',
          background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
          border: 'none', cursor: 'pointer', position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 10px 25px -5px ${accentGlow}`,
          animation: open ? 'none' : 'chatBounce 3.5s infinite ease-in-out',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {!open && (
          <span style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: accent, opacity: 0.3,
          }} className="animate-ping" />
        )}
        {open ? (
          <svg style={{ width: '1.5rem', height: '1.5rem', color: onAccentTxt, position: 'relative' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg style={{ width: '1.5rem', height: '1.5rem', color: onAccentTxt, position: 'relative' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      <style>{`
        @keyframes chatBounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes chatBoxIn {
          from { opacity: 0; transform: translateY(10px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

function BotBubble({ accent, html }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
      <div style={{
        width: '1.75rem', height: '1.75rem', flexShrink: 0,
        background: '#1b263b', border: '1px solid #2f446f', borderRadius: '0.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: accent, fontWeight: 700, fontSize: '0.625rem',
      }}>FX</div>
      <div
        style={{ background: '#0d1117', border: '1px solid #1b263b', color: '#cbd7e9', borderRadius: '1rem', borderTopLeftRadius: 0, padding: '0.75rem', fontSize: '0.75rem', lineHeight: 1.6, maxWidth: '80%' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

function UserBubble({ text, accent, onAccentTxt }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ background: accent, color: onAccentTxt, borderRadius: '1rem', borderTopRightRadius: 0, padding: '0.75rem', fontSize: '0.75rem', fontWeight: 500, lineHeight: 1.6, maxWidth: '80%' }}>
        {text}
      </div>
    </div>
  );
}

function TypingBubble({ accent }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
      <div style={{
        width: '1.75rem', height: '1.75rem', flexShrink: 0,
        background: '#1b263b', border: '1px solid #2f446f', borderRadius: '0.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: accent, fontWeight: 700, fontSize: '0.625rem',
      }}>FX</div>
      <div style={{ background: '#0d1117', border: '1px solid #1b263b', borderRadius: '1rem', borderTopLeftRadius: 0, padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        {[0, 200, 400].map(delay => (
          <span key={delay} className="animate-bounce" style={{ width: '0.3rem', height: '0.3rem', borderRadius: '50%', background: accent, animationDelay: `${delay}ms` }} />
        ))}
      </div>
    </div>
  );
}
