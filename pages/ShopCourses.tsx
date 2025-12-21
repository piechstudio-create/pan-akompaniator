'use client';

import { useEffect, useState } from 'react';

interface Course {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  acf?: {
    price?: string;
    duration?: string;
    level?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export default function ShopCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        const response = await fetch('https://panakompaniator.pl/wp-json/wp/v2/courses?_embed');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched courses:', data);
        setCourses(data);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Nie udało się pobrać kursów');
      } finally {
        setLoading(false);
      }
    }
    
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="shop-courses">
        <div className="container">
          <h1>Kursy</h1>
          <p>Ładowanie kursów...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop-courses">
        <div className="container">
          <h1>Kursy</h1>
          <p className="error">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-courses">
      <div className="container">
        <h1>Kursy Online</h1>
        <p className="subtitle">Rozwiń swoje umiejętności z naszymi kursami akompaniamentu</p>
        
        {courses.length === 0 ? (
          <p>Brak dostępnych kursów.</p>
        ) : (
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card" style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px'
              }}>
                {course._embedded?.['wp:featuredmedia']?.[0] && (
                  <img 
                    src={course._embedded['wp:featuredmedia'][0].source_url} 
                    alt={course._embedded['wp:featuredmedia'][0].alt_text || course.title.rendered}
                    className="course-image"
                    style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                  />
                )}
                <div className="course-content">
                  <h2 dangerouslySetInnerHTML={{ __html: course.title.rendered }} />
                  <div 
                    className="course-excerpt" 
                    dangerouslySetInnerHTML={{ __html: course.excerpt.rendered }} 
                  />
                  {course.acf?.price && (
                    <p className="course-price"><strong>{course.acf.price} PLN</strong></p>
                  )}
                  {course.acf?.duration && (
                    <p className="course-duration">Czas trwania: {course.acf.duration}</p>
                  )}
                  {course.acf?.level && (
                    <p className="course-level">Poziom: {course.acf.level}</p>
                  )}
                  <button 
                    className="btn-primary" 
                    style={{
                      backgroundColor: '#0070f3',
                      color: 'white',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginTop: '10px'
                    }}
                  >
                    Zobacz szczegóły
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
