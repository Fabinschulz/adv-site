'use client';

import { itemVariants } from '@/utils';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { JSX } from 'react';

export function AboutVisual(): JSX.Element {
  return (
    <motion.div variants={itemVariants} className="order-2 lg:order-1">
      <div className="relative">
        <div className="shadow-2xl shadow-primary/25 aspect-4/5 overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-primary/5 to-transparent">
          <div className="flex h-full items-center justify-center p-8 text-center">
            <div>
              <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full border-4 border-primary/20 bg-linear-to-br from-primary/30 to-primary/10">
                <span className="font-display text-6xl font-bold text-primary">M</span>
              </div>
              <h3 className="mb-1 font-display text-2xl font-semibold">Dra. Mariana</h3>
              <p className="text-muted-foreground">Advogada</p>
              <p className="mt-2 text-sm text-primary">OAB/MG 000.000</p>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-6 -right-6 rounded-2xl border border-primary/20 bg-background p-4 shadow-gold-lg"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Award size={24} className="text-primary" />
            </div>
            <div>
              <p className="font-display text-lg font-bold">5+ Anos</p>
              <p className="text-xs text-muted-foreground">de Experiência</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
