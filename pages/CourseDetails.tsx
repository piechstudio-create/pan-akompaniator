import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, BookOpen, CheckCircle, Lock, PlayCircle, Star } from 'lucide-react';
import { COURSES } from '../services/mockData';
import { useShop } from '../context/ShopContext';

export const CourseDetails = () => {
  const { id } = useParams();
  const { addToCart } = useShop();
  const course = COURSES.find(c => c.id === id);

  if (!course) return <div className="p-20 text-center">Kurs nie znaleziony. <Link to="/courses" className="text-accent-500">Wróć</Link></div>;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Course Hero */}
      <div className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div>
              <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">{course.level}</span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mt-2 mb-6 leading-tight">{course.title}</h1>
              <p className="text-lg text-slate-300 mb-8">{course.description}</p>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                 <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-accent-500" /> {course.totalDuration} materiału</span>
                 <span className="flex items-center"><BookOpen className="w-4 h-4 mr-2 text-accent-500" /> {course.lessonCount} lekcji</span>
                 <span className="flex items-center"><Star className="w-4 h-4 mr-2 text-accent-500" /> Certyfikat</span>
              </div>
           </div>
           
           {/* Video Placeholder */}
           <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-brand-700 group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <img src={course.image} alt="Cover" className="w-full h-full object-cover opacity-50" />
              <div className="absolute bottom-4 right-4 bg-brand-900/90 px-3 py-1 text-xs rounded text-white border border-accent-500/50">Darmowa lekcja próbna</div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content: Curriculum */}
        <div className="lg:col-span-2 space-y-12">
           
           <section>
             <h2 className="text-2xl font-bold text-brand-900 mb-6">Czego się nauczysz?</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Samodzielnego akompaniamentu', 'Budowy akordów i przewrotów', 'Rytmiki w muzyce pop', 'Współpracy z innymi muzykami'].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
             </div>
           </section>

           <section>
             <h2 className="text-2xl font-bold text-brand-900 mb-6">Program kursu</h2>
             <div className="space-y-4">
                {course.modules.map((module, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                      <h3 className="font-bold text-brand-900">Moduł {idx + 1}: {module.title}</h3>
                      <span className="text-xs text-slate-500">{module.lessons.length} lekcje</span>
                    </div>
                    <div className="divide-y divide-slate-50">
                      {module.lessons.map((lesson, lIdx) => (
                        <div key={lIdx} className="px-6 py-3 flex items-center text-sm text-slate-600 hover:bg-slate-50">
                           <PlayCircle className="w-4 h-4 mr-3 text-slate-400" />
                           {lesson}
                           <Lock className="w-3 h-3 ml-auto text-slate-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
             </div>
           </section>
        </div>

        {/* Sidebar: Pricing & CTA */}
        <div className="lg:col-span-1">
           <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 sticky top-24">
              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-slate-500 text-sm">Cena całkowita</span>
                <div className="flex items-baseline mt-1">
                   <span className="text-4xl font-bold text-brand-900">{course.price} PLN</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <button 
                  onClick={() => addToCart(course)}
                  className="w-full bg-accent-500 text-white font-bold py-4 rounded-lg hover:bg-accent-600 transition shadow-md shadow-accent-500/20"
                >
                  Dodaj do koszyka
                </button>
                <div className="text-center text-xs text-slate-500">
                  30 dni gwarancji satysfakcji
                </div>
              </div>

              <div className="space-y-3">
                 <h4 className="font-bold text-sm text-brand-900">Kurs zawiera:</h4>
                 <ul className="text-sm text-slate-600 space-y-2">
                   {course.features.map((f, i) => (
                     <li key={i} className="flex items-center">
                       <CheckCircle className="w-4 h-4 text-accent-500 mr-2" /> {f}
                     </li>
                   ))}
                 </ul>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};