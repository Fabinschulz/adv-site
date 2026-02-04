import { Quote, Star } from 'lucide-react';
import { JSX } from 'react';
import { Testimonial } from './constants';

type TestimonialProps = {
  data: Testimonial;
};

export function TestimonialCard({ data }: TestimonialProps): JSX.Element {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-gold">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Quote size={20} className="text-primary" />
      </div>

      <div className="mb-4 flex gap-1">
        {Array.from({ length: data.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-primary text-primary" />
        ))}
      </div>

      <p className="mb-6 leading-relaxed text-foreground/80">“{data.content}”</p>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <span className="font-display font-bold text-primary">{data.name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{data.name}</p>
          <p className="text-xs text-muted-foreground">{data.role}</p>
        </div>
      </div>
    </div>
  );
}
