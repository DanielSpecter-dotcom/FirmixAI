import { createBrowserRouter } from 'react-router-dom';
import { MainLayout }  from '../common/layouts/MainLayout';
import { LandingPage } from '../app/landing/LandingPage';
import { LandingPageB } from '../app/landing-b/LandingPageB';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: LandingPage,   // Landing A — Amber/Navy (original)
      },
      {
        path: 'landing-b',
        Component: LandingPageB,  // Landing B — Emerald/Cyan (variante A/B)
      },
    ],
  },
]);
