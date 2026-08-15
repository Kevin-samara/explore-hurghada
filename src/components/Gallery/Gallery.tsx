import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Gallery.css';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', alt: 'Snorkeling Red Sea', altAr: 'سنوركلينج البحر الأحمر', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=600&q=80', alt: 'Scuba Diving', altAr: 'الغطس بالأكسجين', span: 'normal' },
  { src: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80', alt: 'Coral Reef', altAr: 'الشعاب المرجانية', span: 'normal' },
  { src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80', alt: 'Desert Safari', altAr: 'سفاري صحراوي', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', alt: 'Hurghada Beach', altAr: 'شاطئ الغردقة', span: 'normal' },
  { src: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80', alt: 'Private Yacht', altAr: 'اليخت الخاص', span: 'normal' },
  { src: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=600&q=80', alt: 'Boat Trip', altAr: 'رحلة بحرية', span: 'normal' },
  { src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80', alt: 'Underwater World', altAr: 'عالم تحت الماء', span: 'normal' },
];

const Gallery: React.FC = () => {
  const { lang } = useLanguage();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="gallery-section section">
      <div className="container">
        <SectionTitle
          tag={t(lang, 'gallery.sectionTag')}
          title={t(lang, 'gallery.title')}
          subtitle={t(lang, 'gallery.subtitle')}
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`gallery-grid fade-in ${isVisible ? 'visible' : ''}`}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gallery-item ${img.span === 'wide' ? 'gallery-item--wide' : ''}`}
              onClick={() => setLightbox(img.src.replace('w=800', 'w=1400').replace('w=600', 'w=1200'))}
              role="button"
              tabIndex={0}
              aria-label={`View ${lang === 'ar' ? img.altAr : img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={lang === 'ar' ? img.altAr : img.alt}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-item__overlay">
                <span className="gallery-item__label">{lang === 'ar' ? img.altAr : img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={24} />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="lightbox__image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
