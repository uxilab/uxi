'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _SimpleLayout = require('./SimpleLayout.style');

var _SimpleLayout2 = _interopRequireDefault(_SimpleLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleLayout = function SimpleLayout(_ref) {
  var _ref$columnNumber = _ref.columnNumber,
      columnNumber = _ref$columnNumber === undefined ? 1 : _ref$columnNumber,
      _ref$children = _ref.children,
      children = _ref$children === undefined ? [] : _ref$children;

  var simplayLayoutContent = [];
  var size = parseInt(12 / columnNumber, 10);

  _react2.default.Children.forEach(children, function (child, index) {
    if (!_react2.default.isValidElement(child)) return;

    simplayLayoutContent.push(_react2.default.createElement(
      'div',
      { key: 'simpleLayout-row-' + index, className: 'uxi_s_col s' + size },
      child
    ));
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_radium.Style, { rules: _SimpleLayout2.default }),
    _react2.default.createElement(
      'div',
      { className: 'uxi_s_row' },
      simplayLayoutContent
    )
  );
};

exports.default = SimpleLayout;