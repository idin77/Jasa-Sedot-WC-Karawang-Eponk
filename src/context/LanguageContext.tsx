import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: any) => any; // Simple translation helper
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');
  
  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'id' ? 'en' : 'id'));
  };

  // Very simple lookup, can be expanded to nested keys
  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path; // Fallback
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
