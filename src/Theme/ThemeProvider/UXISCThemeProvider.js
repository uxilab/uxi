import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { makeGlobalCSSInjector } from '../global';
import { theme } from './index';

const UXISCThemeProvider = ({ children, theme }) => {
  const injectGlobalCSS = makeGlobalCSSInjector(injectGlobal, theme);
  injectGlobalCSS();

  return (
    <ThemeProvider theme={theme} >
      {children}
    </ThemeProvider>
  );
};

UXISCThemeProvider.PropTypes = {
  theme: PropTypes.object,
};

UXISCThemeProvider.defaultProps = {
  theme: theme || {},
};

UXISCThemeProvider.displayName = 'UXISCThemeProvider';

export default UXISCThemeProvider;
