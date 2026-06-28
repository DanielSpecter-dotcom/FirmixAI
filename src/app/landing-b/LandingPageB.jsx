import '../../common/styles/global-b.css';

import { useSEO }         from '../../common/hooks/useSEO';
import { NavbarB }        from '../../features/landing-b/components/NavbarB';
import { HeroB }          from '../../features/landing-b/components/HeroB';
import { QuickStats }     from '../../features/landing-b/components/QuickStats';
import { FeaturesB }      from '../../features/landing-b/components/FeaturesB';
import { DemoSlideshowB } from '../../features/landing-b/components/DemoSlideshowB';
import { StorytellingB }  from '../../features/landing-b/components/StorytellingB';
import { ContractQuizB }  from '../../features/landing-b/components/ContractQuizB';
import { PricingB }       from '../../features/landing-b/components/PricingB';
import { TestimonialsB }  from '../../features/landing-b/components/TestimonialsB';
import { BlogB }          from '../../features/landing-b/components/BlogB';
import { EmailCaptureB }  from '../../features/landing-b/components/EmailCaptureB';
import { FooterB }        from '../../features/landing-b/components/FooterB';

const SEO_LANDING_B = {
  title: 'Firmix IA — Scam Shield: Detecta Estafas en tu Contrato de Alquiler en 60 Segundos',
  description:
    'Usa el Scam Shield de Firmix IA para escanear contratos de alquiler y detectar cláusulas trampa antes de firmar. Gratis, sin registro, resultados en 60 segundos. Lima, Perú.',
  canonical: 'https://firmix-ai.vercel.app/landing-b',
  ogImage: 'https://firmix-ai.vercel.app/img/og-landing-b.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Firmix IA — Scam Shield para contratos de alquiler',
    url: 'https://firmix-ai.vercel.app/landing-b',
    description:
      'Variante B de la landing page de Firmix IA. Presenta el Scam Shield: herramienta de detección de estafas en contratos de alquiler mediante IA, con resultados instantáneos.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://firmix-ai.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Scam Shield — Contratos Seguros',
          item: 'https://firmix-ai.vercel.app/landing-b',
        },
      ],
    },
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: 'Firmix IA — Scam Shield',
      applicationCategory: 'LegalService',
      url: 'https://firmix-ai.vercel.app/landing-b',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'PEN',
        description: 'Escaneo gratuito de contratos de alquiler',
      },
    },
  },
};

/**
 * LandingPageB — Variante B (Emerald/Cyan).
 * Ensambla todas las secciones y aplica SEO específico para esta ruta.
 */
export function LandingPageB() {
  useSEO(SEO_LANDING_B);

  return (
    <div className="landing-b-theme">
      <NavbarB />
      <main>
        <HeroB />
        <QuickStats />
        <FeaturesB />
        <DemoSlideshowB />
        <StorytellingB />
        <ContractQuizB />
        <PricingB />
        <TestimonialsB />
        <BlogB />
        <EmailCaptureB />
      </main>
      <FooterB />
    </div>
  );
}
