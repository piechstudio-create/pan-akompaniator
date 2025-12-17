// Deprecated Vite/React Router component - replaced with Next.js components
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ccc', backgroundColor: '#f5f5f5' }}>
        <h1>Pan Akompaniator</h1>
      </header>
      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>
      <footer style={{ padding: '1rem', borderTop: '1px solid #ccc', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <p>&copy; 2024 Pan Akompaniator</p>
      </footer>
    </div>
  );
};

export default Layout;
