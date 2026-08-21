import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Mail, Phone, Star } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import siteConfig from '../../config/site.config';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Footer.css';

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  const trips = [
    { label: lang === 'ar' ? 'رحلة سنوركلينج' : 'Snorkeling Adventure', to: '/trips/snorkeling-adventure' },
    { label: lang === 'ar' ? 'رحلة بحرية' : 'Boat Trip', to: '/trips/boat-trip' },
    { label: lang === 'ar' ? 'سفاري صحراوي' : 'Desert Safari', to: '/trips/desert-safari' },
    { label: lang === 'ar' ? 'الغطس بالأكسجين' : 'Scuba Diving', to: '/trips/scuba-diving' },
    { label: lang === 'ar' ? 'يخت خاص' : 'Private Yacht', to: '/trips/private-yacht' },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img src="/logo.jpg" alt="Explore Hurghada" className="header__logo-img" />
                <span className="footer__logo-text">
                  {lang === 'ar' ? 'استكشف الغردقة' : 'Explore Hurghada'}
                </span>
              </Link>
              <p className="footer__tagline">{t(lang, 'footer.tagline')}</p>
              <div className="footer__social">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-btn"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-btn"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={siteConfig.social.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-btn"
                  aria-label="TripAdvisor"
                >
                  <Star size={18} />
                </a>
              </div>
              <LanguageSwitcher />
            </div>

            {/* Trips */}
            <div className="footer__col">
              <h3 className="footer__col-title">{t(lang, 'footer.trips')}</h3>
              <ul className="footer__links">
                {trips.map((trip) => (
                  <li key={trip.to}>
                    <Link to={trip.to} className="footer__link">{trip.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h3 className="footer__col-title">
                {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <ul className="footer__links">
                <li><Link to="/" className="footer__link">{t(lang, 'nav.home')}</Link></li>
                <li><Link to="/trips" className="footer__link">{t(lang, 'nav.trips')}</Link></li>
                <li><Link to="/pricing" className="footer__link">{lang === 'ar' ? 'الأسعار' : 'Pricing'}</Link></li>
                <li><Link to="/about" className="footer__link">{t(lang, 'nav.about')}</Link></li>
                <li><Link to="/contact" className="footer__link">{t(lang, 'nav.contact')}</Link></li>
                <li><Link to="/booking" className="footer__link">{t(lang, 'nav.bookNow')}</Link></li>
                <li>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    {lang === 'ar' ? 'صفحة فيسبوك' : 'Facebook Page'}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    {lang === 'ar' ? 'صفحة إنستغرام' : 'Instagram Page'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h3 className="footer__col-title">{t(lang, 'footer.contact')}</h3>
              <ul className="footer__contact">
                <li className="footer__contact-item">
                  <Phone size={15} />
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                </li>
                <li className="footer__contact-item">
                  <Mail size={15} />
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
                <li className="footer__contact-item">
                  <MessageCircle size={15} />
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="footer__contact-item">
                  <MapPin size={15} />
                  <span>{lang === 'ar' ? siteConfig.addressAr : siteConfig.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} {lang === 'ar' ? siteConfig.companyNameAr : siteConfig.companyName}. {t(lang, 'footer.rights')}</span>
          <span>{t(lang, 'footer.madeWith')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
