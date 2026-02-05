'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { CONTACT_INFO } from './constants';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá! Me chamo ${formData.name}.\n\nAssunto: ${formData.subject}\n\nMensagem: ${formData.message}\n\nTelefone: ${formData.phone}`
    );
    window.open(`https://wa.me/5511932142673?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-secondary/20 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Contato
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em <span className="text-primary">contato</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para ouvir você. Preencha o formulário ou entre em contato diretamente pelo WhatsApp.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl border border-border p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">Envie sua mensagem</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone / WhatsApp
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Ex: Consulta sobre processo trabalhista"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Descreva brevemente sua situação..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold group"
                  size="lg"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Enviar via WhatsApp
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem.
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              {CONTACT_INFO.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}

              {/* WhatsApp Direct Button */}
              <div className="p-6 rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">Atendimento Rápido</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefere falar diretamente? Clique abaixo para iniciar uma conversa no WhatsApp.
                </p>
                <button
                  onClick={() => {
                    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta com a Dra. Mariana.');
                    window.open(`https://wa.me/5511932142673?text=${message}`, '_blank');
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-medium transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chamar no WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Contact };
