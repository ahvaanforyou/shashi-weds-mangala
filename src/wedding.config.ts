/**
 * =======================================================================
 * 💍 WEDDING INVITATION — MASTER CLIENT CONFIGURATION FILE
 * =======================================================================
 * Shashi Kumar & Mangala Wedding
 * 25 October 2026 · Hanuru, Karnataka
 * =======================================================================
 */

export const weddingConfig = {
  // -------------------------------------------------------------
  // 1. COUPLE & PARENTS INFORMATION
  // -------------------------------------------------------------
  couple: {
    bride: 'Mangala',
    groom: 'Shashi Kumar',
    hashtag: '#ShashiWedsMangala',

    brideRole: 'The Bride',
    brideParentsNote: 'Daughter of Smt. Lakshamamma and Sri Nanjundappa (Late).',
    bridePhoto: '/assets/bride.jpg',
    bridePhotoAlt: 'Mangala, the bride',

    groomRole: 'The Groom',
    groomParentsNote: 'Son of Smt. Jayamma and Sri Sanjeeva.',
    groomPhoto: '/assets/groom.jpg',
    groomPhotoAlt: 'Shashi Kumar, the groom',
  },

  // -------------------------------------------------------------
  // 2. DATES & CEREMONY TIME
  // -------------------------------------------------------------
  date: {
    label: 'Sunday, 25 October 2026',
    short: '25 . 10 . 2026',
    muhurtham: 'Muhurtham at 4:30 AM',
    reception: 'Reception at 11:30 AM',
  },

  // -------------------------------------------------------------
  // 3. INVITATION MESSAGE & FAMILY HOSTS
  // -------------------------------------------------------------
  invitation: {
    sanskritMantra: 'Om Sri Ganeshaya Namaha',
    invitationLine: 'With the blessings of God and our families, we cordially invite you to celebrate the wedding ceremony of Shashi & Mangala.',
    familyLine: `Smt. Lakshamamma and Sri Nanjundappa (Late)
Smt. Jayamma and Sri Sanjeeva
warmly invite you to celebrate
the auspicious union of two hearts`,
    doorsButtonText: 'Tap to open the doors',
    doorsSubText: 'Music will play softly',
  },

  // -------------------------------------------------------------
  // 4. VENUE & GOOGLE MAPS LOCATION
  // -------------------------------------------------------------
  venue: {
    name: 'Sri Bettalli Maramma convention hall',
    city: 'Hanuru, Chamarajanagar District, Karnataka',
    cityName: 'Hanuru', // Shows in "Join us in [City]"
    locationUnderMap: 'Hanuru · Chamarajanagar District · 25 . 10 . 2026', // Text displayed directly under the map frame
    description: 'Follow the auspicious path to Sri Bettalli Maramma convention hall, where our families will be waiting to welcome you.',
    
    // Direct link when clicking "Open in maps"
    mapsSearchUrl: 'https://share.google/ovKnjgmmmhavjeVuP',
    
    // Interactive Google Maps iframe URL
    mapsEmbedUrl: 'https://maps.google.com/maps?q=Sri+Bettali+Maaramma+Kalyana+Mantapa,+Hanur,+Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // -------------------------------------------------------------
  // 5. PARALLAX QUOTE BANNER
  // -------------------------------------------------------------
  banner: {
    image: '/client-images/banner.jpg',
    alt: 'Traditional wedding sacred rites',
    quote: 'Two souls, two families, united by sacred vows into an eternal journey of love and togetherness.',
  },

  // -------------------------------------------------------------
  // 6. PHOTO GALLERY
  // -------------------------------------------------------------
  gallery: [
    {
      image: '/client-images/gallery-1.jpg',
      alt: 'Sacred wedding rituals',
    },
    {
      image: '/client-images/gallery-2.jpg',
      alt: 'Family celebration and laughter',
    },
    {
      image: '/client-images/gallery-3.jpg',
      alt: 'Traditional ornaments and garlands',
    },
    {
      image: '/client-images/gallery-4.jpg',
      alt: 'Mandapam glowing at dawn',
    },
  ],

  // -------------------------------------------------------------
  // 7. OUR STORY (MILESTONES) - Empty array as Story section is removed
  // -------------------------------------------------------------
  story: [],

  // -------------------------------------------------------------
  // 8. ORDER OF CELEBRATIONS / EVENTS (EXACTLY TWO EVENTS)
  // -------------------------------------------------------------
  events: [
    {
      name: 'Muhurtham',
      day: 'Sunday, 25 October 2026',
      time: '4:30 AM',
      place: 'Sri Bettalli Maramma convention hall, Hanuru',
      note: 'Auspicious Muhurtham ceremony & sacred wedding rituals',
    },
    {
      name: 'Reception',
      day: 'Sunday, 25 October 2026',
      time: '11:30 AM',
      place: 'Sri Bettalli Maramma convention hall, Hanuru',
      note: 'Wedding reception celebrations & feast',
    },
  ],

  // -------------------------------------------------------------
  // 9. BACKGROUND MUSIC
  // -------------------------------------------------------------
  music: {
    audioUrl: '/client-images/music.mp3',
  },

  // -------------------------------------------------------------
  // 10. RSVP & DATABASE (SUPABASE & GOOGLE SHEETS)
  // -------------------------------------------------------------
  rsvp: {
    enabled: true,
    supabaseUrl: 'https://lyukxpzpcjedvrkwrcur.supabase.co',
    supabaseAnonKey: 'sb_publishable_7USKYo1sBAT7p3_kqWdrqg_RCxNm3yd',
    supabaseTable: 'rsvps',
    googleSheetWebhookUrl: 'https://script.google.com/macros/s/AKfycbwLV_52cSrJPWpsMfFJrY4xZ-3iCV8WPR5612i-v9qB_koaaX1u6QfOU3tq5fDLq1b-Mg/exec',
  },
};

// Backwards-compatible export for existing components
export const weddingData = {
  ...weddingConfig.couple,
  ...weddingConfig.date,
  dateLabel: weddingConfig.date.label,
  dateShort: weddingConfig.date.short,
  muhurtham: weddingConfig.date.muhurtham,
  reception: weddingConfig.date.reception,
  venue: weddingConfig.venue.name,
  city: weddingConfig.venue.city,
  cityName: weddingConfig.venue.cityName,
  invitationLine: weddingConfig.invitation.invitationLine,
  familyLine: weddingConfig.invitation.familyLine,
  events: weddingConfig.events,
  story: weddingConfig.story,
  banner: weddingConfig.banner,
  gallery: weddingConfig.gallery,
};

