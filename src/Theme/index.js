import { css } from 'styled-components';
import { palette as mainPalette } from './palette';
import { lighten, darken } from './colorManipulator';

const fonts = {
  fontFamily: 'Open sans, sans-serif',
};

export const palette = mainPalette;

const marketingFontFamilly = '\'Fira Sans\', sans-serif';

export const theme = { // eslint-disable-line no-shadow
  wrapper: {
    '.uxi_container': {
      width: '100%',
      margin: '0 auto',
    },
    mediaQueries: {
      '(min-width: 768px)': {
        '.uxi_container': {
          maxWidth: '750px',
          margin: '0 auto',
        },
      },
      '(min-width: 992px)': {
        '.uxi_container': {
          maxWidth: '970px',
          margin: '0 auto',
        },
      },
      '(min-width: 1200px)': {
        '.uxi_container': {
          maxWidth: '1170px',
          margin: '0 auto',
        },
      },
    },
    body: {
      height: '100%',
      margin: 0,
      padding: 0,
    },
    html: {
      height: '100%',
      margin: 0,
      padding: 0,
      background: palette.white,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      color: palette.darkGrey,
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      color: palette.accent.main,
      textDecoration: 'none',
    },
    'a:hover': {
      color: lighten(palette.accent.main, 0.1),
      textDecoration: 'none',
    },
    'h1, h2, h3, h4': {
      color: palette.neutral.dark,
    },
    '.uxi-root': {
      height: '100%',
    },
    table: {
      margin: 0,
      padding: 0,
    },
    td: {
      padding: '5px 10px',
    },
  },
  border: {
    default: '1px solid #e9e9e9',
  },
  palette,
  background: {
    light: palette.purewhite,
    dark: palette.primary.main,
  },
  margin: {
    title: '16px 0',
  },
  padding: {
    breathPadding: '1em',
    defaultPadding: '24px',
    heading: '10px 0',
  },
  dimensions: {
    mainHeaderHeight: '80px',
  },
  marketingText: {
    light: {
      title: {
        fontFamilly: marketingFontFamilly,
        fontSize: '30px',
        fontWeight: 'bold',
        color: lighten('#000000', 0.11),
      },
      heading: {
        fontSize: '18px',
        fontFamilly: marketingFontFamilly,
        fontWeight: 600,
        color: lighten('#000000', 0.11),
      },
      button: {
        fontSize: '14px',
        color: lighten('#000000', 0.21),
      },
      body: {
        fontSize: '16px',
        color: lighten('#000000', 0.21),
      },
    },
    dark: {
      title: {
        fontFamilly: marketingFontFamilly,
        fontSize: '30px',
        fontWeight: 'bold',
        color: lighten('#ffffff', 0.11),
      },
      heading: {
        fontSize: '18px',
        fontFamilly: marketingFontFamilly,
        fontWeight: 600,
        color: lighten('#ffffff', 0.11),
      },
      button: {
        fontSize: '14px',
        color: lighten('#ffffff', 0.21),
      },
      body: {
        fontSize: '16px',
        color: lighten('#ffffff', 0.21),
      },
    },
  },
  fontsAndColor: {
    default: Object.assign({
      color: '#37373a',
    }, fonts),
    defaultOnDarkBg: Object.assign({
      color: '#fff',
    }, fonts),
    light: {
      title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: lighten('#000000', 0.11),
      },
      heading: {
        fontSize: '16px',
        fontWeight: 600,
        color: lighten('#000000', 0.11),
      },
      button: {
        fontSize: '14px',
        color: lighten('#000000', 0.21),
      },
      body: {
        fontSize: '14px',
        color: lighten('#000000', 0.21),
      },
      caption: {
        fontSize: '12px',
        color: lighten('#000000', 0.45),
      },
      disable: {
        color: lighten('#000000', 0.40),
      },
      link: {
        fontSize: '12px',
        color: '#15a9a9',
      },
    },
    dark: {
      title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: darken('#ffffff', 0.11),
      },
      heading: {
        fontSize: '16px',
        fontWeight: 600,
        color: darken('#ffffff', 0.11),
      },
      button: {
        fontSize: '14px',
        color: '#ffffff',
      },
      body: {
        fontSize: '14px',
        color: darken('#ffffff', 0.21),
      },
      caption: {
        fontSize: '12px',
        color: darken('#ffffff', 0.45),
      },
      disable: {
        color: darken('#ffffff', 0.40),
      },
      link: {
        fontSize: '12px',
        color: '#15a9a9',
      },
    },
  },
  title: {
    color: palette.lightBlack,
  },
  button: {
    backgroundColor: palette.neutral.lightestDark,
    color: palette.neutral.darker,
    borderColor: palette.neutral.lightDark,
  },
  'button:hover': {
    backgroundColor: palette.neutral.lightDark,
    color: palette.neutral.darker,
    borderColor: palette.neutral.neutral,
  },
  'button:primary': {
    color: palette.white,
    backgroundColor: palette.accent.main,
    borderColor: palette.accent.dark,
  },
  'button:primary:hover': {
    color: palette.accent.main,
    backgroundColor: palette.white,
    borderColor: palette.accent.dark,
  },

  'button:secondary': {
    color: palette.white,
    backgroundColor: palette.primary.main,
    borderColor: palette.primary.dark,
  },
  'button:secondary:hover': {
    color: palette.primary.main,
    backgroundColor: palette.white,
    borderColor: palette.primary.dark,
  },

  'button:danger': {
    color: palette.white,
    backgroundColor: palette.semantic.error,
    borderColor: palette.semantic.error,
  },
  'button:danger:hover': {
    color: palette.semantic.error,
    backgroundColor: palette.white,
    borderColor: palette.semantic.error,
  },

  'button:warning': {
    color: palette.white,
    backgroundColor: palette.semantic.warning,
    borderColor: palette.semantic.warning,
  },
  'button:warning:hover': {
    color: palette.semantic.warning,
    backgroundColor: palette.white,
    borderColor: palette.semantic.warning,
  },

  'button:success': {
    color: palette.white,
    backgroundColor: palette.semantic.success,
    borderColor: palette.semantic.success,
  },
  'button:success:hover': {
    color: palette.semantic.success,
    backgroundColor: palette.white,
    borderColor: palette.semantic.success,
  },
  link: {
    linkOnBgDark: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: palette.white,
    },
    linkOnBgDarktHover: {
      color: palette.accent.main,
    },
    linkOnBgLight: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: palette.neutral.dark,
    },
    linkOnBgLightHover: {
      color: palette.accent.main,
    },
  },
  shadow: {
    base: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px ',
  },
  spacing: {
    xs: '4px',
    s: '8px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontColors: {
    title: lighten('#000000', 0.11),
    body: lighten('#000000', 0.21),
    caption:  lighten('#000000', 0.45),
    disabled: lighten('#000000', 0.40),
  },
  fontSizes: {
    body: '16px',
    h1: '28px',
    h2: '22px',
    h3: '20px',
    h4: '18px',
    h5: '16px',
    h6: '14px',
    l: '16px',
    m: '14px',
    s: '12px',
  },
  transition: {
    default: '450ms cubic-bezier(0.23, 1, 0.32, 1) ',
    defaultAll: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) ',
    duration: '450ms ',
    durationIn: '232ms ',
    durationOut: '196ms ',
    delay: '0ms ',
    easing: 'cubic-bezier(0.23, 1, 0.32, 1) ',
  },
  sc: {
    // titleColor: 'red',
    // titleFontSize: '2em',
    // OR title: { color: '', 'font-size': }
    title: `
      color: palette.darkGrey;
      font-weight: bold;
    `,
    h1: `
    font-size: 1.85em;
    margin: .67em 0;
    `,
    h2: `font-size: 1.70em; margin: .6em 0;`,
    h3: css`font-size: 1.50em; margin: .5em 0;`,
    h4: css`font-size: 1.40em; margin: .5em 0;`,
    h5: css`font-size: 1.30em; margin: .5em 0;`,
    h6: css`font-size: 1.10em; margin: .5em 0;`,
  },
};
