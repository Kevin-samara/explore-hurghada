import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star, Clock, MapPin, Check, X, ArrowLeft, ArrowRight,
  ChevronLeft, ChevronRight, Calendar,
} from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import { trips } from '../../data/trips';
import BookingForm from '../../components/BookingForm/BookingForm';
import './TourDetails.css';

const TourDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lang, isRTL } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  const [showBooking, setShowBooking] = useState(false);

  const trip = trips.find((tr) => tr.id === id);

  if (!trip) {
    return (
      <div className="tour-not-found">
        <div className="container" style={{ textAlign: 'center', paddingTop: '160px', paddingBottom: '80px' }}>
          <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-6)' }}>
            {lang === 'ar' ? 'الرحلة غير موجودة' : 'Trip Not Found'}
          </h1>
          <Link to="/trips" className="btn btn-glass">
            {t(lang, 'tourDetails.backToTrips')}
          </Link>
        </div>
      </div>
    );
  }

  const title = lang === 'ar' ? trip.titleAr : trip.title;
  const description = lang === 'ar' ? trip.descriptionAr : trip.description;
  const duration = lang === 'ar' ? trip.durationAr : trip.duration;
  const pickup = lang === 'ar' ? trip.pickupAr : trip.pickup;
  const included = lang === 'ar' ? trip.includedAr : trip.included;
  const excluded = lang === 'ar' ? trip.excludedAr : trip.excluded;

  const allImages = [trip.image, ...trip.gallery].filter(Boolean);
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  const prevImg = () => setActiveImage((i) => (i - 1 + allImages.length) % allImages.length);
  const nextImg = () => setActiveImage((i) => (i + 1) % allImages.length);

  return (
    <main className="tour-page">
      {/* Hero Image */}
      <section className="tour-hero">
        <img
          src={allImages[activeImage]}
          alt={title}
          className="tour-hero__image"
        />
        <div className="tour-hero__overlay" />

        {/* Back button */}
        <Link to="/trips" className="tour-hero__back btn btn-glass">
          <BackArrow size={18} />
          {t(lang, 'tourDetails.backToTrips')}
        </Link>

        {/* Image nav */}
        {allImages.length > 1 && (
          <>
            <button className="tour-hero__nav tour-hero__nav--prev" onClick={isRTL ? nextImg : prevImg}>
              <ChevronLeft size={20} />
            </button>
            <button className="tour-hero__nav tour-hero__nav--next" onClick={isRTL ? prevImg : nextImg}>
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Hero info overlay */}
        <div className="tour-hero__info container">
          {trip.badge && (
            <span className="badge">{lang === 'ar' ? trip.badgeAr : trip.badge}</span>
          )}
          <h1 className="tour-hero__title">{title}</h1>
          <div className="tour-hero__meta">
            <div className="tour-hero__rating">
              <Star size={16} fill="#FFD700" stroke="#FFD700" />
              <span>{trip.rating}</span>
              <span className="tour-hero__review-count">({trip.reviewCount} reviews)</span>
            </div>
            <div className="tour-hero__stat">
              <Clock size={15} />
              <span>{duration}</span>
            </div>
            <div className="tour-hero__stat">
              <MapPin size={15} />
              <span>{pickup}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnail strip */}
      {allImages.length > 1 && (
        <div className="tour-thumbnails">
          <div className="container">
            <div className="tour-thumbnails__strip">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  className={`tour-thumb ${activeImage === i ? 'tour-thumb--active' : ''}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="tour-body">
        <div className="container">
          <div className="tour-layout">
            {/* Left: Details */}
            <div className="tour-details-col">
              {/* Description */}
              <div className="glass tour-section">
                <h2 className="tour-section__title">
                  {lang === 'ar' ? 'عن هذه الرحلة' : 'About This Trip'}
                </h2>
                <p className="tour-section__text">{description}</p>
              </div>

              {/* What's Included */}
              <div className="glass tour-section">
                <h2 className="tour-section__title">{t(lang, 'tourDetails.included')}</h2>
                <ul className="tour-list tour-list--included">
                  {included.map((item, i) => (
                    <li key={i} className="tour-list__item">
                      <Check size={16} className="tour-list__icon tour-list__icon--check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Included */}
              <div className="glass tour-section">
                <h2 className="tour-section__title">{t(lang, 'tourDetails.excluded')}</h2>
                <ul className="tour-list tour-list--excluded">
                  {excluded.map((item, i) => (
                    <li key={i} className="tour-list__item">
                      <X size={16} className="tour-list__icon tour-list__icon--x" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div className="glass tour-section">
                <h2 className="tour-section__title">{t(lang, 'tourDetails.itinerary')}</h2>
                <div className="tour-itinerary">
                  {trip.itinerary.map((step, i) => (
                    <div key={i} className="tour-itinerary__step">
                      <div className="tour-itinerary__time-col">
                        <div className="tour-itinerary__time">{step.time}</div>
                        {i < trip.itinerary.length - 1 && (
                          <div className="tour-itinerary__line" />
                        )}
                      </div>
                      <div className="tour-itinerary__content">
                        <h3 className="tour-itinerary__step-title">
                          {lang === 'ar' ? step.titleAr : step.title}
                        </h3>
                        <p className="tour-itinerary__step-desc">
                          {lang === 'ar' ? step.descriptionAr : step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Times */}
              <div className="glass tour-section">
                <h2 className="tour-section__title">{t(lang, 'tourDetails.availableTimes')}</h2>
                <div className="tour-times">
                  {trip.availableTimes.map((time) => (
                    <span key={time} className="tour-time-pill glass">
                      <Clock size={14} />
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Booking Sidebar */}
            <div className="tour-sidebar">
              <div className="tour-sidebar__card glass-card">
                <div className="tour-sidebar__price">
                  <span className="tour-sidebar__from">{t(lang, 'tourDetails.from')}</span>
                  <span className="tour-sidebar__amount">${trip.price}</span>
                  <span className="tour-sidebar__per">{t(lang, 'tourDetails.perPerson')}</span>
                </div>

                <div className="tour-sidebar__info">
                  <div className="tour-sidebar__info-item">
                    <Clock size={15} />
                    <span>{duration}</span>
                  </div>
                  <div className="tour-sidebar__info-item">
                    <Star size={15} fill="#FFD700" stroke="#FFD700" />
                    <span>{trip.rating} ({trip.reviewCount})</span>
                  </div>
                  <div className="tour-sidebar__info-item">
                    <MapPin size={15} />
                    <span>{pickup}</span>
                  </div>
                </div>

                <button
                  className="btn btn-cta tour-sidebar__book-btn"
                  onClick={() => setShowBooking(!showBooking)}
                >
                  <Calendar size={18} />
                  {t(lang, 'tourDetails.bookNow')}
                </button>
              </div>

              {/* Inline booking form */}
              {showBooking && (
                <div className="tour-sidebar__form glass-dark" style={{ borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)' }}>
                  <BookingForm preselectedTripId={trip.id} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TourDetails;
