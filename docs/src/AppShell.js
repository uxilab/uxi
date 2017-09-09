import React from 'react';
import ThemProvider from 'uxi/Theme';
import Header from 'uxi/Header';

const AppShell = ({ children }) => (
  <ThemProvider>
    <div>
      <Header>
        UXI
      </Header>
      {children}
    </div>
  </ThemProvider>
);

export default AppShell;
