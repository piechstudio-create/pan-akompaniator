import { useEffect, useState } from 'react';
import { getCourses, Course } from '../services/wordpress';

export default function ShopCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        const data = await getCourses();
        setCourses(data);
      } catch (err) {
        setError('Nie udało się pobrać kursów');
        console.error(err);
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
              <div key={course.id} className="course-card">
                {course._embedded?.['wp:featuredmedia']?.[0] && (
                  <img 
                    src={course._embedded['wp:featuredmedia'][0].source_url} 
                    alt={course._embedded['wp:featuredmedia'][0].alt_text || course.title.rendered}
                    className="course-image"
                  />
                )}
                <div className="course-content">
                  <h2 dangerouslySetInnerHTML={{ __html: course.title.rendered }} />
                  <div 
                    className="course-excerpt" 
                    dangerouslySetInnerHTML={{ __html: course.excerpt.rendered }} 
                  />
                  {course.acf?.price && (
                    <p className="course-price">{course.acf.price} PLN</p>
                  )}
                  {course.acf?.duration && (
                    <p className="course-duration">Czas trwania: {course.acf.duration}</p>
                  )}
                  {course.acf?.level && (
                    <p className="course-level">Poziom: {course.acf.level}</p>
                  )}
                  <button className="btn-primary">
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
