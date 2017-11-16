/* @flow */
import React from 'react';
import radium from 'radium';
import Ripples from '../Motion/Ripples';
import ThemeComponent from '../Base/ThemeComponent';
import ButtonStyle from './Button.style';
import type { ThemeComponentProps } from '../Base/ThemeComponent';

type buttonType = 'primary' | 'secondary';

type ButtonProps = ThemeComponentProps & {
  message: string,
  text: string,
  type: buttonType,
  disabled?: Boolean,
  icon?: any,
  iconPosition?: string,
  isFullWidth?: Boolean,
  onClick?: (event: Event) => void,
  click?: (event: Event) => void,
  link?: string
};

class Button extends ThemeComponent<ButtonProps> {
  static isValidType(type: buttonType) {
    return type && (type === 'primary' || type === 'secondary');
  }

  render() {
    const {
      message,
      text,
      type,
      click,
      onClick,
      link,
      disabled,
      icon,
      iconPosition,
      isFullWidth,
      style,
      children,
    } = this.props;
    const outerStyle = isFullWidth ? { width: '100%' } : {};
    let iconContentBefore;
    let iconContentAfter;
    const textOrMessage = message || text || children;
    const clickHandler = click || onClick;
    const buttonStyles = [this.getStyle('button', ButtonStyle.baseButton)];

    if (Button.isValidType(type)) {
      buttonStyles.push(this.getSubStyle('button', type.toString()));
    }

    if (disabled) {
      buttonStyles.push(ButtonStyle.disabled);
    } else if (Button.isValidType(type)) {
      buttonStyles.push(
        this.getSubStylePseudoElement('button', type.toString(), 'hover'),
      );
    } else {
      buttonStyles.push(this.getPseudoElement('button', 'hover'));
    }

    if (icon) {
      const isHover = radium.getState(this.state, 'button', ':hover');
      let hoverIcon = { color: ButtonStyle.button.color };

      if (type === 'primary' || type === 'secondary') {
        hoverIcon = { color: '#fff' };
      }

      if (isHover && type !== 'primary' && type !== 'secondary') {
        hoverIcon = { color: ButtonStyle['button:hover'].color };
      }

      if (isHover && type === 'primary') {
        hoverIcon = { color: ButtonStyle['button:primary:hover'].color };
      }

      if (isHover && type === 'secondary') {
        hoverIcon = { color: ButtonStyle['button:secondary:hover'].color };
      }

      if (iconPosition && iconPosition === 'after') {
        iconContentAfter = (
          <div style={{ position: 'absolute', right: '6px', top: '5px' }}>
            {React.cloneElement(icon, hoverIcon)}
          </div>
        );
        buttonStyles.push({ paddingRight: '34px' });
      } else {
        iconContentBefore = (
          <div style={{ position: 'absolute', left: '6px', top: '5px' }}>
            {React.cloneElement(icon, hoverIcon)}
          </div>
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
      buttonStyles.push(style); // final overwrite with style from this.props

      return (
        <a onClick={clickHandler} style={buttonStyles} href={link}>
          {iconContentBefore}
          <span style={ButtonStyle.text}>{textOrMessage}</span>
          {iconContentAfter}
        </a>
      );
    }

    buttonStyles.push(style); // final overwrite with style from this.props

    const buttonContent = (
      <button key="button" style={buttonStyles} onClick={click}>
        {iconContentBefore}
        <span style={ButtonStyle.text}>{textOrMessage}</span>
        {iconContentAfter}
      </button>
    );

    return <Ripples style={outerStyle}>{buttonContent}</Ripples>;
  }
}

export default radium(Button);
