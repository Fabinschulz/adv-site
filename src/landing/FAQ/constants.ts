export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Quanto tempo leva um processo trabalhista?',
    answer:
      'O tempo pode variar de alguns meses a alguns anos, conforme a complexidade do caso e a tramitação no tribunal.'
  },
  {
    question: 'Quais documentos preciso para iniciar uma ação trabalhista?',
    answer: 'CTPS, contracheques, contrato de trabalho, termo de rescisão (se houver) e demais provas documentais.'
  },
  {
    question: 'Fui demitido sem justa causa, quais são meus direitos?',
    answer: 'Saldo de salário, aviso prévio, férias + 1/3, 13º proporcional, FGTS + 40% e seguro-desemprego.'
  },
  {
    question: 'A primeira consulta é cobrada?',
    answer: 'A primeira consulta é destinada à análise do caso, sem compromisso.'
  },
  {
    question: 'Como funciona o pagamento dos honorários?',
    answer: 'Os honorários são definidos previamente em contrato, com total transparência.'
  },
  {
    question: 'Posso acompanhar meu processo online?',
    answer: 'Sim. Mantemos o cliente informado e orientamos sobre o acesso aos portais dos tribunais.'
  },
  {
    question: 'O que é assédio moral no trabalho?',
    answer: 'Exposição repetitiva a situações humilhantes ou constrangedoras no ambiente de trabalho.'
  },
  {
    question: 'Quanto tempo tenho para entrar com uma ação trabalhista?',
    answer: 'Até 2 anos após o término do contrato, podendo reclamar os últimos 5 anos.'
  }
];
