'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Theme = require('../../Theme');

var _Theme2 = _interopRequireDefault(_Theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('should render a Button', function () {
  var testValue = 'YO!';
  var wrapper = shallow(_react2.default.createElement(
    _Theme2.default,
    null,
    _react2.default.createElement(_Button2.default, { onClick: function onClick() {}, text: testValue })
  ));
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.props().text).toContain(testValue);
});