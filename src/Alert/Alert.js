import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Close,
  Issue,
  Alert as AlertIcon,
  Done,
} from '../Icons';
import AlertStyle from './Alert.style';

const AlertUI = styled.div`
  border-radius: ${({ theme: { radius } }) => radius};
  overflow: hidden;
  div {
    a, a:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

class Alert extends Component {
  static propTypes = {
    children: PropTypes.node,
    showClose: PropTypes.bool, // weird ?
    hideClose: PropTypes.bool, // weird ?
    onClose: PropTypes.func,
    type: PropTypes.oneOf(['danger', 'error', 'success', 'warning', 'information']),
    noIcon: PropTypes.bool,
    className: PropTypes.string,
    isBanner: PropTypes.bool,
    iconSize: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    type: 'information',
    showClose: undefined,
    // onClose: undefined,
    hideClose: undefined,
    className: '',
    noIcon: false,
    isBanner: false,
    iconSize: 24, // uxi default, src of thruth => SvgIcon
    // onClose: undefined,
    // in case some text is not evaluated, the comp might appear like it has no children (text node)
    children: null, // we don't require children, alert always has at least 50px of height
    style: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };
    this.close = this.close.bind(this);
    this.isControlled = !!this.props.onClose;
  }

  /**
   * Close the Alert message when the property showClose is set to 'true'
   */
  close(event) {
    const { onClose } = this.props;
    if (onClose) { onClose(event, this.state.isOpen); }
    if (!this.isControlled) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const {
      type,
      // TODO decide on a single behaviour
      showClose, // if banner defaults to showing X close, and you don't wnat one, ok
      hideClose, // but this is getting weird, we should settle on a posit or negatv word,
      noIcon,
      className,
      isBanner,
      iconSize,
      onClose,
      style,
    } = this.props;
    const { isOpen } = this.state;

    // console.log('onClose in Alert', onClose);

    let wrapperStyles = { ...AlertStyle.alert };

    if (isBanner) {
      wrapperStyles = { ...wrapperStyles, ...AlertStyle.bannerAlert };
    }

    let closeContent;
    let iconContent;
    let IconComp;
    let mainAlertStyle = { ...AlertStyle.alertContent };
    if ((showClose || onClose || isBanner) && !hideClose) {
      closeContent = (
        <button key="closeIcon" onClick={this.close} style={AlertStyle.closeWrapper}>
          <Close color="white" />
        </button>
      );
      mainAlertStyle = {
        ...mainAlertStyle,
        marginRight: '50px',
      };
    }

    if (type === 'danger' || type === 'error') {
      wrapperStyles = { ...wrapperStyles, ...AlertStyle.danger };
      IconComp = Issue;
    } else if (type === 'warning') {
      wrapperStyles = { ...wrapperStyles, ...AlertStyle.warning };
      IconComp = AlertIcon;
    } else if (type === 'success') {
      wrapperStyles = { ...wrapperStyles, ...AlertStyle.success };
      IconComp = Done;
    } else {
      wrapperStyles = { ...wrapperStyles, ...AlertStyle.info };
      IconComp = AlertIcon;
    }

    if (!noIcon) {
      iconContent = (
        <IconComp color="white" style={AlertStyle.icon} size={iconSize} />
      );
    }

    if (!isOpen) {
      wrapperStyles = { ...wrapperStyles, display: 'none' };
    }

    wrapperStyles = {
      ...wrapperStyles,
      ...style, // overwrite prop from consumer
    };

    return (
      <AlertUI>
        <div style={wrapperStyles} className={className}>
          {closeContent}
          {iconContent}
          <div style={mainAlertStyle}>
            {this.props.children}
          </div>
        </div>
      </AlertUI>
    );
  }
}

export default Alert;
