'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabStyle = {
  liMainStyle: {
    margin: 0,
    padding: '15px 30px',
    display: 'inline-block',
    cursor: 'pointer',
    fontFamily: '\'Fira sans\', sans-serif',
    color: '#37373a',
    fontSize: '16px',
    background: '#fff'
  },
  borderFirst: {
    borderLeft: '1px solid #D4DAD1',
    borderRight: '1px solid #D4DAD1'
  },
  border: {
    borderRight: '1px solid #D4DAD1'
  },
  li: {
    margin: 0,
    padding: '15px 30px',
    display: 'inline-block',
    cursor: 'pointer'
  },
  liSelected: {
    color: '#06979e',
    background: '#fff'
  },
  liMainStyleSelected: {
    color: '#000000',
    background: '#F3F3F2'
  }
};

exports.default = _react2.default.createClass({
  displayName: 'Tab',

  propTypes: {
    className: _react.PropTypes.string,
    id: _react.PropTypes.string,
    isMainStyle: _react.PropTypes.bool,
    isFirst: _react.PropTypes.bool,
    focus: _react.PropTypes.bool,
    selected: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    activeTabClassName: _react.PropTypes.string,
    disabledTabClassName: _react.PropTypes.string,
    panelId: _react.PropTypes.string,
    children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      focus: false,
      selected: false,
      id: null,
      panelId: null,
      activeTabClassName: 'ReactTabs__Tab--selected',
      disabledTabClassName: 'ReactTabs__Tab--disabled'
    };
  },
  componentDidMount: function componentDidMount() {
    this.checkFocus();
  },
  componentDidUpdate: function componentDidUpdate() {
    this.checkFocus();
  },
  checkFocus: function checkFocus() {
    if (this.props.selected && this.props.focus) {
      (0, _reactDom.findDOMNode)(this).focus();
    }
  },
  render: function render() {
    var _cx;

    var _props = this.props,
        selected = _props.selected,
        disabled = _props.disabled,
        panelId = _props.panelId,
        activeTabClassName = _props.activeTabClassName,
        disabledTabClassName = _props.disabledTabClassName,
        className = _props.className,
        children = _props.children,
        id = _props.id,
        isMainStyle = _props.isMainStyle,
        isFirst = _props.isFirst,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['selected', 'disabled', 'panelId', 'activeTabClassName', 'disabledTabClassName', 'className', 'children', 'id', 'isMainStyle', 'isFirst']);


    var mergedStyle = (0, _simpleAssign2.default)({}, TabStyle.li, isFirst ? {} : {});

    if (isMainStyle) {
      mergedStyle = (0, _simpleAssign2.default)({}, TabStyle.liMainStyle, isFirst ? TabStyle.borderFirst : TabStyle.border);
    }

    delete attributes.focus;

    if (selected) {
      if (!isMainStyle) {
        mergedStyle = (0, _simpleAssign2.default)({}, mergedStyle, TabStyle.liSelected, isFirst ? TabStyle.borderFirst : TabStyle.border);
      } else {
        mergedStyle = (0, _simpleAssign2.default)({}, mergedStyle, TabStyle.liMainStyleSelected, isFirst ? {} : {});
      }
    }

    return _react2.default.createElement(
      'li',
      (0, _extends3.default)({}, attributes, {
        style: mergedStyle,
        className: (0, _classnames2.default)(
        // 'ReactTabs__Tab',
        className, (_cx = {}, (0, _defineProperty3.default)(_cx, activeTabClassName, selected), (0, _defineProperty3.default)(_cx, disabledTabClassName, disabled), _cx)),
        role: 'tab',
        id: id,
        'aria-selected': selected ? 'true' : 'false',
        'aria-disabled': disabled ? 'true' : 'false',
        'aria-controls': panelId,
        tabIndex: selected ? '0' : null
      }),
      children
    );
  }
});