import React from 'react';
import { Clock, ArrowRight, ArrowLeft, MessageCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../SectionTitle/SectionTitle';
import siteConfig from '../../config/site.config';
import './TransferRoutesWidget.css';

const imagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

interface RouteCardData {
  id: string;
  destination: string;
  destinationAr: string;
  tag: string;
  tagAr: string;
  image: string;
  duration: string;
  durationAr: string;
  sedanPrice: string;
  vanPrice: string;
  highlights: string[];
  highlightsAr: string[];
}

const POPULAR_ROUTES: RouteCardData[] = [
  {
    id: 'elgouna',
    destination: 'Hurghada Airport ➔ El Gouna',
    destinationAr: 'مطار الغردقة ➔ الجونة',
    tag: 'Popular Resort',
    tagAr: 'المنتجع الأكثر طلباً',
    image: imagePath('images/trips/el-gouna-route.jpg'),
    duration: '30 mins',
    durationAr: '30 دقيقة',
    sedanPrice: '18 €',
    vanPrice: '25 €',
    highlights: ['Door-to-door luxury', 'Meet & greet sign', 'Air-conditioned'],
    highlightsAr: ['توصيل مباشر للباب', 'استقبال بيافتة باسمك', 'مركبة مكيفة حديثة'],
  },
  {
    id: 'makadi',
    destination: 'Hurghada Airport ➔ Makadi Bay',
    destinationAr: 'مطار الغردقة ➔ ماكادي باي',
    tag: 'Quick Airport Shuttle',
    tagAr: 'توصيل سريع للمطار',
    image: imagePath('images/trips/makadi-bay-route.jpg'),
    duration: '25 mins',
    durationAr: '25 دقيقة',
    sedanPrice: '18 €',
    vanPrice: '25 €',
    highlights: ['Flight delay tracking', 'Zero waiting fees', 'Direct resort drop-off'],
    highlightsAr: ['متابعة الرحلة في حالة التأخير', 'بدون أي رسوم انتظار', 'توصيل مباشر للفندق'],
  },
  {
    id: 'somabay',
    destination: 'Hurghada Airport ➔ Soma Bay',
    destinationAr: 'مطار الغردقة ➔ سوما باي',
    tag: 'Executive Transfer',
    tagAr: 'نقل فاخر ومريح',
    image: imagePath('images/trips/soma-bay-route.jpg'),
    duration: '45 mins',
    durationAr: '45 دقيقة',
    sedanPrice: '25 €',
    vanPrice: '35 €',
    highlights: ['Comfortable leather seats', 'Free luggage help', 'Smooth highway ride'],
    highlightsAr: ['مقاعد مريحة للغاية', 'مساعدة في الأمتعة مجاناً', 'طريق سريع وآمن'],
  },
  {
    id: 'luxor',
    destination: 'Hurghada ➔ Luxor Day Private Driver',
    destinationAr: 'الغردقة ➔ الأقصر (سائق خاص طوال اليوم)',
    tag: 'Inter-City Tour',
    tagAr: 'رحلة بين المدن',
    image: imagePath('images/trips/luxor-day-trip.jpg'),
    duration: '3.5 hrs',
    durationAr: '3.5 ساعات',
    sedanPrice: '120 €',
    vanPrice: '150 €',
    highlights: ['Full-day private driver', 'Stop anytime for photos', 'Return included'],
    highlightsAr: ['سائق خاص طوال اليوم', 'إمكانية التوقف للصور', 'تشمل الذهاب والعودة'],
  },
];

const TransferRoutesWidget: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const whatsappNumber = siteConfig.whatsappNumber.replace(/\D/g, '');

  const bookRoute = (route: RouteCardData) => {
    const title = lang === 'ar' ? route.destinationAr : route.destination;
    const msg = lang === 'ar'
      ? `مرحباً، أود حجز خدمة نقل:\n- المسار: ${title}\n- السعر: ${route.sedanPrice} (سيارة) / ${route.vanPrice} (فان VIP)`
      : `Hello, I'd like to book a private transfer:\n- Route: ${title}\n- Price: ${route.sedanPrice} (Sedan) / ${route.vanPrice} (VIP Van)`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="section transfer-routes-section">
      <div className="container">
        <div className="transfer-routes-header">
          <SectionTitle
            tag={lang === 'ar' ? '🚗 أكثر المسارات طلباً' : '🚗 Top Transfer Destinations'}
            title={lang === 'ar' ? 'مسارات النقل المباشر الأكثر رواجاً' : 'Popular Direct Private Routes'}
            subtitle={
              lang === 'ar'
                ? 'أسعار ثابتة ومحددة مسبقاً مع خدمة الاستقبال الخاصة من المطار إلى الفندق مباشرة'
                : 'Guaranteed fixed rates from Hurghada Airport to top resorts and cities.'
            }
          />
        </div>

        <div className="transfer-routes-grid">
          {POPULAR_ROUTES.map((route) => (
            <div key={route.id} className="route-card glass-card">
              <div className="route-card__image-wrap">
                <img
                  src={route.image}
                  alt={lang === 'ar' ? route.destinationAr : route.destination}
                  className="route-card__img"
                />
                <span className="route-card__tag">
                  {lang === 'ar' ? route.tagAr : route.tag}
                </span>
                <span className="route-card__duration">
                  <Clock size={13} />
                  {lang === 'ar' ? route.durationAr : route.duration}
                </span>
              </div>

              <div className="route-card__content">
                <h3 className="route-card__title">
                  {lang === 'ar' ? route.destinationAr : route.destination}
                </h3>

                <div className="route-card__prices">
                  <div className="price-pill">
                    <span className="price-label">{lang === 'ar' ? 'سيارة (1-3 ركاب):' : 'Sedan (1-3 Pax):'}</span>
                    <span className="price-val">{route.sedanPrice}</span>
                  </div>
                  <div className="price-pill price-pill--van">
                    <span className="price-label">{lang === 'ar' ? 'فان VIP (4-8):' : 'VIP Van (4-8):'}</span>
                    <span className="price-val">{route.vanPrice}</span>
                  </div>
                </div>

                <ul className="route-card__highlights">
                  {(lang === 'ar' ? route.highlightsAr : route.highlights).map((hl, i) => (
                    <li key={i}>
                      <ShieldCheck size={14} className="text-cyan" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <button onClick={() => bookRoute(route)} className="btn btn-glass route-card__cta">
                  <MessageCircle size={16} />
                  <span>{lang === 'ar' ? 'حجز المسار الآن' : 'Book This Route'}</span>
                  <Arrow size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransferRoutesWidget;
