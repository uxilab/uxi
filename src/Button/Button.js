/* @flow */

import React, { PropTypes } from 'react';
import radium from 'radium';
import Ripples from '../Motion/Ripples';
import ThemeComponent from '../Base/ThemeComponent';
import CluedInButtonStyle from './Button.style';
import { theme } from '../Theme';

type Props = {
  message: String,
  text: String,
  type: String,
  disabled: Boolean,
  icon: any,
  iconPosition: String,
  isFullWidth: Boolean,
  onClick: (event: Event) => void,
  click: (event: Event) => void,
  link: String,
  style: Object,
};

class Button extends ThemeComponent<Props> {
  isValidType(type) {
    return (type && (type === 'primary' || type === 'secondary'));
  }

  render() {
    const { message, text, type, click, link, disabled, icon, iconPosition, isFullWidth } = this.props;
    let buttonContent;
    let outerStyle = isFullWidth ? { width: '100%' } : {};
    let iconContentBefore;
    let iconContentAfter;
    const textOrMessage = message || text;
    
    const buttonStyles = [
      this.getStyle('button', CluedInButtonStyle.button),
    ];

    if (this.isValidType(type)) {
      buttonStyles.push(this.getSubStyle('button', type));
    }

    if (disabled) {
      buttonStyles.push(CluedInButtonStyle.disabled);
    } else {
      if (this.isValidType(type)) {
        buttonStyles.push(this.getSubStylePseudoElement('button', type, 'hover'));
      } else {
        buttonStyles.push(this.getPseudoElement('button', 'hover'));
      }
    }

    if (icon) {
      const isHover = radium.getState(this.state, 'button', ':hover');
      let hoverIcon = { color: theme['button'].color };

      if (type === 'primary' || type === 'secondary') {
        hoverIcon = { color: '#fff' };
      }

      if (isHover && type !== 'primary' && type !== 'secondary') {
        hoverIcon = { color: theme['button:hover'].color };
      }

      if (isHover && type === 'primary') {
        hoverIcon = { color: theme['button:primary:hover'].color };
      }

      if (isHover && type === 'secondary') {
        hoverIcon = { color: theme['button:secondary:hover'].color };
      }

      if (iconPosition && iconPosition === 'after') {
        iconContentAfter = (
          <div style={{ position: 'absolute', right: '6px', top: '5px' }}>{React.cloneElement(icon, hoverIcon)}</div>
        );
        buttonStyles.push({ paddingRight: '34px' });
      } else {
        iconContentBefore = (
          <div style={{ position: 'absolute', left: '6px', top: '5px' }}>{React.cloneElement(icon, hoverIcon)}</div>
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
        fontWeight: 'normal',
      });

      return (
        <a onClick={click} style={buttonStyles} href={link}>
          {iconContentBefore}
          <span style={CluedInButtonStyle.text}>{textOrMessage}</span>
          {iconContentAfter}
        </a>
      );
    }

    buttonContent = (
      <button key="button" style={buttonStyles} onClick={click}>
        {iconContentBefore}
        <span style={CluedInButtonStyle.text}>{textOrMessage}</span>
        {iconContentAfter}
      </button>
    );

    return (
      <Ripples style={outerStyle}>
        {buttonContent}
      </Ripples>
    );
  }
}

Button.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default radium(Button);
