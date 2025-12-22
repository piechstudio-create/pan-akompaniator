import Link from 'next/link';
import { Play, BookOpen, Mic, Music2, Smartphone, Star, ArrowRight, Sparkles } from 'lucide-react';
import { COURSES, TRACKS } from '@/services/mockData';

export default function Home() {
  const featuredTracks = TRACKS.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Premium Design */}
      <section className="relative w-full py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Profesjonalne Podkłady Fortepianowe
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight">
              <span className="block text-white mb-2">Twój głos</span>
              <span className="block bg-gradient-to-r from-yellow-200 via-pink-300 to-yellow-200 bg-clip-text text-transparent">
                zasługuje na emocje
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
              Zapomnij o sztucznym karaoke. Każdy podkład żyje, oddycha i reaguje na Twoją interpretację.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Link
                href="/tracks"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/50"
              >
                <Play className="w-5 h-5" />
                Przegląj podkłady
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                Kursy Video
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Music2 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-bold text-white text-lg">Akustyczne brzmienie</h3>
              <p className="text-slate-400 text-sm">Naturalny dźwięk fortepianu nagrany w studiu</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-pink-500/20 rounded-lg">
                <Smartphone className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="font-bold text-white text-lg">TikTok-Ready</h3>
              <p className="text-slate-400 text-sm">Gotowe do użytku na wszystkich platformach</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="font-bold text-white text-lg">Premium Quality</h3>
              <p className="text-slate-400 text-sm">Słuchawki studyjne polecają nasze podkłady</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tracks */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Najczęściej <span className="bg-gradient-to-r from-yellow-200 via-pink-300 to-yellow-200 bg-clip-text text-transparent">śpiewane</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Odkryj popularne piosenki które pokochali artyści z całej Polski
            </p>
          </div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTracks.map((track) => (
              <div
                key={track.id}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link href={`/track/${track.id}`}>
                      <button className="p-3 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-white mb-2 line-clamp-2">{track.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">
                    {track.category} • {track.key}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-200 to-pink-300 bg-clip-text">
                      {track.price} PLN
                    </span>
                    <Link href={`/track/${track.id}`}>
                      <button className="p-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500 hover:text-white transition-all group/btn">
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/tracks"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Zobacz wszystkie podkłady
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Gotowy do nagrania?
          </h2>
          <p className="text-lg text-white/90">
            Dołącz do tysięcy artystów, którzy już tworzą magię ze swoim głosem
          </p>
          <Link
            href="/tracks"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Zacznij teraz
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
