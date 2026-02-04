'use client';

import { Button, Input, Textarea } from '@/components';
import { WHATSAPP } from '@/utils';
import { MessageCircle, Send } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ContactFormData } from './types';

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    WHATSAPP.openWhatsApp(
      `Olá! Me chamo ${formData.name}.\n\n` +
        `Assunto: ${formData.subject}\n\n` +
        `Mensagem: ${formData.message}\n\n` +
        `Telefone: ${formData.phone}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-4xl border border-black/10 p-10 shadow-sm">
      <InputField label="Nome Completo" name="name" value={formData.name} onChange={handleChange} />
      <InputField label="Telefone / WhatsApp" name="phone" value={formData.phone} onChange={handleChange} />
      <InputField label="Assunto" name="subject" value={formData.subject} onChange={handleChange} />

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2 text-neutral-900">Mensagem</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="rounded-lg border border-black/30 px-4 py-3 text-sm"
          rows={5}
        />
      </div>

      <Button
        type="submit"
        className="w-full mt-6 h-12 bg-[#D4A528] hover:bg-[#C29620] text-white font-semibold rounded-xl flex items-center justify-center gap-2"
      >
        <MessageCircle size={18} className="mr-2" />
        Enviar via WhatsApp
        <Send size={14} className="ml-2" />
      </Button>
    </form>
  );
};

const InputField = ({
  label,
  name,
  value,
  onChange
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold mb-2 text-neutral-900">{label}</label>
    <Input
      name={name}
      value={value}
      onChange={onChange}
      required
      className="h-12 rounded-lg border border-black/30 px-4 text-sm focus:ring-0 focus:border-black"
    />
  </div>
);
