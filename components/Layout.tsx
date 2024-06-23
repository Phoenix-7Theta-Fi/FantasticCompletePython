import React, { ReactNode } from 'react';
import Navigation from './Navigation'; // Assuming you'll have a navigation component

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;