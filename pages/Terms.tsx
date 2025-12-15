import React from 'react';

export const Terms = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-brand-900 mb-8 border-b pb-4">Regulamin Serwisu</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">1. Definicje</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sprzedawca</strong> – Pan Akompaniator, prowadzący sprzedaż produktów cyfrowych.</li>
              <li><strong>Klient</strong> – osoba fizyczna lub prawna dokonująca zakupów w Sklepie.</li>
              <li><strong>Sklep</strong> – serwis internetowy dostępny pod adresem panakompaniator.pl.</li>
              <li><strong>Produkt Cyfrowy</strong> – kurs wideo, plik audio lub inny materiał elektroniczny będący przedmiotem sprzedaży.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">2. Zasady zakupów</h2>
            <p>
              Zamówienia w sklepie można składać 24 godziny na dobę. Do realizacji zamówienia konieczne jest podanie adresu e-mail oraz opłacenie zamówienia poprzez dostępne metody płatności (Przelewy24).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">3. Dostawa produktów</h2>
            <p>
              Produkty cyfrowe są dostarczane drogą elektroniczną na adres e-mail podany w zamówieniu niezwłocznie po zaksięgowaniu wpłaty. W przypadku kursów wideo, dostęp przyznawany jest do panelu kursanta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">4. Prawa autorskie i licencja</h2>
            <p>
              Wszystkie produkty dostępne w sklepie są objęte prawem autorskim. Kupując podkład lub kurs, Klient otrzymuje licencję na własny użytek.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm bg-slate-50 p-4 rounded border border-slate-100">
              <li><strong>Dozwolone:</strong> Wykorzystanie podkładów do ćwiczeń, występów publicznych, nagrań do social media (z oznaczeniem autora).</li>
              <li><strong>Zabronione:</strong> Odprzedaż plików, udostępnianie ich osobom trzecim, publikowanie samych plików audio jako własnych.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">5. Odstąpienie od umowy</h2>
            <p>
              Ze względu na charakter produktów cyfrowych (treści, które nie są zapisane na nośniku materialnym), prawo do odstąpienia od umowy wygasa w momencie rozpoczęcia pobierania pliku lub uzyskania dostępu do kursu, na co Klient wyraża zgodę podczas zakupu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-900 mb-3">6. Reklamacje</h2>
            <p>
              Wszelkie reklamacje dotyczące niedziałających linków lub problemów technicznych należy zgłaszać na adres kontakt@panakompaniator.pl. Sprzedawca zobowiązuje się rozpatrzyć reklamację w terminie 14 dni.
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