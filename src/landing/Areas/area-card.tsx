import { itemVariants } from '@/utils';
import { motion } from 'framer-motion';
import { JSX } from 'react';
import { AreaItemCard } from './areaItem-card';
import { AreaItem } from './constants';

type CardProps = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  items: AreaItem[];
};

export function AreaCard({ title, subtitle, icon: Icon, items }: CardProps): JSX.Element {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-gold"
    >
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-linear-to-br from-primary/20 to-primary/5">
          <Icon size={28} className="text-primary" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <AreaItemCard key={item.title} data={item} />
        ))}
      </div>
    </motion.div>
  );
}
