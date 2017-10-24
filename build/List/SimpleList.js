'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleList = undefined;

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultListStyle = {
  margin: 0,
  padding: 0,
  listStyle: 'none'
};

var defaultItemListStyle = {
  margin: 0,
  padding: '5px 0'
};

var bulltItemListStyle = {
  listStyleType: 'circle',
  marginLeft: '20px',
  paddingLeft: '4px',
  paddingTop: '5px',
  paddingBottom: '5px'
};

var SimpleList = exports.SimpleList = function SimpleList(_ref) {
  var children = _ref.children,
      isBullet = _ref.isBullet,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      _ref$listItemStyle = _ref.listItemStyle,
      listItemStyle = _ref$listItemStyle === undefined ? {} : _ref$listItemStyle;

  var listStyle = (0, _simpleAssign2.default)({}, defaultListStyle, style || {});
  var defaultListItemStyle = isBullet ? bulltItemListStyle : defaultItemListStyle;

  defaultListItemStyle = (0, _simpleAssign2.default)({}, defaultListItemStyle, listItemStyle);

  var listItems = _react2.default.Children.map(children, function (child, menuNumber) {
    if (_react2.default.isValidElement(child)) {
      return _react2.default.cloneElement(child, {
        style: defaultListItemStyle,
        key: 'menuItem-' + menuNumber
      });
    }
    return child;
  });

  return _react2.default.createElement(
    'ul',
    { style: listStyle },
    listItems
  );
};

exports.default = SimpleList;