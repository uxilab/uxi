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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Ripples = require('../Motion/Ripples');

var _Ripples2 = _interopRequireDefault(_Ripples);

var _ThemeComponent2 = require('../Base/ThemeComponent');

var _ThemeComponent3 = _interopRequireDefault(_ThemeComponent2);

var _Button = require('./Button.style');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_ThemeComponent) {
  (0, _inherits3.default)(Button, _ThemeComponent);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          text = _props.text,
          type = _props.type,
          click = _props.click,
          link = _props.link,
          disabled = _props.disabled,
          icon = _props.icon,
          iconPosition = _props.iconPosition,
          isFullWidth = _props.isFullWidth;

      var outerStyle = isFullWidth ? { width: '100%' } : {};
      var iconContentBefore = void 0;
      var iconContentAfter = void 0;
      var textOrMessage = message || text;

      var buttonStyles = [this.getStyle('button', _Button2.default.baseButton)];

      if (Button.isValidType(type)) {
        buttonStyles.push(this.getSubStyle('button', type.toString()));
      }

      if (disabled) {
        buttonStyles.push(_Button2.default.disabled);
      } else if (Button.isValidType(type)) {
        buttonStyles.push(this.getSubStylePseudoElement('button', type.toString(), 'hover'));
      } else {
        buttonStyles.push(this.getPseudoElement('button', 'hover'));
      }

      if (icon) {
        var isHover = _radium2.default.getState(this.state, 'button', ':hover');
        var hoverIcon = { color: _Button2.default.button.color };

        if (type === 'primary' || type === 'secondary') {
          hoverIcon = { color: '#fff' };
        }

        if (isHover && type !== 'primary' && type !== 'secondary') {
          hoverIcon = { color: _Button2.default['button:hover'].color };
        }

        if (isHover && type === 'primary') {
          hoverIcon = { color: _Button2.default['button:primary:hover'].color };
        }

        if (isHover && type === 'secondary') {
          hoverIcon = { color: _Button2.default['button:secondary:hover'].color };
        }

        if (iconPosition && iconPosition === 'after') {
          iconContentAfter = _react2.default.createElement(
            'div',
            { style: { position: 'absolute', right: '6px', top: '5px' } },
            _react2.default.cloneElement(icon, hoverIcon)
          );
          buttonStyles.push({ paddingRight: '34px' });
        } else {
          iconContentBefore = _react2.default.createElement(
            'div',
            { style: { position: 'absolute', left: '6px', top: '5px' } },
            _react2.default.cloneElement(icon, hoverIcon)
          );
          buttonStyles.push({ paddingLeft: '34px' });
        }
      }

      if (isFullWidth) {
        buttonStyles.push({ width: '100%' });
      }

      if (link) {
        buttonStyles.push({
          textDecoration: 'none',
          position: 'relative',
          verticalAlign: 'top',
          fontWeight: 'normal'
        });

        return _react2.default.createElement(
          'a',
          { onClick: click, style: buttonStyles, href: link },
          iconContentBefore,
          _react2.default.createElement(
            'span',
            { style: _Button2.default.text },
            textOrMessage
          ),
          iconContentAfter
        );
      }

      var buttonContent = _react2.default.createElement(
        'button',
        { key: 'button', style: buttonStyles, onClick: click },
        iconContentBefore,
        _react2.default.createElement(
          'span',
          { style: _Button2.default.text },
          textOrMessage
        ),
        iconContentAfter
      );

      return _react2.default.createElement(
        _Ripples2.default,
        { style: outerStyle },
        buttonContent
      );
    }
  }], [{
    key: 'isValidType',
    value: function isValidType(type) {
      return type && (type === 'primary' || type === 'secondary');
    }
  }]);
  return Button;
}(_ThemeComponent3.default);

exports.default = (0, _radium2.default)(Button);