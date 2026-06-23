import { useState } from 'react';

/**
 * Hook que centraliza la lógica del slideshow demo.
 */
export function useDemoSlideshow(total = 4) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const next = () => setCurrentSlide(s => (s + 1) % total);
  const prev = () => setCurrentSlide(s => (s - 1 + total) % total);

  return { currentSlide, goToSlide, next, prev };
}
