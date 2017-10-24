'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Theme = require('../Theme');

exports.default = {
  header: {
    top: 0,
    right: 0,
    zIndex: 3,
    height: '48px',
    margin: 0,
    padding: 0,
    position: 'absolute',
    left: 0
  },
  dark: {
    backgroundColor: _Theme.palette.primary.main
  },
  light: {
    backgroundColor: '#fff'
  }
};