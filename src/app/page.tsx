import { About, Areas, Contact, Differentials, FAQ, Hero, Testimonials } from '@/landing';
import { JSX } from 'react';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <About />
      <Areas />
      <Differentials />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
