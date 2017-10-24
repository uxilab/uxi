'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return _react2.default.createElement(
    'li',
    { style: style },
    children
  );
};

exports.default = ListItem;