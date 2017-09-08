import React from 'react';
import ThemProvider from '../src/Theme';

export const mount = (component) => {
  return (
    <ThemProvider>
      {component}
    </ThemProvider>
  );
};
