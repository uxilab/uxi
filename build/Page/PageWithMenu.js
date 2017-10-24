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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMenuStyle = function getMenuStyle(menuWidth) {
  return {
    width: '100%',
    '@media (min-width: 768px)': {
      width: menuWidth,
      minWidth: menuWidth
    }
  };
};

var getContentStyle = function getContentStyle(style) {
  return (0, _extends3.default)({
    '@media (min-width: 768px)': {
      display: 'flex'
    }
  }, style);
};

var PageWithMenuContent = function PageWithMenuContent(_ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      menu = _ref.menu,
      menuWidth = _ref.menuWidth;
  return _react2.default.createElement(
    'div',
    { style: getContentStyle(style) },
    _react2.default.createElement(
      'div',
      { style: getMenuStyle(menuWidth) },
      menu
    ),
    _react2.default.createElement(
      'div',
      { style: { flex: 1 } },
      children
    )
  );
};

var RadiumPageWithMenuContent = (0, _radium2.default)(PageWithMenuContent);

var PageWithMenu = function (_Component) {
  (0, _inherits3.default)(PageWithMenu, _Component);

  function PageWithMenu() {
    (0, _classCallCheck3.default)(this, PageWithMenu);
    return (0, _possibleConstructorReturn3.default)(this, (PageWithMenu.__proto__ || (0, _getPrototypeOf2.default)(PageWithMenu)).apply(this, arguments));
  }

  (0, _createClass3.default)(PageWithMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          menu = _props.menu,
          isContained = _props.isContained,
          children = _props.children,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$menuWidth = _props.menuWidth,
          menuWidth = _props$menuWidth === undefined ? '250px' : _props$menuWidth;

      var isContainedResult = isContained ? true : this.context.isFixedWidth();

      if (isContainedResult) {
        return _react2.default.createElement(
          'div',
          { className: 'uxi_container' },
          _react2.default.createElement(
            RadiumPageWithMenuContent,
            { menu: menu, menuWidth: menuWidth, style: style },
            children
          )
        );
      }
      return _react2.default.createElement(
        RadiumPageWithMenuContent,
        { menu: menu, menuWidth: menuWidth, style: style },
        children
      );
    }
  }]);
  return PageWithMenu;
}(_react.Component);

PageWithMenu.contextTypes = {
  isFixedWidth: _react.PropTypes.func
};
exports.default = (0, _radium2.default)(PageWithMenu);