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

var _index = require('../index');

var _getTheme = require('./getTheme');

var _getTheme2 = _interopRequireDefault(_getTheme);

var _radium = require('radium');

var _reactHelmet = require('react-helmet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeProvider = function (_Component) {
  (0, _inherits3.default)(ThemeProvider, _Component);

  function ThemeProvider() {
    (0, _classCallCheck3.default)(this, ThemeProvider);
    return (0, _possibleConstructorReturn3.default)(this, (ThemeProvider.__proto__ || (0, _getPrototypeOf2.default)(ThemeProvider)).apply(this, arguments));
  }

  (0, _createClass3.default)(ThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        theme: this.props.theme || (0, _getTheme2.default)(this.props.extendTheme),
        isFixedWidth: this.isFixedWidth.bind(this)
      };
    }
  }, {
    key: 'isFixedWidth',
    value: function isFixedWidth() {
      var isContained = this.props.isContained;


      return isContained;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        _radium.StyleRoot,
        null,
        _react2.default.createElement(
          'div',
          { className: 'uxi-root' },
          _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700', rel: 'stylesheet' }),
            _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,600,700', rel: 'stylesheet' })
          ),
          _react2.default.createElement(_radium.Style, {
            rules: _index.theme.wrapper
          }),
          _react2.default.createElement(_radium.Style, {
            scopeSelector: '.uxi-root',
            rules: (0, _simpleAssign2.default)({}, _index.theme.root, _index.theme.fixedWidth)
          }),
          children
        )
      );
    }
  }]);
  return ThemeProvider;
}(_react.Component);

ThemeProvider.childContextTypes = {
  theme: _react.PropTypes.object.isRequired,
  isFixedWidth: _react.PropTypes.func
};
ThemeProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _react.PropTypes.element,
  theme: _react.PropTypes.object,
  extendTheme: _react.PropTypes.object,
  isContained: _react.PropTypes.bool
} : {};
exports.default = ThemeProvider;