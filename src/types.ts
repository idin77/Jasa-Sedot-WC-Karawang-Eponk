export type Language = 'id' | 'en';

export interface Translations {
  header: {
    title: string;
    subtitle: string;
    nav: {
      masalah: string;
      layanan: string;
      keunggulan: string;
      estimasi: string;
    };
    cta: string;
  };
  team: {
    title: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
      certification: string;
    }>;
  };
}
