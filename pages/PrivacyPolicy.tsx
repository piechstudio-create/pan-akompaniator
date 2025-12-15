import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-brand-900 mb-8 border-b pb-4">Polityka Prywatności</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">1. Postanowienia ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z serwisu internetowego Pan Akompaniator.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">2. Administrator Danych</h2>
            <p>
              Administratorem danych osobowych zawartych w serwisie jest Pan Akompaniator z siedzibą w [Miasto], NIP: [Numer NIP]. Z Administratorem można skontaktować się poprzez adres e-mail: kontakt@panakompaniator.pl.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">3. Cel i zakres zbierania danych</h2>
            <p className="mb-2">Administrator przetwarza dane osobowe Użytkowników w następujących celach:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Realizacja zamówień na produkty cyfrowe i kursy.</li>
              <li>Obsługa konta Użytkownika w serwisie.</li>
              <li>Komunikacja z Użytkownikiem (np. formularz kontaktowy, newsletter).</li>
              <li>Wystawianie faktur i spełnianie obowiązków księgowych.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">4. Pliki Cookies (Ciasteczka)</h2>
            <p>
              Serwis wykorzystuje pliki cookies w celu zapewnienia poprawnego działania strony, zapamiętywania koszyka zakupowego, logowania użytkownika oraz w celach statystycznych (Google Analytics). Użytkownik ma możliwość ograniczenia lub wyłączenia dostępu plików cookies do swojego urządzenia w ustawieniach przeglądarki internetowej.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">5. Prawa Użytkownika</h2>
            <p>
              Użytkownikowi przysługuje prawo dostępu do treści swoich danych, ich poprawiania, usunięcia ("prawo do bycia zapomnianym"), ograniczenia przetwarzania oraz prawo do wniesienia sprzeciwu wobec przetwarzania danych.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">6. Bezpieczeństwo danych</h2>
            <p>
              Administrator stosuje środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną, a w szczególności zabezpiecza dane przed ich udostępnieniem osobom nieupoważnionym.
            </p>
          </section>

          <p className="text-sm text-slate-500 pt-4 border-t mt-8">
            Data ostatniej aktualizacji: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};