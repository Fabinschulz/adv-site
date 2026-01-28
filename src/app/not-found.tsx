'use client';
import { ErrorFallback } from '@/components';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <ErrorFallback
      statusCode={404}
      title="Ops! Página não encontrada"
      buttonText="Voltar para a página inicial"
      message="A página que você está tentando acessar não existe ou foi removida."
      Icon={ArrowLeft}
      onButtonClick={() => (window.location.href = '/')}
    />
  );
}
