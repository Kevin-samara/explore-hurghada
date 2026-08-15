import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import type { Trip } from '../../types';
import './TripCard.css';

interface TripCardProps {
  trip: Trip;
  className?: string;
}

const TripCard: React.FC<TripCardProps> = ({ trip, className = '' }) => {
  const { lang, isRTL } = useLanguage();

  const title = lang === 'ar' ? trip.titleAr : trip.title;
  const description = lang === 'ar' ? trip.descriptionAr : trip.description;
  const duration = lang === 'ar' ? trip.durationAr : trip.duration;
  const badge = lang === 'ar' ? trip.badgeAr : trip.badge;

  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`trip-card glass-card ${className}`}>
      {/* Image */}
      <div className="trip-card__image-wrap">
        <img
          src={trip.image}
          alt={title}
          className="trip-card__image"
          loading="lazy"
        />
        <div className="trip-card__image-overlay" />
        {badge && <span className="trip-card__badge badge">{badge}</span>}
        <div className="trip-card__rating-pill">
          <Star size={12} fill="currentColor" />
          <span>{trip.rating}</span>
          <span className="trip-card__review-count">({trip.reviewCount})</span>
        </div>
      </div>

      {/* Content */}
      <div className="trip-card__content">
        <div className="trip-card__meta">
          <span className="trip-card__category badge-aqua badge">
            {t(lang, `trips.filters.${trip.category}`)}
          </span>
        </div>

        <h3 className="trip-card__title">{title}</h3>
        <p className="trip-card__description">{description}</p>

        {/* Info row */}
        <div className="trip-card__info">
          <div className="trip-card__info-item">
            <Clock size={14} />
            <span>{duration}</span>
          </div>
          <div className="trip-card__info-item">
            <MapPin size={14} />
            <span>{lang === 'ar' ? trip.pickupAr : trip.pickup}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="trip-card__footer">
          <div className="trip-card__price">
            <span className="trip-card__price-label">{t(lang, 'trips.from')}</span>
            <span className="trip-card__price-value">${trip.price}</span>
            <span className="trip-card__price-per">{t(lang, 'trips.perPerson')}</span>
          </div>
          <Link
            to={`/trips/${trip.id}`}
            className="trip-card__cta btn btn-cta btn-sm"
          >
            {t(lang, 'trips.bookNow')}
            <Arrow size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
