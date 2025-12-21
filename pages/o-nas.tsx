import React from 'react';
import Navigation from '../components/Navigation';

const ONas: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Pan Akompaniator</h1>
      <p>Profesjonalna platforma edukacyjno-handlowa dla wokalistów z kursami wideo i podkładami fortepianowymi</p>
      
      <Navigation />
      
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2>O nas</h2>
        
        <section style={{ marginBottom: '30px' }}>
          <h3>Kim jesteśmy?</h3>
          <p>
Pan Akompaniator to profesjonalna platforma edukacyjno-handlowa stworzona z myślą o wokalistach, którzy pragną rozwinąć swoje umiejętności i doskonalić warsztat wokalny.
          </p>
        </section>
        
        <section style={{ marginBottom: '30px' }}>
          <h3>Nasza oferta</h3>
          <ul>
            <li><strong>Kursy wideo</strong> - profesjonalne szkolenia z techniki wokalnej i interpretacji</li>
            <li><strong>Podkłady fortepianowe</strong> - wysokiej jakości nagrania do ćwiczeń i występów</li>
          </ul>
        </section>
        
        <section>
          <h3>Dla kogo?</h3>
          <p>
Nasza oferta skierowana jest do wokalistów na każdym poziomie zaawansowania - od początkujących po profesjonalistów.
          </p>
        </section>
      </main>
      
      <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        <p>© 2024 Pan Akompaniator. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default ONas;
