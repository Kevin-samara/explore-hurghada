import type { BookingFormData } from '../types';
import siteConfig from '../config/site.config';

// Unicode escape constants to prevent encoding corruption across OS & bundlers
const EMOJI = {
  WAVE: '\u{1F30A}',
  PERSON: '\u{1F464}',
  PHONE: '\u{1F4DE}',
  EMAIL: '\u{1F4E7}',
  SHIP: '\u{1F6A2}',
  CALENDAR: '\u{1F4C5}',
  CLOCK: '\u{1F550}',
  FAMILY: '\u{1F468}\u200D\u{1F469}\u200D\u{1F467}',
  BABY: '\u{1F476}',
  HOTEL: '\u{1F3E8}',
  CAR_ONCOMING: '\u{1F698}',
  PIN: '\u{1F4CD}',
  FLAG: '\u{1F3C1}',
  CAR: '\u{1F697}',
  PLANE: '\u{2708}\u{FE0F}',
  MEMO: '\u{1F4DD}',
};

export function buildWhatsAppMessage(
  data: BookingFormData,
  tripOrTransferTitle: string,
  extraDetails?: { pickupLabel?: string; destLabel?: string; vehicleLabel?: string }
): string {
  const isTransfer = data.bookingType === 'transfer';

  const header = isTransfer
    ? `${EMOJI.CAR_ONCOMING} *New Transfer Request — Explore Hurghada*`
    : `${EMOJI.WAVE} *New Booking Request — Explore Hurghada*`;

  const contactSection = [
    `${EMOJI.PERSON} *Name:* ${data.fullName}`,
    `${EMOJI.PHONE} *Phone:* ${data.phone}`,
    `${EMOJI.EMAIL} *Email:* ${data.email || 'N/A'}`,
  ].join('\n');

  const mainSection = isTransfer
    ? [
        `${EMOJI.PIN} *Pick-up Location:* ${extraDetails?.pickupLabel || data.transferPickup}`,
        `${EMOJI.FLAG} *Destination:* ${extraDetails?.destLabel || data.transferDestination}`,
        `${EMOJI.CAR} *Vehicle Type:* ${extraDetails?.vehicleLabel || (data.vehicleType === 'van' ? 'VIP Minivan (4-8 Passengers)' : 'Private Sedan (1-3 Passengers)')}`,
        data.flightNumber ? `${EMOJI.PLANE} *Flight #:* ${data.flightNumber}` : null,
        `${EMOJI.CALENDAR} *Date:* ${data.date}`,
        `${EMOJI.CLOCK} *Time:* ${data.time || 'Not Specified'}`,
      ]
        .filter(Boolean)
        .join('\n')
    : [
        `${EMOJI.SHIP} *Trip:* ${tripOrTransferTitle}`,
        `${EMOJI.CALENDAR} *Date:* ${data.date}`,
        `${EMOJI.CLOCK} *Time:* ${data.time || 'Not Specified'}`,
      ].join('\n');

  const groupSection = !isTransfer
    ? [
        `${EMOJI.FAMILY} *Adults:* ${data.adults}`,
        `${EMOJI.BABY} *Children:* ${data.children}`,
      ].join('\n')
    : null;

  const locationNotesSection = [
    `${EMOJI.HOTEL} *Hotel / Pickup:* ${data.hotel}`,
    data.notes ? `${EMOJI.MEMO} *Notes:* ${data.notes}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const footer = '_Sent via Explore Hurghada website_';

  const sections = [
    header,
    contactSection,
    mainSection,
    groupSection,
    locationNotesSection,
  ].filter(Boolean);

  return `${sections.join('\n\n')}\n\n\n${footer}`;
}

export function openWhatsApp(message: string): void {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
}
