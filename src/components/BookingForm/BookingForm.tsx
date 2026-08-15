import React, { useState } from 'react';
import { CheckCircle, MessageCircle, AlertCircle } from 'lucide-react';
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
}

const BookingForm: React.FC<BookingFormProps> = ({ preselectedTripId }) => {
  const { lang } = useLanguage();

  const [form, setForm] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    adults: 1,
    children: 0,
    tripId: preselectedTripId || '',
    date: '',
    time: '',
    hotel: '',
    notes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const selectedTrip = trips.find((tr) => tr.id === form.tripId);

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
    if (!form.tripId) errs.tripId = t(lang, 'booking.form.validation.required');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const tripTitle = selectedTrip
      ? lang === 'ar' ? selectedTrip.titleAr : selectedTrip.title
      : form.tripId;
    const message = buildWhatsAppMessage(form, tripTitle);
    openWhatsApp(message);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-success glass">
        <CheckCircle size={56} className="booking-success__icon" />
        <h3 className="booking-success__title">
          {lang === 'ar' ? 'تم إرسال طلبك!' : 'Booking Request Sent!'}
        </h3>
        <p className="booking-success__text">
          {t(lang, 'booking.form.success')}
        </p>
        <button className="btn btn-glass" onClick={() => setSubmitted(false)}>
          {lang === 'ar' ? 'حجز رحلة أخرى' : 'Book Another Trip'}
        </button>
      </div>
    );
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      {/* Personal Info */}
      <div className="booking-form__section">
        <h3 className="booking-form__section-title">
          {lang === 'ar' ? '👤 المعلومات الشخصية' : '👤 Personal Information'}
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

      {/* Trip Selection */}
      <div className="booking-form__section">
        <h3 className="booking-form__section-title">
          {lang === 'ar' ? '🚢 تفاصيل الرحلة' : '🚢 Trip Details'}
        </h3>
        <div className="booking-form__row">
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="glass-label" htmlFor="booking-trip">
              {t(lang, 'booking.form.trip')} *
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
                  {lang === 'ar' ? tr.titleAr : tr.title} — ${tr.price}
                </option>
              ))}
            </select>
            {errors.tripId && <span className="form-error"><AlertCircle size={12} /> {errors.tripId}</span>}
          </div>

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

          <div className="form-group">
            <label className="glass-label" htmlFor="booking-time">
              {t(lang, 'booking.form.time')}
            </label>
            <select
              id="booking-time"
              name="time"
              className="glass-input glass-select"
              value={form.time}
              onChange={handleChange}
            >
              <option value="">{t(lang, 'booking.form.selectTime')}</option>
              {selectedTrip
                ? selectedTrip.availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))
                : [
                    <option key="08:00" value="08:00 AM">08:00 AM</option>,
                    <option key="09:00" value="09:00 AM">09:00 AM</option>,
                    <option key="13:00" value="01:00 PM">01:00 PM</option>,
                  ]}
            </select>
          </div>
        </div>
      </div>

      {/* Group Size */}
      <div className="booking-form__section">
        <h3 className="booking-form__section-title">
          {lang === 'ar' ? '👥 حجم المجموعة' : '👥 Group Size'}
        </h3>
        <div className="booking-form__row">
          <div className="form-group">
            <label className="glass-label" htmlFor="booking-adults">
              {t(lang, 'booking.form.adults')}
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
              {t(lang, 'booking.form.children')}
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

      {/* Pickup & Notes */}
      <div className="booking-form__section">
        <h3 className="booking-form__section-title">
          {lang === 'ar' ? '🏨 الاصطحاب والملاحظات' : '🏨 Pickup & Notes'}
        </h3>
        <div className="form-group">
          <label className="glass-label" htmlFor="booking-hotel">
            {t(lang, 'booking.form.hotel')} *
          </label>
          <input
            id="booking-hotel"
            name="hotel"
            type="text"
            className={`glass-input ${errors.hotel ? 'error' : ''}`}
            value={form.hotel}
            onChange={handleChange}
            placeholder={lang === 'ar' ? 'اسم الفندق أو العنوان' : 'Hotel name or address'}
          />
          {errors.hotel && <span className="form-error"><AlertCircle size={12} /> {errors.hotel}</span>}
        </div>

        <div className="form-group" style={{ marginTop: 'var(--space-4)' }}>
          <label className="glass-label" htmlFor="booking-notes">
            {t(lang, 'booking.form.notes')}
          </label>
          <textarea
            id="booking-notes"
            name="notes"
            className="glass-input"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            placeholder={t(lang, 'booking.form.notesPlaceholder')}
          />
        </div>
      </div>

      {/* Price estimate */}
      {selectedTrip && (
        <div className="booking-form__estimate glass">
          <span>{lang === 'ar' ? 'التكلفة التقديرية:' : 'Estimated Total:'}</span>
          <strong className="text-gradient">
            ${(selectedTrip.price * (Number(form.adults) + Math.ceil(Number(form.children) * 0.5))).toFixed(0)} USD
          </strong>
        </div>
      )}

      <button type="submit" className="btn btn-cta booking-form__submit">
        <MessageCircle size={20} />
        {t(lang, 'booking.form.confirm')}
      </button>
    </form>
  );
};

export default BookingForm;
