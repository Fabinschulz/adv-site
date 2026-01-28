import {
  AlertTriangle,
  Briefcase,
  Clock,
  DollarSign,
  FileCheck,
  FileText,
  Heart,
  Home,
  Scale,
  Users
} from 'lucide-react';

export type AreaItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export const TRABALHISTA_AREAS: AreaItem[] = [
  { icon: Briefcase, title: 'Rescisões', description: 'Análise e cálculo de verbas rescisórias' },
  { icon: Clock, title: 'Horas Extras', description: 'Reclamação de horas não pagas' },
  { icon: AlertTriangle, title: 'Assédio Moral', description: 'Defesa contra assédio no trabalho' },
  { icon: DollarSign, title: 'FGTS e INSS', description: 'Regularização de depósitos' },
  { icon: FileText, title: 'Acordos', description: 'Negociação trabalhista' }
];

export const CIVIL_AREAS: AreaItem[] = [
  { icon: FileCheck, title: 'Contratos', description: 'Elaboração e revisão contratual' },
  { icon: Scale, title: 'Indenizações', description: 'Danos morais e materiais' },
  { icon: Home, title: 'Imobiliário', description: 'Locação e propriedade' },
  { icon: Heart, title: 'Família', description: 'Divórcio, guarda e pensão' },
  { icon: Users, title: 'Consumidor', description: 'Direitos do consumidor' }
];
