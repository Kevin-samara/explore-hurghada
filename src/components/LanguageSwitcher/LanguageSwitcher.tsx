import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang, isRTL } = useLanguage();

  return (
    <button
      className="lang-switcher"
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      aria-label={`Switch to ${lang === 'en' ? 'Arabic' : 'English'}`}
      title={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <span className={`lang-option ${!isRTL ? 'lang-option--active' : ''}`}>EN</span>
      <span className="lang-divider">|</span>
      <span className={`lang-option ${isRTL ? 'lang-option--active' : ''}`}>عر</span>
    </button>
  );
};

export default LanguageSwitcher;
