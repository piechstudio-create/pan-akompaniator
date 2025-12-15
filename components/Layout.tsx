import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, LogOut, Youtube, Instagram, Video, X as CloseIcon } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, user, logout } = useShop();
  const location = useLocation();
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieBanner(false);
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path ? 'text-accent-400 font-semibold' : 'text-slate-300 hover:text-white';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-900/95 backdrop-blur-sm border-b border-brand-800 shadow-lg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                {/* 3D Avatar Placeholder */}
                <img 
                  src="https://img.freepik.com/premium-photo/3d-avatar-boy-character-student-good-looking-cute-generative-ai_958165-42036.jpg?w=150" 
                  alt="Pan Akompaniator Avatar" 
                  className="h-12 w-12 rounded-full border-2 border-accent-500 object-cover shadow-lg"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-brand-900 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide text-white">Pan Akompaniator</span>
                <span className="text-[10px] text-accent-400 uppercase tracking-widest leading-none">Studio & Edukacja</span>
              </div>
            </Link>

            {/* Desktop Menu - Reordered: Start, Kursy, Podkłady, O projekcie */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={isActive('/')}>Start</Link>
              <Link to="/courses" className={isActive('/courses')}>Kursy</Link>
              <Link to="/tracks" className={isActive('/tracks')}>Podkłady</Link>
              <Link to="/about" className={isActive('/about')}>O Projekcie</Link>
              
              {/* Cart & User */}
              <div className="flex items-center space-x-4 ml-4 border-l border-brand-800 pl-6">
                 {user ? (
                   <div className="flex items-center space-x-3 group relative cursor-pointer">
                      <Link to="/dashboard" className="text-sm text-slate-300 hover:text-white transition">
                         Witaj, <span className="font-bold text-accent-400">{user.name.split(' ')[0]}</span>
                      </Link>
                      <button onClick={logout} title="Wyloguj" className="text-slate-400 hover:text-white">
                        <LogOut className="h-5 w-5" />
                      </button>
                   </div>
                 ) : (
                   <Link to="/login" className="flex items-center space-x-1 text-slate-300 hover:text-accent-400 transition-colors">
                     <User className="h-5 w-5" />
                     <span className="text-sm">Zaloguj</span>
                   </Link>
                 )}

                 <Link to="/cart" className="relative group">
                    <ShoppingCart className="h-6 w-6 text-slate-300 group-hover:text-accent-400 transition-colors" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                        {cartItemCount}
                      </span>
                    )}
                 </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
               <Link to="/cart" className="mr-4 relative">
                  <ShoppingCart className="h-6 w-6 text-slate-300" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
               </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-900 border-t border-brand-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-brand-800 text-white">Start</Link>
              <Link to="/courses" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-brand-800 text-white">Kursy</Link>
              <Link to="/tracks" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-brand-800 text-white">Podkłady</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-brand-800 text-white">O Projekcie</Link>
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-accent-400 hover:text-white font-bold">Moje Konto</Link>
                  <button onClick={() => {logout(); setIsMobileMenuOpen(false);}} className="w-full text-left px-3 py-2 text-slate-300 hover:text-white">Wyloguj</button>
                </>
              ) : (
                 <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-accent-400 hover:text-white">Zaloguj się</Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
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
                {/* Social Icons */}
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
                <li><Link to="/courses" className="hover:text-accent-400 transition">Kursy Video</Link></li>
                <li><Link to="/tracks" className="hover:text-accent-400 transition">Podkłady Pop</Link></li>
                <li><Link to="/tracks" className="hover:text-accent-400 transition">Podkłady Świąteczne</Link></li>
                <li><Link to="/tracks" className="hover:text-accent-400 transition">Pakiety Premium</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-serif font-bold mb-4">Informacje</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-accent-400 transition">O nas</Link></li>
                <li><Link to="/contact" className="hover:text-accent-400 transition">Kontakt</Link></li>
                <li><Link to="/terms" className="hover:text-accent-400 transition">Regulamin</Link></li>
                <li><Link to="/privacy" className="hover:text-accent-400 transition">Polityka Prywatności</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-800 mt-12 pt-8 text-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Pan Akompaniator. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-brand-900/95 backdrop-blur text-white p-4 z-[60] border-t border-brand-700 shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-300">
              <p>
                Ta strona używa plików cookies w celach statystycznych, marketingowych oraz do prawidłowego działania serwisu. 
                Możesz określić warunki przechowywania lub dostępu do plików cookies w Twojej przeglądarce. 
                Więcej informacji znajdziesz w <Link to="/privacy" className="text-accent-400 underline hover:text-accent-300">Polityce Prywatności</Link>.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
               <button 
                onClick={handleAcceptCookies}
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg font-bold text-sm transition"
               >
                 Akceptuję
               </button>
               <button 
                onClick={handleAcceptCookies}
                className="p-2 text-slate-400 hover:text-white"
                title="Zamknij"
               >
                 <CloseIcon className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};