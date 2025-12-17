import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pan Akompaniator - Strona Główna</title>
        <meta name="description" content="Profesjonalna platforma edukacyjno-handlowa dla wokalistów" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ fontFamily: 'system-ui, -apple-system, sans-serif', padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <header style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Pan Akompaniator</h1>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Profesjonalna platforma edukacyjno-handlowa dla wokalistów z kursami wideo i podkładami fortepianowymi
            </p>
          </header>

          <nav style={{ marginBottom: '2rem', borderBottom: '2px solid #ddd', paddingBottom: '1rem' }}>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '2rem' }}>
              <li><a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Kursy</a></li>
              <li><a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Podkłady</a></li>
              <li><a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Sklep</a></li>
              <li><a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>O nas</a></li>
              <li><a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Kontakt</a></li>
            </ul>
          </nav>

          <section style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <h2>Witaj!</h2>
            <p>
              Ta strona jest w trakcie modernizacji. Wkrótce dostępne będą wszystkie funkcje platformy.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <strong>Status:</strong> Next.js migration (Opcja 1) - w toku
            </p>
          </section>
        </div>
      </main>

      <footer style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f0f0f0', textAlign: 'center', borderTop: '1px solid #ddd' }}>
        <p>&copy; 2024 Pan Akompaniator. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </>
  );
};

export default Home;
