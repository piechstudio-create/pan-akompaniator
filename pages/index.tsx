import type { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../components/Navigation';

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

                <Navigation />
          
      <section style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h2>Witaj!</h2>
        <p>Ta strona jest w trakcie modernizacji. Wkrótce dostępne będą wszystkie funkcje platformy.</p>
        <p><strong>Status:</strong> Next.js migration (Opcja 1) - w toku</p>
      </section>

      </div>
    </main>
    </>
  );
};

export default Home;
