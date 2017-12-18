import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radium from 'radium';

const BadgeStyle = {
  badge: {
    margin: 0,
    boxSizing: 'border-box',
    position: 'relative',
    padding: '0.4em 0.3em',
    fontSize: '12px',
    lineHeight: '1',
    color: '#fff',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: '0.25em',
    // display: 'inline',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  default: {
    backgroundColor: '#cecece',
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
    type: PropTypes.oneOf(['error', 'success', 'warning', 'info', 'default']),
    rounded: PropTypes.bool,
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { type, style, rounded } = this.props;
    const mergedStyle = Object.assign({}, BadgeStyle.badge, style);
    const classNames = [mergedStyle];

    if (type === 'error') {
      classNames.push(BadgeStyle.error);
    } else if (type === 'warning') {
      classNames.push(BadgeStyle.warning);
    } else if (type === 'success') {
      classNames.push(BadgeStyle.success);
    } else if (type === 'info') {
      classNames.push(BadgeStyle.info);
    } else {
      classNames.push(BadgeStyle.default);
    }

    if (rounded) {
      classNames.push({
        borderRadius: '50%',
        minWidth: '20px',
        maxWidth: '20px',
        minHeight: '20px',
        maxHeight: '20px',
      });
    }

    return (
      <div style={classNames}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(Badge);
