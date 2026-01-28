'use client';

import { motion, useInView } from 'framer-motion';
import { JSX, useRef } from 'react';
import { containerVariants, itemVariants } from '../../utils/animations/variants';
import { AboutVisual } from './about-visual';
import { CREDENTIALS } from './constants';
import { CredentialCard } from './credential-card';

export function About(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="relative overflow-hidden bg-secondary/30 py-24">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          <AboutVisual />

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Sobre a Advogada
            </span>

            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              Advocacia com <span className="text-primary">experiência</span> e compromisso
            </h2>

            <p className="mb-6 leading-relaxed text-muted-foreground">
              A Dra. Mariana atua com ética, transparência e foco em resultados, oferecendo assessoria jurídica completa
              em Direito do Trabalho e Civil.
            </p>

            <p className="mb-8 leading-relaxed text-muted-foreground">
              Cada cliente é tratado de forma única, com atenção personalizada e acompanhamento próximo em todas as
              etapas do processo.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {CREDENTIALS.map((item) => (
                <CredentialCard key={item.title} data={item} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
