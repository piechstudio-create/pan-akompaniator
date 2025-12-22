import Link from 'next/link';
import { Play, BookOpen, Mic, Music2, Smartphone, Star } from 'lucide-react';
import { COURSES, TRACKS } from '@/services/mockData';

export default function Home() {
  const featuredTracks = TRACKS.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[100px] opacity-10"></div>
           <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] bg-accent-500 rounded-full blur-[120px] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-800 border border-gold-500/30 text-gold-400 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
            Premium Piano Accompaniment
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Twój głos zasługuje na <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300">
              prawdziwe emocje
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
            Zapomnij o sztucznym karaoke. Wybierz akompaniament, który żyje, oddycha i reaguje na Twoją interpretację.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tracks" className="bg-accent-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-accent-600 transition-all transform hover:-translate-y-1 flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" /> Znajdź podkład
            </Link>
            <Link href="/courses" className="bg-transparent border border-gold-500 text-gold-500 font-bold py-4 px-8 rounded-full hover:bg-gold-500/10 transition transform hover:-translate-y-1 flex items-center justify-center backdrop-blur-sm">
              <BookOpen className="mr-2 h-5 w-5" /> Chcę się uczyć
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2 font-serif font-bold text-xl text-brand-900"><Music2 /> Akustyczne brzmienie</div>
             <div className="flex items-center gap-2 font-serif font-bold text-xl text-brand-900"><Smartphone /> Gotowe na TikTok</div>
             <div className="flex items-center gap-2 font-serif font-bold text-xl text-brand-900"><Star /> Jakość Premium</div>
          </div>
        </div>
      </section>

      {/* Featured Tracks */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900">Najchętniej śpiewane</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTracks.map(track => (
              <div key={track.id} className="group bg-white rounded-2xl p-4 flex items-center shadow-sm border border-slate-200 hover:border-gold-300 transition duration-300">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={track.image} alt={track.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-brand-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
                <div className="ml-6 flex-grow">
                   <h4 className="font-bold text-brand-900 text-lg">{track.title}</h4>
                   <p className="text-slate-500 text-sm">{track.category} • {track.key}</p>
                </div>
                <div className="text-right">
                   <div className="font-bold text-brand-900 text-lg mb-2">{track.price} PLN</div>
                   <Link href={`/track/${track.id}`} className="text-xs bg-brand-900 text-white font-bold px-4 py-2 rounded-lg hover:bg-gold-500 transition">
                     Sprawdź
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}