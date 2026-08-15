import React, { useState } from 'react';
import { MapPin, Users, Car, ArrowRight, ArrowLeft, MessageCircle, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import siteConfig from '../../config/site.config';
import './TransferCalculatorWidget.css';

interface DestinationOption {
  id: string;
  name: string;
  nameAr: string;
  smallPrice: number; // 1-3 pax
  largePrice: number; // 4-8 pax
  duration: string;
  durationAr: string;
}

const DESTINATIONS: DestinationOption[] = [
  { id: 'hurghada', name: 'Hotel in Hurghada City', nameAr: 'فندق داخل مدينة الغردقة', smallPrice: 13, largePrice: 23, duration: '15-20 min', durationAr: '15-20 دقيقة' },
  { id: 'elgouna', name: 'El Gouna Resort', nameAr: 'منتجع الجونة', smallPrice: 18, largePrice: 25, duration: '30 min', durationAr: '30 دقيقة' },
  { id: 'makadi', name: 'Makadi Bay', nameAr: 'ماكادي باي', smallPrice: 18, largePrice: 25, duration: '25-30 min', durationAr: '25-30 دقيقة' },
  { id: 'sahlhasheesh', name: 'Sahl Hasheesh', nameAr: 'سهل حشيش', smallPrice: 18, largePrice: 25, duration: '20-25 min', durationAr: '20-25 دقيقة' },
  { id: 'somabay', name: 'Soma Bay', nameAr: 'سوما باي', smallPrice: 25, largePrice: 35, duration: '45 min', durationAr: '45 دقيقة' },
  { id: 'safaga', name: 'Safaga Port / Hotels', nameAr: 'مدينة / ميناء سفاجا', smallPrice: 25, largePrice: 35, duration: '50 min', durationAr: '50 دقيقة' },
  { id: 'elquoseir', name: 'El Quseir', nameAr: 'القصير', smallPrice: 45, largePrice: 65, duration: '1.5 hrs', durationAr: 'ساعة ونصف' },
  { id: 'marsaalam', name: 'Marsa Alam', nameAr: 'مرسى علم', smallPrice: 80, largePrice: 100, duration: '3 hrs', durationAr: '3 ساعات' },
  { id: 'luxor', name: 'Luxor City / Temple Tour', nameAr: 'مدينة الأقصر والمعابد', smallPrice: 120, largePrice: 150, duration: '3.5 hrs', durationAr: '3 ساعات ونصف' },
  { id: 'cairo', name: 'Cairo & Pyramids', nameAr: 'القاهرة والأهرامات', smallPrice: 140, largePrice: 180, duration: '5 hrs', durationAr: '5 ساعات' },
];

const PICKUPS = [
  { id: 'hrg_airport', name: 'Hurghada Airport (HRG)', nameAr: 'مطار الغردقة الدولي (HRG)' },
  { id: 'hotel', name: 'Hotel / Resort Pickup', nameAr: 'الاصطحاب من الفندق / المنتجع' },
  { id: 'marina', name: 'Hurghada Marina', nameAr: 'مارينا الغردقة' },
];

const TransferCalculatorWidget: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const [pickup, setPickup] = useState<string>('hrg_airport');
  const [destinationId, setDestinationId] = useState<string>('elgouna');
  const [groupSize, setGroupSize] = useState<'small' | 'large'>('small');
  const [flightNumber, setFlightNumber] = useState<string>('');

  const selectedDest = DESTINATIONS.find(d => d.id === destinationId) || DESTINATIONS[1];
  const selectedPickup = PICKUPS.find(p => p.id === pickup) || PICKUPS[0];
  const calculatedPrice = groupSize === 'small' ? selectedDest.smallPrice : selectedDest.largePrice;

  const whatsappNumber = siteConfig.whatsappNumber.replace(/\D/g, '');

  const handleBookNow = () => {
    const pickupName = lang === 'ar' ? selectedPickup.nameAr : selectedPickup.name;
    const destName = lang === 'ar' ? selectedDest.nameAr : selectedDest.name;
    const passengersText = groupSize === 'small' ? (lang === 'ar' ? '1-3 ركاب (سيارة خاصة)' : '1-3 Passengers (Private Sedan)') : (lang === 'ar' ? '4-8 ركاب (فان VIP)' : '4-8 Passengers (VIP Minivan)');

    let msg = lang === 'ar'
      ? `مرحباً، أود حجز خدمة نقل:\n- من: ${pickupName}\n- إلى: ${destName}\n- عدد الركاب: ${passengersText}\n- السعر المباشر: ${calculatedPrice} €`
      : `Hello, I would like to book a private transfer:\n- From: ${pickupName}\n- To: ${destName}\n- Passengers: ${passengersText}\n- Estimated Price: ${calculatedPrice} €`;

    if (flightNumber.trim()) {
      msg += lang === 'ar' ? `\n- رقم الرحلة: ${flightNumber}` : `\n- Flight Number: ${flightNumber}`;
    }

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="section transfer-calc-section" id="transfer-calculator">
      <div className="container">
        <div className="transfer-calc-grid glass-card">
          
          {/* Left Form Controls */}
          <div className="transfer-calc-form">
            <div className="transfer-calc-header">
              <span className="section-tag section-tag--transfer">
                {lang === 'ar' ? '⚡ حاسبة السعر الفوري' : '⚡ Instant Price Estimator'}
              </span>
              <h2 className="transfer-calc-title">
                {lang === 'ar' ? 'احسب سعر رحلتك واحجز في ثوانٍ' : 'Calculate Your Transfer Fare & Book'}
              </h2>
              <p className="transfer-calc-subtitle">
                {lang === 'ar'
                  ? 'أسعار ثابتة ومضمونة بدون أي تكاليف خفية شاملة الاستقبال في المطار والتكييف والأمتعة'
                  : 'Fixed transparent rates. Includes airport meet & greet, A/C vehicle, and luggage assistance.'}
              </p>
            </div>

            <div className="calc-inputs-grid">
              {/* Pickup location */}
              <div className="calc-input-group">
                <label className="calc-label">
                  <MapPin size={16} className="text-cyan" />
                  {lang === 'ar' ? 'مكان الاصطحاب:' : 'Pick-up Point:'}
                </label>
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="calc-select"
                >
                  {PICKUPS.map(p => (
                    <option key={p.id} value={p.id}>
                      {lang === 'ar' ? p.nameAr : p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Destination */}
              <div className="calc-input-group">
                <label className="calc-label">
                  <MapPin size={16} className="text-blue" />
                  {lang === 'ar' ? 'وجهة الوصول:' : 'Destination:'}
                </label>
                <select
                  value={destinationId}
                  onChange={(e) => setDestinationId(e.target.value)}
                  className="calc-select"
                >
                  {DESTINATIONS.map(d => (
                    <option key={d.id} value={d.id}>
                      {lang === 'ar' ? d.nameAr : d.name} ({groupSize === 'small' ? d.smallPrice : d.largePrice} €)
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle / Passenger selector */}
              <div className="calc-input-group full-width">
                <label className="calc-label">
                  <Users size={16} className="text-cyan" />
                  {lang === 'ar' ? 'نوع المركبة والركاب:' : 'Vehicle & Group Size:'}
                </label>
                <div className="vehicle-toggle-wrap">
                  <button
                    type="button"
                    className={`vehicle-btn ${groupSize === 'small' ? 'active' : ''}`}
                    onClick={() => setGroupSize('small')}
                  >
                    <Car size={18} />
                    <div>
                      <div className="vehicle-btn-title">{lang === 'ar' ? 'سيارة خاصة (1-3 ركاب)' : 'Private Sedan (1-3 Pax)'}</div>
                      <div className="vehicle-btn-sub">{lang === 'ar' ? 'مكيّفة، مريحة وحقائب عادية' : 'A/C Comfort, Standard Luggage'}</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    className={`vehicle-btn ${groupSize === 'large' ? 'active' : ''}`}
                    onClick={() => setGroupSize('large')}
                  >
                    <Car size={18} />
                    <div>
                      <div className="vehicle-btn-title">{lang === 'ar' ? 'فان VIP (4-8 ركاب)' : 'VIP Minivan (4-8 Pax)'}</div>
                      <div className="vehicle-btn-sub">{lang === 'ar' ? 'عائلات ومجموعات وحقائب كبيرة' : 'Families, Large Luggage Space'}</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Flight Number (Optional) */}
              <div className="calc-input-group full-width">
                <label className="calc-label">
                  <Clock size={16} className="text-muted" />
                  {lang === 'ar' ? 'رقم الرحلة الجوية (اختياري لمتابعة الوصول):' : 'Flight Number (Optional for arrival tracking):'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'ar' ? 'مثال: MS 701 أو DE 1420' : 'e.g. MS 701 or DE 1420'}
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                  className="calc-input"
                />
              </div>
            </div>
          </div>

          {/* Right Price Card Output */}
          <div className="transfer-calc-summary">
            <div className="summary-badge">
              <ShieldCheck size={16} />
              {lang === 'ar' ? 'سعر ثابت بدون مفاجآت' : 'Fixed Guaranteed Rate'}
            </div>

            <div className="summary-destination">
              <div className="summary-dest-label">{lang === 'ar' ? 'رحلتك إلى' : 'Your Journey to'}</div>
              <div className="summary-dest-val">{lang === 'ar' ? selectedDest.nameAr : selectedDest.name}</div>
              <div className="summary-time">
                <Clock size={14} />
                <span>{lang === 'ar' ? `وقت الرحلة المتوقع: ${selectedDest.durationAr}` : `Est. Duration: ${selectedDest.duration}`}</span>
              </div>
            </div>

            <div className="summary-price-box">
              <div className="summary-price-tag">{lang === 'ar' ? 'الإجمالي الصافي:' : 'Total Fixed Price:'}</div>
              <div className="summary-price-val">
                <span className="price-amount">{calculatedPrice}.00</span>
                <span className="price-currency">€</span>
              </div>
              <div className="summary-price-note">
                {lang === 'ar' ? 'شامل الوقود، سائق محترف وتأكيد واتساب فوري' : 'Includes fuel, driver, meet & greet & VAT'}
              </div>
            </div>

            <ul className="summary-features">
              <li>
                <CheckCircle2 size={16} className="text-cyan" />
                <span>{lang === 'ar' ? 'الاستقبال في الصالة بيافتة بها اسمك' : 'Meet & greet with name sign at arrivals'}</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-cyan" />
                <span>{lang === 'ar' ? 'متابعة الرحلة في حالة التأخير مجاناً' : 'Free flight tracking (no extra charge for delays)'}</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-cyan" />
                <span>{lang === 'ar' ? 'الدفع نقداً أو بالبطاقة عند الوصول' : 'Pay cash or card upon arrival'}</span>
              </li>
            </ul>

            <button onClick={handleBookNow} className="btn btn-cta btn-lg btn-whatsapp-direct">
              <MessageCircle size={20} />
              <span>{lang === 'ar' ? 'تأكيد الحجز عبر واتساب' : 'Book Instantly via WhatsApp'}</span>
              <Arrow size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransferCalculatorWidget;
