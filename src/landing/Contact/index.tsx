'use client';

import { FormProvider } from '@/context';
import { containerVariants, itemVariants } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ContactDetails } from './contact-details';
import { ContactForm } from './contact-form';
import { ContactFormData, contactSchema, defaultValues } from './contact-schema';
import WhatsAppSection from './whatsApp-section';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (data: ContactFormData) => {
    const message = encodeURIComponent(
      `Olá! Me chamo ${data.name}.\nAssunto: ${data.subject}\nMensagem: ${data.message}\nTelefone: ${data.phone}`
    );

    const url = `https://wa.me/5511932142673?text=${message}`;
    window.location.href = url;
  };

  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-secondary/20 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Contato
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em <span className="text-primary">contato</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Preencha o formulário ou entre em contato diretamente pelo WhatsApp.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <FormProvider validationSchema={contactSchema} defaultValues={defaultValues} onSubmit={handleSubmit}>
                <ContactForm />
              </FormProvider>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <ContactDetails />
              <WhatsAppSection />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Contact };
