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

var _Theme = require('../Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_ThemeComponent) {
  (0, _inherits3.default)(Button, _ThemeComponent);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'isValidType',
    value: function isValidType(type) {
      return type && (type === 'primary' || type === 'secondary');
    }
  }, {
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

      var buttonContent = void 0;
      var outerStyle = isFullWidth ? { width: '100%' } : {};
      var iconContentBefore = void 0;
      var iconContentAfter = void 0;
      var textOrMessage = message || text;

      var buttonStyles = [this.getStyle('button', _Button2.default.button)];

      if (this.isValidType(type)) {
        buttonStyles.push(this.getSubStyle('button', type));
      }

      if (disabled) {
        buttonStyles.push(_Button2.default.disabled);
      } else {
        if (this.isValidType(type)) {
          buttonStyles.push(this.getSubStylePseudoElement('button', type, 'hover'));
        } else {
          buttonStyles.push(this.getPseudoElement('button', 'hover'));
        }
      }

      if (icon) {
        var isHover = _radium2.default.getState(this.state, 'button', ':hover');
        var hoverIcon = { color: _Theme.theme['button'].color };

        if (type === 'primary' || type === 'secondary') {
          hoverIcon = { color: '#fff' };
        }

        if (isHover && type !== 'primary' && type !== 'secondary') {
          hoverIcon = { color: _Theme.theme['button:hover'].color };
        }

        if (isHover && type === 'primary') {
          hoverIcon = { color: _Theme.theme['button:primary:hover'].color };
        }

        if (isHover && type === 'secondary') {
          hoverIcon = { color: _Theme.theme['button:secondary:hover'].color };
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

      buttonContent = _react2.default.createElement(
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
  }]);
  return Button;
}(_ThemeComponent3.default);

var havingClicks = function havingClicks(props, propName, componentName) {
  var clickMethod = props.click || props.onClick;

  if (!clickMethod) {
    return new Error('you must pass either one of click, onClick or link to \'uxi/' + componentName + '\'.');
  }

  if (!{}.toString.call(props.click) === '[object Function]') {
    if (!props.link) {
      return new Error('you must pass either one of click or link to \'uxi/' + componentName + '\'.');
    }
  } else {
    return null; // means props's been validated
  }
};

Button.propTypes = {
  message: _react.PropTypes.node,
  text: _react.PropTypes.string,
  type: _react.PropTypes.string,
  onClick: havingClicks,
  click: havingClicks,
  link: function link(props, propName, componentName) {
    if (!props.link && !props.click && !props.onClick) {
      return new Error('you must pass either one of click or link to \'' + componentName + '\'.');
    }
    if ({}.toString.call(props.link) === '[object String]') {
      return null; // means props's been validated
    }
  },
  disabled: _react.PropTypes.bool,
  icon: _react.PropTypes.node,
  iconPosition: _react.PropTypes.string,
  isFullWidth: _react.PropTypes.bool,
  style: _react.PropTypes.object
};

Button.contextTypes = {
  theme: _react.PropTypes.object.isRequired
};

exports.default = (0, _radium2.default)(Button);