import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Music, Play, Pause, Square, Volume2, ShoppingCart, Star } from 'lucide-react';
import { TRACKS, BUNDLES } from '../services/mockData';
import { useShop } from '../context/ShopContext';
import { ProductType } from '../types';

export const ShopTracks = () => {
  const { addToCart } = useShop();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [selectedTempo, setSelectedTempo] = useState<string>('All');
  
  // Audio Player State
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const genres = ['All', ...Array.from(new Set(TRACKS.map(t => t.category || 'Other')))];
  
  const filteredTracks = TRACKS.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || track.category === selectedGenre;
    const matchesTempo = selectedTempo === 'All' || track.tempo === selectedTempo;
    return matchesSearch && matchesGenre && matchesTempo;
  });

  // Handle Audio Logic
  useEffect(() => {
    if (activeTrackId && audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [activeTrackId, isPlaying, volume]);

  const handlePlayClick = (trackId: string, demoUrl?: string) => {
    if (activeTrackId === trackId) {
      // Toggle play/pause
      setIsPlaying(!isPlaying);
    } else {
      // New track
      setActiveTrackId(trackId);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = demoUrl || '';
        audioRef.current.load();
      }
    }
  };

  const handleStopClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
    setActiveTrackId(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hidden Global Audio Element */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />

      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl font-serif font-bold text-brand-900 mb-4">Podkłady Fortepianowe</h1>
           <p className="text-slate-600 max-w-2xl">
             Najwyższej jakości akompaniamenty nagrane na fortepianie akustycznym. Idealne do ćwiczeń, nagrań demo i występów.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 sticky top-24">
             <div className="mb-6">
                <label className="block text-sm font-bold text-slate-900 mb-2">Szukaj</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input 
                    type="text" 
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500" 
                    placeholder="Tytuł utworu..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
             </div>
             
             <div className="mb-6">
                <label className="block text-sm font-bold text-slate-900 mb-2">Gatunek</label>
                <div className="space-y-2">
                  {genres.map(genre => (
                    <label key={genre} className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="genre" 
                        className="text-accent-500 focus:ring-accent-500"
                        checked={selectedGenre === genre}
                        onChange={() => setSelectedGenre(genre)}
                      />
                      <span className="ml-2 text-sm text-slate-700">{genre}</span>
                    </label>
                  ))}
                </div>
             </div>

             <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Tempo</label>
                <select 
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:border-accent-500 focus:ring-accent-500"
                  value={selectedTempo}
                  onChange={(e) => setSelectedTempo(e.target.value)}
                >
                  <option value="All">Wszystkie</option>
                  <option value="Slow">Wolne</option>
                  <option value="Medium">Średnie</option>
                  <option value="Fast">Szybkie</option>
                </select>
             </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {/* Bundles Banner */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-brand-900 mb-4 flex items-center">
              <Star className="h-5 w-5 text-accent-500 mr-2" /> Pakiety Promocyjne
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {BUNDLES.map(bundle => (
                 <div key={bundle.id} className="bg-brand-900 text-white p-6 rounded-xl flex justify-between items-center shadow-lg relative overflow-hidden border border-brand-800">
                    <div className="relative z-10">
                      <h3 className="font-bold text-lg">{bundle.title}</h3>
                      <p className="text-slate-300 text-sm mb-3">{bundle.description}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-accent-400">{bundle.price} PLN</span>
                        <button 
                          onClick={() => addToCart(bundle as any)}
                          className="bg-white text-brand-900 text-xs font-bold px-3 py-1.5 rounded hover:bg-accent-50 transition"
                        >
                          Dodaj do koszyka
                        </button>
                      </div>
                    </div>
                    <div className="absolute -right-6 -bottom-6 opacity-10 text-accent-500">
                      <Music className="h-32 w-32" />
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Tracks List */}
          <h2 className="text-xl font-bold text-brand-900 mb-4">Lista Utworów ({filteredTracks.length})</h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
             {filteredTracks.map(track => {
               const isActive = activeTrackId === track.id;

               return (
               <div key={track.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 hover:bg-slate-50 transition relative group">
                  
                  {/* Interactive Image / Player */}
                  <div className="w-full sm:w-28 h-28 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden relative shadow-sm">
                     <img src={track.image} alt={track.title} className="w-full h-full object-cover" />
                     
                     {/* Overlay: Visible on Hover OR if Active */}
                     <div className={`absolute inset-0 bg-brand-900/80 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-300 
                       ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                       
                       {/* Play/Pause Button */}
                       <button 
                         onClick={() => handlePlayClick(track.id, track.demoAudioUrl)}
                         className="text-white hover:text-accent-400 transition-transform hover:scale-110 mb-2"
                       >
                         {isActive && isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 fill-current" />}
                       </button>

                       {/* Expanded Controls (Only when active) */}
                       {isActive && (
                         <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <button onClick={handleStopClick} className="text-slate-400 hover:text-red-400 transition" title="Stop">
                              <Square className="w-4 h-4 fill-current" />
                            </button>
                            <div className="flex items-center gap-1 group/vol">
                              <Volume2 className="w-4 h-4 text-slate-400" />
                              <input 
                                type="range" 
                                min="0" max="1" step="0.1" 
                                value={volume}
                                onChange={handleVolumeChange}
                                onClick={(e) => e.stopPropagation()}
                                className="w-12 h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer"
                              />
                            </div>
                         </div>
                       )}
                     </div>
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                     <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-1">
                       <span className="text-[10px] font-bold uppercase tracking-wider text-accent-600 bg-accent-50 px-2 py-0.5 rounded border border-accent-100">{track.category}</span>
                       <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Tonacja: {track.key}</span>
                     </div>
                     <h3 className="text-lg font-bold text-brand-900">{track.title}</h3>
                     <p className="text-sm text-slate-500 mt-1 line-clamp-1">{track.description}</p>
                     <div className="mt-2 text-xs text-slate-400 flex gap-3 justify-center sm:justify-start">
                        <span>Tempo: {track.tempo}</span>
                        <span>Czas: {track.duration}</span>
                     </div>
                  </div>

                  <div className="flex flex-col items-center sm:items-end gap-2 min-w-[120px]">
                     <span className="text-xl font-bold text-brand-900">{track.price} PLN</span>
                     <div className="flex gap-2">
                        <Link to={`/tracks/${track.id}`} className="text-sm text-slate-600 hover:text-brand-900 px-3 py-2 border border-slate-200 rounded hover:border-accent-500 transition">
                          Szczegóły
                        </Link>
                        <button 
                          onClick={() => addToCart(track)}
                          className="bg-accent-500 text-white p-2 rounded hover:bg-accent-600 transition" 
                          title="Dodaj do koszyka"
                        >
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                     </div>
                  </div>
               </div>
               );
             })}
             {filteredTracks.length === 0 && (
               <div className="p-12 text-center text-slate-500">
                 Brak wyników dla wybranych filtrów.
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};