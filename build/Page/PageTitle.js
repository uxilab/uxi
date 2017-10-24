'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageTitleStyle = {
  fontSize: '28px',
  fontWeight: 500,
  marginBottom: '24px',
  marginTop: '8px'
};

var PageTitle = function PageTitle(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'h1',
    { style: PageTitleStyle, className: 'uxi-page-title' },
    children
  );
};

exports.default = PageTitle;