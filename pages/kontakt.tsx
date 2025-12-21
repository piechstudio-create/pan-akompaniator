import React from 'react';
import Navigation from '../components/Navigation';

const Kontakt: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Pan Akompaniator</h1>
      <p>Profesjonalna platforma edukacyjno-handlowa dla wokalistów z kursami wideo i podkładami fortepianowymi</p>
      
      <Navigation />
      
      <main style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>Kontakt</h2>
        
        <section style={{ marginBottom: '30px' }}>
          <h3>Skontaktuj się z nami</h3>
          <p>
Jeśli masz pytania dotyczące naszej oferty, kursów lub podkładów, chętnie odpowiemy na wszystkie Twoje wątpliwości.
          </p>
        </section>
        
        <section style={{ marginBottom: '30px' }}>
          <h3>Dane kontaktowe</h3>
          <p><strong>Email:</strong> kontakt@panakompaniator.pl</p>
          <p><strong>Formularz kontaktowy:</strong> Wkrótce dostępny</p>
        </section>
        
        <section>
          <p style={{ fontSize: '0.9em', color: '#666' }}>
Odpowiadamy na wiadomości w godzinach 9:00-17:00, od poniedziałku do piątku.
          </p>
        </section>
      </main>
      
      <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        <p>© 2024 Pan Akompaniator. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default Kontakt;
