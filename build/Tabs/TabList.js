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

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderChildren(props) {
  return _react2.default.Children.map(props.children, function (child, index) {
    // if child is not a tab we don't need to clone it
    // since we don't need to add custom props
    var isFirst = false;
    if (child.type !== _Tab2.default) {
      return child;
    }

    if (index === 0) {
      isFirst = true;
    }

    var clonedProps = {
      isMainStyle: props.isMainStyle,
      activeTabClassName: props.activeTabClassName,
      disabledTabClassName: props.disabledTabClassName,
      isFirst: isFirst
    };

    return _react2.default.cloneElement(child, clonedProps);
  });
}

var TabListStyle = {
  tabList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    background: '#EEEEEE'
  },
  tabListMain: {
    borderTop: 0,
    borderBottom: '1px solid #D4DAD1',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    background: '#fff'
  }
};

exports.default = _react2.default.createClass({
  displayName: 'TabList',

  propTypes: {
    className: _react.PropTypes.string,
    activeTabClassName: _react.PropTypes.string,
    disabledTabClassName: _react.PropTypes.string,
    isMainStyle: _react.PropTypes.bool,
    children: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array])
  },

  render: function render() {
    var _props = this.props,
        className = _props.className,
        activeTabClassName = _props.activeTabClassName,
        disabledTabClassName = _props.disabledTabClassName,
        children = _props.children,
        isMainStyle = _props.isMainStyle,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['className', 'activeTabClassName', 'disabledTabClassName', 'children', 'isMainStyle']);


    var mergedStyle = TabListStyle.tabList;

    if (isMainStyle) {
      mergedStyle = TabListStyle.tabListMain;
    }
    return _react2.default.createElement(
      'ul',
      (0, _extends3.default)({
        style: mergedStyle
      }, attributes, {
        className: (0, _classnames2.default)(
        // 'ReactTabs__TabList',
        className),
        role: 'tablist'
      }),
      renderChildren({ activeTabClassName: activeTabClassName, isMainStyle: isMainStyle, disabledTabClassName: disabledTabClassName, children: children })
    );
  }
});