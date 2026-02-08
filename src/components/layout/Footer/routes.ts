import { whatsappLink } from '@/utils';
import { Instagram, Linkedin, Phone } from 'lucide-react';

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
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mariana-gon%C3%A7alves-2558a7218/', label: 'LinkedIn' },
  { icon: Phone, href: whatsappLink, label: 'WhatsApp' },
];
