'use client';

import { containerVariants, itemVariants } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { JSX, useRef } from 'react';
import { DIFFERENTIALS } from './constants';
import { DifferentialCard } from './diff-card';
import { DifferentialsCTA } from './diff-CTA';

export function Differentials(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-linear-to-b from-secondary/30 to-background py-24"
    >
      <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Por Que Nos Escolher
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Nossos <span className="text-primary">diferenciais</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Um serviço jurídico focado em resultados e confiança.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIALS.map((item) => (
              <DifferentialCard key={item.title} data={item} />
            ))}
          </div>

          <DifferentialsCTA />
        </motion.div>
      </div>
    </section>
  );
}
