import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radium from 'radium';

const BadgeStyle = {
  badge: {
    margin: 0,
    boxSizing: 'border-box',
    position: 'relative',
    display: 'inline',
    padding: '0.4em 0.3em',
    fontSize: '12px',
    lineHeight: '1',
    color: '#fff',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: '0.25em',
  },
  info: {
    color: '#fff',
    backgroundColor: 'rgb(49, 112, 143)',
    borderColor: 'rgb(49, 112, 143)',
  },
  error: {
    backgroundColor: '#F44336',
    color: '#fff',
  },
  warning: {
    backgroundColor: '#FF9800',
    color: '#fff',
  },
  success: {
    backgroundColor: '#009688',
    color: '#fff',
  },
};

/* eslint-disable react/prefer-stateless-function */
class Badge extends Component {
  static propTypes = {
    /**
     * The Alert will be added relativelty to this node.
     */
    children: PropTypes.node,
    style: PropTypes.object,
    type: PropTypes.oneOf(['error', 'success', 'warning', 'info']),
  };

  static defaultProps = {
    type: 'info',
  };

  render() {
    const { type, style } = this.props;
    const mergedStyle = Object.assign({}, BadgeStyle.badge, style);
    const classNames = [mergedStyle];

    if (type === 'error') {
      classNames.push(BadgeStyle.error);
    } else if (type === 'warning') {
      classNames.push(BadgeStyle.warning);
    } else if (type === 'success') {
      classNames.push(BadgeStyle.success);
    } else {
      classNames.push(BadgeStyle.info);
    }

    return (
      <div style={classNames}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(Badge);
