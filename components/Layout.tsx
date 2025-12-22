import React from 'react';

// Ten komponent jest przestarzały na rzecz app/layout.tsx
export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>;
};