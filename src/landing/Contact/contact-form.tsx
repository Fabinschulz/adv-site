'use client';

import { Button, Input, Textarea } from '@/components';
import { MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

type FormData = {
  name: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá! Me chamo ${formData.name}.\n\nAssunto: ${formData.subject}\n\nMensagem: ${formData.message}\n\nTelefone: ${formData.phone}`
    );
    window.open(`https://wa.me/5511932142673?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
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
  );
};

export { ContactForm };
