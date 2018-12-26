import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  &:focus-within {
    outline: -webkit-focus-ring-color auto 5px;
  }
`;

const rippleStyle = {
  position: 'absolute',
  borderRadius: '50%',
  opacity: 0,
  width: 35,
  height: 35,
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
};

const wrapStyle = {
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden',
};

class Ripples extends Component {
  static propTypes = {
    during: PropTypes.number,
    color: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.object,
  };

  static defaultProps = {
    during: 600,
    color: 'rgba(0, 0, 0, .3)',
    onClick: () => { },
    children: null,
    style: {},
  };

  state = {
    rippleStyle: {},
  };

  handleClick = (ev) => {
    const { disabled } = this.props;
    if (disabled) return false;
    // ev.stopPropagation();
    const { onClick, color, during } = this.props;
    const {
      pageX, clientY, currentTarget: {
        offsetWidth, offsetHeight,
      },
      currentTarget,
    } = ev;
    const { top, left } = currentTarget.getBoundingClientRect();

    const rippleLeft = pageX - left;
    const rippleTop = clientY - top;

    this.setState({
      rippleStyle: {
        top: rippleTop,
        left: rippleLeft,
        opacity: 1,
        backgroundColor: color,
      },
    });

    setTimeout(() => {
      const size = Math.max(offsetWidth, offsetHeight);

      this.setState({
        rippleStyle: {
          top: rippleTop,
          left: rippleLeft,
          backgroundColor: color,
          transition: `all ${during}ms`,
          transform: `${rippleStyle.transform} scale(${size / 9})`,
          opacity: 0,
        },
      });
    }, 50);

    if (typeof onClick === 'function') {
      onClick(ev);
    }
    return undefined;
  }

  render() {
    const { children, style, during, ...props } = this.props;
    const { state, handleClick } = this;

    const s = {
      ...style,
      ...wrapStyle,
    };

    return (
      <Wrapper {...props} style={s} onClick={handleClick}>
        <s style={{ ...rippleStyle, ...state.rippleStyle }} />
        {children}
      </Wrapper>
    );
  }
}

export default Ripples;
