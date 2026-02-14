import { Hero } from '@/landing';
import dynamic from 'next/dynamic';
import { JSX } from 'react';

const About = dynamic(() => import('@/landing').then((mod) => mod.About));
const Areas = dynamic(() => import('@/landing').then((mod) => mod.Areas));
const Differentials = dynamic(() => import('@/landing').then((mod) => mod.Differentials));
const Testimonials = dynamic(() => import('@/landing').then((mod) => mod.Testimonials));
const FAQ = dynamic(() => import('@/landing').then((mod) => mod.FAQ));
const Contact = dynamic(() => import('@/landing').then((mod) => mod.Contact));

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
