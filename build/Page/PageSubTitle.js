'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageSubTitleStyle = {
  fontSize: '22px',
  fontWeight: 500,
  marginBottom: '24px',
  marginTop: '8px'
};

var PageSubTitle = function PageSubTitle(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'h1',
    { style: PageSubTitleStyle, className: 'uxi-page-subTitle' },
    children
  );
};

exports.default = PageSubTitle;