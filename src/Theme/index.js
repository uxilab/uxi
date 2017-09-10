import { palette as mainPalette } from './palette';
import ThemeProvider from './ThemeProvider';

export const palette = mainPalette;

const fonts = {
  fontFamily: 'Open sans, sans-serif',
};

export const theme = {
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
    cursor: 'pointer',
    textDecoration: 'none',
    color: palette.primary,
  },
};

export default ThemeProvider;
