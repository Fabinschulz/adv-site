'use client';

import { motion } from 'framer-motion';
import { JSX } from 'react';
import { itemVariants } from '../../utils/animations/variants';
import { Credential } from './constants';

type AboutCardProps = {
  data: Credential;
};

export function CredentialCard({ data }: AboutCardProps): JSX.Element {
  const Icon = data.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="flex gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/30"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon size={20} className="text-primary" />
      </div>
      <div>
        <h4 className="mb-1 text-sm font-semibold text-foreground">{data.title}</h4>
        <p className="text-xs text-muted-foreground">{data.description}</p>
      </div>
    </motion.div>
  );
}
