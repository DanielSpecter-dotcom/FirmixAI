import { useEffect } from 'react';

/**
 * useSEO — hook para actualizar las meta tags del <head> dinámicamente
 * según la ruta activa. Compatible con React Router sin SSR.
 *
 * @param {Object} opts
 * @param {string} opts.title          - <title> de la página
 * @param {string} opts.description    - meta description (≤ 160 caracteres)
 * @param {string} opts.canonical      - URL canónica absoluta
 * @param {string} [opts.ogImage]      - URL absoluta de la imagen Open Graph
 * @param {string} [opts.ogType]       - 'website' | 'article' (default: 'website')
 * @param {string} [opts.robots]       - 'index,follow' | 'noindex,nofollow'
 * @param {Object} [opts.jsonLd]       - objeto JSON-LD para schema.org
 */
export function useSEO({
  title,
  description,
  canonical,
  ogImage = 'https://firmixai.vercel.app/img/og-image.png',
  ogType = 'website',
  robots = 'index, follow',
  jsonLd,
}) {
  useEffect(() => {
    // ── Title ──────────────────────────────────────────────────────────
    document.title = title;

    // ── Helper: set or create a <meta> tag ────────────────────────────
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // ── Helper: set or create a <link> tag ───────────────────────────
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Standard meta ─────────────────────────────────────────────────
    setMeta('meta[name="description"]',         'content', description);
    setMeta('meta[name="robots"]',              'name',    'robots');
    setMeta('meta[name="robots"]',              'content', robots);

    // ── Open Graph ────────────────────────────────────────────────────
    setMeta('meta[property="og:title"]',        'property', 'og:title');
    setMeta('meta[property="og:title"]',        'content',  title);
    setMeta('meta[property="og:description"]',  'property', 'og:description');
    setMeta('meta[property="og:description"]',  'content',  description);
    setMeta('meta[property="og:url"]',          'property', 'og:url');
    setMeta('meta[property="og:url"]',          'content',  canonical);
    setMeta('meta[property="og:type"]',         'property', 'og:type');
    setMeta('meta[property="og:type"]',         'content',  ogType);
    setMeta('meta[property="og:image"]',        'property', 'og:image');
    setMeta('meta[property="og:image"]',        'content',  ogImage);
    setMeta('meta[property="og:locale"]',       'property', 'og:locale');
    setMeta('meta[property="og:locale"]',       'content',  'es_PE');
    setMeta('meta[property="og:site_name"]',    'property', 'og:site_name');
    setMeta('meta[property="og:site_name"]',    'content',  'Firmix IA');

    // ── Twitter Cards ─────────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]',        'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]',       'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]',       'content', ogImage);
    setMeta('meta[name="twitter:site"]',        'content', '@FirmixIA');

    // ── Canonical ─────────────────────────────────────────────────────
    setLink('canonical', canonical);

    // ── JSON-LD Structured Data ───────────────────────────────────────
    const existingLd = document.getElementById('json-ld-schema');
    if (existingLd) existingLd.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // ── Cleanup on unmount ────────────────────────────────────────────
    return () => {
      const ld = document.getElementById('json-ld-schema');
      if (ld) ld.remove();
    };
  }, [title, description, canonical, ogImage, ogType, robots, jsonLd]);
}
