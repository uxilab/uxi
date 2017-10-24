'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _Layout = require('./Layout.style');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style;
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(_radium.Style, { rules: _Layout2.default }),
    children
  );
};

exports.default = Layout;