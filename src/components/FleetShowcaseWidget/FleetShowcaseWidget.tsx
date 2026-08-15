import React from 'react';
import { Car, Users, Wind, ShieldCheck, Plane, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import SectionTitle from '../SectionTitle/SectionTitle';
import './FleetShowcaseWidget.css';

const imagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

interface VehicleType {
  id: string;
  name: string;
  nameAr: string;
  tag: string;
  tagAr: string;
  pax: string;
  paxAr: string;
  luggage: string;
  luggageAr: string;
  image: string;
  features: string[];
  featuresAr: string[];
}

const VEHICLES: VehicleType[] = [
  {
    id: 'sedan',
    name: 'Modern Private Sedan',
    nameAr: 'سيارة سيدان حديثة خاصة',
    tag: 'Ideal for Individuals & Couples',
    tagAr: 'مثالية للأفراد والأزواج',
    pax: '1 - 3 Passengers',
    paxAr: '1 - 3 ركاب',
    luggage: 'up to 3 Suitcases',
    luggageAr: 'حتى 3 حقائب',
    image: imagePath('images/trips/airport-transfers.jpg'),
    features: ['Air-Conditioning', 'Clean & Sanitized', 'Complimentary Bottled Water', 'Flight Tracking'],
    featuresAr: ['تكييف هواء ممتاز', 'نظيفة ومعقمة بالكامل', 'مياه معبأة مجانية', 'متابعة حركة الطيران'],
  },
  {
    id: 'van',
    name: 'VIP Minivan (Toyota HiAce / Mercedes)',
    nameAr: 'فان VIP ميني باص عائلي',
    tag: 'Best for Families & Groups',
    tagAr: 'الأفضل للعائلات والمجموعات',
    pax: '4 - 8 Passengers',
    paxAr: '4 - 8 ركاب',
    luggage: 'up to 8 Large Suitcases',
    luggageAr: 'حتى 8 حقائب كبيرة',
    image: imagePath('images/trips/airport-transfers.jpg'),
    features: ['High Roof & Spacous Seats', 'Extra Large Luggage Boot', 'Rear AC Vents', 'Child Seat On Request'],
    featuresAr: ['سقف مرتفع ومقاعد واسعة', 'مساحة حقائب ضخمة', 'فتحات تكييف خلفية', 'مقعد أطفال عند الطلب'],
  },
];

const SERVICE_HIGHLIGHTS = [
  {
    icon: Plane,
    title: 'Free Flight Tracking',
    titleAr: 'متابعة الرحلات الجوية مجاناً',
    desc: 'We monitor your arrival flight in real time. If your flight is delayed, your driver waits with no extra fees.',
    descAr: 'نراقب مواعيد طيرانك مباشرة. إذا تأخرت طائرتك، ينتظرك السائق دون أي رسوم إضافية.',
  },
  {
    icon: ShieldCheck,
    title: 'Meet & Greet at Arrivals',
    titleAr: 'استقبال خاص في صالة الوصول',
    desc: 'Your professional driver will hold a name sign at the exit terminal and assist with all your heavy bags.',
    descAr: 'ينتظرك سائق محترف في صالة الوصول بيافتة اسمك ويساعدك في تحميل كافة الأمتعة.',
  },
  {
    icon: Wind,
    title: '100% Air-Conditioned Fleet',
    titleAr: 'أسطول حديث مكيف 100%',
    desc: 'All vehicles are late-model, regularly inspected, insured, and climate-controlled for maximum comfort.',
    descAr: 'جميع المركبات حديثة ومفحوصة بانتظام ومكيفة بالكامل لتضمن لك أعلى درجات الراحة والاسترخاء.',
  },
];

const FleetShowcaseWidget: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="section fleet-section">
      <div className="container">
        <div className="fleet-header">
          <SectionTitle
            tag={lang === 'ar' ? '🚐 أسطول المركبات' : '🚐 Modern Private Fleet'}
            title={lang === 'ar' ? 'مركبات فاخرة ومجهزة لأعلى مستويات الراحة' : 'Comfortable Vehicles & Premium Service Features'}
            subtitle={
              lang === 'ar'
                ? 'اختر نوع المركبة المناسب لمجموعتك واستمتع برحلة هادئة وآمنة مع سائقين محترفين'
                : 'Choose the right vehicle size for your family or group with 24/7 dedicated service.'
            }
          />
        </div>

        {/* Vehicles Grid */}
        <div className="fleet-grid">
          {VEHICLES.map((veh) => (
            <div key={veh.id} className="fleet-card glass-card">
              <div className="fleet-card__badge">
                {lang === 'ar' ? veh.tagAr : veh.tag}
              </div>

              <div className="fleet-card__content">
                <h3 className="fleet-card__name">
                  {lang === 'ar' ? veh.nameAr : veh.name}
                </h3>

                <div className="fleet-card__specs">
                  <div className="spec-item">
                    <Users size={16} className="text-cyan" />
                    <span>{lang === 'ar' ? veh.paxAr : veh.pax}</span>
                  </div>
                  <div className="spec-item">
                    <Car size={16} className="text-cyan" />
                    <span>{lang === 'ar' ? veh.luggageAr : veh.luggage}</span>
                  </div>
                </div>

                <ul className="fleet-card__features">
                  {(lang === 'ar' ? veh.featuresAr : veh.features).map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle size={15} className="text-cyan" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Service Highlights Grid */}
        <div className="fleet-services-grid">
          {SERVICE_HIGHLIGHTS.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div key={index} className="service-card glass-card">
                <div className="service-card__icon">
                  <IconComp size={24} />
                </div>
                <h4 className="service-card__title">
                  {lang === 'ar' ? item.titleAr : item.title}
                </h4>
                <p className="service-card__desc">
                  {lang === 'ar' ? item.descAr : item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FleetShowcaseWidget;
