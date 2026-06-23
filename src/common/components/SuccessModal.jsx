import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SuccessModal — modal de éxito tras el registro de email.
 * Se abre con el evento 'firmix:open-success-modal'
 * y se cierra con 'firmix:close-success-modal' o haciendo click en el backdrop.
 *
 * Este componente vive en MainLayout (fuera de ambas landings), así que no
 * hereda el wrapper ".landing-b-theme" — el acento debe resolverse aquí
 * mismo según la ruta para no filtrar la paleta de Landing A en Landing B.
 */
export function SuccessModal() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLandingB = location.pathname.startsWith('/landing-b');
  const accentGradient = isLandingB
    ? 'linear-gradient(to right, #10b981, #06b6d4)'
    : 'linear-gradient(to right, #f59e0b, #d97706)';
  const accentTextColor = isLandingB ? '#0b0f19' : '#0e131b';

  useEffect(() => {
    const openHandler  = () => setOpen(true);
    const closeHandler = () => setOpen(false);
    window.addEventListener('firmix:open-success-modal', openHandler);
    window.addEventListener('firmix:close-success-modal', closeHandler);
    return () => {
      window.removeEventListener('firmix:open-success-modal', openHandler);
      window.removeEventListener('firmix:close-success-modal', closeHandler);
    };
  }, []);

  if (!open) return null;

  const handleDownload = () => {
    // Genera un PDF informativo simple con jsPDF si está cargada
    if (typeof window.jspdf !== 'undefined') {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text('Guia de Alquiler Seguro - Firmix IA', 20, 20);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      const lines = [
        '1. Siempre lee el contrato completo antes de firmar.',
        '2. Verifica que la garantia tenga plazo maximo de devolucion.',
        '3. Documenta el estado del inmueble con fotos al ingreso.',
        '4. Exige recibos de pago por cada mensualidad.',
        '5. Consulta a Firmix IA ante clausulas sospechosas.',
      ];
      lines.forEach((l, i) => doc.text(l, 20, 40 + i * 12));
      doc.save('Guia_Alquiler_Seguro_FirmixIA.pdf');
    } else {
      alert('Descargando guía... (jsPDF no disponible en modo React dev)');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
        }}
      />
      {/* Card */}
      <div
        className="animate-modal-in"
        style={{
          position: 'relative',
          background: '#0d1117',
          border: '1px solid #2f446f',
          borderRadius: '1.5rem',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
          padding: '2rem',
          maxWidth: '24rem',
          width: '100%',
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        {/* Icono */}
        <div style={{
          width: '5rem', height: '5rem',
          background: 'rgba(16,185,129,0.1)',
          border: '1px solid rgba(16,185,129,0.3)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.25rem',
        }}>
          <svg style={{ width: '2.5rem', height: '2.5rem', color: '#34d399' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff' }}>
          ¡Registro exitoso!
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
          Te mantendremos informado. ¡Descarga nuestra guía gratuita de alquiler seguro!
        </p>
        <hr style={{ borderColor: '#1b263b', margin: '1.25rem 0' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button
            onClick={handleDownload}
            style={{
              width: '100%', padding: '0.875rem',
              background: accentGradient,
              color: accentTextColor, fontWeight: 700, borderRadius: '0.75rem',
              border: 'none', cursor: 'pointer', fontSize: '0.875rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            }}
          >
            <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            ↓ Descargar Guía PDF Gratuita
          </button>
          <a
            href="/app.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              width: '100%', padding: '0.75rem',
              border: '1px solid #2f446f',
              background: '#1b263b',
              color: '#fff', fontWeight: 600,
              borderRadius: '0.75rem', fontSize: '0.875rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              textDecoration: 'none', cursor: 'pointer',
            }}
          >
            Probar la App ahora
            <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
