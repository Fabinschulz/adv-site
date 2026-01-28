'use client';

import { motion, MotionProps } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { JSX, PropsWithChildren } from 'react';
import { Logo } from '../Logo';
import { QUICK_LINKS, SERVICES, SOCIAL_LINKS } from './routes';

const baseAnimation: MotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
};

type Props = PropsWithChildren & {
  delay?: number;
};

export function FooterSection({ children, delay = 0 }: Props): JSX.Element {
  return (
    <motion.div {...baseAnimation} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

export function scrollToSection(href: string): void {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="h-1 w-full bg-linear-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <FooterSection>
            <div className="mb-6">
              <Logo showText className="text-background" />
            </div>

            <p className="mb-6 text-sm leading-relaxed text-background/70">
              Advocacia especializada em Direito do Trabalho e Civil, com atendimento humanizado e foco em resultados.
            </p>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary/20"
                >
                  <Icon size={18} className="text-background/80" />
                </a>
              ))}
            </div>
          </FooterSection>

          <FooterSection delay={0.1}>
            <h4 className="mb-6 font-display text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection delay={0.2}>
            <h4 className="mb-6 font-display text-lg font-semibold">Nossos Serviços</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service} className="text-sm text-background/70">
                  {service}
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection delay={0.3}>
            <h4 className="mb-6 font-display text-lg font-semibold">Contato</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                  <Phone size={14} className="text-primary" />
                </span>
                (11) 93214-2673
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                  <Mail size={14} className="text-primary" />
                </span>
                mariihveronez@gmail.com
              </li>
            </ul>
          </FooterSection>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-background/50">© {year} Mariana Advocacia. Todos os direitos reservados.</p>
            <p className="text-sm text-background/50">OAB/SP 000.000</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
