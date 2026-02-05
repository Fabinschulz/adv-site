import { Award, Clock, Heart, MessageSquare, Shield, Zap } from 'lucide-react';

export type DifferentialItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description: 'Tratamos cada cliente de forma única, com empatia e atenção às suas necessidades.'
  },
  {
    icon: Shield,
    title: 'Transparência Total',
    description: 'Você acompanha cada etapa do processo, sem surpresas ou custos ocultos.'
  },
  {
    icon: Clock,
    title: 'Agilidade nas Respostas',
    description: 'Retorno em até 24 horas, garantindo acompanhamento contínuo.'
  },
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description: 'Mais de 5 anos de atuação com alto índice de êxito.'
  },
  {
    icon: MessageSquare,
    title: 'Comunicação Clara',
    description: 'Explicações objetivas e acessíveis, sem juridiquês.'
  },
  {
    icon: Zap,
    title: 'Soluções Estratégicas',
    description: 'Estratégias eficientes focadas no melhor resultado.'
  }
];
