import { ClientProvider } from '@/components';
import { cn } from '@/utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Advocacia Mariana',
  description: 'Site institucional do escritório de advocacia Mariana.',
  keywords:
    'advocacia em extrema, advocacia, advogado, direito, consultoria jurídica, assessoria jurídica, escritório de advocacia, serviços jurídicos, advogada Mariana, direito civil, direito trabalhista, direito de família',
  authors: [{ name: 'Fábio Correa', url: 'https://github.com/Fabinschulz' }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn('antialiased')}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
