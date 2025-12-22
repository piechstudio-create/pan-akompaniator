"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X as CloseIcon } from 'lucide-react';

export const CookieBanner = () => {
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

  if (!showCookieBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-900/95 backdrop-blur text-white p-4 z-[60] border-t border-brand-700 shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300">
          <p>
            Ta strona używa plików cookies w celach statystycznych, marketingowych oraz do prawidłowego działania serwisu. 
            Możesz określić warunki przechowywania lub dostępu do plików cookies w Twojej przeglądarce. 
            Więcej informacji znajdziesz w <Link href="/privacy" className="text-accent-400 underline hover:text-accent-300">Polityce Prywatności</Link>.
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
  );
};
