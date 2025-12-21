import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { PlayCircle, Clock, Award, Download, LogOut } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { COURSES } from '../services/mockData';

export const StudentDashboard = () => {
  const { user, logout } = useShop();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Filter courses that the user owns
  const myCourses = COURSES.filter(course => user.purchasedCourseIds.includes(course.id));

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-brand-900 text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex items-center gap-4">
               <div className="w-20 h-20 rounded-full border-2 border-accent-500 overflow-hidden">
                 <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="User" className="w-full h-full object-cover" />
               </div>
               <div>
                 <h1 className="text-2xl font-serif font-bold">Witaj, {user.name}!</h1>
                 <p className="text-slate-300">Dobrze Cię widzieć z powrotem. Gotowy do gry?</p>
               </div>
             </div>
             <button 
               onClick={logout} 
               className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold flex items-center transition"
             >
               <LogOut className="w-4 h-4 mr-2" /> Wyloguj
             </button>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 min-h-[400px]">
           <h2 className="text-xl font-bold text-brand-900 mb-6 flex items-center">
             <PlayCircle className="w-6 h-6 text-accent-500 mr-2" /> Moje Kursy
           </h2>

           {myCourses.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {myCourses.map(course => (
                 <div key={course.id} className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white flex flex-col">
                   <div className="relative h-48 overflow-hidden">
                     <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="bg-white text-brand-900 rounded-full p-3 transform scale-90 group-hover:scale-100 transition">
                         <PlayCircle className="w-8 h-8 fill-current" />
                       </button>
                     </div>
                     {/* Progress Bar Mock */}
                     <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
                       <div className="h-full bg-accent-500 w-[45%]"></div>
                     </div>
                   </div>
                   
                   <div className="p-5 flex-grow flex flex-col">
                     <h3 className="font-bold text-brand-900 mb-2 leading-tight">{course.title}</h3>
                     <p className="text-xs text-slate-500 mb-4">{course.lessonCount} lekcji • {course.level}</p>
                     
                     <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-xs font-bold text-accent-600">Ukończono 45%</span>
                        <button className="text-sm font-bold text-brand-900 hover:text-accent-500">Kontynuuj &rarr;</button>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           ) : (
             <div className="text-center py-12">
               <p className="text-slate-500 mb-4">Nie posiadasz jeszcze żadnych kursów.</p>
               <Link to="/courses" className="inline-block bg-accent-500 text-white font-bold px-6 py-2 rounded hover:bg-accent-600 transition">
                 Przeglądaj ofertę
               </Link>
             </div>
           )}

           <div className="mt-12 pt-12 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-900 mb-4 flex items-center">
                  <Download className="w-5 h-5 text-accent-500 mr-2" /> Ostatnio zakupione pliki
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-brand-100 text-brand-900 flex items-center justify-center rounded mr-3 text-xs font-bold">MP3</div>
                      <span className="text-sm font-medium text-slate-700">All of Me - Podkład.mp3</span>
                    </div>
                    <button className="text-xs text-accent-600 font-bold hover:underline">Pobierz</button>
                  </div>
                   <div className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-brand-100 text-brand-900 flex items-center justify-center rounded mr-3 text-xs font-bold">PDF</div>
                      <span className="text-sm font-medium text-slate-700">Checklista Wokalisty.pdf</span>
                    </div>
                    <button className="text-xs text-accent-600 font-bold hover:underline">Pobierz</button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-brand-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 text-accent-500 mr-2" /> Twoje Certyfikaty
                </h3>
                 <div className="p-6 bg-slate-50 border border-slate-100 rounded text-center text-slate-500 text-sm">
                   Ukończ kurs, aby odblokować certyfikat.
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};