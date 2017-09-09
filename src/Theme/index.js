import { palette as mainPalette } from './palette';
import ThemeProvider from './ThemeProvider';

export const palette = mainPalette;

export const theme = {
  palette,
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
