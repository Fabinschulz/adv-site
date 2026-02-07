'use client';

import { Accordion } from '@/components';
import { containerVariants, itemVariants } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { JSX, useRef } from 'react';
import { FAQ_ITEMS } from './constants';
import { FAQAccordionItem } from './faq-item';

export function FAQ(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="relative overflow-hidden bg-secondary/30 py-24">
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Perguntas Frequentes
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Tire suas <span className="text-primary">dúvidas</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Respondo suas dúvidas mais comuns sobre processos trabalhistas e cíveis. Não encontrou o que procura?
              Entre em contato.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <FAQAccordionItem key={index} item={item} index={index} />
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
