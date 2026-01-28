'use client';

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components';
import { useFormContext } from '@/context';
import { cn, getObjectPropertyValue } from '@/utils';
import { Check, ChevronDown } from 'lucide-react';
import * as React from 'react';

interface AutocompleteOption {
  label: string;
  value: string;
}

interface AutocompleteFieldProps {
  name: string;
  options: AutocompleteOption[];
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export const AutocompleteField: React.FC<AutocompleteFieldProps> = ({
  name,
  label,
  required,
  options,
  placeholder = 'Selecione'
}) => {
  const { setValue, watch, validationErrors, readOnly } = useFormContext();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const selectedValue = watch(name);
  const selectedOption = options.find((opt) => opt.value === selectedValue);
  const error = validationErrors && getObjectPropertyValue(name, validationErrors)?.message;

  const handleSelect = (value: string) => {
    setValue(name, value, { shouldDirty: true });
    setOpen(false);
    setInput('');
  };

  const labelWithRequired = required ? `${label} *` : label;

  return (
    <div className="flex flex-col gap-1">
      {labelWithRequired && (
        <label htmlFor={name} className="text-sm font-semibold font-sans">
          {labelWithRequired}
        </label>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className={cn(
              `flex w-full items-center rounded-md border bg-transparent px-3 py-2 text-sm h-[35px]
                            shadow-xs transition outline-none cursor-pointer
                            border-input data-[placeholder]:text-muted-foreground
                            focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring
                            aria-invalid:border-destructive aria-invalid:ring-destructive/20`,
              readOnly && 'opacity-50 cursor-not-allowed'
            )}
          >
            <span className={cn(!selectedOption && 'text-muted-foreground')}>
              {selectedOption?.label ?? placeholder}
            </span>
            <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
          <Command>
            <CommandInput placeholder="Pesquisar..." className="h-8" value={input} onValueChange={setInput} />
            <CommandList>
              <CommandEmpty>Nenhuma opção encontrada.</CommandEmpty>
              {options
                .filter((opt) => opt.label.toLowerCase().includes(input.toLowerCase()))
                .map((opt) => (
                  <CommandItem
                    key={opt.value}
                    onSelect={() => handleSelect(opt.value)}
                    className={cn(
                      'flex items-center justify-between',
                      selectedValue === opt.value && 'bg-[#009688] text-white'
                    )}
                  >
                    <span>{opt.label}</span>
                    {selectedValue === opt.value && <Check className="w-4 h-4 text-white" />}
                  </CommandItem>
                ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {!!error && <span className="text-red-500 text-sm italic">{error}</span>}
    </div>
  );
};
