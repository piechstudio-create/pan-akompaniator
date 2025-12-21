import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Mic, Star, ArrowRight, Heart, Music2, Smartphone } from 'lucide-react';
import { COURSES, TRACKS } from '../services/mockData';

export const Home = () => {
  const featuredCourses = COURSES.slice(0, 3);
  const featuredTracks = TRACKS.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white py-24 lg:py-32 overflow-hidden">
        {/* Abstract Gradient Background Effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-accent-500 rounded-full blur-[100px] opacity-20"></div>
           <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] bg-brand-500 rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-800 border border-brand-700 text-accent-400 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm animate-pulse">
            Dołącz do muzycznej rewolucji
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Nie śpiewaj do <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-600">
              "plastikowego" karaoke
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Tworzysz covery na TikToka? Uczysz się śpiewać? <br/>
            Zacznij korzystać z akompaniamentu, który "oddycha" razem z Tobą. Prawdziwy fortepian, prawdziwe emocje.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/tracks" className="bg-accent-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:bg-accent-600 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center border border-accent-400">
              <Play className="mr-2 h-5 w-5" /> Znajdź podkład
            </Link>
            <Link to="/courses" className="bg-transparent border border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition transform hover:-translate-y-1 flex items-center justify-center backdrop-blur-sm">
              <BookOpen className="mr-2 h-5 w-5" /> Chcę się uczyć
            </Link>
          </div>
        </div>
      </section>

      {/* Vibe Section - Who is this for? */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900">Twój głos, moje pianino</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-slate-600">To nie jest kolejny sklep z plikami MIDI. To narzędzia dla twórców.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition duration-300 group">
              <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand-900 rotate-3 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-900">Twórcy TikTok / IG</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Nagrywasz covery? Potrzebujesz podkładu, który brzmi profesjonalnie, a nie jak dzwonek z nokii. Twoje zasięgi Ci podziękują.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition duration-300 group">
              <div className="bg-accent-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-accent-600 -rotate-3 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                <Mic className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-900">Wokaliści</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Ćwiczysz w domu? Moi kursanci mówią, że z moimi podkładami śpiewa się lżej. Fortepian "czeka" na Twój oddech.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition duration-300 group">
              <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand-900 rotate-3 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                <Music2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-900">Samoucy</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Chcesz nie tylko śpiewać, ale też grać? Moje kursy są konkretne. Bez zbędnej teorii, której i tak nie użyjesz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Viral Tracks / Bestsellers */}
      <section className="py-20 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900">Hity, które znacie z rolek</h2>
            <p className="text-slate-600 mt-2 text-lg">Najczęściej wybierane podkłady w tym miesiącu</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTracks.map(track => (
              <div key={track.id} className="group bg-white p-4 rounded-xl flex items-center shadow-sm border border-slate-100 hover:border-accent-300 hover:shadow-lg transition cursor-pointer">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={track.image} alt={track.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                </div>
                <div className="ml-5 flex-grow">
                   <h4 className="font-bold text-lg text-brand-900 group-hover:text-accent-600 transition-colors">{track.title}</h4>
                   <div className="text-xs text-slate-500 flex space-x-2 mt-2">
                     <span className="bg-slate-100 px-2 py-1 rounded font-medium">{track.key}</span>
                     <span className="bg-slate-100 px-2 py-1 rounded font-medium">{track.tempo}</span>
                   </div>
                </div>
                <div className="text-right pl-4">
                   <span className="block font-bold text-xl text-brand-900 mb-2">{track.price} PLN</span>
                   <Link to={`/tracks/${track.id}`} className="inline-block text-xs bg-brand-900 text-white font-bold px-4 py-2 rounded-lg hover:bg-accent-500 hover:text-white transition">
                     Kup
                   </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <Link to="/tracks" className="inline-block bg-white border-2 border-brand-900 text-brand-900 font-bold py-3 px-8 rounded-full hover:bg-brand-900 hover:text-white transition">
               Zobacz całą bibliotekę
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900">Chcesz grać tak jak ja?</h2>
              <p className="text-slate-500 mt-2 text-lg">Konkretna wiedza, zero lania wody.</p>
            </div>
            <Link to="/courses" className="hidden md:flex items-center text-accent-600 font-bold hover:text-accent-700 transition">
              Wszystkie kursy <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <div key={course.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-accent-300 transition-all shadow-sm hover:shadow-xl hover:shadow-brand-900/10 flex flex-col">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur text-brand-900 font-bold px-3 py-1 rounded-lg text-xs shadow-sm uppercase tracking-wider">
                    {course.level}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-brand-900 mb-2 font-serif group-hover:text-accent-600 transition-colors">{course.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">{course.description}</p>
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-50">
                    <span className="text-2xl font-bold text-brand-900">{course.price} PLN</span>
                    <Link to={`/courses/${course.id}`} className="text-accent-600 font-bold text-sm hover:underline">Szczegóły</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/courses" className="inline-flex items-center text-accent-600 font-bold">
              Wszystkie kursy <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter / Lead Magnet - TikTok Style */}
      <section className="bg-brand-900 text-white py-24 relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-500 rounded-full blur-[120px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>

         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Chcesz brzmieć lepiej?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Zapisz się, a wyślę Ci moją prywatną "Checklistę Wokalisty" - czyli co zrobić przed nagraniem, żeby brzmieć PRO. <br/>
              Dodatkowo łapiesz kod <span className="text-accent-400 font-bold">-10% na start</span>.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input type="email" placeholder="Twój e-mail" className="flex-grow px-6 py-4 rounded-full text-slate-900 focus:outline-none focus:ring-4 focus:ring-accent-500/50" />
               <button type="submit" className="bg-accent-500 text-white font-bold px-10 py-4 rounded-full hover:bg-accent-600 transition shadow-lg shadow-accent-500/30">
                 Wyślij mi to!
               </button>
            </form>
            <p className="text-xs text-slate-500 mt-6 flex items-center justify-center gap-2">
              <Heart className="w-3 h-3 text-red-500 fill-current" /> Zero spamu, sama muzyka.
            </p>
         </div>
      </section>
    </div>
  );
};
