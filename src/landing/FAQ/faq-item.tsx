'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components';
import { JSX } from 'react/jsx-dev-runtime';
import { FAQItem as Item } from './constants';

type Props = {
  item: Item;
  index: number;
};

export function FAQAccordionItem({ item, index }: Props): JSX.Element {
  return (
    <AccordionItem
      value={`item-${index}`}
      className="rounded-xl border border-border bg-card px-6 transition-all
                 data-[state=open]:border-primary/30
                 data-[state=open]:shadow-gold"
    >
      <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:text-primary hover:no-underline">
        {item.question}
      </AccordionTrigger>

      <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">{item.answer}</AccordionContent>
    </AccordionItem>
  );
}
