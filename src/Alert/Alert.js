import React, { Component } from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {
  Close,
  Issue,
  Alert as AlertIcon,
  Done,
} from '../Icons';
import AlertStyle from './Alert.style';
// import EntityIcon from '../Entity/Card/internal/EntityIcon';

class Alert extends Component {
  static propTypes = {
    /**
     * The Alert will be added relativelty to this node.
     */
    children: PropTypes.node,
    /**
     * Show or Hide the
     */
    showClose: PropTypes.bool,
    onClose: PropTypes.func,
    /**
     * One of the value of danger, error, success, warning.
     */
    type: PropTypes.oneOf(['danger', 'error', 'success', 'warning', 'information']),
    noIcon: PropTypes.bool,
    className: PropTypes.string,
    isBanner: PropTypes.bool,
    iconSize: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  static defaultProps = {
    type: 'information',
    showClose: false,
    className: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };
  }

  /**
   * Close the Alert message when the property showClose is set to 'true'
   */
  close() {
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { type, showClose, noIcon, className, isBanner, iconSize, onClose } = this.props;
    const { isOpen } = this.state;

    const wrapperStyles = [AlertStyle.alert];

    if (isBanner) { wrapperStyles.push(AlertStyle.bannerAlert); }

    let closeContent;
    let iconContent;
    let IconComp;
    const mainAlertStyle = [AlertStyle.alertContent];
    if (showClose || isBanner || onClose) {
      closeContent = (
        <button key="closeIcon" onClick={() => { this.close(); }} style={AlertStyle.closeWrapper}>
          <Close color="white" />
        </button>
      );
      mainAlertStyle.push({
        // marginLeft: '15px',
        marginRight: '50px',
      });
    }

    if (type === 'danger' || type === 'error') {
      wrapperStyles.push(AlertStyle.danger);
      IconComp = Issue;
    } else if (type === 'warning') {
      wrapperStyles.push(AlertStyle.warning);
      IconComp = AlertIcon;
    } else if (type === 'success') {
      wrapperStyles.push(AlertStyle.success);
      IconComp = Done;
    } else {
      wrapperStyles.push(AlertStyle.info);
      IconComp = AlertIcon;
    }

    if (!noIcon) {
      iconContent = (
        <IconComp color="white" style={AlertStyle.icon} size={iconSize} />
      );
    }

    if (!isOpen) {
      wrapperStyles.push({
        display: 'none',
      });
    }

    return (
      <div style={wrapperStyles} className={className}>
        {closeContent}
        {iconContent}
        <div style={mainAlertStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default radium(Alert);
