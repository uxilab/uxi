import React from 'react';
import ThemProvider from 'uxi/Theme';
import Header from 'uxi/Header';
import { HorizontalMenu, MenuItem } from 'uxi/Menu';

const AppShell = ({ children }) => (
  <ThemProvider>
    <div>
      <Header>
        <HorizontalMenu isMain={true}>
          <MenuItem>HOME</MenuItem>
          <MenuItem>COMPONENTS</MenuItem>
          <MenuItem>CONTACT</MenuItem>
        </HorizontalMenu>
      </Header>
      {children}
    </div>
  </ThemProvider>
);

export default AppShell;
