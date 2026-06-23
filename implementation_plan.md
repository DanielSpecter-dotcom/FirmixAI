# Separación en Landing Page + Web App — Firmix AI ✅ APROBADO

## Decisiones del usuario
- **Landing demo** → **Opción C**: Slideshow automático del phone mockup (no interactivo)
- **Web App layout** → **Opción X**: App de pantalla completa (sidebar + panel principal)
- **Login/Registro** simulado con localStorage (Nombre, Apellido, Email, Contraseña, Confirmar Contraseña)
- **Landing** → Sección de captura de email ("solicitar más información")

## Contexto del problema

El `index.html` actual mezcla dos conceptos en un solo archivo:
1. **Landing Page** → Secciones de marketing (Hero, Demo, Features, Pricing, Testimonials, Blog, Footer)
2. **Web App** → El simulador interactivo con tabs (Scam Shield, Chatbot, Bóveda, Firma Digital, Dashboard)

La profesora correctamente señaló que deben ser páginas separadas con propósitos distintos.

---

## Estructura de archivos propuesta

```
FirmixAI/
├── index.html          ← Landing Page (marketing)
├── app.html            ← Web App (interfaz funcional)
└── img/                ← Sin cambios
```

> [!IMPORTANT]
> Se mantiene el mismo stack tecnológico (HTML + Tailwind CDN + React in-browser) para no romper la compatibilidad existente. No se requiere Node.js ni bundler.

---

## Propuesta de cambios

### Landing Page — `index.html` (MODIFICAR)

Conserva todo el contenido de marketing pero **transforma el "Interactive Sandbox"** (demo del phone mockup) en un bloque de preview estático o un mockup congelado que muestre capturas de la app, y reemplaza el botón "Probar Scam Shield" por **"Abrir App →"** que enlaza a `app.html`.

#### Cambios específicos:

| Elemento actual | Cambio |
|---|---|
| Navbar: "Probar Scam Shield" | → botón **"Ir a la App"** que enlaza a `app.html` |
| Sección `#demo` con phone mockup interactivo | → **mockup visual estático** (screenshots o tarjetas preview) mostrando las 4 features |
| Botón Hero "Analizar Contrato Gratis (PDF)" | → enlaza a `app.html#scam-shield` |
| Secciones Features, Pricing, Testimonials, Blog, Footer | **Sin cambios** |

El phone mockup interactivo se elimina de la landing. En su lugar, se pone un diseño de **"feature preview cards"** con íconos y descripción, o un mockup visual estático con imagen del app.

---

### Web App — `app.html` (NUEVO ARCHIVO)

Página independiente con la interfaz completa de la app. Contiene:

- **Navbar propio** de app (diferente al de la landing): logo + botón "← Volver al sitio" que regresa a `index.html`
- **Todo el estado React** actual (isPremium, simTab, scamState, messages, vault, signature, etc.)
- **Todas las vistas** (Dashboard, Scam Shield, Chatbot, Bóveda, Firma Digital)
- **Modal de Checkout** (pago Premium)
- **Sidebar de navegación de tabs** en desktop (el panel izquierdo con los 4 botones de features)
- **Phone mockup** en desktop (el panel derecho)

El diseño de la web app puede **expandir el phone mockup** a pantalla completa o mantenerlo centrado — la experiencia será completamente funcional.

---

## Decisiones tomadas

- ✅ Landing demo: **Opción C** — Slideshow automático del phone (no interactivo)
- ✅ Web App: **Opción X** — Layout de pantalla completa con sidebar + panel principal
- ✅ Login/Registro simulado con `localStorage`
- ✅ Captura de email en la landing

---

## Plan de ejecución

1. **Crear `app.html`**
   - Auth wall: pantalla de Registro → Login usando `localStorage`
   - Layout de app real: sidebar izquierda (tabs) + área principal (contenido de cada feature)
   - Navbar con logo, usuario activo y botón "← Volver al sitio"
   - Todas las vistas: Dashboard, Scam Shield, Chatbot, Bóveda, Firma Digital
   - Modal de Checkout Premium

2. **Modificar `index.html`**
   - Sección `#demo`: reemplazar el sandbox interactivo por un **slideshow automático** del phone mockup
   - Añadir sección **"Solicitar más información"** (captura de email) antes del footer
   - Actualizar todos los CTAs para enlazar a `app.html`
   - Navbar: cambiar botón "Probar Scam Shield" por "Ir a la App →"

## Verificación

- Abrir `index.html` en el navegador: debe mostrar solo contenido de marketing, sin interacción de app.
- Abrir `app.html` en el navegador: debe mostrar la app funcional completa.
- Todos los CTAs de la landing deben redirigir correctamente a `app.html`.
- El botón "Volver" en la app debe llevar de regreso a `index.html`.
