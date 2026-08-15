import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, ArrowLeft, Play } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import BubbleAnimation from '../BubbleAnimation/BubbleAnimation';
import './HeroSection.css';

const imagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const HeroSection: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const scrollToContent = () => {
    const calcElem = document.getElementById('transfer-calculator');
    if (calcElem) {
      calcElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero hero--transfer" id="home">
      {/* Background layers */}
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__gradient" />
      <BubbleAnimation mode="transfer" />

      {/* Floating decorative orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__text">
          <div className="hero__tag">
            <span className="hero__tag-dot" />
            {lang === 'ar' ? '🚘 مواصلات خاصة VIP · استقبال المطار · الغردقة' : '🚘 VIP Private Transfers · Airport Pickup · Hurghada'}
          </div>

          <h1 className="hero__title">
            <span className="hero__title-main">
              {lang === 'ar' ? 'خدمات نقل المطار' : 'VIP Airport & Resort'}
            </span>
            <br />
            <span className="hero__title-accent text-gradient">
              {lang === 'ar' ? 'والمنتجعات الفاخرة' : 'Private Transfers'}
            </span>
          </h1>

          <p className="hero__description">
            {lang === 'ar'
              ? 'احجز مواصلات المطار والمنتجعات الخاصة في الغردقة، الجونة، ماكادي باي، سوما باي، الأقصر والقاهرة بأفضل الأسعار المضمونة وسيارات مكيفة حديثة.'
              : 'Reliable door-to-door private airport pickups, hotel shuttles, and inter-city transfers across Hurghada, El Gouna, Makadi Bay, Soma Bay, Luxor & Cairo.'}
          </p>

          <div className="hero__ctas">
            <button onClick={scrollToContent} className="btn btn-cta btn-lg hero__cta-primary">
              {lang === 'ar' ? 'احسب السعر واحجز الآن' : 'Estimate & Book Transfer'}
              <Arrow size={18} />
            </button>
            <Link to="/pricing" className="btn btn-glass btn-lg hero__cta-secondary">
              <Play size={16} />
              {lang === 'ar' ? 'جدول الأسعار الشفاف' : 'View Transfer Prices'}
            </Link>
          </div>

          {/* Stats bar */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">10,000+</span>
              <span className="hero__stat-label">{lang === 'ar' ? 'رحلة توصيل ناجحة' : 'Successful Transfers'}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">24/7</span>
              <span className="hero__stat-label">{lang === 'ar' ? 'تغطية على مدار الساعة' : 'Flight & Airport Service'}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">5.0★</span>
              <span className="hero__stat-label">{lang === 'ar' ? 'تقييم الراحة والأمان' : 'Safety & Comfort Rating'}</span>
            </div>
          </div>
        </div>

        {/* Hero decorative card */}
        <div className="hero__card glass-card float">
          <img
            src={imagePath('images/trips/airport-transfers.jpg')}
            alt={lang === 'ar' ? 'نقل المطار الفاخر' : 'Airport Transfer Luxury Service'}
            className="hero__card-image"
          />
          <div className="hero__card-info">
            <div className="hero__card-icon glass-icon">
              🚘
            </div>
            <div>
              <div className="hero__card-title">
                {lang === 'ar' ? 'استقبال مطار الغردقة VIP' : 'Hurghada Airport VIP Transfer'}
              </div>
              <div className="hero__card-subtitle">
                {lang === 'ar' ? 'من 13 € · توصيل مباشر للباب' : 'From 13 € · Direct Door-to-Door'}
              </div>
            </div>
            <div className="hero__card-rating">⭐ 5.0</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero__scroll-indicator" onClick={scrollToContent} aria-label="Scroll down">
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
