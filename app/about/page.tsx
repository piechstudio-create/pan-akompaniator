import Link from 'next/link';
import { Music, Users, Target, Youtube, Instagram, Video } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-500 rounded-full blur-[120px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Cześć, tu Pan Akompaniator!</h1>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16 text-slate-700 leading-relaxed">
        <section>
          <p className="text-lg mb-6">Stworzyłem markę Pan Akompaniator z buntu przeciwko bylejakości i "plastikowym" podkładom MIDI.</p>
          <p className="border-l-4 border-accent-500 pl-6 italic text-slate-600 bg-white p-4 rounded-r-lg shadow-sm">
            Wierzę, że każdy wokalista zasługuje na to, by czuć wsparcie prawdziwego instrumentu.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-50 p-6 rounded-xl border border-brand-100">
            <h3 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-2"><Music className="w-5 h-5" /> Podkłady z Duszą</h3>
            <p className="text-sm">Nagrania realizowane na prawdziwym fortepianie. Zachowujemy dynamikę i emocje.</p>
            <Link href="/tracks" className="text-accent-600 font-bold text-sm mt-4 inline-block">Posłuchaj różnicy &rarr;</Link>
          </div>
          <div className="bg-accent-50 p-6 rounded-xl border border-accent-100">
            <h3 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-2"><Users className="w-5 h-5" /> Kursy Bez Ściemy</h3>
            <p className="text-sm">Uczę praktycznie. Chcesz sobie akompaniować? Pokażę Ci jak to zrobić dobrze.</p>
            <Link href="/courses" className="text-brand-900 font-bold text-sm mt-4 inline-block">Sprawdź programy &rarr;</Link>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-serif font-bold text-brand-900 mb-8">Wpadnij przybić piątkę 👋</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"><Youtube className="w-6 h-6 text-red-600" /></a>
            <a href="#" className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"><Instagram className="w-6 h-6 text-pink-600" /></a>
            <a href="#" className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"><Video className="w-6 h-6 text-black" /></a>
          </div>
        </section>
      </div>
    </div>
  );
}
