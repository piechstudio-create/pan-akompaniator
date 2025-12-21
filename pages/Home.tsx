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
          
        {/* Dla kogo */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Dla kogo</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Wokaliści</h3>
                <p className="text-slate-600">Kursy i podkłady dla rozwijających się wokalistów</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Nauczyciele</h3>
                <p className="text-slate-600">Materiały do pracy z uczniami w szkołach wokalnych</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Twórcy</h3>
                <p className="text-slate-600">Muzyka na TikTok, Instagram i YouTube bez karaoke brzmienia</p>
              </div>
            </div>
          </div>
          
        {/* Co mozesz kupić */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Co możesz tutaj kupić</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-2">Video Kursy</h3>
                <p className="text-sm text-slate-300">Naucz się od podstaw</p>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-2">Podkłady</h3>
                <p className="text-sm text-amber-100">Cwiczenia z akompaniamentem</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-2">Pakiety</h3>
                <p className="text-sm text-slate-300">Oszczędzaj więcej</p>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-2">Inne</h3>
                <p className="text-sm text-amber-100">Specjalne edycje</p>
              </div>
            </div>
          </div>
        </section>
          
        {/* Jak to działa */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Jak to działa</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Wybierz produkt</h3>
                <p className="text-slate-600">Przeglądaj nasz katalog kursów i podkładów</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Opłać zamówienie</h3>
                <p className="text-slate-600">Bezpieczna płatność przez Przelewy24</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Odbierz dostęp</h3>
                <p className="text-slate-600">Natychmiast zobacz kursy i pobierz pliki</p>
              </div>
            </div>
          </div>
        </section>
          
        {/* Newsletter */}
        <section className="py-16 bg-slate-800 text-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Bedziesz na bieżąco</h2>
            <p className="text-slate-300 mb-8">Zapisz się na newsletter i otrzymaj bezpłatną darmową lekcje edukacyjne</p>
            <form className="flex gap-4 mb-4">
              <input type="email" placeholder="Twoj email" className="flex-1 px-4 py-3 rounded text-slate-900"/>
              <button className="bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded font-bold transition-colors">Zapisz się</button>
            </form>
            <p className="text-xs text-slate-400">Nie spamujemy - tylko wartościowe treści dotyczące muzyki i akompaniamentu</p>
          </div>
        </section>
        </section>
        </div>
      </section>
    </div>
  );
}
