'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = undefined;

var _palette = require('./palette');

var _ThemeProvider = require('./ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = exports.theme = {
  palette: _palette.palette,
  title: {
    color: '#586672'
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: _palette.palette.primary
  },
  button: {
    backgroundColor: _palette.palette.lightWhite,
    color: _palette.palette.lightBlack,
    borderColor: _palette.palette.grey
  },
  'button:hover': {
    color: _palette.palette.lightBlack,
    backgroundColor: _palette.palette.white
  },
  'button:primary': {
    color: _palette.palette.white,
    backgroundColor: _palette.palette.primary,
    borderColor: _palette.palette.primary
  },
  'button:primary:hover': {
    color: _palette.palette.primary,
    backgroundColor: _palette.palette.white,
    borderColor: _palette.palette.primaryDark
  },
  'button:secondary': {
    color: _palette.palette.white,
    backgroundColor: _palette.palette.secondary,
    borderColor: _palette.palette.secondary
  },
  'button:secondary:hover': {
    color: _palette.palette.secondary,
    backgroundColor: _palette.palette.white,
    borderColor: _palette.palette.secondaryDark
  }
};

exports.default = _ThemeProvider2.default;