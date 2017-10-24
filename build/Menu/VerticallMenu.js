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

var _radium = require('radium');

var _ThemeComponent2 = require('../Base/ThemeComponent');

var _ThemeComponent3 = _interopRequireDefault(_ThemeComponent2);

var _VerticallMenu = require('./VerticallMenu.style');

var _VerticallMenu2 = _interopRequireDefault(_VerticallMenu);

var _colorManipulator = require('../Theme/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticallMenu = function (_ThemeComponent) {
  (0, _inherits3.default)(VerticallMenu, _ThemeComponent);

  function VerticallMenu() {
    (0, _classCallCheck3.default)(this, VerticallMenu);
    return (0, _possibleConstructorReturn3.default)(this, (VerticallMenu.__proto__ || (0, _getPrototypeOf2.default)(VerticallMenu)).apply(this, arguments));
  }

  (0, _createClass3.default)(VerticallMenu, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var verticalMergedStyle = this.getStyle('VerticallMenu', _VerticallMenu2.default.root);

      var menuItems = _react2.default.Children.map(children, function (child, menuNumber) {
        if (_react2.default.isValidElement(child)) {
          return _react2.default.cloneElement(child, {
            style: {
              display: 'block',
              height: '40px',
              lineHeight: '40px',
              padding: '0 15px',
              cursor: 'pointer'
            },
            key: 'menuItem-' + menuNumber
          });
        }
        return child;
      });

      return _react2.default.createElement(
        'ul',
        { className: 'uxi-vertical-menu', style: verticalMergedStyle },
        _react2.default.createElement(_radium.Style, {
          scopeSelector: '.uxi-vertical-menu',
          rules: {
            '.uxi-menu-item': {
              borderRight: '5px solid transparent'
            },
            '.uxi-menu-item:hover': {
              background: (0, _colorManipulator.lighten)(this.context.theme.palette.accent.main, 0.9),
              borderRight: '4px solid transparent'
            },
            '.uxi-menu-item a': {
              color: this.context.theme.palette.neutral.dark,
              textDecoration: 'none',
              display: 'block'
            },
            '.uxi-menu-item a:hover': {
              color: this.context.theme.palette.primary
            },
            '.uxi-menu-item.uxi-active': {
              background: (0, _colorManipulator.lighten)(this.context.theme.palette.accent.main, 0.9),
              borderRight: '4px solid ' + this.context.theme.palette.accent.main,
              color: this.context.theme.palette.accent.dark
            },
            '.uxi-menu-item.uxi-active:hover': {
              background: (0, _colorManipulator.lighten)(this.context.theme.palette.accent.main, 0.7),
              borderRight: '4px solid ' + this.context.theme.palette.accent.main,
              color: this.context.theme.palette.neutral.darker
            },
            '.uxi-menu-item.uxi-active a': {
              color: this.context.theme.palette.accent.dark
            }
          }
        }),
        menuItems
      );
    }
  }]);
  return VerticallMenu;
}(_ThemeComponent3.default);

exports.default = VerticallMenu;