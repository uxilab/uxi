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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeComponent = function (_Component) {
  (0, _inherits3.default)(ThemeComponent, _Component);

  function ThemeComponent() {
    (0, _classCallCheck3.default)(this, ThemeComponent);
    return (0, _possibleConstructorReturn3.default)(this, (ThemeComponent.__proto__ || (0, _getPrototypeOf2.default)(ThemeComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(ThemeComponent, [{
    key: 'getSubStylePseudoElement',
    value: function getSubStylePseudoElement(name, subStyleName, pseudoElementName) {
      var theme = this.context.theme;
      var result = {};

      result[':' + pseudoElementName] = theme[name + ':' + subStyleName + ':' + pseudoElementName] || {};

      return result;
    }
  }, {
    key: 'getPseudoElement',
    value: function getPseudoElement(name, pseudoElement) {
      var theme = this.context.theme;
      var result = {};
      var pseudoElementStyle = theme[name + ':' + pseudoElement] || {};

      result[':' + pseudoElement] = pseudoElementStyle;

      return result;
    }
  }, {
    key: 'getSubStyle',
    value: function getSubStyle(name, subStyleName) {
      var stylesFromComponent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var theme = this.context.theme;
      var themeForComponent = theme[name + ':' + subStyleName] || {};

      return (0, _simpleAssign2.default)({}, themeForComponent, stylesFromComponent);
    }
  }, {
    key: 'getStyle',
    value: function getStyle(name) {
      var stylesFromComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = this.props.style;

      var theme = this.context.theme;
      var themeForComponent = theme[name] || {};

      return (0, _simpleAssign2.default)({}, style || {}, themeForComponent, stylesFromComponent);
    }
  }]);
  return ThemeComponent;
}(_react.Component);

ThemeComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  style: _react.PropTypes.object
} : {};

exports.default = ThemeComponent;