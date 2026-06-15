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
    team: {
      title: 'Tim Profesional Kami',
      members: [
        {
          name: 'Budi Santoso',
          role: 'Teknisi Utama',
          bio: 'Pengalaman lebih dari 10 tahun dalam pengelolaan limbah domestik.',
          certification: 'Sertifikat Kompetensi Pengelolaan Limbah (BNSP)',
        },
        {
          name: 'Andi Wijaya',
          role: 'Spesialis Perbaikan',
          bio: 'Ahli dalam deteksi kebocoran dan perbaikan infrastruktur septic tank.',
          certification: 'Teknisi Sanitasi Bersertifikat',
        },
      ],
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
    team: {
      title: 'Our Professional Team',
      members: [
        {
          name: 'Budi Santoso',
          role: 'Lead Technician',
          bio: 'Over 10 years of experience in domestic waste management.',
          certification: 'Waste Management Competency Certificate (BNSP)',
        },
        {
          name: 'Andi Wijaya',
          role: 'Repair Specialist',
          bio: 'Expert in leak detection and septic tank infrastructure repair.',
          certification: 'Certified Sanitation Technician',
        },
      ],
    },
  },
};
