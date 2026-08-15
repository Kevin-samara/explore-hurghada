import type { BookingFormData } from '../types';
import siteConfig from '../config/site.config';

export function buildWhatsAppMessage(data: BookingFormData, tripTitle: string): string {
  const lines = [
    '🌊 *New Booking Request — Explore Hurghada*',
    '',
    `👤 *Name:* ${data.fullName}`,
    `📞 *Phone:* ${data.phone}`,
    `📧 *Email:* ${data.email}`,
    '',
    `🚢 *Trip:* ${tripTitle}`,
    `📅 *Date:* ${data.date}`,
    `🕐 *Time:* ${data.time}`,
    '',
    `👨‍👩‍👧 *Adults:* ${data.adults}`,
    `👶 *Children:* ${data.children}`,
    '',
    `🏨 *Hotel / Pickup:* ${data.hotel}`,
    data.notes ? `📝 *Notes:* ${data.notes}` : '',
    '',
    '_Sent via Explore Hurghada website_',
  ]
    .filter((l) => l !== null && l !== undefined)
    .join('\n');

  return lines;
}

export function openWhatsApp(message: string): void {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
}
