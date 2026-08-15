import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import { testimonials } from '../../data/testimonials';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="testimonials-section section ocean-bg">
      <div className="container">
        <SectionTitle
          tag={t(lang, 'testimonials.sectionTag')}
          title={t(lang, 'testimonials.title')}
          subtitle={t(lang, 'testimonials.subtitle')}
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`testimonials-grid fade-in ${isVisible ? 'visible' : ''}`}
        >
          {visible.map((testimonial, i) => (
            <div
              key={`${testimonial.id}-${current}`}
              className="testimonial-card glass-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote mark */}
              <div className="testimonial-card__quote">"</div>

              {/* Stars */}
              <div className="stars">
                {Array.from({ length: 5 }, (_, si) => (
                  <Star
                    key={si}
                    size={16}
                    fill={si < testimonial.rating ? '#FFD700' : 'transparent'}
                    stroke={si < testimonial.rating ? '#FFD700' : 'rgba(255,255,255,0.3)'}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="testimonial-card__review">
                {lang === 'ar' ? testimonial.reviewAr : testimonial.review}
              </p>

              {/* Author */}
              <div className="testimonial-card__author">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-card__avatar"
                  loading="lazy"
                />
                <div>
                  <div className="testimonial-card__name">{testimonial.name}</div>
                  <div className="testimonial-card__country">
                    {testimonial.countryFlag} {testimonial.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="testimonials-controls">
          <button
            className="testimonials-btn glass"
            onClick={isRTL ? next : prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="testimonials-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials-dot ${i === current % testimonials.length ? 'testimonials-dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="testimonials-btn glass"
            onClick={isRTL ? prev : next}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
