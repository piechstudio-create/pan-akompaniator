import React from 'react';
import Navigation from '../components/Navigation';
import ShopCourses from './ShopCourses';
import ShopTracks from './ShopTracks';

const Sklep: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Pan Akompaniator</h1>
      <p>Profesjonalna platforma edukacyjno-handlowa dla wokalistów z kursami wideo i podkładami fortepianowymi</p>
      
      <Navigation />
      
      <main>
        <h2>Wszystkie Produkty</h2>
        
        <section style={{ marginBottom: '40px' }}>
          <h3>Kursy Wideo</h3>
          <ShopCourses />
        </section>
        
        <section>
          <h3>Podkłady Fortepianowe</h3>
          <ShopTracks />
        </section>
      </main>
      
      <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        <p>© 2024 Pan Akompaniator. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default Sklep;
