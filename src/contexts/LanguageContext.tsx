import { createContext, useContext, useEffect, useState } from 'react';
import { Language, translations } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getLanguageFromUrl = (): Language => {
  const path = window.location.pathname;
  const match = path.match(/^\/([a-z]{2})(?:\/|$)/);
  return (match ? match[1] : 'en') as Language;
};

const getLanguageFromBrowser = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  const supportedLanguages: Language[] = ['en', 'es', 'fr', 'de', 'pt', 'ja', 'zh'];
  return supportedLanguages.includes(browserLang as Language) ? (browserLang as Language) : 'en';
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const urlLang = getLanguageFromUrl();
    if (urlLang !== 'en') {
      setLanguageState(urlLang);
    } else {
      const browserLang = getLanguageFromBrowser();
      setLanguageState(browserLang);
    }
    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const newPath = lang === 'en' ? '/' : `/${lang}`;
    window.history.pushState({}, '', newPath);
    document.documentElement.lang = lang;
  };

  const t = (path: string): any => {
    const keys = path.split('.');
    let value: any = translations[language];

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return path;
      }
    }

    return value;
  };

  if (!isLoaded) {
    return (
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
