import { useSEO }        from '../../common/hooks/useSEO';
import { Navbar }        from '../../common/components/Navbar';
import { Hero }          from '../../features/landing/components/Hero';
import { DemoSlideshow } from '../../features/landing/components/DemoSlideshow';
import { Storytelling }  from '../../features/landing/components/Storytelling';
import { Features }      from '../../features/landing/components/Features';
import { ContractQuiz }  from '../../features/landing/components/ContractQuiz';
import { Pricing }       from '../../features/landing/components/Pricing';
import { Testimonials }  from '../../features/landing/components/Testimonials';
import { Blog }          from '../../features/landing/components/Blog';
import { EmailCapture }  from '../../features/landing/components/EmailCapture';
import { Footer }        from '../../features/landing/components/Footer';

const SEO_LANDING_A = {
  title: 'Firmix IA — Audita tu Contrato de Alquiler con Inteligencia Artificial | Perú',
  description:
    'Detecta cláusulas abusivas en tu contrato de alquiler en menos de 60 segundos con IA. Protege tu garantía, firma digitalmente y consulta con tu abogado 24/7. Gratis para Lima.',
  canonical: 'https://firmix-ai.vercel.app/landing-a',
  ogImage: 'https://firmix-ai.vercel.app/img/og-landing-a.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Firmix IA',
    applicationCategory: 'LegalService',
    operatingSystem: 'Web',
    url: 'https://firmix-ai.vercel.app/landing-a',
    description:
      'Plataforma de inteligencia artificial para auditoría de contratos de alquiler en Perú. Detecta cláusulas abusivas, firma digitalmente y consulta con abogado IA 24/7.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PEN',
      description: 'Plan Freemium — 3 escaneos gratuitos',
    },
    provider: {
      '@type': 'Organization',
      name: 'Firmix IA',
      url: 'https://firmix-ai.vercel.app',
      logo: 'https://firmix-ai.vercel.app/img/LogoFirmix2.png',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PE',
        addressLocality: 'Lima',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
  },
};

/**
 * LandingPage — Landing A (Amber/Navy).
 * Ensambla todas las secciones y aplica SEO específico para esta ruta.
 */
export function LandingPage() {
  useSEO(SEO_LANDING_A);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DemoSlideshow />
        <Storytelling />
        <Features />
        <ContractQuiz />
        <Pricing />
        <Testimonials />
        <Blog />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
