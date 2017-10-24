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

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _ThemeComponent2 = require('../Base/ThemeComponent');

var _ThemeComponent3 = _interopRequireDefault(_ThemeComponent2);

var _HorizontalMenu = require('./HorizontalMenu.style');

var _HorizontalMenu2 = _interopRequireDefault(_HorizontalMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HorizontalMenu = function (_ThemeComponent) {
  (0, _inherits3.default)(HorizontalMenu, _ThemeComponent);

  function HorizontalMenu() {
    (0, _classCallCheck3.default)(this, HorizontalMenu);
    return (0, _possibleConstructorReturn3.default)(this, (HorizontalMenu.__proto__ || (0, _getPrototypeOf2.default)(HorizontalMenu)).apply(this, arguments));
  }

  (0, _createClass3.default)(HorizontalMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          isMain = _props.isMain;

      var globalHeaderMergedStyle = this.getStyle('HorizontalMenu', _HorizontalMenu2.default.root);
      var isDark = this.context.isDarkTheme();

      var menuItems = _react2.default.Children.map(children, function (child, menuNumber) {
        if (_react2.default.isValidElement(child)) {
          return _react2.default.cloneElement(child, {
            style: {
              display: 'inline-block',
              height: isMain ? _this2.context.theme.dimensions.mainHeaderHeight : '40px',
              lineHeight: isMain ? _this2.context.theme.dimensions.mainHeaderHeight : '40px'
            },
            key: 'menuItem-' + menuNumber
          });
        }
        return child;
      });

      return _react2.default.createElement(
        'ul',
        { className: 'uxi-horizontal-menu', style: globalHeaderMergedStyle },
        _react2.default.createElement(_radium.Style, {
          scopeSelector: '.uxi-horizontal-menu',
          rules: {
            '.uxi-menu-item a': (0, _simpleAssign2.default)({}, isDark ? this.context.theme.link.linkOnBgDark : this.context.theme.link.linkOnBgLight, {
              display: 'block',
              paddingLeft: this.context.theme.padding.defaultPadding,
              paddingRight: this.context.theme.padding.defaultPadding,
              fontSize: '14px',
              transition: 'color 0.5s ease'
            }),
            '.uxi-menu-item a:hover': isDark ? this.context.theme.link.linkOnBgDarktHover : this.context.theme.link.linkOnBgLightHover
          }
        }),
        menuItems
      );
    }
  }]);
  return HorizontalMenu;
}(_ThemeComponent3.default);

exports.default = HorizontalMenu;