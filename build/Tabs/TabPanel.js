'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'TabPanel',

  propTypes: {
    children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string]),
    className: _react.PropTypes.string,
    id: _react.PropTypes.string,
    selected: _react.PropTypes.bool,
    style: _react.PropTypes.object,
    tabId: _react.PropTypes.string
  },

  contextTypes: {
    forceRenderTabPanel: _react.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      selected: false,
      id: null,
      tabId: null
    };
  },
  render: function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        selected = _props.selected,
        id = _props.id,
        tabId = _props.tabId,
        style = _props.style,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'selected', 'id', 'tabId', 'style']);


    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, attributes, {
        className: (0, _classnames2.default)(
        // 'ReactTabs__TabPanel',
        className, {
          'ReactTabs__TabPanel--selected': selected
        }),
        role: 'tabpanel',
        id: id,
        'aria-labelledby': tabId,
        style: (0, _extends3.default)({ padding: '15px 0' }, style, { display: selected ? null : 'none' })
      }),
      this.context.forceRenderTabPanel || selected ? children : null
    );
  }
});