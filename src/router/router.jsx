import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout }  from '../common/layouts/MainLayout';
import { LandingPage } from '../app/landing/LandingPage';
import { LandingPageB } from '../app/landing-b/LandingPageB';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        // La raíz redirige a /landing-a como canonical principal
        index: true,
        element: <Navigate to="/landing-a" replace />,
      },
      {
        path: 'landing-a',
        Component: LandingPage,   // Landing A — Amber/Navy (original)
      },
      {
        path: 'landing-b',
        Component: LandingPageB,  // Landing B — Emerald/Cyan (variante A/B)
      },
    ],
  },
]);
