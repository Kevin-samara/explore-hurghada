import type { Trip } from '../types';

const imagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`;
export const trips: Trip[] = [
  // ─────────────────────────────────────────
  // 1. Boat Trips
  // ─────────────────────────────────────────
  {
    id: 'boat-trips',
    title: 'Boat Trips',
    titleAr: 'رحلات بحرية بالقارب',
    description:
      'Discover the beauty of the Red Sea with unforgettable boat excursions to the best destinations around Hurghada. Swim, snorkel, relax and enjoy the crystal-clear turquoise waters.',
    descriptionAr:
      'اكتشف جمال البحر الأحمر مع رحلات بحرية لا تُنسى إلى أفضل الوجهات حول الغردقة. اسبح وتمتع بالسنوركلينج والاسترخاء في المياه الفيروزية الصافية.',
    category: 'sea',
image: imagePath('images/trips/boat-trips.jpg'),
    gallery: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
      'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1200&q=80',
    ],
    price: 40,
    currency: 'USD',
    duration: '8 Hours',
    durationAr: '٨ ساعات',
    rating: 4.9,
    reviewCount: 312,
    pickup: 'Hotel pickup included',
    pickupAr: 'الاصطحاب من الفندق مشمول',
    included: [
      'Hotel pickup & drop-off',
      'Full-day boat cruise',
      'Snorkeling equipment',
      'BBQ lunch & soft drinks',
      'Professional guide',
      'Life jackets',
    ],
    includedAr: [
      'الاصطحاب من وإلى الفندق',
      'رحلة بحرية ليوم كامل',
      'معدات سنوركلينج',
      'غداء شواء ومشروبات',
      'مرشد محترف',
      'سترات نجاة',
    ],
    excluded: ['Alcoholic beverages', 'Personal expenses', 'Tips (optional)'],
    excludedAr: ['المشروبات الكحولية', 'المصاريف الشخصية', 'البقشيش (اختياري)'],
    itinerary: [
      { time: '08:30', title: 'Hotel Pickup', titleAr: 'الاصطحاب من الفندق', description: 'Comfortable transfer to the marina.', descriptionAr: 'انتقال مريح إلى الميناء.' },
      { time: '09:30', title: 'Boat Departure', titleAr: 'انطلاق القارب', description: 'Set sail toward the coral reef islands.', descriptionAr: 'الإبحار نحو جزر الشعاب المرجانية.' },
      { time: '10:30', title: 'Snorkeling & Swimming', titleAr: 'سنوركلينج وسباحة', description: 'Explore vibrant coral reefs with marine life.', descriptionAr: 'استكشاف الشعاب المرجانية الحية.' },
      { time: '13:00', title: 'BBQ Lunch on Board', titleAr: 'غداء شواء على متن القارب', description: 'Enjoy a delicious BBQ lunch with soft drinks.', descriptionAr: 'غداء شواء شهي مع المشروبات.' },
      { time: '15:00', title: 'Second Snorkeling Stop', titleAr: 'توقف السنوركلينج الثاني', description: 'Visit a second reef with different marine species.', descriptionAr: 'زيارة شعاب مرجانية ثانية.' },
      { time: '17:00', title: 'Return to Hotel', titleAr: 'العودة إلى الفندق', description: 'Transfer back to your hotel.', descriptionAr: 'العودة إلى فندقك.' },
    ],
    availableTimes: ['08:30 AM'],
    featured: true,
    badge: 'Best Seller',
    badgeAr: 'الأكثر مبيعاً',
  },

  // ─────────────────────────────────────────
  // 2. Snorkeling Tours
  // ─────────────────────────────────────────
  {
    id: 'snorkeling-tours',
    title: 'Snorkeling Tours',
    titleAr: 'جولات سنوركلينج',
    description:
      'Explore vibrant coral reefs and marine life with guided snorkeling experiences for all skill levels. Discover a stunning underwater world in the warm Red Sea waters around Hurghada.',
    descriptionAr:
      'استكشف الشعاب المرجانية الحية والحياة البحرية مع تجارب سنوركلينج موجَّهة لجميع المستويات. اكتشف عالماً تحت الماء مذهلاً في مياه البحر الأحمر الدافئة.',
    category: 'sea',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
      'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=1200&q=80',
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=80',
    ],
    price: 35,
    currency: 'USD',
    duration: '6 Hours',
    durationAr: '٦ ساعات',
    rating: 4.9,
    reviewCount: 428,
    pickup: 'Hotel pickup included',
    pickupAr: 'الاصطحاب من الفندق مشمول',
    included: [
      'Hotel pickup & drop-off',
      'Snorkeling equipment',
      'Life jacket',
      'Professional guide',
      'Light lunch & beverages',
      'Underwater photos',
    ],
    includedAr: [
      'الاصطحاب من وإلى الفندق',
      'معدات السنوركلينج',
      'سترة نجاة',
      'مرشد محترف',
      'وجبة خفيفة ومشروبات',
      'صور تحت الماء',
    ],
    excluded: ['Personal expenses', 'Travel insurance', 'Tips (optional)'],
    excludedAr: ['المصاريف الشخصية', 'تأمين السفر', 'البقشيش (اختياري)'],
    itinerary: [
      { time: '08:00', title: 'Hotel Pickup', titleAr: 'الاصطحاب من الفندق', description: 'Pickup from your hotel lobby.', descriptionAr: 'الاصطحاب من لوبي فندقك.' },
      { time: '09:00', title: 'Boat Departure', titleAr: 'انطلاق القارب', description: 'Head to the best snorkeling reefs.', descriptionAr: 'التوجه نحو أفضل الشعاب المرجانية للسنوركلينج.' },
      { time: '09:30', title: 'First Reef — Erg Abu Ramada', titleAr: 'أول شعاب — إرج أبو رمادة', description: 'Swim among colorful fish and stunning corals.', descriptionAr: 'السباحة بين الأسماك الملونة والشعاب الرائعة.' },
      { time: '11:30', title: 'Lunch Break', titleAr: 'استراحة الغداء', description: 'Relax on board with a light lunch.', descriptionAr: 'الاسترخاء على متن القارب مع وجبة خفيفة.' },
      { time: '13:00', title: 'Second Reef', titleAr: 'الشعاب الثانية', description: 'Explore a second vibrant reef zone.', descriptionAr: 'استكشاف منطقة شعاب ثانية حية.' },
      { time: '14:30', title: 'Return to Hotel', titleAr: 'العودة إلى الفندق', description: 'Return trip and hotel drop-off.', descriptionAr: 'رحلة العودة والتوصيل إلى الفندق.' },
    ],
    availableTimes: ['08:00 AM', '09:00 AM'],
    featured: true,
    badge: 'Top Rated',
    badgeAr: 'الأعلى تقييماً',
  },

  // ─────────────────────────────────────────
  // 3. Dolphin House Excursions
  // ─────────────────────────────────────────
  {
    id: 'dolphin-house',
    title: 'Dolphin House Excursion',
    titleAr: 'رحلة بيت الدولفين',
    description:
      'Enjoy a unique adventure to Dolphin House and experience the chance to see dolphins in their natural habitat. Snorkel alongside spinner dolphins in one of the most magical spots in the Red Sea.',
    descriptionAr:
      'استمتع بمغامرة فريدة إلى بيت الدولفين وتجربة رؤية الدلافين في موطنها الطبيعي. تسبح جانب دلافين سبينر في أحد أكثر الأماكن سحراً في البحر الأحمر.',
    category: 'sea',
image: imagePath('images/trips/dolphin-house.jpg'),
    gallery: [
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
    ],
    price: 45,
    currency: 'USD',
    duration: '7 Hours',
    durationAr: '٧ ساعات',
    rating: 4.9,
    reviewCount: 387,
    pickup: 'Hotel pickup included',
    pickupAr: 'الاصطحاب من الفندق مشمول',
    included: [
      'Hotel pickup & drop-off',
      'Snorkeling equipment',
      'Life jacket',
      'Guided dolphin watching',
      'Lunch & beverages',
    ],
    includedAr: [
      'الاصطحاب من وإلى الفندق',
      'معدات سنوركلينج',
      'سترة نجاة',
      'مشاهدة الدلافين بإرشاد',
      'غداء ومشروبات',
    ],
    excluded: ['Personal expenses', 'Tips (optional)'],
    excludedAr: ['المصاريف الشخصية', 'البقشيش (اختياري)'],
    itinerary: [
      { time: '07:30', title: 'Hotel Pickup', titleAr: 'الاصطحاب من الفندق', description: 'Early pickup for the best dolphin experience.', descriptionAr: 'اصطحاب مبكر لأفضل تجربة مع الدلافين.' },
      { time: '08:30', title: 'Arrive at Dolphin House', titleAr: 'الوصول إلى بيت الدولفين', description: 'Anchor near the famous spinner dolphin bay.', descriptionAr: 'الرسو بالقرب من خليج دلافين السبينر الشهير.' },
      { time: '09:00', title: 'Dolphin Watching & Snorkeling', titleAr: 'مشاهدة الدلافين والسنوركلينج', description: 'Swim and snorkel alongside wild dolphins.', descriptionAr: 'السباحة والسنوركلينج جانب الدلافين البرية.' },
      { time: '12:00', title: 'Lunch on Board', titleAr: 'الغداء على متن القارب', description: 'Enjoy a fresh lunch with stunning sea views.', descriptionAr: 'استمتع بغداء طازج مع مناظر البحر الخلابة.' },
      { time: '13:30', title: 'Second Snorkeling Spot', titleAr: 'توقف السنوركلينج الثاني', description: 'Visit another vibrant reef on the way back.', descriptionAr: 'زيارة شعاب مرجانية أخرى في طريق العودة.' },
      { time: '15:30', title: 'Return to Hotel', titleAr: 'العودة إلى الفندق', description: 'Return to the marina and hotel transfer.', descriptionAr: 'العودة إلى الميناء والفندق.' },
    ],
    availableTimes: ['07:30 AM'],
    featured: true,
    badge: 'Unique',
    badgeAr: 'فريد',
  },

  // ─────────────────────────────────────────
  // 4. Desert Safari
  // ─────────────────────────────────────────
  {
    id: 'desert-safari',
    title: 'Desert Safari',
    titleAr: 'سفاري صحراوي',
    description:
      'Experience the Egyptian desert with quad biking, camel rides, Bedouin culture, and stunning sunset views. An unforgettable evening adventure in the golden desert surrounding Hurghada.',
    descriptionAr:
      'عش تجربة الصحراء المصرية مع ركوب الدراجات الرباعية والجمال والثقافة البدوية ومناظر الغروب الرائعة. مغامرة مسائية لا تُنسى في الصحراء الذهبية حول الغردقة.',
    category: 'safari',
image: imagePath('images/trips/desert-safari.jpg'),
    gallery: [
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
      'https://images.unsplash.com/photo-1561101143-1b6f2a4e1f34?w=1200&q=80',
    ],
    price: 40,
    currency: 'USD',
    duration: '5 Hours',
    durationAr: '٥ ساعات',
    rating: 4.8,
    reviewCount: 263,
    pickup: 'Hotel pickup included',
    pickupAr: 'الاصطحاب من الفندق مشمول',
    included: [
      'Hotel pickup & drop-off',
      'Quad bike ride (30 min)',
      'Camel ride',
      'Bedouin village visit',
      'Traditional dinner',
      'Stargazing experience',
    ],
    includedAr: [
      'الاصطحاب من وإلى الفندق',
      'ركوب دراجة رباعية (30 دقيقة)',
      'ركوب الجمال',
      'زيارة قرية بدوية',
      'عشاء تقليدي',
      'مشاهدة النجوم',
    ],
    excluded: ['Personal expenses', 'Tips (optional)', 'Alcoholic beverages'],
    excludedAr: ['المصاريف الشخصية', 'البقشيش (اختياري)', 'المشروبات الكحولية'],
    itinerary: [
      { time: '15:00', title: 'Hotel Pickup', titleAr: 'الاصطحاب من الفندق', description: 'Pickup and drive to the desert.', descriptionAr: 'الاصطحاب والتوجه إلى الصحراء.' },
      { time: '16:00', title: 'Quad Biking', titleAr: 'ركوب الدراجات الرباعية', description: 'Thrilling ride through golden desert dunes.', descriptionAr: 'رحلة مثيرة عبر الكثبان الذهبية.' },
      { time: '17:00', title: 'Camel Ride & Sunset', titleAr: 'ركوب الجمال والغروب', description: 'Ride a camel and watch the magical desert sunset.', descriptionAr: 'ركوب الجمل ومشاهدة غروب الصحراء.' },
      { time: '18:00', title: 'Bedouin Village', titleAr: 'القرية البدوية', description: 'Explore authentic Bedouin culture and traditions.', descriptionAr: 'استكشاف الثقافة البدوية الأصيلة.' },
      { time: '19:00', title: 'Traditional Dinner & Stars', titleAr: 'العشاء التقليدي والنجوم', description: 'Dinner under a sky full of stars.', descriptionAr: 'عشاء تحت سماء مليئة بالنجوم.' },
      { time: '20:30', title: 'Return to Hotel', titleAr: 'العودة إلى الفندق', description: 'Transfer back to your hotel.', descriptionAr: 'العودة إلى فندقك.' },
    ],
    availableTimes: ['03:00 PM'],
    featured: true,
    badge: 'Exciting',
    badgeAr: 'مثير',
  },

  // ─────────────────────────────────────────
  // 5. Cairo & Pyramids Day Trip
  // ─────────────────────────────────────────
  {
    id: 'cairo-pyramids-day-trip',
    title: 'Cairo & Pyramids Day Trip',
    titleAr: 'رحلة القاهرة والأهرامات',
    description:
      'Embark on a breathtaking day trip from Hurghada to Cairo. Visit the legendary Giza Pyramids, the Great Sphinx, the Egyptian Museum, and Khan El-Khalili bazaar with an expert Egyptologist guide.',
    descriptionAr:
      'انطلق في رحلة يوم مذهلة من الغردقة إلى القاهرة. زُر أهرامات الجيزة الأسطورية، وأبو الهول العظيم، والمتحف المصري، وسوق خان الخليلي برفقة مرشد خبير في المصريات.',
    category: 'safari',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=1200&q=80',
      'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80',
      'https://images.unsplash.com/photo-1539667099972-0d6e1b284b00?w=1200&q=80',
    ],
    price: 95,
    currency: 'USD',
    duration: '16 Hours',
    durationAr: '١٦ ساعة',
    rating: 4.9,
    reviewCount: 489,
    pickup: 'Hotel pickup included',
    pickupAr: 'الاصطحاب من الفندق مشمول',
    included: [
      'Hotel pickup & drop-off',
      'Air-conditioned private transfer',
      'Professional Egyptologist guide',
      'Entrance fees to Giza Pyramids & Sphinx',
      'Egyptian Museum entrance tickets',
      'Delicious buffet lunch at a Nile view restaurant',
      'Bottled water & soft drinks',
    ],
    includedAr: [
      'الاصطحاب من وإلى الفندق',
      'وسيلة نقل خاصة ومكيفة',
      'مرشد متخصص في علم المصريات',
      'رسوم دخول أهرامات الجيزة وأبو الهول',
      'تذاكر دخول المتحف المصري',
      'غداء بوفيه شهي بمطعم يطل على النيل',
      'مياه ومشروبات غازية',
    ],
    excluded: [
      'Inside Pyramids chamber ticket (optional)',
      'Nile felucca boat ride (optional)',
      'Personal shopping & souvenirs',
      'Gratuities (optional)',
    ],
    excludedAr: [
      'تذكرة دخول داخل حجرة الهرم (اختياري)',
      'ركوب الفلوكة في نهر النيل (اختياري)',
      'المشتريات الشخصية والهدايا',
      'الإكرامية (اختياري)',
    ],
    itinerary: [
      { time: '02:00', title: 'Hotel Pickup', titleAr: 'الاصطحاب من الفندق', description: 'Early morning pickup from your hotel for the drive to Cairo.', descriptionAr: 'اصطحاب مبكر من فندقك للقيادة إلى القاهرة.' },
      { time: '08:30', title: 'Egyptian Museum', titleAr: 'المتحف المصري', description: 'Explore Tutankhamun treasures and ancient artifacts with your guide.', descriptionAr: 'استكشاف كنوز توت عنخ آمون والآثار القديمة مع مرشدك.' },
      { time: '12:00', title: 'Nile View Lunch', titleAr: 'الغداء بإطلالة النيل', description: 'Enjoy a tasty Egyptian buffet lunch near the Nile River.', descriptionAr: 'استمتع بغداء بوفيه مصري شهي بالقرب من نهر النيل.' },
      { time: '13:30', title: 'Giza Pyramids & Sphinx', titleAr: 'أهرامات الجيزة وأبو الهول', description: 'Marvel at Khufu, Khafre, Menkaure pyramids and the Sphinx.', descriptionAr: 'الانبهاء بأهرامات خوفو وخفرع ومنقرع وأبو الهول العظيم.' },
      { time: '16:00', title: 'Khan El-Khalili Bazaar', titleAr: 'سوق خان الخليلي', description: 'Stroll through the historic atmospheric market for souvenirs.', descriptionAr: 'التجول في السوق التاريخي الأجواء للهدايا التذكارية.' },
      { time: '17:30', title: 'Return Journey', titleAr: 'رحلة العودة', description: 'Comfortable transfer back to Hurghada hotel.', descriptionAr: 'انتقال مريح عودةً إلى فندقك بالغردقة.' },
    ],
    availableTimes: ['02:00 AM'],
    featured: true,
    badge: 'Bucket List',
    badgeAr: 'رحلة العمر',
  },


  // ─────────────────────────────────────────
  // 6. Saint Anthony & Saint Paul Monasteries
  // ─────────────────────────────────────────
  {
    id: 'saint-anthony-paul-monasteries',
    title: 'Saint Anthony & Saint Paul Monasteries',
    titleAr: 'دير سانت أنتوني وسانت بول',
    description:
      "Discover two of the oldest Christian monasteries in the world. Explore their rich history, stunning architecture, and peaceful desert surroundings. A deeply spiritual and historically rich day trip.",
    descriptionAr:
      'اكتشف اثنين من أقدم الأديرة المسيحية في العالم. استكشف تاريخهم الغني ومعمارهم المذهل ومحيطهم الصحراوي الهادئ في رحلة يوم غنية روحياً وتاريخياً.',
    category: 'safari',
image: imagePath('images/trips/saint-anthony-paul.jpg'),
    gallery: [
      'https://images.unsplash.com/photo-1539667099972-0d6e1b284b00?w=1200&q=80',
      'https://images.unsplash.com/photo-1519817650390-64a993880e64?w=1200&q=80',
    ],
    price: 55,
    currency: 'USD',
    duration: '10 Hours',
    durationAr: '١٠ ساعات',
    rating: 4.8,
    reviewCount: 134,
    pickup: 'Hotel pickup included',
    pickupAr: 'الاصطحاب من الفندق مشمول',
    included: [
      'Hotel pickup & drop-off',
      'A/C private vehicle',
      'Professional guide',
      'Entrance fees',
      'Water & light snacks',
    ],
    includedAr: [
      'الاصطحاب من وإلى الفندق',
      'مركبة خاصة مكيفة',
      'مرشد محترف',
      'رسوم الدخول',
      'مياه ووجبات خفيفة',
    ],
    excluded: ['Lunch (available at local restaurants)', 'Personal expenses', 'Tips (optional)'],
    excludedAr: ['الغداء (متاح في المطاعم المحلية)', 'المصاريف الشخصية', 'البقشيش (اختياري)'],
    itinerary: [
      { time: '07:00', title: 'Hotel Pickup', titleAr: 'الاصطحاب من الفندق', description: 'Early departure from your hotel.', descriptionAr: 'المغادرة المبكرة من فندقك.' },
      { time: '09:00', title: 'Saint Anthony Monastery', titleAr: 'دير سانت أنتوني', description: 'Explore the oldest monastery in Egypt, founded in 361 AD.', descriptionAr: 'استكشاف أقدم دير في مصر، تأسس عام 361 م.' },
      { time: '11:30', title: 'Drive to Saint Paul', titleAr: 'القيادة إلى سانت بول', description: 'Scenic mountain road to the second monastery.', descriptionAr: 'طريق جبلي خلاب إلى الدير الثاني.' },
      { time: '12:30', title: 'Saint Paul Monastery', titleAr: 'دير سانت بول', description: 'Visit the monastery of the first hermit in Christian history.', descriptionAr: 'زيارة دير أول ناسك في التاريخ المسيحي.' },
      { time: '15:00', title: 'Return Journey', titleAr: 'رحلة العودة', description: 'Head back to Hurghada.', descriptionAr: 'العودة إلى الغردقة.' },
      { time: '17:00', title: 'Arrive at Hotel', titleAr: 'الوصول إلى الفندق', description: 'Drop-off at your hotel.', descriptionAr: 'التوصيل إلى فندقك.' },
    ],
    availableTimes: ['07:00 AM'],
    featured: false,
    badge: 'Historical',
    badgeAr: 'تاريخي',
  },

  // ─────────────────────────────────────────
  // 7. Horse Riding Experience
  // ─────────────────────────────────────────
  {
    id: 'horse-riding',
    title: 'Horse Riding Experience',
    titleAr: 'تجربة ركوب الخيل',
    description:
      'Enjoy an unforgettable horseback riding adventure along the beach or through the desert while taking in the breathtaking landscapes of Hurghada. Suitable for beginners and experienced riders.',
    descriptionAr:
      'استمتع بمغامرة ركوب الخيل على طول الشاطئ أو عبر الصحراء مع مناظر الغردقة الخلابة. مناسب للمبتدئين والفرسان ذوي الخبرة.',
    category: 'safari',
image: imagePath('images/trips/horse-riding.jpg'),
    gallery: [
      'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80',
    ],
    price: 30,
    currency: 'USD',
    duration: '1.5 Hours',
    durationAr: 'ساعة ونصف',
    rating: 4.7,
    reviewCount: 189,
    pickup: 'Hotel pickup available',
    pickupAr: 'الاصطحاب من الفندق متاح',
    included: [
      'Hotel pickup & drop-off',
      'Horse riding session',
      'Safety helmet',
      'Professional trainer',
      'Water',
    ],
    includedAr: [
      'الاصطحاب من وإلى الفندق',
      'جلسة ركوب الخيل',
      'خوذة سلامة',
      'مدرب محترف',
      'مياه',
    ],
    excluded: ['Personal expenses', 'Tips (optional)', 'Photography (optional cost)'],
    excludedAr: ['المصاريف الشخصية', 'البقشيش (اختياري)', 'التصوير (تكلفة اختيارية)'],
    itinerary: [
      { time: 'Flexible', title: 'Hotel Pickup', titleAr: 'الاصطحاب من الفندق', description: 'Transfer to the stables.', descriptionAr: 'الانتقال إلى الإسطبل.' },
      { time: '+30 min', title: 'Safety Briefing', titleAr: 'إحاطة السلامة', description: 'Meet your horse and learn the basics.', descriptionAr: 'تعرف على حصانك وتعلم الأساسيات.' },
      { time: '+1 hour', title: 'Beach & Desert Ride', titleAr: 'ركوب الشاطئ والصحراء', description: 'Scenic horseback ride through beach and desert terrain.', descriptionAr: 'ركوب خيل عبر الشاطئ والصحراء.' },
    ],
    availableTimes: ['09:00 AM', '04:00 PM'],
    featured: false,
    badge: 'Adventure',
    badgeAr: 'مغامرة',
  },

  // ─────────────────────────────────────────
  // 8. Luxor Overday Trip
  // ─────────────────────────────────────────
  {
    id: 'luxor-day-trip',
    title: 'Luxor Overday Trip',
    titleAr: 'رحلة يوم إلى الأقصر',
    description:
      'Travel back in time and explore the wonders of ancient Egypt, including magnificent temples, royal tombs, and iconic historical landmarks in Luxor — the world\'s greatest open-air museum.',
    descriptionAr:
      'سافر عبر الزمن واستكشف عجائب مصر القديمة بما فيها المعابد الرائعة والمقابر الملكية والمعالم التاريخية في الأقصر — أعظم متحف مفتوح في العالم.',
    category: 'safari',
image: imagePath('images/trips/luxor-day-trip.jpg'),
    gallery: [
      'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80',
      'https://images.unsplash.com/photo-1539667099972-0d6e1b284b00?w=1200&q=80',
    ],
    price: 85,
    currency: 'USD',
    duration: '14 Hours',
    durationAr: '١٤ ساعة',
    rating: 4.9,
    reviewCount: 217,
    pickup: 'Hotel pickup included',
    pickupAr: 'الاصطحاب من الفندق مشمول',
    included: [
      'Hotel pickup & drop-off',
      'A/C private vehicle',
      'Professional Egyptologist guide',
      'Entrance fees to all sites',
      'Lunch at a local restaurant',
      'Water & soft drinks',
    ],
    includedAr: [
      'الاصطحاب من وإلى الفندق',
      'مركبة خاصة مكيفة',
      'مرشد متخصص في المصريات',
      'رسوم دخول جميع المواقع',
      'غداء في مطعم محلي',
      'مياه ومشروبات غازية',
    ],
    excluded: ['Tipping (optional)', 'Personal shopping', 'Optional horse carriage at Karnak'],
    excludedAr: ['البقشيش (اختياري)', 'التسوق الشخصي', 'عربة الخيل الاختيارية في الكرنك'],
    itinerary: [
      { time: '04:00', title: 'Hotel Pickup', titleAr: 'الاصطحاب من الفندق', description: 'Very early departure for the 3-hour drive to Luxor.', descriptionAr: 'المغادرة المبكرة جداً لرحلة 3 ساعات إلى الأقصر.' },
      { time: '07:30', title: 'Valley of the Kings', titleAr: 'وادي الملوك', description: 'Explore the royal tombs of ancient pharaohs.', descriptionAr: 'استكشاف مقابر الفراعنة القديمة.' },
      { time: '09:30', title: 'Hatshepsut Temple', titleAr: 'معبد حتشبسوت', description: 'Visit the magnificent temple of Queen Hatshepsut.', descriptionAr: 'زيارة المعبد الرائع للملكة حتشبسوت.' },
      { time: '11:00', title: 'Colossi of Memnon', titleAr: 'تمثالا ممنون', description: 'Photo stop at the iconic giant statues.', descriptionAr: 'توقف للتصوير عند التمثالين العملاقين.' },
      { time: '12:30', title: 'Lunch', titleAr: 'الغداء', description: 'Traditional Egyptian lunch at a local restaurant.', descriptionAr: 'غداء مصري تقليدي في مطعم محلي.' },
      { time: '14:00', title: 'Karnak Temple', titleAr: 'معبد الكرنك', description: 'Explore the largest ancient religious site in the world.', descriptionAr: 'استكشاف أكبر موقع ديني قديم في العالم.' },
      { time: '16:00', title: 'Luxor Temple', titleAr: 'معبد الأقصر', description: 'Visit the stunning Luxor Temple on the Nile banks.', descriptionAr: 'زيارة معبد الأقصر على ضفاف النيل.' },
      { time: '17:30', title: 'Return to Hurghada', titleAr: 'العودة إلى الغردقة', description: 'Drive back and arrive at your hotel around 8:30 PM.', descriptionAr: 'العودة إلى الغردقة والوصول إلى الفندق حوالي 8:30 مساءً.' },
    ],
    availableTimes: ['04:00 AM'],
    featured: true,
    badge: 'Must See',
    badgeAr: 'لا يُفوَّت',
  },

  // ─────────────────────────────────────────
  // 9. Sea Scope Hurghada
  // ─────────────────────────────────────────
  {
    id: 'sea-scope',
    title: 'Sea Scope Hurghada',
    titleAr: 'سي سكوب الغردقة',
    description:
      'Experience the underwater beauty of the Red Sea without getting wet through panoramic underwater viewing decks and incredible marine life encounters. Perfect for all ages — no swimming required.',
    descriptionAr:
      'تجربة جمال البحر الأحمر تحت الماء دون ابتلال من خلال أسطح المشاهدة البانورامية تحت الماء. مثالي لجميع الأعمار — لا يلزم السباحة.',
    category: 'sea',
image: imagePath('images/trips/sea-scope.jpg'),
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1200&q=80',
    ],
    price: 30,
    currency: 'USD',
    duration: '3 Hours',
    durationAr: '٣ ساعات',
    rating: 4.7,
    reviewCount: 234,
    pickup: 'Hotel pickup included',
    pickupAr: 'الاصطحاب من الفندق مشمول',
    included: [
      'Hotel pickup & drop-off',
      'Sea Scope ticket',
      'Guided underwater tour',
      'Water & soft drinks',
    ],
    includedAr: [
      'الاصطحاب من وإلى الفندق',
      'تذكرة سي سكوب',
      'جولة تحت الماء بإرشاد',
      'مياه ومشروبات غازية',
    ],
    excluded: ['Personal expenses', 'Meals', 'Tips (optional)'],
    excludedAr: ['المصاريف الشخصية', 'الوجبات', 'البقشيش (اختياري)'],
    itinerary: [
      { time: '09:00', title: 'Hotel Pickup', titleAr: 'الاصطحاب من الفندق', description: 'Transfer to the marina.', descriptionAr: 'الانتقال إلى الميناء.' },
      { time: '10:00', title: 'Board the Sea Scope', titleAr: 'الصعود على متن سي سكوب', description: 'Step into the panoramic underwater vessel.', descriptionAr: 'الدخول إلى السفينة ذات المشاهدة البانورامية.' },
      { time: '10:30', title: 'Underwater Viewing', titleAr: 'المشاهدة تحت الماء', description: 'Marvel at corals and marine life through wide glass panels.', descriptionAr: 'إبهار الشعاب المرجانية والحياة البحرية من خلال النوافذ الزجاجية.' },
      { time: '12:00', title: 'Return to Hotel', titleAr: 'العودة إلى الفندق', description: 'Transfer back to your hotel.', descriptionAr: 'العودة إلى فندقك.' },
    ],
    availableTimes: ['09:00 AM', '02:00 PM'],
    featured: false,
    badge: 'No Swimming',
    badgeAr: 'بدون سباحة',
  },

  // ─────────────────────────────────────────
  // 10. Orange Island Excursion
  // ─────────────────────────────────────────
  {
    id: 'orange-island',
    title: 'Orange Island Excursion',
    titleAr: 'رحلة الجزيرة البرتقالية',
    description:
      'Relax on pristine white-sand beaches, swim in crystal-clear waters, and enjoy one of the most popular island destinations in the Red Sea. A perfect full-day escape from the city.',
    descriptionAr:
      'استرخِ على شواطئ رملية بيضاء بكر، واسبح في مياه صافية كالكريستال، واستمتع بإحدى أشهر وجهات الجزر في البحر الأحمر. هروب مثالي ليوم كامل من المدينة.',
    category: 'sea',
image: imagePath('images/trips/orange-island.jpg'),
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
      'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1200&q=80',
    ],
    price: 35,
    currency: 'USD',
    duration: '7 Hours',
    durationAr: '٧ ساعات',
    rating: 4.8,
    reviewCount: 301,
    pickup: 'Hotel pickup included',
    pickupAr: 'الاصطحاب من الفندق مشمول',
    included: [
      'Hotel pickup & drop-off',
      'Boat transfer to Orange Island',
      'Snorkeling equipment',
      'Lunch & beverages',
      'Beach access & sunbed',
    ],
    includedAr: [
      'الاصطحاب من وإلى الفندق',
      'نقل بالقارب إلى الجزيرة البرتقالية',
      'معدات سنوركلينج',
      'غداء ومشروبات',
      'الوصول إلى الشاطئ وكرسي شمس',
    ],
    excluded: ['Personal expenses', 'Alcoholic beverages', 'Tips (optional)'],
    excludedAr: ['المصاريف الشخصية', 'المشروبات الكحولية', 'البقشيش (اختياري)'],
    itinerary: [
      { time: '09:00', title: 'Hotel Pickup', titleAr: 'الاصطحاب من الفندق', description: 'Transfer to the marina.', descriptionAr: 'الانتقال إلى الميناء.' },
      { time: '10:00', title: 'Boat to Orange Island', titleAr: 'القارب إلى الجزيرة البرتقالية', description: 'Short boat ride to the stunning island.', descriptionAr: 'رحلة قارب قصيرة إلى الجزيرة المذهلة.' },
      { time: '10:30', title: 'Beach, Swimming & Snorkeling', titleAr: 'الشاطئ والسباحة والسنوركلينج', description: 'Relax on the beach and explore the reef.', descriptionAr: 'الاسترخاء على الشاطئ واستكشاف الشعاب.' },
      { time: '13:00', title: 'Lunch', titleAr: 'الغداء', description: 'Delicious lunch with sea views.', descriptionAr: 'غداء شهي مع مناظر البحر.' },
      { time: '14:30', title: 'Free Time on the Island', titleAr: 'وقت حر على الجزيرة', description: 'More swimming, sunbathing, or exploring.', descriptionAr: 'المزيد من السباحة والاستجمام أو الاستكشاف.' },
      { time: '16:30', title: 'Return to Hotel', titleAr: 'العودة إلى الفندق', description: 'Boat back and hotel transfer.', descriptionAr: 'العودة بالقارب وانتقال إلى الفندق.' },
    ],
    availableTimes: ['09:00 AM'],
    featured: true,
    badge: 'Popular',
    badgeAr: 'شائع',
  },

  // ─────────────────────────────────────────
  // 11. Makadi Water World
  // ─────────────────────────────────────────
  {
    id: 'makadi-water-world',
    title: 'Makadi Water World',
    titleAr: 'ماكادي ووتر وورلد',
    description:
      "Spend a fun-filled day at one of Egypt's largest water parks, featuring exciting slides, wave pools, and attractions for all ages. A perfect family day out in Hurghada.",
    descriptionAr:
      'أمضِ يوماً ممتعاً في أحد أكبر الملاهي المائية في مصر، مع أحواض الأمواج والشرائح المثيرة والألعاب لجميع الأعمار. يوم عائلي مثالي في الغردقة.',
    category: 'sea',
image: imagePath('images/trips/makadi-water-world.jpg'),
    gallery: [
      'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=1200&q=80',
      'https://images.unsplash.com/photo-1578762560042-46ad127c95ea?w=1200&q=80',
    ],
    price: 50,
    currency: 'USD',
    duration: '8 Hours',
    durationAr: '٨ ساعات',
    rating: 4.7,
    reviewCount: 278,
    pickup: 'Hotel pickup included',
    pickupAr: 'الاصطحاب من الفندق مشمول',
    included: [
      'Hotel pickup & drop-off',
      'Full-day water park entry',
      'All slides & attractions',
      'Buffet lunch',
      'Locker access',
    ],
    includedAr: [
      'الاصطحاب من وإلى الفندق',
      'دخول ليوم كامل للملهى المائي',
      'جميع الشرائح والألعاب',
      'غداء بوفيه',
      'استخدام الخزانة',
    ],
    excluded: ['Personal shopping', 'Alcoholic beverages', 'Tips (optional)'],
    excludedAr: ['التسوق الشخصي', 'المشروبات الكحولية', 'البقشيش (اختياري)'],
    itinerary: [
      { time: '09:00', title: 'Hotel Pickup', titleAr: 'الاصطحاب من الفندق', description: 'Transfer to Makadi Water World.', descriptionAr: 'الانتقال إلى ماكادي ووتر وورلد.' },
      { time: '10:00', title: 'Water Park Opens', titleAr: 'افتتاح الملهى المائي', description: 'Full access to all rides and pools.', descriptionAr: 'وصول كامل لجميع الألعاب والأحواض.' },
      { time: '13:00', title: 'Buffet Lunch', titleAr: 'غداء بوفيه', description: 'Delicious buffet included in the package.', descriptionAr: 'بوفيه شهي مشمول في الحزمة.' },
      { time: '14:00', title: 'Afternoon Fun', titleAr: 'متعة بعد الظهر', description: 'Continue enjoying all the park attractions.', descriptionAr: 'الاستمتاع بجميع ألعاب الحديقة.' },
      { time: '17:00', title: 'Return to Hotel', titleAr: 'العودة إلى الفندق', description: 'Transfer back to your hotel.', descriptionAr: 'العودة إلى فندقك.' },
    ],
    availableTimes: ['09:00 AM'],
    featured: false,
    badge: 'Family Fun',
    badgeAr: 'متعة عائلية',
  },
];

export const featuredTrips = trips.filter((t) => t.featured);
