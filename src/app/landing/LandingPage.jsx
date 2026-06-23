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

/**
 * LandingPage — ensambla todas las secciones de la landing.
 * El orden de secciones replica fielmente el index.html original.
 */
export function LandingPage() {
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
