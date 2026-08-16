import type { Language } from '../types';

type TranslationValue = string | string[] | Record<string, string>[];

interface TranslationDict {
  [key: string]: TranslationValue | TranslationDict;
}

const translations: Record<Language, TranslationDict> = {
  en: {
    nav: {
      home: 'Home',
      trips: 'Trips',
      about: 'About',
      contact: 'Contact',
      bookNow: 'Book Now',
    },
    hero: {
      title: 'Discover the Red Sea Adventures',
      subtitle: 'in Hurghada',
      description:
        'Explore crystal-clear waters, coral reefs, desert adventures and unforgettable experiences in Hurghada.',
      ctaPrimary: 'Book Your Adventure',
      ctaSecondary: 'Explore Trips',
    },
    featured: {
      sectionTag: 'Top Rated',
      title: 'Featured Adventures',
      subtitle: 'Handpicked experiences that showcase the best of Hurghada and the Red Sea',
      viewAll: 'View All Trips',
    },
    trips: {
      sectionTag: 'All Trips',
      title: 'Explore Our Adventures',
      subtitle: 'From snorkeling to desert safaris — unforgettable experiences await',
      filters: {
        all: 'All',
        sea: 'Sea Activities',
        safari: 'Desert & Safari',
      },

      noResults: 'No trips found for this category.',
      from: 'From',
      perPerson: 'per person',
      duration: 'Duration',
      rating: 'Rating',
      bookNow: 'Book Now',
      viewDetails: 'View Details',
    },
    why: {
      sectionTag: 'Why Us',
      title: 'Why Choose Us?',
      subtitle: 'We are committed to delivering exceptional experiences in the Red Sea',
      items: [
        {
          title: 'Professional Guides',
          description: 'Certified, experienced guides who know every corner of the Red Sea.',
        },
        {
          title: 'Best Prices',
          description: 'Competitive prices with no hidden fees. Best value guaranteed.',
        },
        {
          title: 'Safe & Reliable',
          description: 'Your safety is our top priority. All equipment meets international standards.',
        },
        {
          title: 'Hotel Pickup',
          description: 'Free hotel pickup and drop-off included with every tour.',
        },
        {
          title: 'Flexible Booking',
          description: 'Easy booking, free cancellation, and 24/7 customer support.',
        },
        {
          title: 'Unforgettable Memories',
          description: 'We craft experiences that you will treasure for a lifetime.',
        },
      ],
    },
    about: {
      sectionTag: 'About Us',
      title: 'Your Gateway to the Red Sea',
      subtitle:
        'Explore Hurghada has been creating unforgettable adventures for travelers from around the world since our founding. We specialize in sea trips, snorkeling, diving, boat tours, desert safaris, and private excursions.',
      description:
        "We are a team of passionate locals who love Hurghada and the Red Sea. Our mission is to share its beauty with every visitor, ensuring safe, authentic, and extraordinary experiences. From sunrise fishing to private yacht charters, we offer something for every traveler.",
      stats: {
        travelers: 'Happy Travelers',
        trips: 'Amazing Trips',
        years: 'Years Experience',
        support: 'Customer Support',
      },
    },
    gallery: {
      sectionTag: 'Gallery',
      title: 'Moments from the Red Sea',
      subtitle: 'A glimpse of the unforgettable experiences waiting for you in Hurghada',
    },
    testimonials: {
      sectionTag: 'Reviews',
      title: 'What Our Guests Say',
      subtitle: 'Real experiences from real travelers',
    },
    contact: {
      sectionTag: 'Contact',
      title: 'Get in Touch',
      subtitle: "Have a question or need a custom tour? We're here to help.",
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        send: 'Send Message',
        success: "Thank you! We'll get back to you shortly.",
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        whatsapp: 'WhatsApp',
        address: 'Address',
      },
    },
    booking: {
      sectionTag: 'Book',
      title: 'Book Your Adventure',
      subtitle: 'Fill in the details below and we will confirm your booking via WhatsApp',
      form: {
        fullName: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        adults: 'Number of Adults',
        children: 'Number of Children',
        trip: 'Select a Trip',
        selectTrip: 'Choose a trip...',
        date: 'Preferred Date',
        time: 'Preferred Time',
        selectTime: 'Choose a time...',
        hotel: 'Hotel / Pickup Location',
        notes: 'Additional Notes',
        notesPlaceholder: 'Any special requests or information...',
        confirm: 'Confirm via WhatsApp',
        success: 'Thank you! Your booking request has been sent via WhatsApp.',
        validation: {
          required: 'This field is required.',
          email: 'Please enter a valid email address.',
          phone: 'Please enter a valid phone number.',
        },
      },
    },
    tourDetails: {
      included: "What's Included",
      excluded: "What's Not Included",
      itinerary: 'Trip Itinerary',
      pickup: 'Pickup Info',
      availableTimes: 'Available Times',
      bookNow: 'Book This Trip',
      gallery: 'Gallery',
      reviews: 'Reviews',
      duration: 'Duration',
      rating: 'Rating',
      price: 'Price',
      from: 'From',
      perPerson: 'per person',
      backToTrips: 'Back to Trips',
    },
    footer: {
      tagline: 'Your gateway to the Red Sea. Unforgettable adventures await in Hurghada.',
      trips: 'Our Trips',
      contact: 'Contact Us',
      rights: 'All rights reserved.',
      madeWith: 'Made with ❤️ in Hurghada',
    },
    language: {
      en: 'English',
      ar: 'العربية',
    },
    common: {
      loading: 'Loading...',
      error: 'Something went wrong.',
      close: 'Close',
      readMore: 'Read More',
      learnMore: 'Learn More',
      usd: 'USD',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      trips: 'الرحلات',
      about: 'من نحن',
      contact: 'اتصل بنا',
      bookNow: 'احجز الآن',
    },
    hero: {
      title: 'اكتشف مغامرات البحر الأحمر',
      subtitle: 'في الغردقة',
      description:
        'استمتع بأجمل الرحلات البحرية والمغامرات الصحراوية في الغردقة مع تجارب لا تُنسى.',
      ctaPrimary: 'احجز رحلتك الآن',
      ctaSecondary: 'اكتشف الرحلات',
    },
    featured: {
      sectionTag: 'الأعلى تقييماً',
      title: 'أشهر الرحلات',
      subtitle: 'تجارب مختارة بعناية تعرض أفضل ما تقدمه الغردقة والبحر الأحمر',
      viewAll: 'عرض جميع الرحلات',
    },
    trips: {
      sectionTag: 'جميع الرحلات',
      title: 'استكشف مغامراتنا',
      subtitle: 'من السنوركلينج إلى سفاري الصحراء — تجارب لا تُنسى في انتظارك',
      filters: {
        all: 'الكل',
        sea: 'الأنشطة البحرية',
        safari: 'الصحراء والسفاري',
      },

      noResults: 'لا توجد رحلات في هذه الفئة.',
      from: 'يبدأ من',
      perPerson: 'للشخص',
      duration: 'المدة',
      rating: 'التقييم',
      bookNow: 'احجز الآن',
      viewDetails: 'عرض التفاصيل',
    },
    why: {
      sectionTag: 'لماذا نحن',
      title: 'لماذا تختارنا؟',
      subtitle: 'نحن ملتزمون بتقديم تجارب استثنائية في البحر الأحمر',
      items: [
        {
          title: 'مرشدون محترفون',
          description: 'مرشدون معتمدون وذوو خبرة يعرفون كل زاوية في البحر الأحمر.',
        },
        {
          title: 'أفضل الأسعار',
          description: 'أسعار تنافسية دون رسوم مخفية. أفضل قيمة مضمونة.',
        },
        {
          title: 'آمن وموثوق',
          description: 'سلامتك هي أولويتنا القصوى. جميع المعدات تلبي المعايير الدولية.',
        },
        {
          title: 'اصطحاب من الفندق',
          description: 'الاصطحاب المجاني من وإلى الفندق مشمول مع كل جولة.',
        },
        {
          title: 'حجز مرن',
          description: 'حجز سهل وإلغاء مجاني ودعم عملاء على مدار الساعة.',
        },
        {
          title: 'ذكريات لا تُنسى',
          description: 'نصنع تجارب ستحتفظ بها في قلبك مدى الحياة.',
        },
      ],
    },
    about: {
      sectionTag: 'من نحن',
      title: 'بوابتك إلى البحر الأحمر',
      subtitle:
        'تعمل استكشف الغردقة على تقديم مغامرات لا تُنسى للمسافرين من جميع أنحاء العالم منذ تأسيسها. نتخصص في رحلات البحر والسنوركلينج والغطس وجولات القوارب وسفاري الصحراء والرحلات الخاصة.',
      description:
        'نحن فريق من السكان المحليين الشغوفين الذين يعشقون الغردقة والبحر الأحمر. مهمتنا هي مشاركة جمالها مع كل زائر لضمان تجارب آمنة وأصيلة ومتميزة.',
      stats: {
        travelers: 'مسافر سعيد',
        trips: 'رحلة مميزة',
        years: 'سنوات خبرة',
        support: 'دعم عملاء',
      },
    },
    gallery: {
      sectionTag: 'المعرض',
      title: 'لحظات من البحر الأحمر',
      subtitle: 'لمحة من التجارب التي تنتظرك في الغردقة',
    },
    testimonials: {
      sectionTag: 'التقييمات',
      title: 'ماذا يقول ضيوفنا',
      subtitle: 'تجارب حقيقية من مسافرين حقيقيين',
    },
    contact: {
      sectionTag: 'اتصل بنا',
      title: 'تواصل معنا',
      subtitle: 'هل لديك سؤال أو تحتاج جولة مخصصة؟ نحن هنا للمساعدة.',
      form: {
        name: 'اسمك الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        success: 'شكراً لك! سنرد عليك قريباً.',
      },
      info: {
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        whatsapp: 'واتساب',
        address: 'العنوان',
      },
    },
    booking: {
      sectionTag: 'حجز',
      title: 'احجز مغامرتك',
      subtitle: 'أدخل التفاصيل أدناه وسنؤكد حجزك عبر واتساب',
      form: {
        fullName: 'الاسم الكامل',
        phone: 'رقم الهاتف',
        email: 'البريد الإلكتروني',
        adults: 'عدد البالغين',
        children: 'عدد الأطفال',
        trip: 'اختر رحلة',
        selectTrip: 'اختر رحلة...',
        date: 'التاريخ المفضل',
        time: 'الوقت المفضل',
        selectTime: 'اختر وقتاً...',
        hotel: 'الفندق / موقع الاصطحاب',
        notes: 'ملاحظات إضافية',
        notesPlaceholder: 'أي طلبات خاصة أو معلومات إضافية...',
        confirm: 'تأكيد عبر واتساب',
        success: 'شكراً لك! تم إرسال طلب الحجز عبر واتساب.',
        validation: {
          required: 'هذا الحقل مطلوب.',
          email: 'يرجى إدخال بريد إلكتروني صحيح.',
          phone: 'يرجى إدخال رقم هاتف صحيح.',
        },
      },
    },
    tourDetails: {
      included: 'ما هو مشمول',
      excluded: 'ما هو غير مشمول',
      itinerary: 'برنامج الرحلة',
      pickup: 'معلومات الاصطحاب',
      availableTimes: 'الأوقات المتاحة',
      bookNow: 'احجز هذه الرحلة',
      gallery: 'المعرض',
      reviews: 'التقييمات',
      duration: 'المدة',
      rating: 'التقييم',
      price: 'السعر',
      from: 'يبدأ من',
      perPerson: 'للشخص',
      backToTrips: 'العودة إلى الرحلات',
    },
    footer: {
      tagline: 'بوابتك إلى البحر الأحمر. مغامرات لا تُنسى في انتظارك في الغردقة.',
      trips: 'رحلاتنا',
      contact: 'اتصل بنا',
      rights: 'جميع الحقوق محفوظة.',
      madeWith: 'صُنع بـ ❤️ في الغردقة',
    },
    language: {
      en: 'English',
      ar: 'العربية',
    },
    common: {
      loading: 'جار التحميل...',
      error: 'حدث خطأ ما.',
      close: 'إغلاق',
      readMore: 'اقرأ المزيد',
      learnMore: 'اعرف المزيد',
      usd: 'دولار',
    },
  },
};

export type TranslationPath = string;

export function t(lang: Language, path: string): string {
  const keys = path.split('.');
  let result: TranslationValue | TranslationDict = translations[lang];
  for (const key of keys) {
    if (typeof result === 'object' && !Array.isArray(result)) {
      result = (result as TranslationDict)[key];
    } else {
      return path;
    }
  }
  return typeof result === 'string' ? result : path;
}

export function tArr(lang: Language, path: string): string[] {
  const keys = path.split('.');
  let result: TranslationValue | TranslationDict = translations[lang];
  for (const key of keys) {
    if (typeof result === 'object' && !Array.isArray(result)) {
      result = (result as TranslationDict)[key];
    } else if (Array.isArray(result)) {
      break;
    } else {
      return [];
    }
  }
  if (Array.isArray(result)) return result as string[];
  return [];
}

export function tObj<T>(lang: Language, path: string): T {
  const keys = path.split('.');
  let result: TranslationValue | TranslationDict = translations[lang];
  for (const key of keys) {
    if (typeof result === 'object' && !Array.isArray(result)) {
      result = (result as TranslationDict)[key];
    } else {
      return {} as T;
    }
  }
  return result as T;
}

export default translations;
