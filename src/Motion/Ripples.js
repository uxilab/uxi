import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { throws } from 'assert';

const Wrapper = styled.div`
  &:focus-within {
    box-shadow: ${({ theme: { outlineShadow } }) => outlineShadow};
    outline: ${({ theme: { outline } }) => outline};
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    box-shadow: ${({ focusWithin, theme: { outlineShadow } }) => focusWithin && outlineShadow};
    outline: ${({ focusWithin, theme: { outline } }) => focusWithin && outline};
    button, a { outline: none }
  }

  border-radius: ${({ theme: { radius } }) => radius};
  & > div {
    border-radius: ${({ theme: { radius } }) => radius};
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
    focusWithin: false,
  };

  componentDidMount = () => {
    this.update()
  }

  componentDidUpdate = () => {
    this.update()
  }

  update = () => {
    if (this.ref) {
      const focusWithin = this.ref.contains(document.activeElement);
      if (focusWithin !== this.state.focusWithin) {
        this.setState({
          focusWithin,
        });
      }
    }
  }

  storeRef = (node) => {
    this.ref = node;
  }

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
    const { focusWithin } = this.state;

    const s = {
      ...wrapStyle,
      ...style,
    };

    return (
      <Wrapper
        {...props}
        style={style}
        onClick={handleClick}
        focusWithin={focusWithin}
        onFocus={this.update}
        onBlur={this.update}
      >
        <div {...props} style={s} ref={this.storeRef}>
          <s style={{ ...rippleStyle, ...state.rippleStyle }} />
          {children}
        </div>
      </Wrapper>
    );
  }
}

export default Ripples;
