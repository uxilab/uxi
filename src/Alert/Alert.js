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
    /**
     * One of the value of danger, error, success, warning.
     */
    type: PropTypes.oneOf(['danger', 'error', 'success', 'warning', 'information']),
    noIcon: PropTypes.bool,
    className: PropTypes.string,
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
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { type, showClose, noIcon, className } = this.props;
    const { isOpen } = this.state;

    // let iconIdentifier;
    const classNames = [AlertStyle.alert];
    let closeContent;
    let iconContent;
    let IconComp;
    const mainAlertStyle = [AlertStyle.alertContent];
    if (showClose) {
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
      classNames.push(AlertStyle.danger);
      IconComp = Issue;
    } else if (type === 'warning') {
      classNames.push(AlertStyle.warning);
      IconComp = AlertIcon;
    } else if (type === 'success') {
      classNames.push(AlertStyle.success);
      IconComp = Done;
    } else {
      classNames.push(AlertStyle.info);
      IconComp = AlertIcon;
    }

    if (!noIcon) {
      iconContent = (
        <IconComp color="white" style={AlertStyle.icon} />
      );
    }

    if (!isOpen) {
      classNames.push({
        display: 'none',
      });
    }

    return (
      <div style={classNames} className={className}>
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
