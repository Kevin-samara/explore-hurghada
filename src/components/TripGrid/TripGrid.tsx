import React from 'react';
import TripCard from '../TripCard/TripCard';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { Trip } from '../../types';
import './TripGrid.css';

interface TripGridProps {
  trips: Trip[];
  emptyMessage?: string;
}

const TripGrid: React.FC<TripGridProps> = ({ trips, emptyMessage }) => {
  const { lang } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  if (trips.length === 0) {
    return (
      <div className="trip-grid__empty glass">
        <p>{emptyMessage || t(lang, 'trips.noResults')}</p>
      </div>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`trip-grid stagger ${isVisible ? 'visible' : ''}`}
    >
      {trips.map((trip, i) => (
        <div
          key={trip.id}
          className={`trip-grid__item fade-in ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <TripCard trip={trip} />
        </div>
      ))}
    </div>
  );
};

export default TripGrid;
