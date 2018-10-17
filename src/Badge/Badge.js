import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


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
    display: 'inline-block',
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
    color: '#3a3a3a',
  },
};
/* eslint-disable indent */
const BadgeUI = styled.div`
  svg * {
    ${({ type }) => (BadgeStyle[type] && BadgeStyle[type].color) &&
      `fill: ${BadgeStyle[type].color}`
  };
  }
`;
/* eslint-enbale indent */

/* eslint-disable react/prefer-stateless-function */
class Badge extends Component {
  static propTypes = {
    /**
     * The Alert will be added relativelty to this node.
     */
    children: PropTypes.node,
    style: PropTypes.object,
    type: PropTypes.oneOf(['error', 'success', 'warning', 'info', 'default']),
    // rounded: PropTypes.bool,
  };

  static defaultProps = {
    type: 'default',
    children: null,
    style: {},
    // rounded: false,
  };

  render() {
    const { type, style/* , rounded */ } = this.props;
    let mergedStyle = Object.assign({}, BadgeStyle.badge, style);
    // const classNames = [mergedStyle];

    if (type === 'error') {
      mergedStyle = { ...mergedStyle, ...BadgeStyle.error };
    } else if (type === 'warning') {
      mergedStyle = { ...mergedStyle, ...BadgeStyle.warning };
    } else if (type === 'success') {
      mergedStyle = { ...mergedStyle, ...BadgeStyle.success };
    } else if (type === 'info') {
      mergedStyle = { ...mergedStyle, ...BadgeStyle.info };
    } else {
      mergedStyle = { ...mergedStyle, ...BadgeStyle.default };
    }

    return (
      <BadgeUI style={mergedStyle} type={type} >
        {this.props.children}
      </BadgeUI>
    );
  }
}

export default Badge;
