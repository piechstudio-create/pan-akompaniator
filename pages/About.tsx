import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Users, Mic, Target, Youtube, Instagram, Video, Coffee } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-brand-900 text-white py-20 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-500 rounded-full blur-[120px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Cześć, tu Pan Akompaniator!</h1>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16 text-slate-700 leading-relaxed">
        
        {/* Introduction */}
        <section>
          <p className="text-lg mb-6">
            Jeśli trafiłeś/aś tu z TikToka lub Instagrama, to pewnie już mnie kojarzysz. Jeśli nie – pozwól, że się przedstawię.
          </p>
          <p className="mb-4">
            Stworzyłem markę <strong>Pan Akompaniator</strong> z buntu. Z buntu przeciwko bylejakości i "plastikowym" podkładom MIDI, które zabijają całą radość ze śpiewania.
          </p>
          <p className="border-l-4 border-accent-500 pl-6 italic text-slate-600 bg-white p-4 rounded-r-lg shadow-sm">
            Wierzę, że każdy wokalista – niezależnie czy śpiewa do lustra, na TikToka, czy na scenie – zasługuje na to, by czuć wsparcie instrumentu.
          </p>
        </section>

        {/* Why Social Media? */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-serif font-bold text-brand-900 mb-6 flex items-center gap-3">
              <Video className="w-6 h-6 text-accent-600" />
              Dlaczego TikTok?
            </h2>
            <p className="mb-4">
              Zacząłem nagrywać, bo chciałem pokazać, że akompaniament to nie tylko tło. To "druga osoba" w duecie. Widząc, jak tysiące osób używa moich dźwięków do swoich filmów, zrozumiałem, że to jest to, czego brakowało w internecie.
            </p>
            <p className="font-bold text-brand-900">
              Tutaj nie ma "sztywniactwa". Jest muzyka, są emocje i konkretne wskazówki, jak być lepszym muzykiem.
            </p>
          </div>
        </section>

        {/* What I offer */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-50 p-6 rounded-xl border border-brand-100">
            <div className="flex items-center gap-3 mb-4">
               <div className="bg-white p-2 rounded-lg shadow-sm text-brand-900">
                 <Music className="w-5 h-5" />
               </div>
               <h3 className="text-xl font-bold text-brand-900">Podkłady z Duszą</h3>
            </div>
            <p className="text-sm">
              Nagrywam na prawdziwym instrumencie lub najwyższej klasy wirtualnych fortepianach. Zachowuję dynamikę, zwolnienia, oddech. To nie jest "klikane" myszką. To jest grane sercem.
            </p>
             <Link to="/tracks" className="text-accent-600 font-bold text-sm mt-4 inline-block hover:underline">
              Posłuchaj różnicy &rarr;
            </Link>
          </div>

          <div className="bg-accent-50 p-6 rounded-xl border border-accent-100">
             <div className="flex items-center gap-3 mb-4">
               <div className="bg-white p-2 rounded-lg shadow-sm text-accent-600">
                 <Users className="w-5 h-5" />
               </div>
               <h3 className="text-xl font-bold text-brand-900">Kursy "Bez Ściemy"</h3>
            </div>
            <p className="text-sm">
              Uczę tak, jak sam chciałbym być uczony. Krótko, na temat i praktycznie. Chcesz sobie akompaniować? Pokażę Ci jak to zrobić, żeby nie brzmieć jak katarynka.
            </p>
            <Link to="/courses" className="text-brand-900 font-bold text-sm mt-4 inline-block hover:underline">
              Sprawdź programy &rarr;
            </Link>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="text-center">
          <h2 className="text-2xl font-serif font-bold text-brand-900 mb-8">Wpadnij przybić piątkę 👋</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.youtube.com/@PanAkompaniator" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition min-w-[120px]">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 group-hover:scale-110 transition">
                <Youtube className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-700">YouTube</span>
              <span className="text-xs text-slate-400">Dłuższe formy</span>
            </a>
            <a href="https://www.instagram.com/panakompaniator/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition min-w-[120px]">
              <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 group-hover:scale-110 transition">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-700">Instagram</span>
              <span className="text-xs text-slate-400">Backstage</span>
            </a>
            <a href="https://www.tiktok.com/@panakompaniator" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition min-w-[120px]">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-black group-hover:scale-110 transition">
                <Video className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-700">TikTok</span>
              <span className="text-xs text-slate-400">Codzienna dawka</span>
            </a>
          </div>
        </section>

        {/* Vision */}
        <section className="border-t border-slate-200 pt-12">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-accent-50 p-2 rounded-lg">
                <Target className="w-6 h-6 text-accent-600" />
              </div>
            <h2 className="text-2xl font-serif font-bold text-brand-900">Dokąd zmierzamy?</h2>
          </div>
          <p className="mb-4">
            Budujemy największą w Polsce społeczność świadomych wokalistów i akompaniatorów. Chcę, żebyś miał/a dostęp do materiałów, które realnie rozwijają Twój warsztat.
          </p>
          <p className="font-medium text-brand-900 text-lg italic">
            "Bo muzyka zaczyna się tam, gdzie kończą się nuty, a zaczyna słuchanie."
          </p>
        </section>

      </div>
    </div>
  );
};