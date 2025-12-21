'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-32 md:py-40">
        <div className="max-w-4xl w-full text-center">
          {/* Subtitle with accent */}
          <div className="mb-8 inline-block">
            <span className="text-red-500 font-semibold text-sm md:text-base tracking-widest uppercase px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20">
              DOŁĄCZ DO MUZYCZNEJ REWOLUCJI
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Nie śpiewaj do <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              "plastikowego" karaoke
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Tworzysz covery na TikToka? Uczysz się śpiewać? Zacznij korzystać z akompaniamentu, który "oddycha" razem z Tobą. Prawdziwe fortepiany, prawdziwe emocje.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/kursy" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-200">
              Przeglądaj Kursy
            </Link>
            <Link href="/podklady" className="px-8 py-4 border-2 border-red-500 text-red-400 hover:bg-red-500/10 font-bold rounded-lg transition-colors duration-200">
              Przesłuchaj Podkłady
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
