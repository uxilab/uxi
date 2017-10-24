import React from 'react';
import ThemProvider from '../src/Theme';

export const mount = component => (
  <ThemProvider>
    {component}
  </ThemProvider>
);

export default mount;
