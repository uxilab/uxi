import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider as SCThemeProvider } from 'styled-components';
import { makeGlobalCSSInjector } from '../global';
import { getThemeWithCustomPalette, mergeTheme } from '../utils';
import { theme as UXITheme } from '../index';
import { ThemeProvider as UXIContextThemeProvider } from './ContextThemeProvider';

const GlobalStyles = styled.div`
  & {}
`;

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
  const actualCSSString = makeGlobalCSSInjector(theTheme);

  console.log('theTheme', theTheme);

  return (
    <SCThemeProvider theme={theTheme || theme} >
      <GlobalStyles data-global-styles>
        <UXIContextThemeProvider>
          <div style={{ height: '100%' }}>
            <style dangerouslySetInnerHTML={{ __html: actualCSSString }} />
            {children}
          </div>
        </UXIContextThemeProvider>
      </GlobalStyles>
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
