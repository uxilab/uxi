import React from 'react';
import ThemeProvider from '../src/Theme/ThemeProvider';

export const withTheme = component => (
  <ThemeProvider>
    {component}
  </ThemeProvider>
);

export const shallowWithTheme = component => (
  shallow(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  )
);
export const mountWithTheme = component => (
  mount(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  )
);

export default {
  withTheme,
  mountWithTheme,
  shallowWithTheme,
};
