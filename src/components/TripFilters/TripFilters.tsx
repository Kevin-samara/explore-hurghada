import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import type { TripCategory } from '../../types';
import './TripFilters.css';

interface TripFiltersProps {
  active: TripCategory;
  onChange: (cat: TripCategory) => void;
}

const CATEGORIES: TripCategory[] = ['all', 'sea', 'safari'];

const TripFilters: React.FC<TripFiltersProps> = ({ active, onChange }) => {
  const { lang } = useLanguage();

  return (
    <div className="trip-filters" role="group" aria-label="Trip category filters">
      <div className="trip-filters__scroll">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`trip-filter-btn ${active === cat ? 'trip-filter-btn--active' : ''}`}
            onClick={() => onChange(cat)}
            aria-pressed={active === cat}
          >
            {t(lang, `trips.filters.${cat}`)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TripFilters;
