'use client';

import React from 'react';
import { Footer, Header } from '../layout';
import { WhatsAppButton } from '../whatsApp';

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
