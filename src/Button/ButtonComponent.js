import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../Indicator';
import Ripples from '../Motion/Ripples';
import { ButtonIconWrapper } from './ButtonIconWrapper';
import { ButtonContentWrapper } from './ButtonContentWrapper';
import {
  getButtonUI,
  getButtonLinkUI,
  getButtonDivUI,
} from './Buttons';
import {
  ButtonBaseMixin,
} from './ButtonBaseMixin';
import {
  ButtonCommonMixin,
} from './ButtonCommonMixin';


// eslint-disable-next-line
export class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.ButtonCommonMixin = ButtonCommonMixin;
    this.ButtonBaseMixin = ButtonBaseMixin;
  }

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
      loading,
    } = this.props;

    const textOrMessage = message || text || children;

    const wasASubmitInitially = originalType === 'submit';

    const type = wasASubmitInitially ? 'primary' : originalType;


    let icon;
    if (React.isValidElement(iconProp)) {
      icon = React.cloneElement(iconProp, { size: '16' });
    }

    const buttonAttr = {
      onClick: !loading && (click || onClick || null),
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
      ...('margin' in style ? { margin: style.margin } : {}),
      ...('marginTop' in style ? { marginTop: style.marginTop } : {}),
      ...('marginRight' in style ? { marginRight: style.marginRight } : {}),
      ...('marginBottom' in style ? { marginBottom: style.marginBottom } : {}),
      ...('marginLeft' in style ? { marginLeft: style.marginLeft } : {}),
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
    if (inert) {
      TheButtonComponent = getButtonDivUI(this.ButtonCommonMixin, this.ButtonBaseMixin);
    } else if (readyLink) {
      const DivButtonComponent = getButtonDivUI(this.ButtonCommonMixin, this.ButtonBaseMixin);
      TheButtonComponent = props => (
        <DivButtonComponent {...props}>
          {readyLink}
        </DivButtonComponent>
      );
    } else if (link) {
      TheButtonComponent = getButtonLinkUI(this.ButtonCommonMixin, this.ButtonBaseMixin);
    } else {
      TheButtonComponent = getButtonUI(this.ButtonCommonMixin, this.ButtonBaseMixin);
    }

    const theButton = (
      <TheButtonComponent
        {...(link && !disabled ? { href: link } : {})}
        {...(link && !disabled && target ? { target } : {})}
        {...styleProps}
        {...buttonAttr}
      >
        {icon && (
          loading
            ? <ButtonIconWrapper {...styleProps}> <Loader size="16" /> </ButtonIconWrapper>
            : <ButtonIconWrapper {...styleProps}> {icon} </ButtonIconWrapper>
        )}
        {(!icon && loading) && (
          <ButtonIconWrapper {...styleProps}> <Loader size="16" /> </ButtonIconWrapper>
        )
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

ButtonComponent.propTypes = {
  style: PropTypes.object,
  type: PropTypes.oneOf([ // eslint-disable-line
    'primary',
    'secondary',
    'danger',
    'error',
    'warning',
    'success',
    'info',
    'default',
  ]),
};

ButtonComponent.defaultProps = {
  style: {},
  // type: 'default',
};


ButtonComponent.ButtonBaseMixin = ButtonBaseMixin;

export default ButtonComponent;
