'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MarketingText = require('./MarketingText');

var _MarketingText2 = _interopRequireDefault(_MarketingText);

var _Theme = require('../Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarketingTitle = function MarketingTitle(_ref) {
  var text = _ref.text,
      isHeading = _ref.isHeading,
      children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style;

  var titleType = 'title';
  var titleStyle = {
    padding: _Theme.theme.padding.title
  };

  if (isHeading) {
    titleType = 'heading';
    titleStyle = {
      padding: _Theme.theme.padding.heading
    };
  }

  var mergedStyle = (0, _simpleAssign2.default)({}, titleStyle, style);

  return _react2.default.createElement(
    'div',
    { style: mergedStyle },
    _react2.default.createElement(
      _MarketingText2.default,
      { type: titleType },
      text
    ),
    children
  );
};

exports.default = MarketingTitle;