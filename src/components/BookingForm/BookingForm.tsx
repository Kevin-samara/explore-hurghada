import React, { useState } from 'react';
import { CheckCircle, MessageCircle, AlertCircle, Compass, Car, Clock, MapPin, Plane } from 'lucide-react';

import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import { trips } from '../../data/trips';
import { buildWhatsAppMessage, openWhatsApp } from '../../utils/whatsapp';
import type { BookingFormData } from '../../types';
import './BookingForm.css';

interface FormErrors {
  [key: string]: string;
}

interface BookingFormProps {
  preselectedTripId?: string;
  initialBookingType?: 'trip' | 'transfer';
}

const DESTINATIONS = [
  { id: 'hurghada', name: 'Hotel in Hurghada City', nameAr: 'فندق داخل مدينة الغردقة', sedanPrice: 13, vanPrice: 23 },
  { id: 'elgouna', name: 'El Gouna Resort', nameAr: 'منتجع الجونة', sedanPrice: 18, vanPrice: 25 },
  { id: 'makadi', name: 'Makadi Bay', nameAr: 'ماكادي باي', sedanPrice: 18, vanPrice: 25 },
  { id: 'sahlhasheesh', name: 'Sahl Hasheesh', nameAr: 'سهل حشيش', sedanPrice: 18, vanPrice: 25 },
  { id: 'somabay', name: 'Soma Bay', nameAr: 'سوما باي', sedanPrice: 25, vanPrice: 35 },
  { id: 'safaga', name: 'Safaga Port / Hotels', nameAr: 'مدينة / ميناء سفاجا', sedanPrice: 25, vanPrice: 35 },
  { id: 'elquoseir', name: 'El Quseir', nameAr: 'القصير', sedanPrice: 45, vanPrice: 65 },
  { id: 'marsaalam', name: 'Marsa Alam', nameAr: 'مرسى علم', sedanPrice: 80, vanPrice: 100 },
  { id: 'luxor', name: 'Luxor City / Temple Tour', nameAr: 'مدينة الأقصر والمعابد', sedanPrice: 120, vanPrice: 150 },
  { id: 'cairo', name: 'Cairo & Pyramids', nameAr: 'القاهرة والأهرامات', sedanPrice: 140, vanPrice: 180 },
];

const PICKUPS = [
  { id: 'hrg_airport', name: 'Hurghada International Airport (HRG)', nameAr: 'مطار الغردقة الدولي (HRG)' },
  { id: 'hotel', name: 'Hotel / Resort Pickup', nameAr: 'الاصطحاب من الفندق / المنتجع' },
  { id: 'marina', name: 'Hurghada Marina', nameAr: 'مارينا الغردقة' },
  { id: 'custom', name: 'Other / Custom Location', nameAr: 'موقع آخر / مخصص' },
];

const TIME_PRESETS = ['08:00 AM', '10:00 AM', '01:00 PM', '05:00 PM', '08:00 PM', 'Flexible / Anytime'];

