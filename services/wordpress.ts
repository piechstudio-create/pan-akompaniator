// WordPress REST API Service
const WP_API_BASE = process.env.NEXT_PUBLIC_WP_API_URL || 'https://panakompaniator.pl/wp-json';

export interface Course {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  acf?: {
    price?: string;
    duration?: string;
    level?: string;
    instructor?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface Track {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  acf?: {
    price?: string;
    audio_preview?: string;
    category?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

// Fetch all courses
export async function getCourses(): Promise<Course[]> {
  try {
    const response = await fetch(`${WP_API_BASE}/wp/v2/courses?_embed`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
}

// Fetch single course by ID
export async function getCourse(id: number): Promise<Course | null> {
  try {
    const response = await fetch(`${WP_API_BASE}/wp/v2/courses/${id}?_embed`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching course ${id}:`, error);
    return null;
  }
}

// Fetch all tracks
export async function getTracks(): Promise<Track[]> {
  try {
    const response = await fetch(`${WP_API_BASE}/wp/v2/tracks?_embed`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching tracks:', error);
    return [];
  }
}

// Fetch single track by ID
export async function getTrack(id: number): Promise<Track | null> {
  try {
    const response = await fetch(`${WP_API_BASE}/wp/v2/tracks/${id}?_embed`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching track ${id}:`, error);
    return null;
  }
}
