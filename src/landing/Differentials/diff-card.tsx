import { itemVariants } from '@/utils';
import { motion } from 'framer-motion';
import { JSX } from 'react/jsx-dev-runtime';
import { DifferentialItem } from './constants';

type DiffCardProps = {
  data: DifferentialItem;
};

export function DifferentialCard({ data }: DiffCardProps): JSX.Element {
  const Icon = data.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-gold"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-linear-to-br` from-primary/20 to-primary/5 transition-transform group-hover:scale-110">
        <Icon size={28} className="text-primary" />
      </div>

      <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{data.title}</h3>

      <p className="text-sm leading-relaxed text-muted-foreground">{data.description}</p>

      <div className="absolute right-0 top-0 h-20 w-20 rounded-2xl bg-linear-to-bl from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
}
