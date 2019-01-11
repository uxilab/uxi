// @inheritedComponent Transition

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const slidesHorizontaly = direction => (direction === 'right' || direction === 'left');

const addUnitIfNeeded = (value) => {
  if (!value) { return ''; }

  if (value.match && value.match(/px|pc|%|em|rem/)) {
    return value;
  }

  return `${value.match}px`;
};
/* eslint-disable */
const SlideUI = styled.div`
  pointer-events: none;
  z-index: 200;
  transition: all 1s linear;
  transform: ${({ inAttr: isIn, dir }) => {
    if (isIn === false) { return 'translate3d(0, 0, 0); opacity: 0'; }
    else {
      if (dir === 'left') return 'translate3d(-100%, 0, 0)'
      if (dir === 'right') return 'translate3d(100%, 0, 0)'
      if (dir === 'top') return 'translate3d(0, -100%, 0)'
      if (dir === 'bottom') return 'translate3d(0, 100%, 0)'
    }
  }};
  transition: all ${({ inAttr: isIn, timeout, timeout: { enter, exit }, theme: { transition } }) => isIn
    ? transition.durationIn + transition.easing
    : transition.durationOut + transition.easing
  };
  position: fixed;
  top: 0;
  bottom: 0;
  /* ${({ dir }) => {dir === 'left' || dir === 'right' ? 'height: 100vh' : 'width: 100vw' }}; */
  ${({ dir }) => {
    if (dir === 'left') return 'left: 100%; right: auto; top: 0; bottom: 0'
    if (dir === 'right') return 'right: 100%; left: auto; top: 0; bottom: 0'
    if (dir === 'top') return 'top: 100%; bottom: auto; left: 0; right:0'
    if (dir === 'bottom') return 'bottom: 100%; top: auto; left: 0; right:0'
  }};

  /*
  ${({ offsetTop }) => offsetTop && `top: ${offsetTop}px`};
  ${({ offsetBottom }) => offsetBottom && `bottom: ${offsetBottom}px`};
  ${({ offsetLeft }) => offsetLeft && `left: ${offsetLeft}px`};
  ${({ offsetRight }) => offsetRight && `right: ${offsetRight}px`};
  */

  ${({ dir, offsetTop }) => (
    offsetTop
      ? slidesHorizontaly(dir)
        ? `top: ${addUnitIfNeeded(offsetTop)}`
        : `padding-top: ${addUnitIfNeeded(offsetTop)}`
      : ''
  )};
  ${({ dir, offsetBottom }) => (
    offsetBottom
      ? slidesHorizontaly(dir)
        ? `bottom: ${addUnitIfNeeded(offsetBottom)}`
        : `padding-bottom: ${addUnitIfNeeded(offsetBottom)}`
      : ''
  )};
  ${({ offsetLeft }) => (
    offsetLeft &&
      `left: ${addUnitIfNeeded(offsetLeft)}`
  )};
  ${({ offsetRight }) => (
    offsetRight &&
      `right: ${addUnitIfNeeded(offsetRight)}`
  )};
`;

class Slide extends React.Component {
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
      style: styleProp,
      timeout,
      inAttr,
      direction,
      offsetBottom,
      offsetTop,
      offsetLeft,
      offsetRight,
      ...other
    } = this.props;

    const handlers = {
      onAnimationStart: inAttr ? this.handleEntering : this.handleExit,
      onAnimationEnd: inAttr ? this.handleEntered : this.handleExited,
    }

    return (
      <SlideUI
        timeout={timeout}
        className="SlideUI"
        inAttr={inAttr}
        dir={direction}
        offsetTop={offsetTop}
        offsetBottom={offsetBottom}
        offsetLeft={offsetLeft}
        offsetRight={offsetRight}
        {...handlers}
      >
        { children }
      </SlideUI>
    );
  }
}

Slide.propTypes = {
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
};

Slide.defaultProps = {
  timeout: {
    enter: 225,
    exit: 195,
  },
  direction: 'right'
};

export default Slide;
