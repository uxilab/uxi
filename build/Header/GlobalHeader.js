'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _ThemeComponent2 = require('../Base/ThemeComponent');

var _ThemeComponent3 = _interopRequireDefault(_ThemeComponent2);

var _GlobalHeader = require('./GlobalHeader.style');

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlobalHeader = function (_ThemeComponent) {
  (0, _inherits3.default)(GlobalHeader, _ThemeComponent);

  function GlobalHeader() {
    (0, _classCallCheck3.default)(this, GlobalHeader);
    return (0, _possibleConstructorReturn3.default)(this, (GlobalHeader.__proto__ || (0, _getPrototypeOf2.default)(GlobalHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(GlobalHeader, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isDarkTheme: this.isDarkTheme.bind(this)
      };
    }
  }, {
    key: 'isDarkTheme',
    value: function isDarkTheme() {
      var isDark = this.props.isDark;


      return isDark;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isContained = _props.isContained;

      var isDark = this.isDarkTheme();
      var isContainedResult = isContained ? true : this.context.isFixedWidth();

      var globalHeaderMergedStyle = this.getStyle('GlobalHeader', _GlobalHeader2.default.header);

      var mergedStyle = (0, _simpleAssign2.default)({}, globalHeaderMergedStyle, (0, _extends3.default)({
        paddingLeft: this.context.theme.padding.breathPadding,
        paddingRight: this.context.theme.padding.breathPadding,
        height: this.context.theme.dimensions.mainHeaderHeight
      }, this.context.theme.fontsAndColor.fontsAndColor), isDark ? _GlobalHeader2.default.dark : _GlobalHeader2.default.light);

      if (isContainedResult) {
        return _react2.default.createElement(
          'header',
          { style: mergedStyle },
          _react2.default.createElement(
            'div',
            { className: 'uxi_container' },
            children
          )
        );
      }
      return _react2.default.createElement(
        'header',
        { style: mergedStyle },
        children
      );
    }
  }]);
  return GlobalHeader;
}(_ThemeComponent3.default);

GlobalHeader.childContextTypes = {
  isDarkTheme: _react.PropTypes.func
};
GlobalHeader.contextTypes = {
  theme: _react.PropTypes.object,
  isFixedWidth: _react.PropTypes.func
};
exports.default = GlobalHeader;