import Link from 'next/link';

const Navigation = () => {
  return (
    <nav style={{ marginBottom: '2rem', borderBottom: '2px solid #ddd', padding: '1rem 0' }}>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '2rem' }}>
        <li>
          <Link href="/" style={{ fontSize: '1.1rem', color: '#666' }}>
            Kursy
          </Link>
        </li>
        <li>
          <Link href="/shop-tracks" style={{ fontSize: '1.1rem', color: '#666' }}>
            Podkłady
          </Link>
        </li>
        <li>
          <Link href="/shop-courses" style={{ fontSize: '1.1rem', color: '#666' }}>
            Sklep
          </Link>
        </li>
        <li>
          <Link href="/about" style={{ fontSize: '1.1rem', color: '#666' }}>
            O nas
          </Link>
        </li>
        <li>
          <Link href="/contact" style={{ fontSize: '1.1rem', color: '#666' }}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
