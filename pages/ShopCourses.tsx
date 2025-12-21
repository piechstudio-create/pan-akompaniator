import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Check, Zap } from 'lucide-react';
import { COURSES } from '../services/mockData';

export const ShopCourses = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl font-serif font-bold mb-4">Akademia Akompaniamentu</h1>
           <p className="text-slate-300 max-w-2xl mx-auto text-lg">
             Przestań zgadywać, zacznij grać. Konkretna wiedza, którą od razu przełożysz na klawisze.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES.map(course => (
            <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group hover:border-accent-200 transition transform hover:-translate-y-1 duration-300">
              <div className="relative h-64">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-brand-900/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide mb-2 inline-flex items-center">
                    <Zap className="w-3 h-3 mr-1 fill-current" /> {course.level}
                  </span>
                  <h2 className="text-2xl font-bold font-serif leading-tight pr-4">{course.title}</h2>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                 <div className="flex items-center space-x-6 text-sm text-slate-500 mb-6 font-medium">
                    <div className="flex items-center"><Clock className="h-4 w-4 mr-1 text-accent-500" /> {course.totalDuration} konkretu</div>
                    <div className="flex items-center"><BookOpen className="h-4 w-4 mr-1 text-accent-500" /> {course.lessonCount} lekcji</div>
                 </div>
                 
                 <p className="text-slate-600 mb-6 text-lg leading-relaxed">{course.description}</p>
                 
                 <div className="space-y-3 mb-8 bg-slate-50 p-4 rounded-lg">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-700">
                        <Check className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" /> {feature}
                      </div>
                    ))}
                 </div>

                 <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                    <div>
                      <span className="text-3xl font-bold text-brand-900">{course.price} PLN</span>
                      <span className="block text-xs text-slate-400 font-medium">Dostęp dożywotni</span>
                    </div>
                    <Link 
                      to={`/courses/${course.id}`}
                      className="bg-brand-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-500 transition shadow-md hover:shadow-lg"
                    >
                      Sprawdź szczegóły
                    </Link>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};