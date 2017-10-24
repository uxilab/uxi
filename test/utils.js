import React from 'react';
import ThemProvider from '../src/Theme';

export const mountWithTheme = component => (
  <ThemProvider>
    {component}
  </ThemProvider>
);

export default {
  mountWithTheme,
};
