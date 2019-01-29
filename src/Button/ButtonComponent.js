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

// eslint-disable-next-line
export class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.ButtonCommonMixin = '';
    this.ButtonBaseMixin = '';
    this.buttonType = ''; // oneOf 'Button', 'FlatButton', 'OutlineButton', 'UnstyledButton'
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
      tabIndex,
    } = this.props;

    const textOrMessage = message || text || children;

    const wasASubmitInitially = originalType === 'submit';

    const type = wasASubmitInitially ? 'primary' : originalType;


    let icon;
    let iconSize = 16;
    if (React.isValidElement(iconProp)) {
      const iconSizeFromConsumer = iconProp.props ? iconProp.props.size : null;
      if (iconSizeFromConsumer !== undefined) {
        iconSize = iconSizeFromConsumer;
      }
      icon = React.cloneElement(iconProp, {
        size: iconSize,
      });
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
      ...(tabIndex ? { tabIndex } : {}),
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
      TheButtonComponent = getButtonDivUI(this.buttonType);
    } else if (readyLink) {
      const DivButtonComponent = getButtonDivUI(this.buttonType);
      TheButtonComponent = props => (
        <DivButtonComponent {...props}>
          {readyLink}
        </DivButtonComponent>
      );
    } else if (link) {
      TheButtonComponent = getButtonLinkUI(this.buttonType);
    } else {
      TheButtonComponent = getButtonUI(this.buttonType);
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

    const { // eslint-disable-line no-unused-vars
      border, // eslint-disable-line no-unused-vars
      borderBottom, // eslint-disable-line no-unused-vars
      borderTop, // eslint-disable-line no-unused-vars
      borderLeft, // eslint-disable-line no-unused-vars
      borderRight, // eslint-disable-line no-unused-vars
      ...restForRippleStyles
    } = style;

    const rippleStyles = {
      // ...(style.borderRadius !== undefined
      //   ? { borderRadius: style.borderRadius }
      //   : {}
      // ),
      // ...(style.borderBottomLeftRadius !== undefined
      //   ? { borderBottomLeftRadius: style.borderBottomLeftRadius }
      //   : {}
      // ),
      // ...(style.borderBottomRightRadius !== undefined
      //   ? { borderBottomLeftRadius: style.borderBottomLeftRadius }
      //   : {}
      // ),
      // ...(style.borderTopLeftRadius !== undefined
      //   ? { borderTopLeftRadius: style.borderTopLeftRadius }
      //   : {}
      // ),
      // ...(style.borderTopRightRadius !== undefined
      //   ? { borderTopLeftRadius: style.borderTopLeftRadius }
      //   : {}
      // ),
      ...(isFullWidth ? { width: '100%' } : {}),
      ...restForRippleStyles,
      margin: 0,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    };

    return (
      <div
        style={{
          ...marginStyles,
          lineHeight: 0,
          ...(style.width ? { width: style.width } : {}),
          ...(style.minWidth ? { minWidth: style.minWidth } : {}),
          ...(style.maxWidth ? { maxWidth: style.maxWidth } : {}),
          ...(style.height ? { height: style.width } : {}),
          ...(style.minHeight ? { minHeight: style.minHeight } : {}),
          ...(style.maxHeight ? { maxHeight: style.maxHeight } : {}),
        }}
      >
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

export default ButtonComponent;
