const phoneNumber = '5511932142673';
const message = 'Olá! Gostaria de agendar uma consulta com a Dra. Mariana.';

export const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
