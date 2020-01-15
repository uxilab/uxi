import { createGlobalStyle } from 'styled-components';
// import { css } from 'styled-components';
import { lighten } from './colorManipulator';
/** those are css`` mixins import */
import grid from './grid';
import fonts from './fonts'; // eslint-disable-line import/no-named-as-default
import tooltip from './tooltip';
// import synthaxHighlight from './synthaxHighlight';
import markdown from './markdown';
import layout from './layout';
import simpleLayout from './simpleLayout'; // eslint-disable-line import/no-named-as-default
/**
 * injectGlobal: A helper method to write global CSS.
 * It does not return a component,
 * but adds the styles to the stylesheet directly.
 *
 * and I guess does not depend on the
 * theme provider to be already rendered -df
 */
/* eslint-disable indent */
/* eslint-disable prefer-template */

// export const makeGlobalCSSInjector = (theme) => {
//   if (!theme) {
//     return () => console.warn('called `makeGlobalCSSInjector` without passing a theme');
//   }
//   const {
//     palette,
//     transition,
//   } = theme;

//   return `
//     ${markdown}
//     ${fonts}
//     ${tooltip}

//     * {
//       scroll-behavior: smooth; /* is not an inherited prop */
//     }

//     html {
//       min-height: 100%;
//       margin: 0;
//       padding: 0;
//       background: ${palette.white};
//       font-family: 'Open Sans', sans-serif;
//       font-weight: 400;
//     }
//     body {
//       min-height: 100%;
//       margin: 0;
//       padding: 0;
//       font-size: 14px;
//       color: ${palette.darkGrey};
//     }
//     ::selection {
//       color: white;
//       /* text-decoration-color: white; */
//       background-color: rgba(0, 137, 122, 0.9); /* theme.accent.dark for contrast */
//     }

//     button::-moz-focus-inner {
//       border: 0;
//     }

//     /** Links */
//     a {
//       color: ${palette.accent.main};
//       text-decoration: none;
//       cursor: pointer;
//     }
//     a:hover {
//       color: ${lighten(palette.accent.main, 0.1)};
//       text-decoration: underline;
//     }


//     /** Headings */
//     h1, h2, h3, h4 {
//       color: currentColor;
//     }


//     /** UL */
//     ul {
//       margin: 0;
//       padding: 0;
//       list-style: none;
//     }


//     /** SVG */
//     svg {
//       transition: ${transition.defaultAll};
//     }
//     svg.uxi_svg-icon-wrapper {
//       transition: none;
//     }
//     svg.uxi_svg-icon-wrapper svg {
//       transition: ${transition.defaultAll};
//     }
//     /* little trick relating to SvgIcon: a svg wrapper */
//     // svg>svg { fill: inherit; }


//     /**
//      * Extend using css from styled-components
//      */
//     ${grid}
//     ${layout}
//     ${simpleLayout}
//   `;
//   // return injectGlobal`${getGlobaStyles(theme)}`
// };

// export default makeGlobalCSSInjector;
export default null;

export const GlobalStyle = createGlobalStyle`
  ${markdown}
  /* ${fonts} */
  ${tooltip}

  * {
    scroll-behavior: smooth; /* is not an inherited prop */
  }

  html {
    min-height: 100%;
    margin: 0;
    padding: 0;
    background: ${({ theme: { palette } }) => palette.white};
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: ${({ theme: { palette } }) => palette.darkGrey};
  }
  ::selection {
    color: white;
    /* text-decoration-color: white; */
    background-color: rgba(0, 137, 122, 0.9); /* theme.accent.dark for contrast */
  }

  button::-moz-focus-inner {
    border: 0;
  }

  /** Links */
  a {
    color: ${({ theme: { palette } }) => palette.accent.main};
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    color: ${({ theme: { palette } }) => lighten(palette.accent.main, 0.1)};
    text-decoration: underline;
  }


  /** Headings */
  h1, h2, h3, h4 {
    color: currentColor;
  }


  /** UL */
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }


  /** SVG */
  svg {
    transition: ${({ theme: { transition } }) => transition.defaultAll};
  }
  svg.uxi_svg-icon-wrapper {
    transition: none;
  }
  svg.uxi_svg-icon-wrapper svg {
    transition: ${({ theme: { transition } }) => transition.defaultAll};
  }
  /* little trick relating to SvgIcon: a svg wrapper */
  // svg>svg { fill: inherit; }


  /**
    * Extend using css from styled-components
    */
  ${grid}
  ${layout}
  ${simpleLayout}
`;


console.log('GlobalStyle in its file', GlobalStyle);
