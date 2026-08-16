export type Language = 'en' | 'ar';

export type TripCategory = 'all' | 'sea' | 'safari';

export interface ItineraryItem {
  time: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
}

export interface Trip {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: TripCategory;
  image: string;
  gallery: string[];
  price: number;
  currency: string;
  duration: string;
  durationAr: string;
  rating: number;
  reviewCount: number;
  pickup: string;
  pickupAr: string;
  included: string[];
  includedAr: string[];
  excluded: string[];
  excludedAr: string[];
  itinerary: ItineraryItem[];
  availableTimes: string[];
  featured: boolean;
  badge?: string;
  badgeAr?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  avatar: string;
  rating: number;
  review: string;
  reviewAr: string;
  date: string;
}

export interface BookingFormData {
  bookingType: 'trip' | 'transfer';
  fullName: string;
  phone: string;
  email: string;
  adults: number;
  children: number;
  tripId: string;
  transferPickup: string;
  transferDestination: string;
  vehicleType: 'sedan' | 'van';
  flightNumber: string;
  date: string;
  time: string;
  hotel: string;
  notes: string;
}


export interface SiteConfig {
  whatsappNumber: string;
  companyName: string;
  companyNameAr: string;
  email: string;
  phone: string;
  address: string;
  addressAr: string;
  social: {
    facebook: string;
    instagram: string;
    tripadvisor: string;
  };
  stats: {
    travelers: number;
    trips: number;
    years: number;
    support: string;
  };
}
