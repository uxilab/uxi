'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.palette = undefined;

var _colorManipulator = require('./colorManipulator');

var palette = exports.palette = {
  white: '#F3F3F2',
  primary: {
    light: '#30556b',
    main: '#1b3c4f',
    dark: '#1c313f'
  },
  accent: {
    light: '#64cfba',
    main: '#26a29a',
    dark: '#00897a'
  },
  semantic: {
    error: '#d13f48',
    warning: 'rgba(247, 187, 62, 0.5)',
    info: '#3e53c1'
  },
  neutral: {
    darkest: (0, _colorManipulator.lighten)('#000000', 0.11),
    darker: (0, _colorManipulator.lighten)('#000000', 0.21),
    dark: (0, _colorManipulator.lighten)('#000000', 0.45),
    neutral: (0, _colorManipulator.lighten)('#000000', 0.60),
    lightDark: (0, _colorManipulator.lighten)('#000000', 0.85),
    lightestDark: (0, _colorManipulator.lighten)('#000000', 0.95)
  },
  charts: {
    color1: '#64cfba',
    color2: '#62acba',
    color3: '#5789b3',
    color4: '#476ca2',
    color5: '#335184',
    color6: '#1b3c4f'
  }
};

exports.default = palette;