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
    <section className="py-10 bg-navy-900/50 border-t border-b border-navy-900/60">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div 
              key={s.value} 
              className="py-2 lg:border-l lg:first:border-l-0 border-navy-800"
            >
              <div 
                className="text-2xl sm:text-3xl font-display font-black" 
                style={{ color: s.color }}
              >
                {s.value}
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
