import { Translations } from '../types';

export const translations: Record<'id' | 'en', Translations> = {
  id: {
    header: {
      title: 'JASA SEDOT WC KARAWANG',
      subtitle: 'Layanan Cepat & Terpercaya',
      nav: {
        masalah: 'Masalah WC',
        layanan: 'Layanan Kami',
        keunggulan: 'Keunggulan',
        estimasi: 'Estimasi Biaya',
      },
      cta: 'Order WA',
    },
  },
  en: {
    header: {
      title: 'KARAWANG SEPTIC TANK CLEANING',
      subtitle: 'Fast & Reliable Service',
      nav: {
        masalah: 'Septic Issues',
        layanan: 'Our Services',
        keunggulan: 'Why Choose Us',
        estimasi: 'Cost Estimation',
      },
      cta: 'Order via WA',
    },
  },
};
