'use client';

import { motion } from 'framer-motion';
import { JSX } from 'react';

export interface LogoProps {
  className?: string;
  showText?: boolean;
  isFooter?: boolean;
}

export function Logo({ className = '', showText = true, isFooter = false }: LogoProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-3 ${className}`}
    >
      <div className="relative flex h-12 w-12 items-center justify-center">
        <svg viewBox="0 0 60 60" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="30" cy="30" r="28" stroke="hsl(var(--gold))" strokeWidth="2" />

          <path
            d="M18 42V22L30 34L42 22V42"
            stroke="hsl(var(--gold))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path d="M20 18H40" stroke="hsl(var(--gold))" strokeWidth="2" strokeLinecap="round" />

          <path d="M30 14V18" stroke="hsl(var(--gold))" strokeWidth="2" strokeLinecap="round" />

          <circle cx="22" cy="18" r="2" fill="hsl(var(--gold))" />
          <circle cx="38" cy="18" r="2" fill="hsl(var(--gold))" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display font-semibold tracking-wide text-foreground ${isFooter ? 'text-lg text-white' : 'text-xl'}`}
          >
            Mariana
          </span>
          <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Advocacia</span>
        </div>
      )}
    </motion.div>
  );
}
