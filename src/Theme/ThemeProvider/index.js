import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { GlobalStyle } from '../global';
import { getThemeWithCustomPalette, mergeTheme } from '../utils';
import { theme as UXITheme } from '../index';
import { ThemeProvider as UXIContextThemeProvider } from './ContextThemeProvider';

const UXISCThemeProvider = (props) => {
  const {
    children,
    // customTheme,
    palette: customPalette,
    defaultTheme,
    theme,
  } = props;

  let theTheme = defaultTheme;
  if (theme) {
    theTheme = mergeTheme(defaultTheme, theme);
  } else if (customPalette) {
    theTheme = getThemeWithCustomPalette(customPalette);
  }

  return (
    <SCThemeProvider theme={theTheme || theme} >
      <UXIContextThemeProvider>
        <div style={{ height: '100%' }}>
          <GlobalStyle />
          {children}
        </div>
      </UXIContextThemeProvider>
    </SCThemeProvider>
  );
};

UXISCThemeProvider.propTypes = {
  defaultTheme: PropTypes.object,
  theme: PropTypes.object,
  palette: PropTypes.object,
};

UXISCThemeProvider.defaultProps = {
  defaultTheme: UXITheme || {},
  theme: undefined,
  palette: {},
};

UXISCThemeProvider.displayName = 'UXISCThemeProvider';

export default UXISCThemeProvider;
