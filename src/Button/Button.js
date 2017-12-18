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
  background-color: ${({ theme, type }) => getTypeColor(theme, type)};
  border-color: ${({ theme, type }) => (type ? getTypeColor(theme, type) : 'inherit')};
  color: ${({ type }) => (type ? '#fff' : 'inherit')};
  svg { fill: ${({ type }) => (type ? '#fff' : 'inherit')};}
  &:hover {
    border-color: ${({ theme, type }) => (type ? getTypeColor(theme, type) : 'inherit')};
    color: ${({ theme, type }) => (type ? getTypeColor(theme, type) : 'inherit')};
    background-color: ${({ type, theme }) => (type ? '#fff' : theme.palette.lightGrey)};
    svg { fill: ${({ theme, type }) => (type ? getTypeColor(theme, type) : 'inherit')};}
  }

  /* DISABLED STYLES: (overrides types styles)*/
  cursor: ${({ disabled }) => (disabled ? 'normal' : 'pointer')};
  ${({ disabled, theme: { palette } }) => (disabled ?
    `background-color: ${palette.lightGrey}; color: ${palette.grey};` : '')}
  ${({ disabled }) => (disabled ? 'border-color: transparent;' : '')};
  &:hover {
    ${({ disabled, theme: { palette } }) => (disabled ?
      `background-color: ${palette.lightGrey}; color: ${palette.grey}` : '')};
    ${({ disabled }) => (disabled ? 'border-color: transparent;' : '')};
  }

}
`;
/* eslint-enable indent */

const ButtonUI = styled.button`${ButtonBaseMixin};`;
const ButtonLinkUI = styled.a`${ButtonBaseMixin};`;
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
      icon,
      iconPosition,
      style,
      // ...restOfProps
    } = this.props;

    const textOrMessage = message || text || children;

    const wasASubmitInitially = originalType === 'submit';

    const type = wasASubmitInitially ? 'primary' : originalType;

    const buttonProps = { isFullWidth, disabled, type, iconPosition };

    // which element to render
    let TheButtonComponent = null;
    if (inert) { TheButtonComponent = ButtonDivUI; }
    else if (link) { TheButtonComponent = ButtonLinkUI; }
    else { TheButtonComponent = ButtonUI; }

    const theButton = (
      <TheButtonComponent {...buttonProps} isFullWidth={isFullWidth}>
        {icon}
        {textOrMessage}
      </TheButtonComponent>
    );

    const rippleStyles = isFullWidth ? { width: '100%' } : {};

    return disabled ? theButton : (<Ripples style={rippleStyles}>{theButton}</Ripples>);
  }
}

export default Button;
