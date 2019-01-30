// @inheritedComponent Transition

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable */
const CompactDrawerUI = styled.div`
  overflow-y: auto; /*  not sure about this -df */
  /* height: 100%; */ /*  not sure about this -df */
  display: flex;
  pointer-events: none;
  & > * {
    pointer-events: all;
    display: inline-block;
    margin: 0 auto;
  }

  z-index: 200;
  transition: all 1s linear;
  transform: ${({ anchor: a, inAttr: isIn, dir }) => {
    if (isIn === false) {
      if (a === 'bottom-left' && dir === 'right') return `translate3d(-100%, 0, 0)`
      if (a === 'bottom' && dir === 'top') return `translate3d(-50%, 0, 0)`
      if (a === 'bottom-right' && dir === 'top') return `translate3d(0, 0, 0)`
      if (a === 'bottom-right' && dir === 'left') return `translate3d(100%, 0, 0)`
      if (a === 'left' && dir === 'right') return `translate3d(-100%, -50%, 0)`
      if (a === 'right' && dir === 'left') return `translate3d(100%, -50%, 0)`
      if (a === 'top' && dir === 'bottom') return `translate3d(-50%, -100%, 0)`
      if (a === 'top-left' && dir === 'bottom') return `translate3d(0, -100%, 0)`
      if (a === 'top-left' && dir === 'right') return `translate3d(-100%, 0, 0)`
      if (a === 'top-right' && dir === 'bottom') return `translate3d(0, -100%, 0)`
      if (a === 'top-right' && dir === 'left') return `translate3d(100%, 0, 0)`
      if (a === 'center' && dir === 'top') return `translate3d(-50%, 100vh, 0)`
      if (a === 'center' && dir === 'bottom') return `translate3d(-50%, -100vh, 0)`

      // return 'translate3d(0, 0, 0); opacity: 0; overflow: hidden';
    } else {
      if (a === 'bottom' && dir === 'top') return `translate3d(-50%, -100%, 0)`
      if (a === 'bottom-left' && dir === 'top') return `translate3d(0, -100%, 0)`
      if (a === 'bottom-left' && dir === 'right') return `translate3d(0, 0, 0)`
      if (a === 'bottom-right' && dir === 'top') return `translate3d(0, -100%, 0)`
      if (a === 'bottom-right' && dir === 'left') return `translate3d(0, 0, 0)`
      if (a === 'left' && dir === 'right') return `translate3d(0, -50%, 0)`
      if (a === 'right' && dir === 'left') return `translate3d(0, -50%, 0)`
      if (a === 'top' && dir === 'bottom') return `translate3d(-50%, 0, 0)`
      if (a === 'top-left' && dir === 'bottom') return `translate3d(0, 0, 0)`
      if (a === 'top-left' && dir === 'right') return `translate3d(0, 0, 0)`
      if (a === 'top-right' && dir === 'bottom') return `translate3d(0, 0, 0)`
      if (a === 'top-right' && dir === 'left') return `translate3d(0, 0, 0)`
      if (a === 'center' && dir === 'top') return `translate3d(-50%, -50%, 0)`
      if (a === 'center' && dir === 'bottom') return `translate3d(-50%, -50%, 0)`
    }
  }};
  transition: all ${({ inAttr: isIn, timeout, timeout: { enter, exit }, theme: { transition } }) => isIn
    ? transition.durationIn + transition.easing
    : transition.durationOut + transition.easing
  };
  position: fixed;
  top: 0;
  bottom: 0;
  ${({ dir, anchor: a, offsetSize }) => {
    if (a === 'bottom' && dir === 'top')
      return `left: 50%; right: auto; top: 100%; bottom: auto; padding-bottom: ${offsetSize}px`;

    if (a === 'bottom-left' && dir === 'top')
      return `left: 0; right: auto; top: 100%; bottom: auto; padding: 0 0 ${offsetSize}px ${offsetSize}px`;

    if (a === 'bottom-left' && dir === 'right')
      return `left: 0; right: auto; top: auto; bottom: 0; padding: 0 0 ${offsetSize}px ${offsetSize}px`;

    if (a === 'bottom-right' && dir === 'top')
      return `left: auto; right: 0; top: 100%; bottom: auto; padding: 0 ${offsetSize}px ${offsetSize}px 0`;

    if (a === 'bottom-right' && dir === 'left')
      return `left: auto; right: 0; top: auto; bottom: 0; padding: 0 ${offsetSize}px ${offsetSize}px 0`;

    if (a === 'left' && dir === 'right')
      return `left: 0; right: auto; top: 50%; bottom: auto; padding-left ${offsetSize}px`;

    if (a === 'right' && dir === 'left')
      return `left: auto; right: 0; top: 50%; bottom: auto; padding-right ${offsetSize}px`;

    if (a === 'top' && dir === 'bottom')
      return `left: 50%; right: auto; top: 0; bottom: auto; padding-top ${offsetSize}px`;

    if (a === 'top-left' && dir === 'bottom')
      return `left: 0; right: auto; top: 0; bottom: auto; padding: ${offsetSize}px 0 0 ${offsetSize}px`;

    if (a === 'top-left' && dir === 'right')
      return `left: 0; right: auto; top: 0; bottom: auto; padding: ${offsetSize}px 0 0 ${offsetSize}px`;

    if (a === 'top-right' && dir === 'bottom')
      return `left: auto; right: 0; top: 0; bottom: auto; padding: ${offsetSize}px ${offsetSize}px 0 0`;

    if (a === 'top-right' && dir === 'left')
      return `left: auto; right: 0; top: 0; bottom: auto; padding: ${offsetSize}px ${offsetSize}px 0 0`;

    if (a === 'center')
      return `left: 50%; right: auto; top: 50%; bottom: auto; padding: ${offsetSize}px`;

  }};

  /* ${({ offsetTop }) => offsetTop && `padding-top: ${offsetTop}px`};
  ${({ offsetBottom }) => offsetBottom && `padding-bottom: ${offsetBottom}px`};
  ${({ offsetLeft }) => offsetLeft && `padding-left: ${offsetLeft}px`};
  ${({ offsetRight }) => offsetRight && `padding-right: ${offsetRight}px`}; */
`;

class CompactDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.handleEntered = this.handleEntered.bind(this)
    this.handleEntering = this.handleEntering.bind(this)
    this.handleExit = this.handleExit.bind(this)
    this.handleExited = this.handleExited.bind(this)
  }

  // componentDidUpdate() {
  //   const {
  //     onEnter,
  //     onEntering,
  //     onExit,
  //     onExited,
  //   } = this.props
  // }

  handleEntered(event) { const { onEnter } = this.props; if (onEnter) onEnter(event) }
  handleEntering(event) { const { onEntering } = this.props; if (onEntering) onEntering(event) }
  handleExit(event) { const { onExit } = this.props; if (onExit) onExit(event) }
  handleExited(event) { const { onExited } = this.props; if (onExited) onExited(event) }

  render() {
    const {
      children,
      onEnter,
      onEntering,
      onExit,
      onExited,
      onClose,
      style: styleProp,
      timeout,
      inAttr,
      direction,
      anchor,
      offsetBottom,
      offsetTop,
      offsetLeft,
      offsetRight,
      offsetSize,
      ...other
    } = this.props;

    const handlers = {
      onAnimationStart: inAttr ? this.handleEntering : this.handleExit,
      onAnimationEnd: inAttr ? this.handleEntered : this.handleExited,
    }

    return (
      <CompactDrawerUI
        timeout={timeout}
        className="CompactDrawerUI"
        inAttr={inAttr}
        dir={direction}
        anchor={anchor}
        offsetTop={offsetTop}
        offsetBottom={offsetBottom}
        offsetLeft={offsetLeft}
        offsetRight={offsetRight}
        offsetSize={offsetSize}
        style={styleProp}
        {...handlers}
      >
       <div>
        {
          React.Children.map(children, child => React.cloneElement(child, {
            onClose,
            ...(child.props || {}),
          }))
        }
        </div>
      </CompactDrawerUI>
    );
  }
}

CompactDrawer.propTypes = {
  children: PropTypes.element,
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  inAttr: PropTypes.bool,
  onEnter: PropTypes.func,
  onEntered: PropTypes.func,
  onEntering: PropTypes.func,
  onExit: PropTypes.func,
  onExited: PropTypes.func,
  onExiting: PropTypes.func,
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  ]),
  anchor: PropTypes.oneOf([
    'left', 'right', 'bottom', 'top',
    'bottom-left', 'bottom-right', 'top-left', 'top-right',
    'center'
  ]),
  offsetSize: PropTypes.number,
};

CompactDrawer.defaultProps = {
  timeout: {
    enter: 225,
    exit: 195,
  },
  direction: 'top',
  anchor: 'bottom-left',
  offsetBottom: 0,
  offsetTop: 0,
  offsetLeft: 0,
  offsetRight: 0,
  offsetSize: 32,
};

export default CompactDrawer;
