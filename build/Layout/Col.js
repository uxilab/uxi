'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Col = function Col(_ref) {
  var size = _ref.size,
      mobileSize = _ref.mobileSize,
      children = _ref.children;

  var className = 'uxi_col';

  if (size) {
    className += ' m' + size;
  }

  if (mobileSize) {
    className += ' s' + mobileSize;
  } else {
    className += ' s' + 12;
  }

  return _react2.default.createElement(
    'div',
    { className: className },
    children
  );
};

exports.default = Col;