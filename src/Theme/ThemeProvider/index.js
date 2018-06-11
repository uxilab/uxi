import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { makeGlobalCSSInjector } from '../global';
import { getThemeWithCustomPalette } from '../utils';
import { theme as UXITheme } from '../index';
import { ThemeProvider as UXIContextThemeProvider } from './ContextThemeProvider';
import styled from 'styled-components';
import { lighten } from '../colorManipulator';

const GlobalStyles = styled.div`
  & {
    h1, h2, h3, h4 {
      color: ${({ theme }) => theme.palette.neutral.dark};
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    svg {
      transition: ${({ theme }) => theme.transition.defaultAll};
    }
    svg.uxi_svg-icon-wrapper {
      transition: none;
    }
    svg.uxi_svg-icon-wrapper svg {
      transition: ${({ theme }) => theme.transition.defaultAll};
    }
    /* little trick relating to SvgIcon: a svg wrapper */
    /* svg>svg { fill: inherit; } */
  }
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
      <GlobalStyles data-globalStyles>
        <UXIContextThemeProvider>
          <div style={{ height: '100%' }}>
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
};

UXISCThemeProvider.displayName = 'UXISCThemeProvider';

export default UXISCThemeProvider;
