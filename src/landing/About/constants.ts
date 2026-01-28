import { Award, GraduationCap, Heart, Target } from 'lucide-react';

export type Credential = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export const CREDENTIALS: Credential[] = [
  {
    icon: GraduationCap,
    title: 'Formação Acadêmica',
    description: 'Bacharel em Direito pela USP, com especialização em Direito do Trabalho.'
  },
  {
    icon: Award,
    title: 'Experiência',
    description: 'Mais de 10 anos de atuação em causas trabalhistas e cíveis.'
  },
  {
    icon: Heart,
    title: 'Compromisso',
    description: 'Atendimento humanizado e dedicação total a cada caso.'
  },
  {
    icon: Target,
    title: 'Resultados',
    description: 'Alto índice de êxito em processos judiciais e acordos.'
  }
];
