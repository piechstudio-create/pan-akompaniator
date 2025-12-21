import React from 'react';
import Navigation from '../components/Navigation';
import ShopTracks from './ShopTracks';

const Podklady: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Pan Akompaniator</h1>
      <p>Profesjonalna platforma edukacyjno-handlowa dla wokalistów z kursami wideo i podkładami fortepianowymi</p>
      
      <Navigation />
      
      <main>
        <ShopTracks />
      </main>
      
      <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        <p>© 2024 Pan Akompaniator. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default Podklady;
