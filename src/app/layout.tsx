import { cn } from '@/utils';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
//@ts-ignore
import './globals.css';

export const metadata: Metadata = {
  title: 'Advocacia Mariana',
  description: 'Site institucional do escritório de advocacia Mariana.',
  keywords:
    'advocacia em extrema, advocacia, advogado, direito, consultoria jurídica, assessoria jurídica, escritório de advocacia, serviços jurídicos, advogada Mariana, direito civil, direito trabalhista, direito de família',
  authors: [{ name: 'Fábio Correa', url: 'https://github.com/Fabinschulz' }]
};

const DynamicProvider = dynamic(() => import('@/components/Provider'), {
  ssr: true
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn('antialiased')}>
        <DynamicProvider>{children}</DynamicProvider>
      </body>
    </html>
  );
}
