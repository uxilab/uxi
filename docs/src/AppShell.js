import React from 'react';
import ThemProvider from 'uxi/Theme'
const AppShell = ({ children }) => (<ThemProvider>{children}</ThemProvider>);

export default AppShell;
