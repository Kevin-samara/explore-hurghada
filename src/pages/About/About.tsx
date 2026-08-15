import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Waves, Sailboat, Mountain, Users, Car } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AboutStats from '../../components/AboutStats/AboutStats';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import BubbleAnimation from '../../components/BubbleAnimation/BubbleAnimation';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './About.css';

const SERVICES = [
  { Icon: Waves, labelEn: 'Snorkeling', labelAr: 'سنوركلينج' },
  { Icon: Anchor, labelEn: 'Scuba Diving', labelAr: 'غطس' },
  { Icon: Sailboat, labelEn: 'Boat Trips', labelAr: 'رحلات بحرية' },
  { Icon: Mountain, labelEn: 'Desert Safari', labelAr: 'سفاري صحراوي' },
  { Icon: Users, labelEn: 'Private Tours', labelAr: 'رحلات خاصة' },
  { Icon: Car, labelEn: 'Airport Transfers', labelAr: 'نقل المطار' },
];

const About: React.FC = () => {
  const { lang } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__bg" />
        <div className="about-hero__overlay" />
        <BubbleAnimation />
        <div className="container about-hero__content">
          <span className="section-tag">{t(lang, 'about.sectionTag')}</span>
          <h1 className="about-hero__title">{t(lang, 'about.title')}</h1>
          <p className="about-hero__subtitle">{t(lang, 'about.subtitle')}</p>
        </div>
      </section>

      {/* Story section */}
      <section className="section">
        <div className="container">
          <div className="about-story-layout">
            <div className="about-story-images">
              <img
                src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&q=80"
                alt={lang === 'ar' ? 'غطس في البحر الأحمر' : 'Diving in the Red Sea'}
                className="about-story-img about-story-img--main"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80"
                alt={lang === 'ar' ? 'سنوركلينج' : 'Snorkeling'}
                className="about-story-img about-story-img--secondary"
                loading="lazy"
              />
              <div className="about-story-badge glass-strong">
                <span className="about-story-badge__num">10+</span>
                <span className="about-story-badge__text">
                  {lang === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                </span>
              </div>
            </div>

            <div className="about-story-content">
              <SectionTitle
                tag={lang === 'ar' ? 'قصتنا' : 'Our Story'}
                title={lang === 'ar' ? 'شغف بالبحر الأحمر' : 'Passionate About the Red Sea'}
                align="left"
              />
              <p className="about-story-text">
                {t(lang, 'about.description')}
              </p>
              <p className="about-story-text">
                {lang === 'ar'
                  ? 'نؤمن بأن كل رحلة يجب أن تكون تجربة لا تُنسى. لذلك نولي اهتماماً بالغاً لكل التفاصيل، من اختيار أفضل المواقع إلى ضمان أعلى معايير السلامة لضيوفنا.'
                  : 'We believe every trip should be an unforgettable experience. That\'s why we pay close attention to every detail — from choosing the best locations to ensuring the highest safety standards for our guests.'}
              </p>
              <Link to="/trips" className="btn btn-cta" style={{ width: 'fit-content', marginTop: 'var(--space-4)' }}>
                {lang === 'ar' ? 'استكشف رحلاتنا' : 'Explore Our Trips'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section about-services-section">
        <div className="container">
          <SectionTitle
            tag={lang === 'ar' ? 'خدماتنا' : 'Our Services'}
            title={lang === 'ar' ? 'ما نقدمه لك' : 'What We Offer'}
            subtitle={lang === 'ar' ? 'مجموعة متنوعة من الرحلات والتجارب الأصيلة في الغردقة' : 'A diverse range of trips and authentic experiences in Hurghada'}
          />
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`about-services-grid stagger ${isVisible ? 'visible' : ''}`}
          >
            {SERVICES.map(({ Icon, labelEn, labelAr }, i) => (
              <div
                key={i}
                className={`about-service-card glass fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="glass-icon glass-icon-lg">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <span className="about-service-card__label">
                  {lang === 'ar' ? labelAr : labelEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutStats />
      <WhyChooseUs />
    </main>
  );
};

export default About;
