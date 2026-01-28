import { cn } from '@/utils';
import * as React from 'react';

interface InputProps extends React.ComponentProps<'input'> {
  startIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  endIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onEndIconClick?: () => void;
  readOnly?: boolean;
  error?: string | undefined;
}

function Input({
  className,
  id,
  startIcon: StartIcon,
  endIcon: EndIcon,
  disabled,
  onEndIconClick,
  error,
  ...props
}: InputProps) {
  const iconColor = error ? 'text-destructive' : 'text-muted-foreground';

  return (
    <div className="relative flex items-center w-full sm:max-w-sm md:max-w-md lg:max-w-lg ">
      {StartIcon && <StartIcon className={cn('pointer-events-none absolute left-3 h-4 w-4', iconColor)} />}
      <input
        data-testid={`input-${id}`}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20  aria-invalid:border-destructive',
          StartIcon && 'pl-10',
          EndIcon && 'pr-10',
          error && 'border-destructive focus-visible:ring-destructive',
          className
        )}
        {...props}
      />

      {EndIcon && onEndIconClick ? (
        <button
          type="button"
          onClick={onEndIconClick}
          disabled={disabled}
          className="absolute right-3 text-primary-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
        >
          <EndIcon className={cn(' h-4 w-4', iconColor)} />
        </button>
      ) : (
        EndIcon && <EndIcon className={cn('pointer-events-none absolute right-3 h-4 w-4', iconColor)} />
      )}
    </div>
  );
}

export { Input };
