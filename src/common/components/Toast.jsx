import { useEffect, useRef, useState } from 'react';

/**
 * Toast — notificación global de éxito.
 * Se muestra disparando el evento personalizado 'firmix:toast'
 * con { detail: { message } }.
 */
export function Toast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('¡Gracias! Te contactaremos pronto.');
  const timerRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      setMessage(e.detail?.message ?? '¡Gracias! Te contactaremos pronto.');
      setVisible(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setVisible(false), 3500);
    };
    window.addEventListener('firmix:toast', handler);
    return () => window.removeEventListener('firmix:toast', handler);
  }, []);

  return (
    <div
      id="toast"
      className={`toast${visible ? ' show' : ''}`}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(20px)',
        opacity: visible ? 1 : 0,
        zIndex: 50,
        padding: '0.75rem 1.25rem',
        background: '#059669',
        color: '#fff',
        fontSize: '0.875rem',
        fontWeight: 700,
        borderRadius: '1rem',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'all 0.4s ease',
        pointerEvents: 'none',
      }}
    >
      <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span>{message}</span>
    </div>
  );
}
