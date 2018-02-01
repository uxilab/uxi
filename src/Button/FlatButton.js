/* @flow */
/* eslint-disable brace-style */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Ripples from '../Motion/Ripples';
import ButtonBaseStyles from './ButtonBaseStyles';

const getTypeColor = ({ palette }, type) => {
  if (palette.semantic[type]) { return palette.semantic[type]; }
  if (type === 'primary') { return palette.accent.main; }
  if (type === 'secondary') { return palette.primary.main; }
  return '#fff';
};

/* eslint-disable indent */
const ButtonBaseMixin = css`
  /* STATIC BASE STYLES: */
  ${ButtonBaseStyles};

  /* ICON POSITION: */
  flex-direction: ${({ iconPosition }) => {
    if (iconPosition && iconPosition === 'after') { return 'row-reverse'; }
    return 'row';
  }};

  /* FULL WIDTH STYLES: */
  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%' : '')};

  /* TYPE STYLES: */
  background-color: transparent;
  border-color: transparent;
  color: ${({ theme, type }) => (type ? getTypeColor(theme, type) : theme.palette.darkGrey)};
  /* this next line overwritte the '.root a' selector rules from uxi NON-StyledComponent theme/css */
  * { color: ${({ theme, type }) => (type ? getTypeColor(theme, type) : theme.palette.darkGrey)}; }
  svg { fill: ${({ theme, type }) => (type ? getTypeColor(theme, type) : theme.palette.darkGrey)};}
  &:hover {
    border-color: transparent;
    color: ${({ theme, type }) => '#ffffff' };
    background-color: ${({ type, theme }) => (type ? getTypeColor(theme, type) : theme.palette.grey)};
    * { color: inherit; }
    svg { fill: ${({ type, theme }) => (type ? '#ffffff' : '#ffffff') }
  }

  /* DISABLED STYLES: (overrides types styles)*/
  cursor: ${({ disabled }) => (disabled ? 'normal' : 'pointer')};
  ${({ disabled, theme: { palette } }) => (disabled ? `background-color: ${palette.lightGrey}; color: ${palette.grey};` : '')}
  ${({ disabled }) => (disabled ? 'border-color: transparent;' : '')};

  &:hover {
    ${({ disabled, theme: { palette } }) => (disabled ? `background-color: ${palette.lightGrey}; color: ${palette.grey}` : '')};
    ${({ disabled }) => (disabled ? 'border-color: transparent;' : '')};
    svg {
      ${({ disabled, theme: { palette } }) => (disabled ? `fill: ${palette.grey}` : '')};
    }
  }
  svg {
    ${({ disabled, theme: { palette } }) => (disabled ? `fill: ${palette.grey}` : '')};
  }

}
`;

const ButtonIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ icon, textOrMessage }) =>
    (icon && textOrMessage ? '0 4px' : '0')};
`;

const ButtonContentWrapper = styled.div`
  margin: 0 4px;
  line-height: 0.7;
`;


/* eslint-enable indent */
const ButtonUI = styled.button`${ButtonBaseMixin};`;
const ButtonLinkUI = styled.a`
  ${ButtonBaseMixin};
  text-decoration: none
`;
const ButtonDivUI = styled.div`${ButtonBaseMixin};`;

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  render() {
    const {
      message,
      text,
      type: originalType,
      children,
      inert,
      link,
      isFullWidth,
      click,
      onClick,
      disabled,
      icon: iconProp,
      iconPosition,
      style,
      className,
      target,
      // ...restOfProps
    } = this.props;

    const textOrMessage = message || text || children;

    const wasASubmitInitially = originalType === 'submit';

    const type = wasASubmitInitially ? 'primary' : originalType;


    let icon;
    if (React.isValidElement(iconProp)) {
      icon = React.cloneElement(iconProp, { size: '16' });
    }

    const buttonAttr = {
      onClick: click || onClick || null,
      className,
      style,
    };

    const styleProps = {
      isFullWidth,
      disabled,
      type,
      iconPosition,
      icon,
      textOrMessage,
    };

    // which element to render div|a|button
    let TheButtonComponent = null;
    if (inert) { TheButtonComponent = ButtonDivUI; }
    else if (link) { TheButtonComponent = ButtonLinkUI; }
    else { TheButtonComponent = ButtonUI; }

    const theButton = (
      <TheButtonComponent
        {...(link && !disabled ? { href: link } : {})}
        {...(link && !disabled && target ? { target } : {})}
        {...styleProps}
        {...buttonAttr}
      >
        {icon &&
          <ButtonIconWrapper {...styleProps}> {icon} </ButtonIconWrapper>
        }
        {textOrMessage &&
          <ButtonContentWrapper {...styleProps}> {textOrMessage} </ButtonContentWrapper>
        }
      </TheButtonComponent>
    );

    const rippleStyles = isFullWidth ? { width: '100%' } : {};

    return (<Ripples disabled={disabled} style={rippleStyles}>{theButton}</Ripples>);
    // return disabled ? theButton : (<Ripples style={rippleStyles}>{theButton}</Ripples>);
  }
}

export default Button;
