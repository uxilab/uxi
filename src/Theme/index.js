import { palette as mainPalette } from './palette';
import ThemeProvider from './ThemeProvider';
import { lighten, darken } from './colorManipulator';

export const palette = mainPalette;

const fonts = {
  fontFamily: 'Open sans, sans-serif',
};

export const theme = {
  wrapper: {
    body: {
      height: '100%',
      margin: 0,
      padding: 0,
    },
    html: {
      height: '100%',
      margin: 0,
      padding: 0,
      background: '#F3F3F2',
      fontFamily: '\'Source Sans Pro\', sans-serif',
      color: palette.darkGrey,
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    li: {
      listStyleType: 'circle',
      marginLeft: '20px',
      paddingLeft: '4px',
    },
    'h1, h2, h3, h4': {
      color: palette.lightBlack,
    },
    table: {
      margin: 0,
      padding: 0,
    },
    td: {
      padding: '5px 10px',
    },
  },
  root: {
    fontSize: '14p',
  },
  border: {
    default: '1px solid #e9e9e9',
  },
  palette,
  background: {
    light: '#FFFFFF',
    dark: palette.blues.YankeesBlue,
  },
  padding: {
    breathPadding: '48px',
    defaultPadding: '24px',
    title: '15px 0',
    heading: '10px 0',
  },
  dimensions: {
    mainHeaderHeight: '80px',
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
        color: darken('#ffffff', 0.21),
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
  link: {
    linkOnBgDark: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: palette.white,
    },
    linkOnBgDarktHover: {
      color: palette.primary,
    },
    linkOnBgLight: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: palette.darkGrey,
    },
    linkOnBgLightHover: {
      color: palette.primary,
    },
  },
};

export default ThemeProvider;
