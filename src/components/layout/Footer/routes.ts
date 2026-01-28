import { Facebook, Instagram, Linkedin } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export const QUICK_LINKS: NavLink[] = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' }
];

export const SERVICES: string[] = [
  'Rescisões Trabalhistas',
  'Horas Extras',
  'Assédio Moral',
  'Contratos',
  'Indenizações',
  'Direito de Família'
];

export const SOCIAL_LINKS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' }
];
