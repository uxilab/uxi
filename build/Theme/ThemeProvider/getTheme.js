'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTheme;

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTheme() {
  var overriddenTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var theme = (0, _simpleAssign2.default)({}, _index.theme, {
    //introduce theme
  }, overriddenTheme);

  return theme;
} /**
   * Get CluedIn Theme
   */