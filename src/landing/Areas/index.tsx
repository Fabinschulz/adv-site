'use client';

import { containerVariants, itemVariants } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Scale } from 'lucide-react';
import { JSX, useRef } from 'react';
import { AreaCard } from './area-card';
import { CIVIL_AREAS, TRABALHISTA_AREAS } from './constants';

export function Areas(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="areas" className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 bg-linear-to-b from-secondary/20 via-transparent to-secondary/20" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Áreas de Atuação
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Especialização em <span className="text-primary">duas áreas</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Assessoria jurídica especializada em Direito do Trabalho e Civil, com atendimento personalizado.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <AreaCard
              title="Direito do Trabalho"
              subtitle="Defesa dos direitos do trabalhador"
              icon={Briefcase}
              items={TRABALHISTA_AREAS}
            />

            <AreaCard
              title="Direito Civil"
              subtitle="Proteção patrimonial e familiar"
              icon={Scale}
              items={CIVIL_AREAS}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
