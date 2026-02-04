import { Button } from '@/components';
import { itemVariants, WHATSAPP } from '@/utils';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { JSX } from 'react/jsx-dev-runtime';

export function DifferentialsCTA(): JSX.Element {
  const openWhatsApp = (): void => WHATSAPP.openWhatsApp();

  return (
    <motion.div
      variants={itemVariants}
      className="mt-16 rounded-3xl border border-primary/20 bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 p-8 text-center md:p-12"
    >
      <h3 className="mb-4 font-display text-2xl font-bold md:text-3xl">Pronto para defender seus direitos?</h3>

      <p className="mx-auto mb-6 max-w-xl text-muted-foreground">Entre em contato agora mesmo e agende uma consulta.</p>

      <Button
        onClick={openWhatsApp}
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-gold-lg transition-colors hover:bg-primary/90 cursor-pointer"
        size="lg"
      >
        <MessageSquare size={20} />
        Fale Conosco no WhatsApp
      </Button>
    </motion.div>
  );
}
