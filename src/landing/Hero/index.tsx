'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Scale, Shield, Users } from 'lucide-react';

import { Button } from '@/components';
import { JSX } from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function Hero(): JSX.Element {
  const openWhatsApp = (): void => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta com a Dra. Mariana.');
    window.open(`https://wa.me/5511932142673?text=${message}`, '_blank');
  };

  const scrollToAbout = (): void => {
    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-linear-to-br from-secondary via-background to-accent/30" />

      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="absolute right-1/4 top-0 h-40 w-px bg-linear-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/3 h-32 w-px bg-linear-to-t from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Scale size={16} />
                Especialista em Direito do Trabalho e Civil
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Defendendo seus&nbsp;
              <span className="text-primary">direitos</span> com excelência e dedicação
            </motion.h1>

            <motion.p variants={itemVariants} className="mb-8 max-w-xl text-lg text-muted-foreground mx-auto lg:mx-0">
              Assessoria jurídica personalizada em Direito do Trabalho e Civil, com foco em resultados e atendimento
              humanizado.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={openWhatsApp}
                className="group bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Agende sua Consulta
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToAbout}
                className="border-primary/30 hover:bg-primary/5"
              >
                Conheça Nosso Trabalho
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-3 gap-6">
              {[
                { icon: Users, value: '500+', label: 'Clientes Atendidos' },
                { icon: Scale, value: '95%', label: 'Casos de Sucesso' },
                { icon: Shield, value: '10+', label: 'Anos de Experiência' }
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="mb-1 flex items-center justify-center gap-2 lg:justify-start">
                    <Icon size={18} className="text-primary" />
                    <span className="font-display text-2xl font-bold text-foreground">{value}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="relative">
              <div className="flex h-96 w-80 items-center justify-center rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-primary/5 to-transparent">
                <div className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary/30 bg-linear-to-br from-primary/20 to-primary/5">
                    <Scale size={48} className="text-primary" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold">Dra. Mariana</h3>
                  <p className="text-sm text-muted-foreground">OAB/SP 000.000</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Trabalhista</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Civil</span>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-6 -top-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10"
              >
                <Shield size={28} className="text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-xl border border-primary/20 bg-primary/10"
              >
                <Users size={24} className="text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary/30">
          <div className="mt-2 h-3 w-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
}
