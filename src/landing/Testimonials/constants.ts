export type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos Roberto',
    role: 'Empresário',
    content: 'A Dra. Mariana foi fundamental na resolução de uma complexa questão trabalhista na minha empresa.',
    rating: 5
  },
  {
    name: 'Ana Clara',
    role: 'Professora',
    content: 'Profissional extremamente competente e atenciosa. Me manteve informada durante todo o processo.',
    rating: 5
  },
  {
    name: 'Fabio Jr.',
    role: 'Bancário',
    content: 'Tive uma ótima experiência, recomendo seus serviços a todos.',
    rating: 5
  },
  {
    name: 'Maria Fernanda',
    role: 'Enfermeira',
    content: 'Excelente advogada! Me ajudou muito no meu divórcio, sempre com ética e profissionalismo.',
    rating: 5
  },
  {
    name: 'Pedro Henrique',
    role: 'Autônomo',
    content:
      'A Dra. Mariana é uma advogada dedicada e eficiente. Graças a ela, consegui resolver meu caso rapidamente.',
    rating: 5
  }
];
