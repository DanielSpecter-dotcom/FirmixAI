# Brief de Proyecto Web: FIRMIX IA

## 1. Resumen del Proyecto (Elevator Pitch)
[cite_start]Firmix IA es una plataforma SaaS (Software as a Service) y aplicación móvil impulsada por inteligencia artificial que funciona como un "abogado digital de bolsillo" para la gestión segura de contratos de alquiler[cite: 789, 815]. [cite_start]Su objetivo es democratizar la seguridad jurídica en el mercado inmobiliario de LATAM, eliminando la burocracia, la jerga legal incomprensible y el miedo a las estafas, sin necesidad de pagar los altos costos de un abogado tradicional[cite: 232, 743, 976]. 

## 2. Público Objetivo (Para el enfoque de UX/UI)
* [cite_start]**Perfil Principal:** Jóvenes adultos y profesionales independientes (25 a 35 años) en Lima Metropolitana que buscan independizarse o mudarse[cite: 63, 488, 500].
* [cite_start]**Puntos de Dolor (Pain Points):** Tienen alta carga mental [cite: 336][cite_start], miedo constante a perder su garantía o ser estafados [cite: 136, 138][cite_start], frustración intelectual al leer contratos complejos [cite: 137] [cite_start]y aversión a la burocracia o trámites lentos[cite: 211].
* [cite_start]**Motivación:** Buscan autonomía, paz mental [cite: 147, 148][cite_start], ahorro máximo [cite: 264] [cite_start]y soluciones digitales inmediatas ("One-Tap") desde su celular[cite: 314]. 

## 3. Propuesta de Valor & Features Clave (Para destacar en la Landing Page)
[cite_start]El diseño debe comunicar confianza, seguridad y simplicidad[cite: 961]. Se deben resaltar estas funcionalidades core:
* [cite_start]**Auditoría y Traducción con IA (Scam Shield):** El usuario sube el contrato en PDF y la IA resalta visualmente los riesgos (mediante un Semáforo de Confianza) y traduce las cláusulas a viñetas simples en menos de 60 segundos[cite: 221].
* [cite_start]**Asistente Legal 24/7:** Un chatbot inteligente (Voice-first e integrado vía WhatsApp Business API) que responde dudas legales en cualquier momento[cite: 221, 234].
* [cite_start]**Smart Vault (Bóveda Digital):** Almacenamiento seguro en la nube para resguardar contratos y comprobantes de pago de alquileres[cite: 235, 292].
* [cite_start]**Firma Digital Certificada:** Capacidad de formalizar acuerdos con validez legal absoluta, utilizando biometría facial de ambas partes sin salir de casa[cite: 221, 295].

## 4. Flujo de Conversión y Embudos (User Journey)
La web debe estar orientada a la conversión rápida (Product-Led Growth), estructurada de la siguiente manera:
* [cite_start]**Lead Magnet / Gancho (Activación):** El "Wow moment"[cite: 1208]. [cite_start]Un CTA claro para que el usuario suba su contrato en PDF (Prueba Freemium) y descubra 3 riesgos en 60 segundos de forma gratuita[cite: 1042, 1062].
* [cite_start]**Registro Fácil:** Para guardar el reporte completo, el usuario debe crear su cuenta (Log In con Google/Apple en un solo clic) para desbloquear su dashboard[cite: 1214, 1215].
* [cite_start]**Monetización (Upgrade):** Una vez registrado, se ofrecen los planes de suscripción (ej. Plan AI PREMIUM por S/29 - S/69 al mes) para acceder a la Firma Digital y al Smart Vault[cite: 922]. [cite_start]Todo mediante una pasarela de pagos integrada y fluida (Yape, Plin, Stripe, Mercado Pago)[cite: 221, 1176].

## 5. Lineamientos Técnicos y de Integración
* [cite_start]**Mobile-First:** Dado que el target prefiere soluciones desde el smartphone, la navegación web debe ser una experiencia responsiva óptima[cite: 355].
* [cite_start]**Stack del Ecosistema:** El frontend de administración y la web estarán en React (y React Native para la app), interactuando con un backend de microservicios en Spring Boot y APIs de IA en FastAPI[cite: 843, 846, 847, 850]. [cite_start]El diseño UI/UX debe contemplar una integración limpia con estas arquitecturas y servicios de infraestructura Cloud en AWS (como S3 para almacenamiento de PDFs y bases de datos PostgreSQL)[cite: 852, 853, 887].