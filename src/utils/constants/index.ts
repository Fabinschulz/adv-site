export class WHATSAPP {
  static phoneNumber = '5511932142673';
  static message = 'Olá! Gostaria de agendar uma consulta com a Dra. Mariana.';
  static whatsappUrl = `https://wa.me/${WHATSAPP.phoneNumber}?text=${encodeURIComponent(WHATSAPP.message)}`;

  static openWhatsApp = (message: string = WHATSAPP.message) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP.phoneNumber}?text=${encoded}`, '_blank');
  };
}
