import React, { useState, useMemo } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import TripGrid from '../../components/TripGrid/TripGrid';
import TripFilters from '../../components/TripFilters/TripFilters';
import BubbleAnimation from '../../components/BubbleAnimation/BubbleAnimation';
import { trips } from '../../data/trips';
import type { TripCategory } from '../../types';
import './Trips.css';

const Trips: React.FC = () => {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<TripCategory>('all');

  const filtered = useMemo(
    () =>
      activeFilter === 'all'
        ? trips
        : trips.filter((tr) => tr.category === activeFilter),
    [activeFilter]
  );

  return (
    <main className={`trips-page trips-page--${activeFilter}`}>
      {/* Page Hero */}
      <section className="trips-hero">
        <div className="trips-hero__bg" />
        <div className="trips-hero__overlay" />
        <BubbleAnimation mode={activeFilter} />
        <div className="container trips-hero__content">
          <span className="section-tag">
            {t(lang, 'trips.sectionTag')}
          </span>
          <h1 className="trips-hero__title">{t(lang, 'trips.title')}</h1>
          <p className="trips-hero__subtitle">{t(lang, 'trips.subtitle')}</p>
        </div>
      </section>

      {/* Trips Section */}
      <section className="section trips-content">
        <div className="container">
          <TripFilters active={activeFilter} onChange={setActiveFilter} />
          <TripGrid trips={filtered} />
        </div>
      </section>
    </main>
  );
};

export default Trips;
