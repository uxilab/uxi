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

  cursor: pointer;
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
  color: ${({ theme, type, disabled }) => (disabled
      ? theme.palette.grey
      : (type ? getTypeColor(theme, type) : theme.palette.darkGrey))};

  /* those next line overwritte the '.root a' selector rules from uxi NON-StyledComponent theme/css
  * TODO: remove the overwrite once the .root a rules doesn't interfere anymore */
  * { color: inherit }
  svg { fill: ${({ theme, type, disabled }) => (disabled
      ? theme.palette.grey
      : (type ? getTypeColor(theme, type) : theme.palette.darkGrey))}}

  &:hover {
    border-color: transparent;
    color: ${({ theme, type }) => '#ffffff'};
    background-color: ${({ type, theme }) => (type ? getTypeColor(theme, type) : theme.palette.grey)};
    * { color: inherit; }
    svg { fill: ${({ type, theme }) => (type ? '#ffffff' : '#ffffff')}
  }

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
`;


/* eslint-enable indent */
const ButtonUI = styled.button`
  line-height: 1;
  ${ButtonBaseMixin};
    border-radius: ${({ theme }) => theme.borderRadius};

`;
const ButtonLinkUI = styled.a`
  line-height: 1;
  ${ButtonBaseMixin};
  text-decoration: none;
  &:hover { text-decoration: none }
    border-radius: ${({ theme }) => theme.borderRadius};

`;
const ButtonDivUI = styled.div`
  line-height: 1;
  ${ButtonBaseMixin};
    border-radius: ${({ theme }) => theme.borderRadius};

`;

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
      readyLink,
      isFullWidth,
      click,
      onClick,
      disabled,
      icon: iconProp,
      iconPosition,
      style,
      className,
      target,
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
      style: {
        ...style,
        margin: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
      },
    };
    const marginStyles = {
      display: isFullWidth ? 'block' : 'inline-block',
      ...('margin' in style ? { margin: style.margin } : {}),
      ...('marginTop' in style ? { marginTop: style.marginTop } : {}),
      ...('marginRight' in style ? { marginRight: style.marginRight } : {}),
      ...('marginBottom' in style ? { marginBottom: style.marginBottom } : {}),
      ...('marginLeft' in style ? { marginLeft: style.marginLeft } : {}),
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
    else if (readyLink) {
      TheButtonComponent = props => (
        <ButtonDivUI {...props}>
          {readyLink}
        </ButtonDivUI>
      );
    }
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

    return (
      <div style={{ ...marginStyles, lineHeight: 0 }}>
        <Ripples disabled={disabled} style={rippleStyles}>
          {theButton}
        </Ripples>
      </div>
    );
  }
}

Button.defaultProps = {
  style: {},
};

export default Button;
