import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import BookingForm from '../../components/BookingForm/BookingForm';
import BubbleAnimation from '../../components/BubbleAnimation/BubbleAnimation';
import './Booking.css';

const Booking: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <main className="booking-page">
      {/* Hero */}
      <section className="booking-hero">
        <div className="booking-hero__bg" />
        <div className="booking-hero__overlay" />
        <BubbleAnimation />
        <div className="container booking-hero__content">
          <span className="section-tag">{t(lang, 'booking.sectionTag')}</span>
          <h1 className="booking-hero__title">{t(lang, 'booking.title')}</h1>
          <p className="booking-hero__subtitle">{t(lang, 'booking.subtitle')}</p>
        </div>
      </section>

      {/* Booking content */}
      <section className="section booking-body">
        <div className="container">
          <div className="booking-layout">
            {/* Form */}
            <div className="booking-form-wrap glass-dark">
              <BookingForm />
            </div>

            {/* Sidebar Info */}
            <div className="booking-sidebar">
              <div className="glass booking-sidebar__card">
                <h3 className="booking-sidebar__title">
                  {lang === 'ar' ? '💬 كيف يعمل الحجز؟' : '💬 How Booking Works'}
                </h3>
                <ol className="booking-steps">
                  {(lang === 'ar' ? [
                    'اختر رحلتك وأدخل تفاصيلك',
                    'اضغط "تأكيد عبر واتساب"',
                    'سيفتح واتساب مع رسالة جاهزة',
                    'أرسل الرسالة وسنؤكد حجزك',
                    'استمتع بمغامرتك! 🌊',
                  ] : [
                    'Choose your trip and fill in your details',
                    'Click "Confirm via WhatsApp"',
                    'WhatsApp opens with a ready message',
                    'Send the message — we\'ll confirm your booking',
                    'Enjoy your adventure! 🌊',
                  ]).map((step, i) => (
                    <li key={i} className="booking-step">
                      <div className="booking-step__num">{i + 1}</div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="glass booking-sidebar__card">
                <h3 className="booking-sidebar__title">
                  {lang === 'ar' ? '✅ ضمانات الحجز' : '✅ Booking Guarantees'}
                </h3>
                <ul className="booking-guarantees">
                  {(lang === 'ar' ? [
                    'تأكيد فوري عبر واتساب',
                    'أفضل الأسعار مضمونة',
                    'إلغاء مجاني حتى 24 ساعة',
                    'اصطحاب من الفندق مشمول',
                    'دعم عملاء على مدار الساعة',
                  ] : [
                    'Instant WhatsApp confirmation',
                    'Best price guaranteed',
                    'Free cancellation up to 24 hours',
                    'Hotel pickup included',
                    '24/7 customer support',
                  ]).map((item, i) => (
                    <li key={i} className="booking-guarantee">
                      <span className="booking-guarantee__icon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass booking-sidebar__card booking-sidebar__card--highlight">
                <div className="booking-contact-icon">💬</div>
                <p className="booking-contact-text">
                  {lang === 'ar'
                    ? 'هل تريد المساعدة في اختيار الرحلة المناسبة؟'
                    : 'Need help choosing the right trip?'}
                </p>
                <a
                  href={`https://wa.me/${import.meta.env.VITE_WHATSAPP || '20XXXXXXXXXX'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-cta"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  {lang === 'ar' ? 'تحدث معنا' : 'Talk to Us'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
