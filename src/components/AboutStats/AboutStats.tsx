import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import SectionTitle from '../SectionTitle/SectionTitle';
import siteConfig from '../../config/site.config';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './AboutStats.css';

function useCounter(target: number, active: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

const StatCard: React.FC<{
  value: number | string;
  label: string;
  suffix?: string;
  active: boolean;
}> = ({ value, label, suffix = '', active }) => {
  const isNumeric = typeof value === 'number';
  const counted = useCounter(isNumeric ? (value as number) : 0, active && isNumeric);

  return (
    <div className="stat-card glass">
      <div className="stat-card__number">
        {isNumeric ? `${counted}${suffix}` : value}
      </div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
};

const AboutStats: React.FC = () => {
  const { lang } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  const statsLabel = {
    travelers: t(lang, 'about.stats.travelers'),
    trips: t(lang, 'about.stats.trips'),
    years: t(lang, 'about.stats.years'),
    support: t(lang, 'about.stats.support'),
  };

  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-layout">
          {/* Text side */}
          <div className="about-text">
            <SectionTitle
              tag={t(lang, 'about.sectionTag')}
              title={t(lang, 'about.title')}
              subtitle={t(lang, 'about.subtitle')}
              align="left"
            />
            <p className="about-description">{t(lang, 'about.description')}</p>
            <div className="about-image-row">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
                alt={lang === 'ar' ? 'شاطئ الغردقة' : 'Hurghada Beach'}
                className="about-img about-img--main"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80"
                alt={lang === 'ar' ? 'سفاري صحراوي' : 'Desert Safari'}
                className="about-img about-img--secondary"
                loading="lazy"
              />
            </div>
          </div>

          {/* Stats */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="about-stats"
          >
            <StatCard
              value={siteConfig.stats.travelers}
              label={statsLabel.travelers}
              suffix="+"
              active={isVisible}
            />
            <StatCard
              value={siteConfig.stats.trips}
              label={statsLabel.trips}
              suffix="+"
              active={isVisible}
            />
            <StatCard
              value={siteConfig.stats.years}
              label={statsLabel.years}
              suffix="+"
              active={isVisible}
            />
            <StatCard
              value={siteConfig.stats.support}
              label={statsLabel.support}
              active={isVisible}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
