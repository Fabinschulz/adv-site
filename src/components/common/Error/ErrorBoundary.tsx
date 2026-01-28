'use client';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import React, { ErrorInfo, ReactNode } from 'react';

interface GenericErrorBoundaryProps {
  children: ReactNode;
  status?: 'error' | 'success' | 'pending';
  error?: Error | null;
  fallback: string;
  statusCode: number | undefined;
  handleOnButton: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class GracefullyDegradingErrorBoundary extends React.Component<GenericErrorBoundaryProps, ErrorBoundaryState> {
  private contentRef: React.RefObject<HTMLDivElement | null>;

  constructor(props: GenericErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.contentRef = React.createRef();
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error Boundary capturou um erro:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, status, fallback, statusCode, handleOnButton } = this.props;

    if (hasError || status === 'error') {
      return (
        <div
          className="flex min-h-100 items-center justify-center p-6"
          ref={this.contentRef}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: this.contentRef.current?.innerHTML || ''
          }}
        >
          <Card className="max-w-md border-destructive/50 bg-card/80">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                <h4 className="text-lg font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-destructive" />O serviço&nbsp;
                  <span className="font-semibold">{fallback ?? ''}</span>
                  encontra-se temporariamente indisponível no momento.
                </h4>
              </div>
              <CardTitle>Algo deu errado</CardTitle>
              <CardDescription>
                Ocorreu um erro ao tentar carregar as informações. Por favor, tente novamente mais tarde.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              {statusCode && (
                <p className="mt-2 text-sm">
                  Status code:&nbsp;
                  <span className="font-semibold">{statusCode}</span>
                </p>
              )}

              {error && (
                <details className="mt-2 text-sm">
                  <summary className="cursor-pointer text-gray-800 font-medium">Detalhes do erro</summary>
                  <p className="mb-4 rounded-lg bg-secondary/50 p-3 text-sm text-muted-foreground">{error.message}</p>
                  {errorInfo && (
                    <pre className="whitespace-pre-wrap text-xs text-gray-600">{errorInfo.componentStack}</pre>
                  )}
                </details>
              )}

              <Button onClick={handleOnButton} className="gradient-primary" startIcon={RefreshCw}>
                Recarregar página
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return <div ref={this.contentRef}>{children}</div>;
  }
}
