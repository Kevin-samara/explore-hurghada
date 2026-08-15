import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isRTL: boolean;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  isRTL: false,
  toggleLang: () => {},
});

export function useLanguage(): LanguageContextType {
  return useContext(LanguageContext);
}

export function useLanguageState(): LanguageContextType {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem('explore-hurghada-lang');
      return (stored === 'ar' || stored === 'en' ? stored : 'en') as Language;
    } catch {
      return 'en';
    }
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    try { localStorage.setItem('explore-hurghada-lang', l); } catch { /* */ }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'ar' : 'en');
  }, [lang, setLang]);

  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  return { lang, setLang, isRTL, toggleLang };
}
