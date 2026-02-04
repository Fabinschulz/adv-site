import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { ContactInfoItem } from './types';

export const WHATSAPP_NUMBER = '5511932142673';

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Av. Paulista, 1000 - Sala 100\nSão Paulo - SP, 01310-100',
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '(11) 93214-2673',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'mariihveronez@gmail.com',
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    content: 'Segunda a Sexta: 9h às 18h',
  },
];
