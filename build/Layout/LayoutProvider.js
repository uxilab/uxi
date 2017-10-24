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

var _Layout = require('./Layout.style');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutProvider = function (_Component) {
  (0, _inherits3.default)(LayoutProvider, _Component);

  function LayoutProvider() {
    (0, _classCallCheck3.default)(this, LayoutProvider);
    return (0, _possibleConstructorReturn3.default)(this, (LayoutProvider.__proto__ || (0, _getPrototypeOf2.default)(LayoutProvider)).apply(this, arguments));
  }

  (0, _createClass3.default)(LayoutProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var layouts = this.props.layouts;


      return {
        layouts: layouts
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_radium.Style, { rules: _Layout2.default }),
        children
      );
    }
  }]);
  return LayoutProvider;
}(_react.Component);

LayoutProvider.childContextTypes = {
  layouts: _react.PropTypes.array
};

exports.default = LayoutProvider;