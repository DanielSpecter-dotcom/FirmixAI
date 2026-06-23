import { useState } from 'react';

const TABS = [
  { id: 0, label: '🛡️ Scam Shield' },
  { id: 1, label: '💬 Abogado IA 24/7' },
  { id: 2, label: '🔒 Smart Vault' },
  { id: 3, label: '✍️ Firma Biométrica' },
];

/**
 * DemoSlideshowB — Variante B usa un DESKTOP BROWSER MOCKUP con tabs horizontales
 * en lugar del phone mockup con selector lateral de la Landing A.
 */
export function DemoSlideshowB() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <section id="demo" style={{ padding: '5rem 0', background: 'rgba(13,17,23,0.2)', borderTop: '1px solid rgba(13,17,23,0.6)', borderBottom: '1px solid rgba(13,17,23,0.6)', position: 'relative' }}>
      <div className="blob-b" style={{ width: '400px', height: '400px', background: 'rgba(16,185,129,0.05)', bottom: '2.5rem', left: 0 }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(16,185,129,0.1)', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(16,185,129,0.2)' }}>
            Centro de Operaciones
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#fff', marginTop: '1rem' }}>
            Navega por la interfaz de Firmix IA
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '0.75rem', fontWeight: 300, fontSize: '0.875rem', maxWidth: '36rem', margin: '0.75rem auto 0' }}>
            Descubre las herramientas inteligentes que protegen tu alquiler en una experiencia web totalmente intuitiva.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', maxWidth: '60rem', margin: '0 auto 2rem' }}>
          {TABS.map(tab => {
            const active = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: '0.75rem',
                  border: `1px solid ${active ? '#10b981' : '#1b263b'}`,
                  background: active ? 'rgba(16,185,129,0.1)' : '#060911',
                  color: active ? '#34d399' : '#64748b',
                  fontWeight: 700, fontSize: '0.75rem',
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  cursor: 'pointer', transition: 'all 0.3s',
                  boxShadow: active ? '0 0 10px -4px rgba(16,185,129,0.3)' : 'none',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#64748b'; }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Desktop Browser Mockup */}
        <div style={{ maxWidth: '70rem', margin: '0 auto', background: '#060911', borderRadius: '1.5rem', padding: '0.75rem 1rem 1rem', boxShadow: '0 30px 60px -15px rgba(2,6,23,0.8)', border: '1px solid rgba(27,38,59,0.8)' }}>
          {/* Window controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingBottom: '0.75rem', paddingLeft: '0.5rem' }}>
            <span style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#f43f5e', display: 'inline-block' }} />
            <span style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#fbbf24', display: 'inline-block' }} />
            <span style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            <span style={{ fontSize: '0.625rem', color: '#475569', fontFamily: 'monospace', marginLeft: '1rem' }}>https://app.firmix.ai/dashboard</span>
          </div>

          {/* Browser content area */}
          <div style={{ background: 'rgba(13,17,23,0.6)', borderRadius: '1rem', height: '32.5rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', color: '#cbd7e9', border: '1px solid rgba(27,38,59,0.5)' }}>
            {currentTab === 0 && <SlideB0 />}
            {currentTab === 1 && <SlideB1 />}
            {currentTab === 2 && <SlideB2 />}
            {currentTab === 3 && <SlideB3 />}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/app.html" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.875rem 2rem',
            background: '#10b981', color: '#0b0f19',
            fontWeight: 700, borderRadius: '1rem',
            textDecoration: 'none', fontSize: '0.875rem',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#059669'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#10b981'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Probar la App Gratis
            <svg style={{ width: '1rem', height: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Slides del browser mockup ── */
function SlideHeader({ icon, title, subtitle, badge }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1b263b', paddingBottom: '1rem', marginBottom: '1rem' }}>
      <div>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ padding: '0.375rem', background: 'rgba(16,185,129,0.1)', color: '#34d399', borderRadius: '0.5rem', fontSize: '0.75rem' }}>{icon}</span>
          {title}
        </h3>
        {subtitle && <p style={{ fontSize: '0.6875rem', color: '#64748b', marginTop: '0.25rem' }}>{subtitle}</p>}
      </div>
      {badge && <span style={{ fontSize: '0.625rem', fontWeight: 700, background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`, padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>{badge.label}</span>}
    </div>
  );
}

function SlideB0() {
  return (
    <div className="slide-b active" style={{ flexDirection: 'column', padding: '1.5rem', height: '100%' }}>
      <SlideHeader icon="🛡️" title="Scam Shield — Auditoría de Contrato" subtitle="Analizando: Contrato_Alquiler_Lince.pdf" badge={{ label: 'Riesgo Alto', bg: 'rgba(239,68,68,0.1)', color: '#f87171', border: 'rgba(239,68,68,0.2)' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', flex: 1, overflow: 'hidden' }} className="slide-b0-grid">
        {/* Score */}
        <div style={{ padding: '1rem', background: '#060911', border: '1px solid #1b263b', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '6rem', height: '6rem', borderRadius: '50%', border: '4px solid #f87171', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px -4px rgba(239,68,68,0.2)' }}>
            <span style={{ fontSize: '1.875rem', fontWeight: 900, color: '#f87171' }}>32</span>
            <span style={{ fontSize: '0.5rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginTop: '-2px' }}>Puntos IA</span>
          </div>
          <p style={{ fontSize: '0.6875rem', color: '#94a3b8', textAlign: 'center', marginTop: '1rem', lineHeight: 1.5 }}>Contrato crítico. Recomendamos renegociar las cláusulas marcadas en rojo.</p>
        </div>
        {/* Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflow: 'auto' }}>
          {[
            { color: '#f87171', bg: 'rgba(127,29,29,0.2)', border: 'rgba(239,68,68,0.2)', sev: 'Crítico', title: 'Cláusula Quinta: Penalidad Diaria', desc: 'S/.200 por cada día de retraso. Supera ampliamente el límite de usura en contratos inmobiliarios estándar del Código Civil de Perú.' },
            { color: '#f87171', bg: 'rgba(127,29,29,0.2)', border: 'rgba(239,68,68,0.2)', sev: 'Crítico', title: 'Cláusula Novena: Devolución de Depósito', desc: 'Retención de garantía por 90 días naturales post-entrega. La normativa de arrendamiento urbano establece un máximo de 30 días.' },
            { color: '#fbbf24', bg: 'rgba(120,53,15,0.2)', border: 'rgba(245,158,11,0.2)', sev: 'Advertencia', title: 'Cláusula Segunda: Lugar de Pago', desc: 'Señalado "en efectivo en domicilio". Si pagas vía transferencia o Yape, corres riesgo de litigio si no se añade addenda.' },
          ].map(item => (
            <div key={item.title} style={{ padding: '0.75rem', background: item.bg, border: `1px solid ${item.border}`, borderRadius: '0.75rem' }}>
              <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: item.color, display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <span style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', background: item.color, display: 'inline-block' }} />
                {item.title} <span style={{ fontSize: '0.5625rem', background: 'rgba(0,0,0,0.3)', padding: '0 0.25rem', borderRadius: '0.25rem' }}>{item.sev}</span>
              </h4>
              <p style={{ fontSize: '0.6875rem', color: '#94a3b8', marginTop: '0.375rem', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`.slide-b0-grid { grid-template-columns: 1fr !important; } @media(min-width:640px){.slide-b0-grid{grid-template-columns:1fr 2fr !important;}}`}</style>
    </div>
  );
}

function SlideB1() {
  return (
    <div className="slide-b active" style={{ flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '1rem', borderBottom: '1px solid #1b263b', background: '#060911', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ padding: '0.25rem', background: 'rgba(16,185,129,0.2)', color: '#34d399', borderRadius: '0.375rem' }}>💬</span>
          Abogado IA Chatbot 24/7
        </h3>
        <span style={{ fontSize: '0.5625rem', background: 'rgba(16,185,129,0.1)', color: '#34d399', padding: '0.125rem 0.5rem', borderRadius: '9999px', border: '1px solid rgba(16,185,129,0.25)' }}>Consulta en línea</span>
      </div>
      <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '0.75rem', overflow: 'hidden' }}>
        {[
          { bot: true,  text: 'Hola, soy tu Abogado IA 24/7. Acabo de auditar tu borrador. ¿Tienes alguna pregunta sobre las cláusulas críticas encontradas o quieres sugerencias de redacción alternativa?' },
          { bot: false, text: '¿Cómo redacto la cláusula de devolución de garantía para que sea justa?' },
          { bot: true,  text: 'Te sugiero reemplazarla por esta redacción: "El depósito de garantía será devuelto por el Arrendador dentro de los 30 días posteriores a la entrega de llaves, previa deducción de recibos pendientes plenamente sustentados."' },
        ].map((msg, i) => (
          <div key={i} style={{ alignSelf: msg.bot ? 'flex-start' : 'flex-end', maxWidth: '70%' }}>
            <div style={{
              background: msg.bot ? '#060911' : '#10b981',
              border: msg.bot ? '1px solid #1b263b' : 'none',
              color: msg.bot ? '#cbd7e9' : '#0b0f19',
              padding: '0.75rem', borderRadius: '1rem',
              borderTopLeftRadius: msg.bot ? 0 : '1rem',
              borderTopRightRadius: msg.bot ? '1rem' : 0,
              fontSize: '0.75rem', lineHeight: 1.6,
              fontWeight: msg.bot ? 400 : 700,
            }}>{msg.text}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '0.75rem', background: '#060911', borderTop: '1px solid #1b263b', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
        <div style={{ flex: 1, background: '#0d1117', border: '1px solid #1b263b', borderRadius: '0.75rem', padding: '0.5rem 0.75rem', fontSize: '0.75rem', color: '#64748b' }}>
          Escribe tu consulta sobre legislación de alquileres del Perú...
        </div>
        <div style={{ width: '2rem', height: '2rem', background: '#10b981', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg style={{ width: '1rem', height: '1rem', color: '#0b0f19' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlideB2() {
  return (
    <div className="slide-b active" style={{ flexDirection: 'column', padding: '1.5rem', height: '100%' }}>
      <SlideHeader icon="🔒" title="Smart Vault — Historial de Alquiler" subtitle="Tus documentos firmados y respaldados en la nube legal" badge={{ label: 'Cifrado Militar', bg: 'rgba(16,185,129,0.15)', color: '#34d399', border: 'rgba(16,185,129,0.3)' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', flex: 1, overflow: 'hidden' }} className="slide-b2-grid">
        {/* Sidebar */}
        <div style={{ background: '#060911', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid #1b263b', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <span style={{ fontSize: '0.5625rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem', paddingLeft: '0.25rem' }}>Categorías</span>
          {[
            { label: 'Contratos Activos', active: true },
            { label: 'Recibos de Pago',  active: false },
            { label: 'Garantías',        active: false },
          ].map(btn => (
            <button key={btn.label} style={{ width: '100%', textAlign: 'left', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', background: btn.active ? '#10b981' : 'transparent', color: btn.active ? '#0b0f19' : '#94a3b8', fontSize: '0.75rem', fontWeight: btn.active ? 700 : 400, border: 'none', cursor: 'pointer' }}>
              {btn.label}
            </button>
          ))}
        </div>
        {/* Document list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', overflow: 'auto' }}>
          {[
            { emoji: '📋', name: 'Contrato de Arrendamiento - Surco 2026', meta: 'Firmado digitalmente el 12/03/2026 · PDF · 1.5 MB' },
            { emoji: '💵', name: 'Recibo depósito de garantía (S/.3,200)',  meta: 'Comprobante de depósito · PNG · 800 KB' },
          ].map(doc => (
            <div key={doc.name} style={{ padding: '0.875rem', background: '#060911', border: '1px solid #1b263b', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.1)', color: '#34d399', borderRadius: '0.5rem', fontSize: '0.875rem' }}>{doc.emoji}</span>
                <div>
                  <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>{doc.name}</h4>
                  <p style={{ fontSize: '0.625rem', color: '#64748b', marginTop: '0.125rem' }}>{doc.meta}</p>
                </div>
              </div>
              <span style={{ fontSize: '0.5625rem', fontWeight: 700, background: 'rgba(16,185,129,0.1)', color: '#34d399', padding: '0.125rem 0.5rem', borderRadius: '0.25rem', border: '1px solid rgba(16,185,129,0.2)' }}>Custodia OK</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`.slide-b2-grid { grid-template-columns: 1fr !important; } @media(min-width:640px){.slide-b2-grid{grid-template-columns:1fr 3fr !important;}}`}</style>
    </div>
  );
}

function SlideB3() {
  return (
    <div className="slide-b active" style={{ flexDirection: 'column', padding: '1.5rem', height: '100%' }}>
      <SlideHeader icon="✍️" title="Firma Digital Calificada" subtitle="Firma en línea con el mismo valor que la firma manuscrita (Ley N° 27269)" badge={{ label: 'Cotejo RENIEC', bg: 'rgba(16,185,129,0.1)', color: '#34d399', border: 'rgba(16,185,129,0.25)' }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ width: '5rem', height: '5rem', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <svg style={{ width: '2.5rem', height: '2.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>¡Contrato Firmado Exitosamente!</h4>
        <p style={{ fontSize: '0.8125rem', color: '#94a3b8', marginTop: '0.5rem', lineHeight: 1.6, maxWidth: '24rem' }}>
          Tu firma digital calificada ha sido emitida con sello de tiempo oficial Indecopi y avalada por biometría facial RENIEC.
        </p>
        <div style={{ marginTop: '1.5rem', padding: '1rem 1.5rem', background: '#060911', border: '1px solid #1b263b', borderRadius: '1rem', textAlign: 'left', maxWidth: '20rem' }}>
          <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Certificado Emitido</span>
          <div style={{ fontSize: '0.6875rem', fontFamily: 'monospace', color: '#94a3b8', lineHeight: 1.7 }}>
            <div>HASH: f15a92a...f92931a</div>
            <div>LEY N° 27269 (Perú)</div>
            <div>SELLADO: Indecopi 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}
