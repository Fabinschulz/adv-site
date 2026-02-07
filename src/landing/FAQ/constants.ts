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
    answer: 'Os principais documentos são: carteira de trabalho (CTPS), contracheques, contrato de trabalho, termo de rescisão (se houver), comprovante de horas extras, testemunhas e qualquer prova documental relacionada à sua reclamação.'
  },
  {
    question: 'Fui demitido sem justa causa, quais são meus direitos?',
    answer: 'Você tem direito a: saldo de salário, aviso prévio (trabalhado ou indenizado), férias proporcionais + 1/3, 13º proporcional, multa de 40% do FGTS, liberação do FGTS e seguro-desemprego.'
  },
  {
    question: 'A primeira consulta é cobrada?',
    answer: 'Oferecemos uma primeira consulta para análise do seu caso sem compromisso. Nela, avaliamos sua situação, explicamos seus direitos e as possibilidades de atuação.'
  },
  {
    question: 'Como funciona o pagamento dos honorários?',
    answer: 'Trabalhamos com honorários acordados previamente, que podem ser pagos ao final do processo (êxito) em casos trabalhistas, ou combinados antecipadamente em casos cíveis. Tudo é formalizado em contrato transparente.'
  },
  {
    question: 'Posso acompanhar meu processo online?',
    answer: 'Sim. Mantemos o cliente informado e orientamos sobre o acesso aos portais dos tribunais.'
  },
  {
    question: 'O que é assédio moral no trabalho?',
    answer: 'Assédio moral é a exposição repetitiva do trabalhador a situações humilhantes e constrangedoras no ambiente de trabalho. Isso inclui: cobranças excessivas, isolamento, piadas ofensivas, ameaças e tratamento diferenciado negativo.'
  },
  {
    question: 'Quanto tempo tenho para entrar com uma ação trabalhista?',
    answer: 'Você tem até 2 anos após o término do contrato de trabalho para entrar com a ação. Porém, só poderá reclamar os últimos 5 anos de direitos trabalhistas anteriores ao ajuizamento da ação.'
  }
];
