import { palette } from './palette';
import ThemeProvider from './ThemeProvider';

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
  button: {
    backgroundColor: palette.lightWhite,
    color: palette.lightBlack,
    borderColor: palette.grey,
  },
  'button:hover': {
    color: palette.lightBlack,
    backgroundColor: palette.white,
  },
  'button:primary': {
    color: palette.white,
    backgroundColor: palette.primary,
    borderColor: palette.primary,
  },
  'button:primary:hover': {
    color: palette.primary,
    backgroundColor: palette.white,
    borderColor: palette.primaryDark,
  },
  'button:secondary': {
    color: palette.white,
    backgroundColor: palette.secondary,
    borderColor: palette.secondary,
  },
  'button:secondary:hover': {
    color: palette.secondary,
    backgroundColor: palette.white,
    borderColor: palette.secondaryDark,
  }
};

export default ThemeProvider;
