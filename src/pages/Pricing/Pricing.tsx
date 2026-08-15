import React, { useState } from 'react';
import { MapPin, Users, Car, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import BubbleAnimation from '../../components/BubbleAnimation/BubbleAnimation';
import siteConfig from '../../config/site.config';
import './Pricing.css';

interface PricingRow {
  destination: string;
  destinationAr: string;
  small: string;   // 1-3 persons
  large: string;   // 4-8 persons
  note?: string;
  noteAr?: string;
}

const PRICING_DATA: PricingRow[] = [
  { destination: 'Hotel in Hurghada',  destinationAr: 'فندق في الغردقة',    small: '13.00 €',  large: '23.00 €' },
  { destination: 'Makadi Bay',          destinationAr: 'ماكادي باي',          small: '18.00 €',  large: '25.00 €' },
  { destination: 'Elgouna',             destinationAr: 'الجونة',               small: '18.00 €',  large: '25.00 €' },
  { destination: 'Sahl Hasheesh',       destinationAr: 'سهل حشيش',            small: '18.00 €',  large: '25.00 €' },
  { destination: 'Safaga',              destinationAr: 'سفاجا',               small: '25.00 €',  large: '35.00 €' },
  { destination: 'Soma Bay',            destinationAr: 'سوما باي',            small: '25.00 €',  large: '35.00 €' },
  { destination: 'Magic Life Kalawy',   destinationAr: 'ماجيك لايف كالاوي',  small: '30.00 €',  large: '40.00 €' },
  { destination: 'El Quoseir',          destinationAr: 'القصير',              small: '45.00 €',  large: '65.00 €' },
  { destination: 'Port Ghalib',         destinationAr: 'بورت غالب',           small: '65.00 €',  large: '90.00 €' },
  { destination: 'Marsa Alam',          destinationAr: 'مرسى علم',            small: '80.00 €',  large: '100.00 €' },
  { destination: 'Lahami Bay',          destinationAr: 'لاهامي باي',          small: '120.00 €', large: '170.00 €' },
  { destination: 'Luxor',               destinationAr: 'الأقصر',              small: '120.00 €', large: '150.00 €' },
  { destination: 'Aswan',               destinationAr: 'أسوان',               small: '190.00 €', large: '240.00 €' },
  { destination: 'Cairo',               destinationAr: 'القاهرة',             small: '140.00 €', large: '180.00 €' },
  { destination: 'Alexandria',          destinationAr: 'الإسكندرية',          small: '185.00 €', large: '240.00 €' },
];

const Pricing: React.FC = () => {
  const { lang } = useLanguage();
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [groupSize, setGroupSize] = useState<'small' | 'large'>('small');

  const whatsappNumber = siteConfig.whatsappNumber.replace(/\D/g, '');

  const openWhatsApp = (destination: string) => {
    const msg =
      lang === 'ar'
        ? `مرحباً، أود حجز نقل إلى ${destination}. هل يمكنكم تأكيد التوفر والسعر؟`
        : `Hello, I'd like to book a transfer to ${destination}. Can you confirm availability and price?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <main className="pricing-page">
      {/* Hero */}
      <section className="pricing-hero">
        <div className="pricing-hero__bg" />
        <div className="pricing-hero__overlay" />
        <BubbleAnimation />
        <div className="container pricing-hero__content">
          <span className="section-tag">
            {lang === 'ar' ? '✈️ نقل المطار' : '✈️ Airport Transfers'}
          </span>
          <h1 className="pricing-hero__title">
            {lang === 'ar' ? 'أسعار النقل الشفافة' : 'Transparent Transfer Pricing'}
          </h1>
          <p className="pricing-hero__subtitle">
            {lang === 'ar'
              ? 'أسعار ثابتة ومضمونة من مطار الغردقة إلى جميع الوجهات — بدون رسوم خفية'
              : 'Fixed guaranteed prices from Hurghada Airport to all destinations — no hidden fees'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section pricing-body">
        <div className="container">

          {/* Info pills */}
          <div className="pricing-info-pills">
            <div className="pricing-pill glass">
              <Car size={16} />
              <span>{lang === 'ar' ? 'مركبات مكيفة خاصة' : 'Private A/C vehicles'}</span>
            </div>
            <div className="pricing-pill glass">
              <MapPin size={16} />
              <span>{lang === 'ar' ? 'الاستقبال بالاسم' : 'Meet & greet by name'}</span>
            </div>
            <div className="pricing-pill glass">
              <Users size={16} />
              <span>{lang === 'ar' ? 'أسعار ثابتة للمجموعة' : 'Fixed group prices'}</span>
            </div>
            <div className="pricing-pill glass">
              <MessageCircle size={16} />
              <span>{lang === 'ar' ? 'تأكيد فوري عبر واتساب' : 'Instant WhatsApp confirm'}</span>
            </div>
          </div>

          {/* Group size toggle */}
          <div className="pricing-toggle-wrap">
            <p className="pricing-toggle-label">
              {lang === 'ar' ? 'اختر حجم مجموعتك:' : 'Select your group size:'}
            </p>
            <div className="pricing-toggle glass">
              <button
                className={`pricing-toggle__btn ${groupSize === 'small' ? 'pricing-toggle__btn--active' : ''}`}
                onClick={() => setGroupSize('small')}
              >
                <Users size={15} />
                {lang === 'ar' ? '1–3 أشخاص' : '1–3 Persons'}
              </button>
              <button
                className={`pricing-toggle__btn ${groupSize === 'large' ? 'pricing-toggle__btn--active' : ''}`}
                onClick={() => setGroupSize('large')}
              >
                <Users size={15} />
                {lang === 'ar' ? '4–8 أشخاص' : '4–8 Persons'}
              </button>
            </div>
          </div>

          {/* Pricing table */}
          <div className="pricing-table-wrap glass-dark">
            <div className="pricing-table-hint">
              <span className="pricing-table-hint__icon">⟵</span>
              <span>{lang === 'ar' ? 'اسحب لرؤية المزيد' : 'Swipe to see more'}</span>
              <span className="pricing-table-hint__icon">⟶</span>
            </div>
            <div className="pricing-table-scroll">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th className="pricing-table__th pricing-table__th--dest pricing-table__th--sticky">
                      <MapPin size={14} />
                      {lang === 'ar' ? 'الوجهة' : 'Destination'}
                    </th>
                    <th className={`pricing-table__th ${groupSize === 'small' ? 'pricing-table__th--active' : ''}`}>
                      <Users size={14} />
                      {lang === 'ar' ? '1–3 أشخاص' : '1–3 Persons'}
                    </th>
                    <th className={`pricing-table__th ${groupSize === 'large' ? 'pricing-table__th--active' : ''}`}>
                      <Users size={14} />
                      {lang === 'ar' ? '4–8 أشخاص' : '4–8 Persons'}
                    </th>
                    <th className="pricing-table__th pricing-table__th--action"></th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_DATA.map((row, i) => (
                    <tr
                      key={row.destination}
                      className={`pricing-table__row ${hoveredRow === i ? 'pricing-table__row--hovered' : ''}`}
                      onMouseEnter={() => setHoveredRow(i)}
                      onMouseLeave={() => setHoveredRow(null)}
                    >
                      <td className="pricing-table__td pricing-table__td--dest pricing-table__td--sticky">
                        <span className="pricing-dest-dot" />
                        {lang === 'ar' ? row.destinationAr : row.destination}
                      </td>
                      <td className={`pricing-table__td pricing-table__td--price ${groupSize === 'small' ? 'pricing-table__td--highlighted' : ''}`}>
                        <span className="pricing-amount">{row.small}</span>
                      </td>
                      <td className={`pricing-table__td pricing-table__td--price ${groupSize === 'large' ? 'pricing-table__td--highlighted' : ''}`}>
                        <span className="pricing-amount">{row.large}</span>
                      </td>
                      <td className="pricing-table__td pricing-table__td--action">
                        <button
                          className="pricing-book-btn"
                          onClick={() => openWhatsApp(lang === 'ar' ? row.destinationAr : row.destination)}
                          aria-label={`Book transfer to ${row.destination}`}
                        >
                          <MessageCircle size={14} />
                          {lang === 'ar' ? 'احجز' : 'Book'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer notes */}
          <div className="pricing-notes glass">
            <h3 className="pricing-notes__title">
              {lang === 'ar' ? '📌 ملاحظات مهمة' : '📌 Important Notes'}
            </h3>
            <ul className="pricing-notes__list">
              {(lang === 'ar' ? [
                'جميع الأسعار بالأوروي (€) لكل مركبة وليس للشخص.',
                'الأسعار ثابتة ومضمونة — لا رسوم خفية.',
                'المجموعات من 1 إلى 3 أشخاص: سيارة سيدان أو SUV.',
                'المجموعات من 4 إلى 8 أشخاص: ميني باص أو ميني فان.',
                'تشمل الخدمة الاستقبال في المطار، ومساعدة في الأمتعة، وانتقال باب إلى باب.',
                'الدفع نقداً عند الوصول أو عبر واتساب.',
              ] : [
                'All prices are in Euros (€) per vehicle, not per person.',
                'Fixed guaranteed prices — no hidden fees.',
                'Groups 1–3 persons: sedan or SUV vehicle.',
                'Groups 4–8 persons: mini-bus or minivan.',
                'Service includes meet & greet, luggage assistance, and door-to-door transfer.',
                'Payment in cash on arrival or via WhatsApp pre-booking.',
              ]).map((note, i) => (
                <li key={i} className="pricing-notes__item">
                  <span className="pricing-notes__icon">✓</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pricing-cta glass-dark">
            <div className="pricing-cta__text">
              <h3>{lang === 'ar' ? 'هل تريد حجز نقل الآن؟' : 'Ready to Book Your Transfer?'}</h3>
              <p>
                {lang === 'ar'
                  ? 'تواصل معنا عبر واتساب وسنؤكد حجزك فوراً'
                  : 'Contact us via WhatsApp and we\'ll confirm your booking instantly'}
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === 'ar' ? 'مرحباً، أريد حجز نقل من مطار الغردقة' : 'Hello, I would like to book an airport transfer from Hurghada Airport')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cta pricing-cta__btn"
            >
              <MessageCircle size={20} />
              {lang === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
            </a>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Pricing;
