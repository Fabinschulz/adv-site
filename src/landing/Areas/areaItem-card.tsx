'use client';

import { itemVariants } from '@/utils';
import { motion } from 'framer-motion';
import { JSX } from 'react';
import { AreaItem } from './constants';

type AreaItemCardProps = {
  data: AreaItem;
};

export function AreaItemCard({ data }: AreaItemCardProps): JSX.Element {
  const Icon = data.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="group flex items-center gap-4 rounded-xl bg-secondary/50 p-4 transition-colors hover:bg-primary/5"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background transition-colors group-hover:bg-primary/10">
        <Icon size={20} className="text-primary" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{data.title}</h4>
        <p className="text-sm text-muted-foreground">{data.description}</p>
      </div>
    </motion.div>
  );
}
