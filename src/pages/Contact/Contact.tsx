import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BubbleAnimation from '../../components/BubbleAnimation/BubbleAnimation';
import siteConfig from '../../config/site.config';
import './Contact.css';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = t(lang, 'booking.form.validation.required');
    if (!form.message.trim()) errs.message = t(lang, 'booking.form.validation.required');
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = t(lang, 'booking.form.validation.email');
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    // Build WhatsApp message for contact
    const number = siteConfig.whatsappNumber.replace(/\D/g, '');
    const msg = encodeURIComponent(
      `Hello Explore Hurghada,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${number}?text=${msg}`, '_blank');
    setSent(true);
  };

  const contactItems = [
    { Icon: Phone, label: t(lang, 'contact.info.phone'), value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { Icon: Mail, label: t(lang, 'contact.info.email'), value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { Icon: MessageCircle, label: t(lang, 'contact.info.whatsapp'), value: 'WhatsApp Chat', href: `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g,'')}` },
    { Icon: MapPin, label: t(lang, 'contact.info.address'), value: lang === 'ar' ? siteConfig.addressAr : siteConfig.address, href: '#' },
  ];

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="contact-hero__overlay" />
        <BubbleAnimation />
        <div className="container contact-hero__content">
          <span className="section-tag">{t(lang, 'contact.sectionTag')}</span>
          <h1 className="contact-hero__title">{t(lang, 'contact.title')}</h1>
          <p className="contact-hero__subtitle">{t(lang, 'contact.subtitle')}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="section contact-body">
        <div className="container">
          <div className="contact-layout">
            {/* Info Cards */}
            <div className="contact-info-col">
              <SectionTitle
                tag={lang === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
                title={lang === 'ar' ? 'نحن هنا من أجلك' : "We're Here for You"}
                align="left"
              />
              <div className="contact-info-cards">
                {contactItems.map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-info-card glass"
                  >
                    <div className="glass-icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="contact-info-card__label">{label}</div>
                      <div className="contact-info-card__value">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g,'')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta contact-whatsapp-btn"
              >
                <MessageCircle size={20} />
                {lang === 'ar' ? 'تواصل عبر واتساب الآن' : 'Chat on WhatsApp Now'}
              </a>
            </div>

            {/* Form */}
            <div className="contact-form-col">
              <div className="glass-dark" style={{ borderRadius: 'var(--radius-2xl)', padding: 'var(--space-10)' }}>
                {sent ? (
                  <div className="contact-success">
                    <CheckCircle size={48} color="var(--color-bright-aqua)" />
                    <h3>{lang === 'ar' ? 'تم إرسال رسالتك!' : 'Message Sent!'}</h3>
                    <p>{t(lang, 'contact.form.success')}</p>
                    <button className="btn btn-glass" onClick={() => setSent(false)}>
                      {lang === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form" noValidate>
                    <div className="form-group">
                      <label className="glass-label" htmlFor="contact-name">
                        {t(lang, 'contact.form.name')} *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className={`glass-input ${errors.name ? 'error' : ''}`}
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>

                    <div className="contact-form__row">
                      <div className="form-group">
                        <label className="glass-label" htmlFor="contact-email">
                          {t(lang, 'contact.form.email')}
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          className={`glass-input ${errors.email ? 'error' : ''}`}
                          value={form.email}
                          onChange={handleChange}
                          dir="ltr"
                          autoComplete="email"
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>

                      <div className="form-group">
                        <label className="glass-label" htmlFor="contact-phone">
                          {t(lang, 'contact.form.phone')}
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          className="glass-input"
                          value={form.phone}
                          onChange={handleChange}
                          dir="ltr"
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="glass-label" htmlFor="contact-message">
                        {t(lang, 'contact.form.message')} *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className={`glass-input ${errors.message ? 'error' : ''}`}
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder={lang === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                      />
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>

                    <button type="submit" className="btn btn-cta" style={{ width: '100%', padding: 'var(--space-4)' }}>
                      <Send size={18} />
                      {t(lang, 'contact.form.send')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
