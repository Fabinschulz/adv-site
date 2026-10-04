'use client';

import { ArrowRight, Scale, Shield, Users } from 'lucide-react';

import { Button } from '@/components';
import { CSSProperties, JSX } from 'react';

const enterDelay = (index: number): CSSProperties => ({ animationDelay: `${0.3 + index * 0.2}s` });

export function Hero(): JSX.Element {
  const scrollToAbout = (): void => {
    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-linear-to-br from-secondary via-background to-accent/30" />

      <div className="glow-orb absolute right-0 top-1/4 h-96 w-96" />
      <div className="glow-orb absolute bottom-1/4 left-0 h-80 w-80" />

      <div className="absolute right-1/4 top-0 h-40 w-px bg-linear-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/3 h-32 w-px bg-linear-to-t from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-hero-fade text-center lg:text-left">
            <div className="mb-4 animate-hero-item" style={enterDelay(0)}>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Scale size={16} />
                Especialista em Direito do Trabalho e Civil
              </span>
            </div>

            <h1
              className="mb-6 animate-hero-item font-display text-4xl font-bold leading-none text-foreground md:text-5xl lg:text-6xl"
              style={enterDelay(1)}
            >
              Defendendo seus
              <br />
              <span className="text-primary">direitos</span> com excelência e dedicação
            </h1>

            <p
              className="mb-8 max-w-xl animate-hero-item text-xl text-muted-foreground mx-auto lg:mx-0"
              style={enterDelay(2)}
            >
              Assessoria jurídica personalizada em Direito do Trabalho e Civil. Compromisso com resultados e atendimento
              humanizado para proteger o que é seu por direito.
            </p>

            <div
              className="flex animate-hero-item flex-col gap-4 sm:flex-row justify-center lg:justify-start"
              style={enterDelay(3)}
            >
              <Button
                size="lg"
                endIcon={ArrowRight}
                iconStyleOverrides="ml-2 duration-300 ease-out group-hover:translate-x-1"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 text-md font-medium shadow-lg shadow-primary/25"
                isBtnLink
              >
                Agende sua Consulta
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToAbout}
                className="border-primary/30 hover:bg-primary/5 text-md font-medium"
              >
                Conheça Nosso Trabalho
              </Button>
            </div>

            <div className="mt-12 grid animate-hero-item grid-cols-3 gap-4" style={enterDelay(4)}>
              {[
                { icon: Users, value: '99+', label: 'Clientes Atendidos' },
                { icon: Scale, value: '95%', label: 'Casos de Sucesso' },
                { icon: Shield, value: '5+', label: 'Anos de Experiência' }
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="mb-1 flex items-center justify-center gap-2 lg:justify-start">
                    <Icon size={18} className="text-primary" />
                    <span className="font-display text-2xl font-bold text-foreground">{value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden animate-hero-card items-center justify-center lg:flex">
            <div className="relative">
              <div className="flex shadow-2xl shadow-primary/30 h-96 w-80 items-center justify-center rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-primary/5 to-transparent">
                <div className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary/30 bg-linear-to-br from-primary/20 to-primary/5">
                    <Scale size={48} className="text-primary" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold">Dra. Mariana</h3>
                  <p className="text-sm text-muted-foreground">OAB/MG 000.000</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Trabalhista</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Civil</span>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 -top-6 flex h-20 w-20 animate-float-up items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <Shield size={28} className="text-primary" />
              </div>

              <div className="absolute -bottom-4 -right-4 flex h-16 w-16 animate-float-down items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Users size={24} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary/30">
          <div className="mt-2 h-3 w-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
