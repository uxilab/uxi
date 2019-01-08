import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider as SCThemeProvider } from 'styled-components';
import { makeGlobalCSSInjector } from '../global';
import { getThemeWithCustomPalette } from '../utils';
import { theme as UXITheme } from '../index';
import { ThemeProvider as UXIContextThemeProvider } from './ContextThemeProvider';

const GlobalStyles = styled.div`
  & {}
`;

const UXISCThemeProvider = (props) => {
  const {
    children,
    customTheme,
    palette: customPalette,
    theme,
  } = props;

  const theTheme = customTheme || getThemeWithCustomPalette(customPalette);
  const actualCSSString = makeGlobalCSSInjector(theTheme);

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
  theme: PropTypes.object,
  palette: PropTypes.object,
};

UXISCThemeProvider.defaultProps = {
  theme: UXITheme || {},
  palette: {},
};

UXISCThemeProvider.displayName = 'UXISCThemeProvider';

export default UXISCThemeProvider;
