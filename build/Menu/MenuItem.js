'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemeComponent2 = require('../Base/ThemeComponent');

var _ThemeComponent3 = _interopRequireDefault(_ThemeComponent2);

var _MenuItem = require('./MenuItem.style');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function (_ThemeComponent) {
  (0, _inherits3.default)(MenuItem, _ThemeComponent);

  function MenuItem() {
    (0, _classCallCheck3.default)(this, MenuItem);
    return (0, _possibleConstructorReturn3.default)(this, (MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onClick = _props.onClick,
          isActive = _props.isActive;

      var mainItemMergedStyle = this.getStyle('MenuItem', _MenuItem2.default.root);
      var className = isActive ? 'uxi-menu-item uxi-active' : 'uxi-menu-item';

      return _react2.default.createElement(
        'li',
        {
          className: className,
          style: mainItemMergedStyle,
          onClick: onClick
        },
        children
      );
    }
  }]);
  return MenuItem;
}(_ThemeComponent3.default);

MenuItem.defaultProps = {
  onClick: function onClick() {}
};
exports.default = MenuItem;