import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider as SCThemeProvider } from 'styled-components';
import { makeGlobalCSSInjector } from '../global';
import { theme as UXITheme, getThemeWithCustomPalette } from '../index';
import { ThemeProvider as UXIContextThemeProvider } from './index';
import { getGlobaStyles } from '../global';

const UXISCThemeProvider = ({ children, theme, palette }) => {
  const theTheme = theme || getThemeWithCustomPalette(palette);
  const actualCSSString = makeGlobalCSSInjector(theme);

  return (
    <SCThemeProvider theme={theme} >
      <UXIContextThemeProvider>
        <div>
          <style dangerouslySetInnerHTML={{ __html: actualCSSString }} />
          {children}
        </div>
      </UXIContextThemeProvider>
    </SCThemeProvider>
  );
};

UXISCThemeProvider.propTypes = {
  theme: PropTypes.object,
  palette: PropTypes.object,
};

UXISCThemeProvider.defaultProps = {
  theme: UXITheme || {},
  palette: UXITheme.palette || {},
};

UXISCThemeProvider.displayName = 'UXISCThemeProvider';

export default UXISCThemeProvider;
