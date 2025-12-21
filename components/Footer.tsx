import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-700 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Pan Akompaniator</h3>
            <p className="text-sm text-slate-400 mb-4">
              Profesjonalna platforma edukacyjno-handlowa dla wokalistów z kursami wideo i podkładami fortepianowymi.
            </p>
            <div className="flex gap-4">
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition">
                TikTok
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition">
                YouTube
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition">
                Instagram
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produkty</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/kursy" className="hover:text-cyan-500 transition">
                  Kursy Online
                </Link>
              </li>
              <li>
                <Link href="/podklady" className="hover:text-cyan-500 transition">
                  Podkłady Fortepianowe
                </Link>
              </li>
              <li>
                <Link href="/sklep" className="hover:text-cyan-500 transition">
                  Sklep
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Firma</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/o-nas" className="hover:text-cyan-500 transition">
                  O Nas
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-cyan-500 transition">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Dokumenty</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/terms" className="hover:text-cyan-500 transition">
                  Warunki Użytkowania
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-cyan-500 transition">
                  Polityka Prywatności
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© {currentYear} Pan Akompaniator. Wszystkie prawa zastrzeżone.</p>
            <p className="mt-4 md:mt-0">Wykonane z ❤️ dla muzyko-wokąków</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
