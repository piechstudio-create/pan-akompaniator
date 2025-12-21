import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Pause, ShoppingCart, Music, Clock, FileAudio, Check, ArrowLeft, Volume2 } from 'lucide-react';
import { TRACKS } from '../services/mockData';
import { useShop } from '../context/ShopContext';

export const TrackDetails = () => {
  const { id } = useParams();
  const { addToCart } = useShop();
  const track = TRACKS.find(t => t.id === id);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!track) return <div className="p-20 text-center">Utwór nie znaleziony. <Link to="/tracks" className="text-accent-500">Wróć</Link></div>;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const relatedTracks = TRACKS.filter(t => t.id !== track.id && t.category === track.category).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Breadcrumb / Back */}
      <div className="bg-brand-900 text-slate-300 py-4 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Link to="/tracks" className="flex items-center hover:text-white transition text-sm">
             <ArrowLeft className="w-4 h-4 mr-2" /> Wróć do listy podkładów
           </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Visual & Player Section */}
            <div className="relative h-96 md:h-auto bg-brand-900 flex flex-col items-center justify-center p-8 text-white">
               {/* Background Image Blurred */}
               <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{ backgroundImage: `url(${track.image})` }}></div>
               
               {/* Album Art */}
               <div className="relative z-10 w-64 h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 mb-8">
                 <img src={track.image} alt={track.title} className="w-full h-full object-cover" />
               </div>

               {/* Large Player Controls */}
               <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md rounded-full p-2 flex items-center gap-4 border border-white/20">
                  <button 
                    onClick={togglePlay}
                    className="w-12 h-12 bg-accent-500 hover:bg-accent-600 rounded-full flex items-center justify-center text-white transition shadow-lg flex-shrink-0"
                  >
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                  </button>
                  
                  <div className="flex-grow">
                     <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                       <div className={`h-full bg-accent-400 w-1/3 ${isPlaying ? 'animate-pulse' : ''}`}></div>
                     </div>
                     <span className="text-xs text-slate-300 mt-1 block">Wersja demonstracyjna</span>
                  </div>

                  <div className="pr-4">
                    <Volume2 className="w-5 h-5 text-slate-300" />
                  </div>
               </div>
               
               <audio ref={audioRef} src={track.demoAudioUrl} onEnded={() => setIsPlaying(false)} />
            </div>

            {/* Product Info Section */}
            <div className="p-8 md:p-12 flex flex-col">
               <div className="mb-6">
                 <div className="flex items-center gap-2 mb-2">
                   <span className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-accent-100">
                     {track.category}
                   </span>
                   <span className="text-slate-400 text-sm">#{track.slug}</span>
                 </div>
                 <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-4">{track.title}</h1>
                 <p className="text-slate-600 leading-relaxed text-lg">{track.description}</p>
               </div>

               <div className="grid grid-cols-2 gap-4 mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <Music className="w-5 h-5 text-accent-500" />
                    <div>
                      <span className="block text-xs text-slate-500 font-bold uppercase">Tonacja</span>
                      <span className="font-medium text-brand-900">{track.key}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent-500" />
                    <div>
                      <span className="block text-xs text-slate-500 font-bold uppercase">Tempo</span>
                      <span className="font-medium text-brand-900">{track.tempo}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent-500" />
                    <div>
                      <span className="block text-xs text-slate-500 font-bold uppercase">Czas</span>
                      <span className="font-medium text-brand-900">{track.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileAudio className="w-5 h-5 text-accent-500" />
                    <div>
                      <span className="block text-xs text-slate-500 font-bold uppercase">Formaty</span>
                      <span className="font-medium text-brand-900">{track.formats.join(' + ')}</span>
                    </div>
                  </div>
               </div>

               <div className="mt-auto pt-6 border-t border-slate-100">
                 <div className="flex items-end justify-between mb-6">
                   <div>
                     <span className="text-sm text-slate-500 block">Cena za podkład</span>
                     <span className="text-4xl font-bold text-brand-900">{track.price} PLN</span>
                   </div>
                   <div className="text-right text-xs text-green-600 font-bold flex items-center">
                     <Check className="w-4 h-4 mr-1" /> Dostęp natychmiastowy
                   </div>
                 </div>
                 
                 <div className="flex gap-4">
                   <button 
                    onClick={() => addToCart(track)}
                    className="flex-grow bg-brand-900 text-white font-bold py-4 rounded-xl hover:bg-brand-800 transition flex items-center justify-center shadow-lg"
                   >
                     <ShoppingCart className="w-5 h-5 mr-2" /> Dodaj do koszyka
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Why this track? (Marketing copy placeholder) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div className="p-6">
             <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">Prawdziwy fortepian</h3>
             <p className="text-slate-600 text-sm">Nagranie zrealizowane na instrumencie akustycznym najwyższej klasy, co gwarantuje głębię brzmienia.</p>
           </div>
           <div className="p-6">
             <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">Naturalna dynamika</h3>
             <p className="text-slate-600 text-sm">Podkład "oddycha" razem z wokalistą. Zachowane rubata i naturalne zwolnienia w kadencjach.</p>
           </div>
           <div className="p-6">
             <h3 className="font-serif font-bold text-lg text-brand-900 mb-2">Bezpieczna licencja</h3>
             <p className="text-slate-600 text-sm">Możesz legalnie wykorzystać ten podkład do swoich nagrań w social media (YouTube, IG, TikTok).</p>
           </div>
        </div>

        {/* Related Products */}
        {relatedTracks.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-brand-900 mb-6">Podobne utwory</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {relatedTracks.map(rt => (
                 <Link key={rt.id} to={`/tracks/${rt.id}`} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-accent-400 transition group block">
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                      <img src={rt.image} alt={rt.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition"></div>
                    </div>
                    <h3 className="font-bold text-brand-900 truncate">{rt.title}</h3>
                    <p className="text-sm text-slate-500">{rt.price} PLN</p>
                 </Link>
               ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};