import { Button, InputField, Textarea } from '@/components';
import { useFormContext } from '@/context';
import { MessageCircle, Send } from 'lucide-react';
import { useWatch } from 'react-hook-form';

const ContactForm = () => {
  const { setValue, control } = useFormContext();
  const watchName = useWatch({ name: 'message', control });

  return (
    <div className="bg-card rounded-3xl border border-border p-8">
      <h3 className="font-display text-xl font-semibold text-foreground mb-6">Envie sua mensagem</h3>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <InputField name="name" label="Nome completo" placeholder="Seu nome" required />
        </div>

        <div>
          <InputField name="phone" type="tel" label="Telefone / WhatsApp" placeholder="(XX) XXXXX-XXXX" required />
        </div>
      </div>

      <div className="mb-4">
        <InputField
          label="Assunto"
          name="subject"
          type="text"
          placeholder="Ex: Consulta sobre processo trabalhista"
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
          minLength={10}
          required
          rows={4}
          className="bg-background border-border focus:border-primary resize-none"
          onChange={(e) => setValue('message', e.target.value)}
          value={watchName}
        />
      </div>

      <Button
        startIcon={MessageCircle}
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold group"
        size="lg"
      >
        Enviar via WhatsApp
        <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Ao enviar, você será redirecionado para o WhatsApp com sua mensagem.
      </p>
    </div>
  );
};

export { ContactForm };
