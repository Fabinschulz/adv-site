const phoneNumber = '5511932142673';
const message = 'Olá! Gostaria de agendar uma consulta com a Dra. Mariana.';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export const whatsappLink = whatsappUrl;
