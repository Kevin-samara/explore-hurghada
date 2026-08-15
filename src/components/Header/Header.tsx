import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

const Header: React.FC = () => {
  const { lang } = useLanguage();
  const scrolled = useScrollHeader(60);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t(lang, 'nav.home') },
    { to: '/trips', label: t(lang, 'nav.trips') },
    { to: '/pricing', label: lang === 'ar' ? 'الأسعار' : 'Pricing' },
    { to: '/about', label: t(lang, 'nav.about') },
    { to: '/contact', label: t(lang, 'nav.contact') },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          {/* Logo */}
          <Link to="/" className="header__logo" onClick={() => setMenuOpen(false)}>
            <div className="header__logo-icon">
              <Anchor size={22} />
            </div>
            <span className="header__logo-text">
              {lang === 'ar' ? 'استكشف الغردقة' : 'Explore Hurghada'}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="header__nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`header__nav-link ${isActive(link.to) ? 'header__nav-link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="header__actions">
            <LanguageSwitcher />
            <Link to="/booking" className="btn btn-cta btn-sm">
              {t(lang, 'nav.bookNow')}
            </Link>
            <button
              className="header__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)} />
          <nav className="mobile-menu__panel glass-strong">
            <div className="mobile-menu__header">
              <div className="header__logo-icon">
                <Anchor size={20} />
              </div>
              <span className="header__logo-text">
                {lang === 'ar' ? 'استكشف الغردقة' : 'Explore Hurghada'}
              </span>
              <button className="mobile-menu__close" onClick={() => setMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="mobile-menu__links">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`mobile-menu__link ${isActive(link.to) ? 'mobile-menu__link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mobile-menu__footer">
              <LanguageSwitcher />
              <Link
                to="/booking"
                className="btn btn-cta"
                onClick={() => setMenuOpen(false)}
                style={{ width: '100%' }}
              >
                {t(lang, 'nav.bookNow')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
