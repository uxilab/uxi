import { palette as mainPalette } from './palette';
import ThemeProvider from './ThemeProvider';

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
  },
  root: {
    fontFamily: 'sans-serif',
    fontSize: '14p',
  },
  palette,
  padding: {
    breathPadding: '48px',
    defaultPadding: '24px',
  },
  dimensions: {
    mainHeaderHeight: '80px',
  },
  fontsAndColor: {
    default: Object.assign({
      color: '#2c2d30',
    }, fonts),
    defaultOnDarkBg: Object.assign({
      color: '#fff',
    }, fonts),
  },
  title: {
    color: '#586672',
  },
  link: {
    linkOnBgLight: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: palette.black,
    },
    linkOnBgLightHover: {
      color: palette.primary,
    },
  },
};

export default ThemeProvider;
