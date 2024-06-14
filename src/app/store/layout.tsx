import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <nav>Navegación de las categorias</nav>
      {children}
    </main>
  );
};

export default Layout;
