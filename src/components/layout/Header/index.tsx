'use client';

import { Button, Logo } from '@/components';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { JSX, useEffect, useState } from 'react';

type NavLink = {
  href: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' }
];

export function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);

    setIsMobileMenuOpen(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleScrollToSection(href)}
                className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button size="md" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4" isBtnLink>
              Fale Conosco
            </Button>
          </div>

          <button
            aria-label="Abrir menu"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background shadow-xl"
          >
            <nav className="container mx-auto flex flex-col gap-4 px-4 py-6 border-b border-border">
              {NAV_LINKS.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => handleScrollToSection(href)}
                  className="py-2 text-left font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {label}
                </button>
              ))}

              <Button size="md" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4" isBtnLink>
                Fale Conosco
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
