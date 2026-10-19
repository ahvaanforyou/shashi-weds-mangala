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
    bridePhoto: '/assets/bride.jpg?v=2',
    bridePhotoAlt: 'Mangala, the bride',

    groomRole: 'The Groom',
    groomParentsNote: 'Son of Smt. Jayamma and Sri Sanjeeva.',
    groomPhoto: '/assets/groom.jpg?v=2',
    groomPhotoAlt: 'Shashi Kumar, the groom',
  },

  // -------------------------------------------------------------
  // 2. DATES & CEREMONY TIME
  // -------------------------------------------------------------
  date: {
    label: 'Sunday, 25 October 2026',
    short: '25 . 10 . 2026',
    stambaMuhurta: 'Stamba Muhurta on 24 Oct (7:30 AM – 9:00 AM)',
    muhurtham: 'Muhurtham at 4:30 AM',
    reception: 'Reception at 9:00 AM',
    targetCountdownDate: '2026-10-25T09:00:00+05:30',
  },

  // -------------------------------------------------------------
  // 3. INVITATION MESSAGE & FAMILY HOSTS
  // -------------------------------------------------------------
  invitation: {
    sanskritMantra: 'Om Sri Ganeshaya Namaha',
    invitationLine: 'With the blessings of God and our families, we cordially invite you to celebrate the wedding ceremony of Shashi & Mangala.',
    familyLine: `Smt. Jayamma and Sri Sanjeeva
Smt. Lakshamamma and Sri Nanjundappa (Late)
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
    locationUnderMap: 'Hanuru · Chamarajanagar District · 24 & 25 . 10 . 2026', // Text displayed directly under the map frame
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
      alt: 'Shashi & Mangala',
      caption: 'Together in Love',
    },
    {
      image: '/client-images/gallery-2.jpg',
      alt: 'Cherished Celebrations',
      caption: 'Joyful Moments',
    },
  ],

  // -------------------------------------------------------------
  // 7. OUR STORY (MILESTONES) - Empty array as Story section is removed
  // -------------------------------------------------------------
  story: [],

  // -------------------------------------------------------------
  // 8. ORDER OF CELEBRATIONS / EVENTS
  // -------------------------------------------------------------
  events: [
    {
      name: 'Stamba Muhurta',
      day: 'Saturday, 24 October 2026',
      time: '7:30 AM – 9:00 AM',
      place: 'Sri Bettalli Maramma convention hall, Hanuru',
      note: 'Traditional Stamba Muhurta & sacred pre-wedding rituals',
    },
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
      time: '9:00 AM',
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
    googleSheetWebhookUrl: 'https://script.google.com/macros/s/AKfycbw2LwR9N5EFtWVOEdLVpDP5Y6H4Oba2FvWCghXqZqui_tbJmqSScPRtED7aLOgDwKXB/exec',
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

