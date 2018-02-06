import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider as SCThemeProvider  } from 'styled-components';
import { makeGlobalCSSInjector } from '../global';
import { theme as UXITheme, getThemeWithCustomPalette } from '../index';
import { ThemeProvider as UXIContextThemeProvider} from './index';

const UXISCThemeProvider = ({ children, theme, palette }) => {
  const theTheme = theme || getThemeWithCustomPalette(palette);
  const injectGlobalCSS = makeGlobalCSSInjector(injectGlobal, theme);
  injectGlobalCSS();

  return (
    <SCThemeProvider theme={theme} >
      <UXIContextThemeProvider>
        {children}
      </UXIContextThemeProvider>
    </SCThemeProvider>
  );
};

UXISCThemeProvider.PropTypes = {
  theme: PropTypes.object,
  palette: PropTypes.object,
};

UXISCThemeProvider.defaultProps = {
  theme: UXITheme || {},
  palette: UXITheme.palette || {},
};

UXISCThemeProvider.displayName = 'UXISCThemeProvider';

export default UXISCThemeProvider;
