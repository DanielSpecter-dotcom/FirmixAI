import '../../common/styles/global-b.css';

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

/**
 * LandingPageB — Variante B del test A/B.
 *
 * Todas las secciones tienen su propia versión "B" en paleta Emerald/Cyan —
 * no se reutiliza ningún componente de Landing A — para que no quede ningún
 * rastro de la paleta Amber/Navy en esta variante. El wrapper "landing-b-theme"
 * habilita los overrides de foco/selección definidos en global-b.css.
 */
export function LandingPageB() {
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
