import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(3, 'O nome deve conter pelo menos 3 caracteres'),
  phone: z.string().min(10, 'O telefone deve conter pelo menos 10 caracteres'),
  subject: z.string().min(3, 'O assunto deve conter pelo menos 3 caracteres'),
  message: z.string().min(10, 'A mensagem deve conter pelo menos 10 caracteres')
});

export const defaultValues: ContactFormData = {
    name: '',
    phone: '',
    subject: '',
    message: ''

};

export type ContactFormData = z.infer<typeof contactSchema>;

    