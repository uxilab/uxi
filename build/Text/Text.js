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

var _Theme = require('../Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function (_Component) {
  (0, _inherits3.default)(Text, _Component);

  function Text() {
    (0, _classCallCheck3.default)(this, Text);
    return (0, _possibleConstructorReturn3.default)(this, (Text.__proto__ || (0, _getPrototypeOf2.default)(Text)).apply(this, arguments));
  }

  (0, _createClass3.default)(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$type = _props.type,
          type = _props$type === undefined ? 'body' : _props$type,
          children = _props.children,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style;

      var typeLowerCase = type.toLowerCase();
      var isDark = this.context.isDarkTheme ? this.context.isDarkTheme() : false;
      var correctStyling = isDark ? _Theme.theme.fontsAndColor.dark[typeLowerCase] : _Theme.theme.fontsAndColor.light[typeLowerCase];
      var defaultStyle = isDark ? _Theme.theme.fontsAndColor.dark.body : _Theme.theme.fontsAndColor.light.body;

      var mergedStyle = (0, _simpleAssign2.default)({}, correctStyling || defaultStyle, style);

      if (type === 'paragraph') {
        return _react2.default.createElement(
          'p',
          { style: mergedStyle },
          children
        );
      }

      return _react2.default.createElement(
        'span',
        { style: mergedStyle },
        children
      );
    }
  }]);
  return Text;
}(_react.Component);

Text.contextTypes = {
  isDarkTheme: _react.PropTypes.func
};
exports.default = Text;