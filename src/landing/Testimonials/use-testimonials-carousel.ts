import { useState } from 'react';

export function useTestimonialsCarousel(total: number) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const goTo = (i: number) => setIndex(i);

  const visible = (count: number) => Array.from({ length: count }, (_, i) => (index + i) % total);

  return { index, next, prev, goTo, visible };
}
