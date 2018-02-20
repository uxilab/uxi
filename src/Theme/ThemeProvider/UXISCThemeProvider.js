import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider as SCThemeProvider } from 'styled-components';
import { makeGlobalCSSInjector } from '../global';
import { theme as UXITheme, getThemeWithCustomPalette } from '../index';
import { ThemeProvider as UXIContextThemeProvider } from './index';
import { getGlobaStyles } from '../global';

// const globalStyles = getGlobaStyles(theTheme)

// const AppRoot = styled.div`

// `;

const UXISCThemeProvider = ({ children, theme, palette }) => {
  const theTheme = theme || getThemeWithCustomPalette(palette);
  // const injectGlobalCSS = makeGlobalCSSInjector(injectGlobal, theme);
  const actualCSSString = makeGlobalCSSInjector(theme);
  console.log('calling injectGlobal')
  // console.log('getGlobaStyles(theTheme)', getGlobaStyles(theTheme))

  // const globalStyles = getGlobaStyles(theTheme)


  // const styles = (
  //   <style
  //     dangerouslySetInnerHTML={{
  //       // __html: globalStyles.rules().map(rule => rule.cssText).join('\n')
  //       __html: globalStyles.join('\n')
  //     }}
  //   />
  // )

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
