import React from 'react';
import ThemeProvider from '../src/Theme/ThemeProvider';

export const mountWithTheme = component => (
  <ThemeProvider>
    {component}
  </ThemeProvider>
);

export default {
  mountWithTheme,
};
