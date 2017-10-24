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

var Page = function (_Component) {
  (0, _inherits3.default)(Page, _Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);
    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isContained = _props.isContained,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style;

      var isContainedResult = isContained ? true : this.context.isFixedWidth();

      if (isContainedResult) {
        return _react2.default.createElement(
          'div',
          { className: 'uxi_container' },
          _react2.default.createElement(
            'div',
            { style: (0, _simpleAssign2.default)(style, { display: 'flex' }) },
            _react2.default.createElement(
              'div',
              { style: { flex: 1 } },
              children
            )
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { style: (0, _simpleAssign2.default)(style, { display: 'flex' }) },
        _react2.default.createElement(
          'div',
          { style: { flex: 1 } },
          children
        )
      );
    }
  }]);
  return Page;
}(_react.Component);

Page.contextTypes = {
  isFixedWidth: _react.PropTypes.func
};

exports.default = Page;