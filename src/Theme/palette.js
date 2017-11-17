import { lighten } from './colorManipulator';

export const palette = {
  white: '#F3F3F2',
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
    error: '#d13f48',
    // this nwarn color looks way too pale -df
    // warning: 'rgba(247, 187, 62, 0.5)',
    warning: 'rgb(255, 152, 0)',
    info: '#3e53c1',
    success: 'rgb(0, 150, 136)',
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
