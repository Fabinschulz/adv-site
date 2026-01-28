'use client';
import { ErrorFallback } from '@/components';

type RootErrorProps = Readonly<{
  error: Error;
  reset: () => void;
}>;

export default function GlobalErrorBoundary({ error, reset }: RootErrorProps) {
  return (
    <ErrorFallback
      statusCode={500}
      title="Ops! Algo deu errado."
      message={`Erro: ${error.message}`}
      onButtonClick={reset}
    />
  );
}