const BookingForm: React.FC<BookingFormProps> = ({ preselectedTripId, initialBookingType = 'trip' }) => {
  const { lang } = useLanguage();

  const [bookingType, setBookingType] = useState<'trip' | 'transfer'>(
    preselectedTripId ? 'trip' : initialBookingType
  );

  const [form, setForm] = useState<BookingFormData>({
    bookingType: preselectedTripId ? 'trip' : initialBookingType,
    fullName: '',
    phone: '',
    email: '',
    adults: 1,
    children: 0,
    tripId: preselectedTripId || '',
    transferPickup: 'hrg_airport',
    transferDestination: 'elgouna',
    vehicleType: 'sedan',
    flightNumber: '',
    date: '',
    time: '',
    hotel: '',
    notes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const selectedTrip = trips.find((tr) => tr.id === form.tripId);
  const selectedDest = DESTINATIONS.find((d) => d.id === form.transferDestination) || DESTINATIONS[1];
  const selectedPickup = PICKUPS.find((p) => p.id === form.transferPickup) || PICKUPS[0];

  const transferPrice = form.vehicleType === 'sedan' ? selectedDest.sedanPrice : selectedDest.vanPrice;

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.fullName.trim()) errs.fullName = t(lang, 'booking.form.validation.required');
    if (!form.phone.trim()) {
      errs.phone = t(lang, 'booking.form.validation.required');
    } else if (!/^[\d\s\+\-\(\)]{7,}$/.test(form.phone)) {
      errs.phone = t(lang, 'booking.form.validation.phone');
    }
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = t(lang, 'booking.form.validation.email');
    }

    if (bookingType === 'trip') {
      if (!form.tripId) errs.tripId = t(lang, 'booking.form.validation.required');
    }

    if (!form.date) errs.date = t(lang, 'booking.form.validation.required');
    if (!form.hotel.trim()) errs.hotel = t(lang, 'booking.form.validation.required');
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleTypeSwitch = (type: 'trip' | 'transfer') => {
    setBookingType(type);
    setForm((prev) => ({ ...prev, bookingType: type }));
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    let title = '';
    let extraDetails = {};

    if (bookingType === 'trip') {
      title = selectedTrip ? (lang === 'ar' ? selectedTrip.titleAr : selectedTrip.title) : form.tripId;
    } else {
      const pName = lang === 'ar' ? selectedPickup.nameAr : selectedPickup.name;
      const dName = lang === 'ar' ? selectedDest.nameAr : selectedDest.name;
      title = `Transfer: ${pName} ➔ ${dName}`;
      extraDetails = {
        pickupLabel: pName,
        destLabel: dName,
        vehicleLabel:
          form.vehicleType === 'van'
            ? lang === 'ar' ? 'فان VIP (4-8 ركاب)' : 'VIP Minivan (4-8 Pax)'
            : lang === 'ar' ? 'سيارة خاصة (1-3 ركاب)' : 'Private Sedan (1-3 Pax)',
      };
    }

    const message = buildWhatsAppMessage(form, title, extraDetails);
    openWhatsApp(message);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-success glass">
        <CheckCircle size={56} className="booking-success__icon" />
        <h3 className="booking-success__title">
          {lang === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Booking Request Sent!'}
        </h3>
        <p className="booking-success__text">
          {t(lang, 'booking.form.success')}
        </p>
        <button className="btn btn-glass" onClick={() => setSubmitted(false)}>
          {lang === 'ar' ? 'إجراء حجز آخر' : 'Book Another Service'}
        </button>
      </div>
    );
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      {/* ── Booking Type Toggle ── */}
      <div className="booking-type-toggle" role="tablist" aria-label="Booking Type Selector">
        <button
          type="button"
          className={`booking-type-btn ${bookingType === 'trip' ? 'active' : ''}`}
          onClick={() => handleTypeSwitch('trip')}
          role="tab"
          aria-selected={bookingType === 'trip'}
        >
          <Compass size={18} />
          {lang === 'ar' ? 'حجز رحلة / جولة' : 'Select a Trip / Tour'}
        </button>

        <button
          type="button"
          className={`booking-type-btn ${bookingType === 'transfer' ? 'active' : ''}`}
          onClick={() => handleTypeSwitch('transfer')}
          role="tab"
          aria-selected={bookingType === 'transfer'}
        >
          <Car size={18} />
          {lang === 'ar' ? 'حجز خدمة نقل / توصيل' : 'Select a Transfer'}
        </button>
      </div>

      {/* ── Personal Info ── */}
      <div className="booking-form__section">
        <h3 className="booking-form__section-title">
          👤 {lang === 'ar' ? 'المعلومات الشخصية' : 'Personal Information'}
        </h3>
        <div className="booking-form__row">
          <div className="form-group">
            <label className="glass-label" htmlFor="booking-name">
              {t(lang, 'booking.form.fullName')} *
            </label>
            <input
              id="booking-name"
              name="fullName"
              type="text"
              className={`glass-input ${errors.fullName ? 'error' : ''}`}
              value={form.fullName}
              onChange={handleChange}
              placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Your full name'}
              autoComplete="name"
            />
            {errors.fullName && <span className="form-error"><AlertCircle size={12} /> {errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label className="glass-label" htmlFor="booking-phone">
              {t(lang, 'booking.form.phone')} *
            </label>
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              className={`glass-input ${errors.phone ? 'error' : ''}`}
              value={form.phone}
              onChange={handleChange}
              placeholder="+20 XXX XXX XXXX"
              autoComplete="tel"
              dir="ltr"
            />
            {errors.phone && <span className="form-error"><AlertCircle size={12} /> {errors.phone}</span>}
          </div>

          <div className="form-group">
            <label className="glass-label" htmlFor="booking-email">
              {t(lang, 'booking.form.email')}
            </label>
            <input
              id="booking-email"
              name="email"
              type="email"
              className={`glass-input ${errors.email ? 'error' : ''}`}
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              autoComplete="email"
              dir="ltr"
            />
            {errors.email && <span className="form-error"><AlertCircle size={12} /> {errors.email}</span>}
          </div>
        </div>
      </div>

      {/* ── Dynamic Details: Trip vs Transfer ── */}
      {bookingType === 'trip' ? (
        <>
          {/* Trip Selection */}
          <div className="booking-form__section">
            <h3 className="booking-form__section-title">
              🚢 {lang === 'ar' ? 'تفاصيل الرحلة والجولة' : 'Trip Details'}
            </h3>
            <div className="form-group">
              <label className="glass-label" htmlFor="booking-trip">
                {lang === 'ar' ? 'اختر الرحلة *' : 'Select a Trip *'}
              </label>
              <select
                id="booking-trip"
                name="tripId"
                className={`glass-input glass-select ${errors.tripId ? 'error' : ''}`}
                value={form.tripId}
                onChange={handleChange}
              >
                <option value="">{t(lang, 'booking.form.selectTrip')}</option>
                {trips.map((tr) => (
                  <option key={tr.id} value={tr.id}>
                    {lang === 'ar' ? tr.titleAr : tr.title} — ${tr.price} USD
                  </option>
                ))}
              </select>
              {errors.tripId && <span className="form-error"><AlertCircle size={12} /> {errors.tripId}</span>}
            </div>
          </div>

          {/* Group Size */}
          <div className="booking-form__section">
            <h3 className="booking-form__section-title">
              👥 {lang === 'ar' ? 'حجم المجموعة' : 'Group Size'}
            </h3>
            <div className="booking-form__row-2col">
              <div className="form-group">
                <label className="glass-label" htmlFor="booking-adults">
                  {t(lang, 'booking.form.adults')} (12+ yrs)
                </label>
                <input
                  id="booking-adults"
                  name="adults"
                  type="number"
                  className="glass-input"
                  value={form.adults}
                  onChange={handleChange}
                  min={1}
                  max={50}
                />
              </div>

              <div className="form-group">
                <label className="glass-label" htmlFor="booking-children">
                  {t(lang, 'booking.form.children')} (0-11 yrs)
                </label>
                <input
                  id="booking-children"
                  name="children"
                  type="number"
                  className="glass-input"
                  value={form.children}
                  onChange={handleChange}
                  min={0}
                  max={50}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Transfer Details */
        <div className="booking-form__section">
          <h3 className="booking-form__section-title">
            🚘 {lang === 'ar' ? 'تفاصيل رحلة التوصيل والنقل' : 'Transfer Details'}
          </h3>

          <div className="booking-form__row-2col">
            <div className="form-group">
              <label className="glass-label" htmlFor="transfer-pickup">
                <MapPin size={14} style={{ display: 'inline', marginInlineEnd: 4 }} />
                {lang === 'ar' ? 'مكان الاصطحاب *' : 'Pick-up Location *'}
              </label>
              <select
                id="transfer-pickup"
                name="transferPickup"
                className="glass-input glass-select"
                value={form.transferPickup}
                onChange={handleChange}
              >
                {PICKUPS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {lang === 'ar' ? p.nameAr : p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="glass-label" htmlFor="transfer-dest">
                <MapPin size={14} style={{ display: 'inline', marginInlineEnd: 4 }} />
                {lang === 'ar' ? 'الوجهة / التوصيل إلى *' : 'Destination *'}
              </label>
              <select
                id="transfer-dest"
                name="transferDestination"
                className="glass-input glass-select"
                value={form.transferDestination}
                onChange={handleChange}
              >
                {DESTINATIONS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {lang === 'ar' ? d.nameAr : d.name} (from ${form.vehicleType === 'sedan' ? d.sedanPrice : d.vanPrice} USD)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Vehicle Type Selection */}
          <div className="form-group">
            <label className="glass-label">
              <Car size={14} style={{ display: 'inline', marginInlineEnd: 4 }} />
              {lang === 'ar' ? 'نوع المركبة المناسبة:' : 'Select Vehicle Type:'}
            </label>
            <div className="vehicle-type-selector">
              <button
                type="button"
                className={`vehicle-type-btn ${form.vehicleType === 'sedan' ? 'active' : ''}`}
                onClick={() => setForm((prev) => ({ ...prev, vehicleType: 'sedan' }))}
              >
                <div className="vehicle-title">🚗 Private Sedan</div>
                <div className="vehicle-desc">
                  {lang === 'ar' ? '1 - 3 ركاب (حقائب قياسية)' : '1 - 3 Passengers (Comfort Sedan)'}
                </div>
              </button>

              <button
                type="button"
                className={`vehicle-type-btn ${form.vehicleType === 'van' ? 'active' : ''}`}
                onClick={() => setForm((prev) => ({ ...prev, vehicleType: 'van' }))}
              >
                <div className="vehicle-title">🚐 VIP Minivan</div>
                <div className="vehicle-desc">
                  {lang === 'ar' ? '4 - 8 ركاب (أمتعة عائلية)' : '4 - 8 Passengers (Spacious Van)'}
                </div>
              </button>
            </div>
          </div>

          {/* Optional Flight Number if Airport Pickup */}
          {form.transferPickup === 'hrg_airport' && (
            <div className="form-group">
              <label className="glass-label" htmlFor="flight-number">
                <Plane size={14} style={{ display: 'inline', marginInlineEnd: 4 }} />
                {lang === 'ar' ? 'رقم الرحلة الجوية (اختياري لمتابعة الوصول):' : 'Flight Number (Optional for arrival tracking):'}
              </label>
              <input
                id="flight-number"
                name="flightNumber"
                type="text"
                className="glass-input"
                value={form.flightNumber}
                onChange={handleChange}
                placeholder="e.g. MS 789 / DE 1420"
              />
            </div>
          )}
        </div>
      )}

      {/* ── Date & Manual Time Selection for BOTH options ── */}
      <div className="booking-form__section">
        <h3 className="booking-form__section-title">
          📅 {lang === 'ar' ? 'التاريخ ووقت الاصطحاب اليدوي' : 'Date & Pickup Time'}
        </h3>
        <div className="booking-form__row-2col">
          <div className="form-group">
            <label className="glass-label" htmlFor="booking-date">
              {t(lang, 'booking.form.date')} *
            </label>
            <input
              id="booking-date"
              name="date"
              type="date"
              className={`glass-input ${errors.date ? 'error' : ''}`}
              value={form.date}
              onChange={handleChange}
              min={today}
            />
            {errors.date && <span className="form-error"><AlertCircle size={12} /> {errors.date}</span>}
          </div>

          {/* Manual Time Selection Input & Presets */}
          <div className="form-group time-presets-wrap">
            <label className="glass-label" htmlFor="booking-time">
              <Clock size={14} style={{ display: 'inline', marginInlineEnd: 4 }} />
              {lang === 'ar' ? 'وقت الاصطحاب المفضل (يدوي أو سريعي):' : 'Preferred Pickup Time (Manual or Quick):'}
            </label>
            <input
              id="booking-time"
              name="time"
              type="text"
              className="glass-input"
              value={form.time}
              onChange={handleChange}
              placeholder={lang === 'ar' ? 'مثال: 08:30 ص أو 14:00 أو مرن' : 'e.g. 08:30 AM, 14:15, or Flexible'}
            />
            <div className="time-presets-row">
              {TIME_PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={`time-preset-pill ${form.time === preset ? 'active' : ''}`}
                  onClick={() => setForm((prev) => ({ ...prev, time: preset }))}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Pickup Hotel / Location & Special Notes ── */}
      <div className="booking-form__section">
        <h3 className="booking-form__section-title">
          🏨 {lang === 'ar' ? 'عنوان الإقامة والملاحظات' : 'Hotel Location & Notes'}
        </h3>
        <div className="form-group">
          <label className="glass-label" htmlFor="booking-hotel">
            {bookingType === 'transfer'
              ? (lang === 'ar' ? 'عنوان الفندق / موقع التوصيل المحدد *' : 'Hotel Name / Specific Drop-off Address *')
              : `${t(lang, 'booking.form.hotel')} *`}
          </label>
          <input
            id="booking-hotel"
            name="hotel"
            type="text"
            className={`glass-input ${errors.hotel ? 'error' : ''}`}
            value={form.hotel}
            onChange={handleChange}
            placeholder={lang === 'ar' ? 'اسم الفندق أو العنوان الكامل بالغردقة' : 'Hotel name, resort, or room address in Hurghada'}
          />
          {errors.hotel && <span className="form-error"><AlertCircle size={12} /> {errors.hotel}</span>}
        </div>

        <div className="form-group" style={{ marginTop: 'var(--space-2)' }}>
          <label className="glass-label" htmlFor="booking-notes">
            {t(lang, 'booking.form.notes')}
          </label>
          <textarea
            id="booking-notes"
            name="notes"
            className="glass-input"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            placeholder={
              bookingType === 'transfer'
                ? (lang === 'ar' ? 'عدد الحقائب، كراسي الأطفال، أو طلبات خاصة...' : 'Luggage details, baby seat request, or special notes...')
                : t(lang, 'booking.form.notesPlaceholder')
            }
          />
        </div>
      </div>

      {/* ── Estimated Total Box ── */}
      <div className="booking-form__estimate glass">
        <span>{lang === 'ar' ? 'التكلفة التقديرية المباشرة:' : 'Estimated Total Fare:'}</span>
        <strong className="text-gradient">
          {bookingType === 'trip' ? (
            selectedTrip ? (
              `$${(selectedTrip.price * (Number(form.adults) + Math.ceil(Number(form.children) * 0.5))).toFixed(0)} USD`
            ) : (
              '$0 USD'
            )
          ) : (
            `$${transferPrice} USD`
          )}
        </strong>
      </div>

      {/* ── Submit Button ── */}
      <button type="submit" className="btn btn-cta booking-form__submit">
        <MessageCircle size={20} />
        {bookingType === 'transfer'
          ? (lang === 'ar' ? 'تأكيد حجز خدمة التوصيل عبر واتساب' : 'Confirm Transfer via WhatsApp')
          : t(lang, 'booking.form.confirm')}
      </button>
    </form>
  );
};

export default BookingForm;
