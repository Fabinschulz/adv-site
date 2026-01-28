'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormContext } from '@/context';
import { getObjectPropertyValue } from '@/utils';
import type React from 'react';

export type InputFieldProps = React.ComponentProps<'input'> & {
  name: string;
  label?: string;
  startIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  endIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onEndIconClick?: () => void;
  error?: string;
  onFielChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  required,
  placeholder,
  type = 'text',
  className,
  onFielChange,
  ...props
}) => {
  const { register, validationErrors, readOnly, setValue } = useFormContext();

  const errorsMessage = validationErrors && getObjectPropertyValue(name, validationErrors)?.message;
  const labelWithRequired = required ? `${label} *` : label;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onFielChange) {
      onFielChange(event);
    }

    let value = event.target.value;
    setValue(name, value);
  };

  return (
    <div className="flex flex-col gap-1">
      {labelWithRequired && (
        <Label htmlFor={name} className="text-sm font-medium">
          {labelWithRequired}
        </Label>
      )}

      <Input
        id={name}
        placeholder={placeholder}
        type={type}
        disabled={!!readOnly}
        aria-invalid={!!errorsMessage}
        {...register(name)}
        onChange={handleOnChange}
        {...props}
      />

      {!!errorsMessage && <span className="text-sm italic text-destructive">{errorsMessage}</span>}
    </div>
  );
};
