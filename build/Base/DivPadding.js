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

var ComponentWithPadding = function (_Component) {
  (0, _inherits3.default)(ComponentWithPadding, _Component);

  function ComponentWithPadding() {
    (0, _classCallCheck3.default)(this, ComponentWithPadding);
    return (0, _possibleConstructorReturn3.default)(this, (ComponentWithPadding.__proto__ || (0, _getPrototypeOf2.default)(ComponentWithPadding)).apply(this, arguments));
  }

  (0, _createClass3.default)(ComponentWithPadding, [{
    key: 'getMargin',
    value: function getMargin() {
      var margin = this.props.margin;


      if (!margin) {
        return {};
      }

      if (margin.toLowerCase() === 'xs') {
        return {
          margin: '5px'
        };
      }

      if (margin.toLowerCase() === 's') {
        return {
          margin: '15px'
        };
      }

      if (margin.toLowerCase() === 'm') {
        return {
          margin: '30px'
        };
      }

      if (margin.toLowerCase() === 'l') {
        return {
          margin: '60px'
        };
      }

      return {};
    }
  }, {
    key: 'getPadding',
    value: function getPadding() {
      var padding = this.props.padding;


      if (!padding) {
        return {};
      }

      if (padding.toLowerCase() === 'xs') {
        return {
          padding: '5px'
        };
      }

      if (padding.toLowerCase() === 's') {
        return {
          padding: '15px'
        };
      }

      if (padding.toLowerCase() === 'm') {
        return {
          padding: '30px'
        };
      }

      if (padding.toLowerCase() === 'l') {
        return {
          padding: '60px'
        };
      }

      return {};
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      var stylesFromComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var style = this.props.style;


      return (0, _simpleAssign2.default)({}, style || {}, this.getPadding(), this.getMargin(), stylesFromComponent);
    }
  }]);
  return ComponentWithPadding;
}(_react.Component);

ComponentWithPadding.propTypes = process.env.NODE_ENV !== "production" ? {
  margin: _react.PropTypes.oneOf(['xs', 's', 'm', 'l', 'XS', 'S', 'M', 'L']),
  padding: _react.PropTypes.oneOf(['xs', 's', 'm', 'l', 'XS', 'S', 'M', 'L']),
  style: _react.PropTypes.object
} : {};

exports.default = ComponentWithPadding;