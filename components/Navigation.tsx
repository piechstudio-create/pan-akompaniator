import Link from 'next/link';
import Image from 'next/image';
const Navigation = () => {
  return (
    <nav style={{ marginBottom: '2rem', borderBottom: '2px solid #ddd', padding: '1rem 0' }}>
      <Image src="https://panakompaniator.pl/wp-content/uploads/2025/10/cropped-Logotyp-PA-Avatar-transparent-1.png" alt="Pan Akompaniator" width={50} height={50} className="mr-4" />
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '2rem' }}>
        <li>
          <Link href="/kursy" style={{ fontSize: '1.1rem', color: '#666' }}>
            Kursy
          </Link>
        </li>
        <li>
          <Link href="/podklady" style={{ fontSize: '1.1rem', color: '#666' }}>
            Podkłady
          </Link>
        </li>
        <li>
          <Link href="/sklep" style={{ fontSize: '1.1rem', color: '#666' }}>
            Sklep
          </Link>
        </li>
        <li>
          <Link href="/o-nas" style={{ fontSize: '1.1rem', color: '#666' }}>
            O nas
          </Link>
        </li>
        <li>
          <Link href="/kontakt" style={{ fontSize: '1.1rem', color: '#666' }}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
