'use client';
import { Button } from '@/components';
import { LucideIcon, RefreshCw } from 'lucide-react';

type ErrorPageProps = {
  statusCode: number;
  title: string;
  message?: string;
  buttonText?: string;
  Icon?: LucideIcon;
  onButtonClick: () => void;
};

export const ErrorFallback: React.FC<ErrorPageProps> = ({
  statusCode,
  title,
  message,
  buttonText = 'Tentar novamente',
  Icon = RefreshCw,
  onButtonClick
}) => {
  return (
    <div className="max-w-5xl m-auto p-4 border border-gray-300 rounded-lg bg-white flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <span className="text-6xl sm:text-8xl lg:text-[200px] font-bold text-center sm:text-left">{statusCode}</span>
        <div className="flex flex-col text-start sm:text-center w-60 lg:w-90 gap-2">
          <h1 className="text-2xl font-semibold m-0">{title}</h1>
          {message && <p className="text-gray-600 text-sm">{message}</p>}
          <Button onClick={onButtonClick} startIcon={Icon}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
