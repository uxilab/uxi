'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rippleStyle = {
  position: 'absolute',
  borderRadius: '50%',
  opacity: 0,
  width: 35,
  height: 35,
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none'
};

var wrapStyle = {
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden'
};

var Ripples = function (_Component) {
  (0, _inherits3.default)(Ripples, _Component);

  function Ripples() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Ripples);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Ripples.__proto__ || (0, _getPrototypeOf2.default)(Ripples)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      rippleStyle: {}
    }, _this.handleClick = function (ev) {
      ev.stopPropagation();

      var _this$props = _this.props,
          onClick = _this$props.onClick,
          color = _this$props.color,
          during = _this$props.during;
      var pageX = ev.pageX,
          pageY = ev.pageY,
          _ev$currentTarget = ev.currentTarget,
          offsetLeft = _ev$currentTarget.offsetLeft,
          offsetTop = _ev$currentTarget.offsetTop,
          offsetWidth = _ev$currentTarget.offsetWidth,
          offsetHeight = _ev$currentTarget.offsetHeight;


      var left = pageX - offsetLeft;
      var top = pageY - offsetTop;

      _this.setState({
        rippleStyle: {
          top: top, left: left,
          opacity: 1,
          backgroundColor: color
        }
      });

      setTimeout(function () {
        var size = Math.max(offsetWidth, offsetHeight);

        _this.setState({
          rippleStyle: {
            top: top, left: left,
            backgroundColor: color,
            transition: 'all ' + during + 'ms',
            transform: rippleStyle.transform + ' scale(' + size / 9 + ')',
            opacity: 0
          }
        });
      }, 50);

      if (typeof onClick === 'function') {
        onClick(ev);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Ripples, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          during = _props.during,
          props = (0, _objectWithoutProperties3.default)(_props, ['children', 'style', 'during']);
      var state = this.state,
          handleClick = this.handleClick;


      var s = (0, _extends3.default)({}, style, wrapStyle);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, props, { style: s, onClick: handleClick }),
        children,
        _react2.default.createElement('s', { style: (0, _extends3.default)({}, rippleStyle, state.rippleStyle) })
      );
    }
  }]);
  return Ripples;
}(_react.Component);

Ripples.defaultProps = {
  during: 600,
  color: 'rgba(0, 0, 0, .3)'
};
Ripples.propTypes = process.env.NODE_ENV !== "production" ? {
  during: _react.PropTypes.number,
  color: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  children: _react.PropTypes.node,
  style: _react.PropTypes.object
} : {};
exports.default = Ripples;