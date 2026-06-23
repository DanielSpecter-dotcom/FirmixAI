/**
 * QuickStats — Sección exclusiva de la variante B.
 * Adelanta las estadísticas clave debajo del Hero (diferencia estructural vs Landing A).
 * Paleta: Emerald/Cyan.
 */
export function QuickStats() {
  const stats = [
    { value: '68%',    color: '#34d399', label: 'Contratos con cláusulas abusivas' },
    { value: 'S/.800+', color: '#fff',   label: 'Costo consulta legal tradicional' },
    { value: '<60s',   color: '#22d3ee', label: 'Tiempo de Auditoría IA' },
    { value: 'S/.29',  color: '#34d399', label: 'Suscripción Premium' },
  ];

  return (
    <section style={{
      padding: '2.5rem 0',
      background: 'rgba(13,17,23,0.5)',
      borderTop: '1px solid rgba(13,17,23,0.6)',
      borderBottom: '1px solid rgba(13,17,23,0.6)',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', textAlign: 'center' }} className="stats-grid-b">
          {stats.map((s, i) => (
            <div key={s.value} style={{ borderLeft: i > 0 && i % 2 !== 0 ? '1px solid #1b263b' : 'none' }}>
              <div style={{ fontSize: 'clamp(1.5rem, 4vw, 1.875rem)', fontFamily: 'var(--font-display)', fontWeight: 800, color: s.color }}>{s.value}</div>
              <p style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stats-grid-b { grid-template-columns: repeat(4, 1fr) !important; }
          .stats-grid-b > div { border-left: 1px solid #1b263b !important; }
          .stats-grid-b > div:first-child { border-left: none !important; }
        }
      `}</style>
    </section>
  );
}
