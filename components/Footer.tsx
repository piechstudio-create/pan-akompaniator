import Link from 'next/link';
import { Youtube, Instagram, Video } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-900 text-slate-400 py-12 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center space-x-3 mb-4">
               <img 
                src="https://img.freepik.com/premium-photo/3d-avatar-boy-character-student-good-looking-cute-generative-ai_958165-42036.jpg?w=150" 
                alt="Footer Logo" 
                className="h-10 w-10 rounded-full border border-accent-500"
              />
              <span className="font-serif text-lg font-bold text-white tracking-wide">Pan Akompaniator</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Tworzymy profesjonalne narzędzia dla wokalistów. Naszą misją jest dostarczanie akompaniamentów z duszą i edukacja muzyczna na najwyższym poziomie.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@PanAkompaniator" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-800 rounded-full flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition cursor-pointer" title="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/panakompaniator/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-800 rounded-full flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition cursor-pointer" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@panakompaniator" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-800 rounded-full flex items-center justify-center hover:bg-[#000000] hover:text-white transition cursor-pointer" title="TikTok">
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-4">Oferta</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-accent-400 transition">Kursy Video</Link></li>
              <li><Link href="/tracks" className="hover:text-accent-400 transition">Podkłady Pop</Link></li>
              <li><Link href="/tracks" className="hover:text-accent-400 transition">Podkłady Świąteczne</Link></li>
              <li><Link href="/tracks" className="hover:text-accent-400 transition">Pakiety Premium</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-4">Informacje</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent-400 transition">O nas</Link></li>
              <li><Link href="/contact" className="hover:text-accent-400 transition">Kontakt</Link></li>
              <li><Link href="/terms" className="hover:text-accent-400 transition">Regulamin</Link></li>
              <li><Link href="/privacy" className="hover:text-accent-400 transition">Polityka Prywatności</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Pan Akompaniator. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};
