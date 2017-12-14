import { lighten } from './colorManipulator';

export const palette = {
  purewhite: '#FFFFFF',
  white: '#F3F3F2',
  lightGray: '#d4d4d4',
  grey: '#9a9a9a',
  darkGrey: '#222222',
  primary: {
    light: '#30556b',
    main: '#1b3c4f',
    dark: '#1c313f',
  },
  accent: {
    light: '#64cfba',
    main: '#26a29a',
    dark: '#00897a',
  },
  semantic: {
    default: '#cecece', // !important for fallback
    error: '#d13f48',
    // this nwarn color looks way too pale -df
    // warning: 'rgba(247, 187, 62, 0.5)',
    warning: '#ff9800',
    info: '#3e53c1',
    success: '#009688',
  },
  neutral: {
    darkest: lighten('#000000', 0.11),
    darker: lighten('#000000', 0.21),
    dark: lighten('#000000', 0.45),
    neutral: lighten('#000000', 0.60),
    lightDark: lighten('#000000', 0.85),
    lightestDark: lighten('#000000', 0.95),
  },
  charts: {
    color1: '#64cfba',
    color2: '#62acba',
    color3: '#5789b3',
    color4: '#476ca2',
    color5: '#335184',
    color6: '#1b3c4f',
  },
};

export default palette;
