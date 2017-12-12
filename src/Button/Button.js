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
      type === 'success' ||
      type === 'submit'
    );
  }

  render() {
    const {
      message,
      text,
      type: originalType,
      click,
      onClick,
      link,
      disabled,
      icon,
      iconPosition,
      isFullWidth,
      style,
      children,
      inert,
      ...attributes
    } = this.props;
    const wasASubmitInitially = originalType === 'submit';
    const type = wasASubmitInitially ? 'primary' : originalType;
    const outerStyle = isFullWidth ? { width: '100%' } : {};
    let iconContentBefore;
    let iconContentAfter;
    const textOrMessage = message || text || children;
    const clickHandler = disabled ? () => { } : (click || onClick);
    // const originalThemeButtonStyles = this.getStyle('button', ButtonStyle.baseButton);
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
      let hoverIcon = { color: this.getStyle('button').color };

      if (type === 'primary' ||
          type === 'secondary' ||
          type === 'danger' ||
          type === 'warning' ||
          type === 'success' ||
          type === 'primary'
      ) {
        hoverIcon = { color: '#fff' };
      }

      if (isHover && type !== 'primary' && type !== 'secondary' && type !== 'submit') {
        hoverIcon = { color: this.getStyle(['button:hover']).color };
      }

      if (isHover && (type === 'primary' || type === 'submit')) {
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
          React.cloneElement(icon,
            {
              ...hoverIcon,
              style: {
                marginLeft: '4px',
                ...icon.props.style,
              },
              size: icon.props.size || 18,
            },
          )
        );
      } else {
        iconContentBefore = (
          React.cloneElement(icon,
            {
              ...hoverIcon,
              style: {
                marginRight: '4px',
                ...icon.props.style,
              },
              size: icon.props.size || 18,
            })
        );
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
        <a onClick={clickHandler} style={buttonStyles} href={link} {...attributes} >
          {iconContentBefore}
          <span style={ButtonStyle.text}>{textOrMessage}</span>
          {iconContentAfter}
        </a>
      );
    }

    // this allow things like a button being use as a dropDown(Menu) trigger
    if (inert) {
      buttonStyles.push({
        textDecoration: 'none',
        position: 'relative',
        verticalAlign: 'top',
        fontWeight: 'normal',
      });
      buttonStyles.push(style); // final overwrite with style from this.props

      return (
        <div style={buttonStyles} {...attributes}>
          {iconContentBefore}
          <span style={ButtonStyle.text}>{textOrMessage}</span>
          {iconContentAfter}
        </div>
      );
    }

    buttonStyles.push(style); // final overwrite with style from this.props

    const finalButtonType = wasASubmitInitially ? { type: 'submit' } : {};

    const buttonContent = (
      <button key="button" style={buttonStyles} onClick={clickHandler} {...finalButtonType} {...attributes} >
        {iconContentBefore}
        <span style={ButtonStyle.text}>{textOrMessage}</span>
        {iconContentAfter}
      </button>
    );

    return <Ripples style={outerStyle}>{buttonContent}</Ripples>;
  }
}

export default radium(Button);
