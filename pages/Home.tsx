'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20 md:py-32">
        <div className="max-w-4xl w-full text-center">
          {/* Subtitle with accent */}
          <div className="mb-8 inline-block">
            <span className="text-red-500 font-semibold text-sm md:text-base tracking-widest uppercase px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20">
              DOŁĄCZ DO MUZYCZNEJ REWOLUCJI
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Nie śpiewaj do
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
              "plastikowego" karaoke
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tworzysz covery na TikToka? Uczysz się śpiewać? Zacznij korzystać z akompaniamentu, który "oddycha" razem z Tobą. Prawdziwe fortepiany, prawdziwe emocje.
          </p>
          
          {/* CTA Button */}
          <Link href="/sklep">
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-red-500/30 mb-12">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v6h16V5a2 2 0 00-2-2H5z"></path>
                <path fillRule="evenodd" d="M5 11a2 2 0 012-2h6v6H5v-4zm10 0h2v2h-2v-2z" clipRule="evenodd"></path>
              </svg>
              Znajdź podkład
            </button>
          </Link>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-slate-700/50">
            <div className="p-6 bg-slate-900/50 rounded-xl backdrop-blur border border-slate-700/30 hover:border-red-500/30 transition-colors">
              <div className="text-3xl mb-3">🎹</div>
              <h3 className="text-white font-bold mb-2">Autentyczne Fortepiany</h3>
              <p className="text-slate-400 text-sm">Nagrania profesjonalne fortepianistek</p>
            </div>
            
            <div className="p-6 bg-slate-900/50 rounded-xl backdrop-blur border border-slate-700/30 hover:border-red-500/30 transition-colors">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-white font-bold mb-2">Dla Każdego Poziomu</h3>
              <p className="text-slate-400 text-sm">Od początkujących do profesjonalistów</p>
            </div>
            
            <div className="p-6 bg-slate-900/50 rounded-xl backdrop-blur border border-slate-700/30 hover:border-red-500/30 transition-colors">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-bold mb-2">Natychmiast Dostępne</h3>
              <p className="text-slate-400 text-sm">Pobierz i śpiewaj zaraz po opłacie</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-950 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-slate-400 text-sm">
            © 2024 Pan Akompaniator. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
}
