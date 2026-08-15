import React from 'react';
import {
  ShieldCheck, DollarSign, Users, MapPin, Calendar, Sparkles,
} from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './WhyChooseUs.css';

const ICONS = [ShieldCheck, DollarSign, Users, MapPin, Calendar, Sparkles];

interface WhyItem {
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const { lang } = useLanguage();

  const items: WhyItem[] = [
    {
      title: lang === 'ar' ? 'مرشدون محترفون' : 'Professional Guides',
      description:
        lang === 'ar'
          ? 'مرشدون معتمدون وذوو خبرة يعرفون كل زاوية في البحر الأحمر.'
          : 'Certified, experienced guides who know every corner of the Red Sea.',
    },
    {
      title: lang === 'ar' ? 'أفضل الأسعار' : 'Best Prices',
      description:
        lang === 'ar'
          ? 'أسعار تنافسية دون رسوم مخفية. أفضل قيمة مضمونة.'
          : 'Competitive prices with no hidden fees. Best value guaranteed.',
    },
    {
      title: lang === 'ar' ? 'آمن وموثوق' : 'Safe & Reliable',
      description:
        lang === 'ar'
          ? 'سلامتك هي أولويتنا القصوى. جميع المعدات تلبي المعايير الدولية.'
          : 'Your safety is our top priority. All equipment meets international standards.',
    },
    {
      title: lang === 'ar' ? 'اصطحاب من الفندق' : 'Hotel Pickup',
      description:
        lang === 'ar'
          ? 'الاصطحاب المجاني من وإلى الفندق مشمول مع كل جولة.'
          : 'Free hotel pickup and drop-off included with every tour.',
    },
    {
      title: lang === 'ar' ? 'حجز مرن' : 'Flexible Booking',
      description:
        lang === 'ar'
          ? 'حجز سهل وإلغاء مجاني ودعم عملاء على مدار الساعة.'
          : 'Easy booking, free cancellation, and 24/7 customer support.',
    },
    {
      title: lang === 'ar' ? 'ذكريات لا تُنسى' : 'Unforgettable Memories',
      description:
        lang === 'ar'
          ? 'نصنع تجارب ستحتفظ بها في قلبك مدى الحياة.'
          : 'We craft experiences that you will treasure for a lifetime.',
    },
  ];

  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="why-section section ocean-bg-alt">
      <div className="container">
        <SectionTitle
          tag={t(lang, 'why.sectionTag')}
          title={t(lang, 'why.title')}
          subtitle={t(lang, 'why.subtitle')}
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`why-grid stagger ${isVisible ? 'visible' : ''}`}
        >
          {items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className={`why-card fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="why-card__icon glass-icon glass-icon-lg pulse-glow">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
