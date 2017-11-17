/* @flow */
import React from 'react';
import radium from 'radium';
import Ripples from '../Motion/Ripples';
import ThemeComponent from '../Base/ThemeComponent';
import ButtonStyle from './Button.style';
import type { ThemeComponentProps } from '../Base/ThemeComponent';

type buttonType = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' ;

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
    return type && (
      type === 'primary' ||
      type === 'secondary' ||
      type === 'danger' ||
      type === 'warning' ||
      type === 'success'
    );
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
    const originalThemeButtonStyles = this.getStyle('button', ButtonStyle.baseButton);
    const buttonStyles = [this.getStyle('button', ButtonStyle.baseButton)];
    console.log(buttonStyles);
    console.log(originalThemeButtonStyles);
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
      let hoverIcon = { color: this.getStyle('button').color };

      if (type === 'primary' || type === 'secondary' || type === 'danger' || type === 'warning' || type === 'success') {
        hoverIcon = { color: '#fff' };
      }

      if (isHover && type !== 'primary' && type !== 'secondary') {
        hoverIcon = { color: this.getStyle(['button:hover']).color };
      }

      if (isHover && type === 'primary') {
        hoverIcon = { color: this.getStyle(['button:primary:hover']).color };
      }

      if (isHover && type === 'secondary') {
        hoverIcon = { color: this.getStyle(['button:secondary:hover']).color };
      }

      if (isHover && type === 'warning') {
        hoverIcon = { color: this.getStyle(['button:warning:hover']).color };
      }

      if (isHover && type === 'danger') {
        hoverIcon = { color: this.getStyle(['button:danger:hover']).color };
      }

      if (isHover && type === 'success') {
        hoverIcon = { color: this.getStyle(['button:success:hover']).color };
      }

      if (iconPosition && iconPosition === 'after') {
        iconContentAfter = (
          <div style={{ position: 'absolute', right: '8px', top: '7px' }}>
            {React.cloneElement(icon, { ...hoverIcon, size: icon.props.size || 18 })}
          </div>
        );
        buttonStyles.push({ paddingRight: '34px' });
      } else {
        iconContentBefore = (
          <div style={{ position: 'absolute', left: '8px' }}>
            {React.cloneElement(icon, { ...hoverIcon, size: icon.props.size || 18 })}
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
