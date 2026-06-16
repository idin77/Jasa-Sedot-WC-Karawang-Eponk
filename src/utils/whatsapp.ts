export const generateWhatsAppLink = (message: string) => {
  return `https://wa.me/6285817692245?text=${encodeURIComponent(message)}`;
};
