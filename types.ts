export enum ProductType {
  TRACK = 'TRACK',
  COURSE = 'COURSE',
  BUNDLE = 'BUNDLE'
}

export enum TrackTempo {
  SLOW = 'Slow',
  MEDIUM = 'Medium',
  FAST = 'Fast'
}

export interface Product {
  id: string;
  title: string;
  type: ProductType;
  price: number;
  description: string;
  image: string;
  category?: string; // e.g., Pop, Jazz, Christmas
  slug: string;
}

export interface Track extends Product {
  key: string;
  tempo: TrackTempo;
  duration: string;
  demoAudioUrl?: string;
  formats: string[]; // ['MP3', 'WAV']
}

export interface CourseModule {
  title: string;
  lessons: string[];
}

export interface Course extends Product {
  level: string; // Basic, Intermediate, Advanced
  totalDuration: string;
  lessonCount: number;
  modules: CourseModule[];
  features: string[]; // e.g. "Certyfikat", "Materiały PDF"
}

export interface CartItem {
  product: Product | Track | Course;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  purchasedCourseIds: string[];
}