import { domMax, LazyMotion } from 'framer-motion';
import dynamic from 'next/dynamic';
import React from 'react';
import { WhatsAppButton } from '../whatsApp';

const HeaderLazyLoad = dynamic(() => import('../layout/Header').then((mod) => mod.Header), { ssr: !!false });
const LazyLoadedFooter = dynamic(() => import('../layout/Footer').then((mod) => mod.Footer), { ssr: !!false });

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domMax}>
      <div className="min-h-screen bg-background">
        <HeaderLazyLoad />
        <main>{children}</main>
        <LazyLoadedFooter />
        <WhatsAppButton />
      </div>
    </LazyMotion>
  );
};
