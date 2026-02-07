'use client';

import { containerVariants, itemVariants } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { JSX, useRef } from 'react';
import { TESTIMONIALS } from './constants';
import { TestimonialCard } from './testimonial-card';
import { useTestimonialsCarousel } from './use-testimonials-carousel';

export function Testimonials(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const carousel = useTestimonialsCarousel(TESTIMONIALS.length);

  return (
    <section id="depoimentos" className="relative overflow-hidden py-24">
      <div className="absolute left-1/2 top-0 h-1/2 w-full -translate-x-1/2 bg-linear-to-b from-secondary/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Depoimentos
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              O que nossos <span className="text-primary">clientes</span> dizem
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Confira os depoimentos de quem já confiou em nosso trabalho para defender seus direitos.
            </p>
          </motion.div>

          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {carousel.visible(3).map((i) => (
              <TestimonialCard key={i} data={TESTIMONIALS[i]} />
            ))}
          </div>

          <div className="md:hidden">
            <TestimonialCard data={TESTIMONIALS[carousel.index]} />
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={carousel.prev}
              aria-label="Anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-primary/30 hover:bg-primary/5"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={carousel.next}
              aria-label="Próximo"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-primary/30 hover:bg-primary/5"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => carousel.goTo(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === carousel.index ? 'w-6 bg-primary' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
