import { ProductType, TrackTempo, Track, Course } from '../types';

// Using a royalty-free sample URL for demonstration
const DEMO_AUDIO = "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg"; 
// In a real app, these would be specific URLs for each track. 
// For this demo, using a simple sound ensures the player works without CORS issues on some strict environments, 
// though typically you'd use AWS S3 or similar. Let's use a generic placeholder that works.

export const TRACKS: Track[] = [
  {
    id: 't1',
    type: ProductType.TRACK,
    title: 'All of Me - John Legend',
    slug: 'all-of-me-john-legend',
    price: 29,
    description: 'Profesjonalny podkład fortepianowy w tonacji oryginalnej. Idealny do występów ślubnych.',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop', // Piano keys close up
    category: 'Pop',
    key: 'F Major',
    tempo: TrackTempo.MEDIUM,
    duration: '4:30',
    formats: ['MP3', 'WAV'],
    demoAudioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav' // Public domain sample for testing
  },
  {
    id: 't2',
    type: ProductType.TRACK,
    title: 'Hallelujah - Leonard Cohen',
    slug: 'hallelujah-cohen',
    price: 25,
    description: 'Nastrojowy, delikatny akompaniament. Wersja koncertowa.',
    image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800&auto=format&fit=crop', // Microphone stage
    category: 'Ballada',
    key: 'C Major',
    tempo: TrackTempo.SLOW,
    duration: '3:45',
    formats: ['MP3', 'WAV'],
    demoAudioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav'
  },
  {
    id: 't3',
    type: ProductType.TRACK,
    title: 'Cicha Noc - Wersja Jazzowa',
    slug: 'cicha-noc-jazz',
    price: 19,
    description: 'Świąteczny klasyk w nowej, jazzującej aranżacji. Zaskocz swoich słuchaczy.',
    image: 'https://images.unsplash.com/photo-1543584756-8f40a802e14f?q=80&w=800&auto=format&fit=crop', // Cozy christmas music vibe
    category: 'Kolędy',
    key: 'Bb Major',
    tempo: TrackTempo.SLOW,
    duration: '3:10',
    formats: ['MP3', 'WAV'],
    demoAudioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther60.wav'
  },
  {
    id: 't4',
    type: ProductType.TRACK,
    title: 'Fly Me To The Moon',
    slug: 'fly-me-to-the-moon',
    price: 35,
    description: 'Swingujący standard jazzowy. Energetyczny i rytmiczny.',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=800&auto=format&fit=crop', // Jazz vibe / Sax
    category: 'Jazz',
    key: 'C Major',
    tempo: TrackTempo.FAST,
    duration: '2:50',
    formats: ['MP3', 'WAV'],
    demoAudioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav'
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    type: ProductType.COURSE,
    title: 'Akompaniament dla Wokalistów - Podstawy',
    slug: 'akompaniament-podstawy',
    price: 299,
    description: 'Naucz się akompaniować sobie do śpiewu w 30 dni. Kompletny kurs dla początkujących.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop', // Recording Studio
    level: 'Początkujący',
    totalDuration: '5h 30m',
    lessonCount: 24,
    features: ['Dostęp bezterminowy', 'Materiały PDF', 'Certyfikat ukończenia'],
    modules: [
      { title: 'Wstęp do akordów', lessons: ['Budowa trójdźwięków', 'Przewroty', 'Rytmika podstawowa'] },
      { title: 'Twój pierwszy utwór', lessons: ['Analiza harmoniczna', 'Dobór stylu', 'Praca z wokalem'] }
    ]
  },
  {
    id: 'c2',
    type: ProductType.COURSE,
    title: 'Improwizacja w Popie i Soul',
    slug: 'improwizacja-pop-soul',
    price: 349,
    description: 'Odkryj tajniki smacznych "fillów" i bogatej harmonii stosowanej w muzyce rozrywkowej.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1200&auto=format&fit=crop', // Live concert / creative
    level: 'Średniozaawansowany',
    totalDuration: '4h 15m',
    lessonCount: 18,
    features: ['Backing tracki do ćwiczeń', 'Analiza hitów radiowych', 'Grupa wsparcia na FB'],
    modules: [
      { title: 'Harmonia rozszerzona', lessons: ['Akordy septymowe', 'Alteracje', 'Reharmonizacja'] },
      { title: 'Techniki Soul', lessons: ['Grace notes', 'Rytmika gospel', 'Walking bass'] }
    ]
  }
];

export const BUNDLES = [
  {
    id: 'b1',
    type: ProductType.BUNDLE,
    title: 'Pakiet Ślubny Premium',
    slug: 'pakiet-slubny',
    price: 99,
    description: '5 najpiękniejszych utworów na ceremonię ślubną w niższej cenie.',
    image: 'https://images.unsplash.com/photo-1465847899078-b413929f7120?q=80&w=800&auto=format&fit=crop', // Elegant sheets / flowers
    items: ['t1', 't2'] // referencing track IDs
  }
];

export const MOCK_USER = {
  id: 'u1',
  name: 'Anna Kowalska',
  email: 'anna@example.com',
  purchasedCourseIds: ['c1'] // User owns the first course
};