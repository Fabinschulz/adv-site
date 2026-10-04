import { ClientProvider } from '@/components/providers';
import { cn } from '@/utils';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter', preload: false });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.advmariana.com.br'),
  alternates: { canonical: '/' },
  title: 'Advocacia em Extrema | Mariana Advocacia',
  description:
    'Escritório de advocacia em Extrema especializado em direito civil, trabalhista e familiar. Atendimento personalizado e consultoria jurídica.',
  keywords:
    'advocacia em extrema, advocacia, advogado, direito, consultoria jurídica, assessoria jurídica, escritório de advocacia, serviços jurídicos, advogada Mariana, direito civil, direito trabalhista, direito de família',
  authors: [{ name: 'Fábio Correa', url: 'https://github.com/Fabinschulz' }],
  manifest: '/manifest.json',
  icons: {
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }]
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(playfair.variable, inter.variable)} suppressHydrationWarning>
      <body className={cn('antialiased')}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
