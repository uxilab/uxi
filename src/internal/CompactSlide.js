// @inheritedComponent Transition

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable */
const CompactSlideUI = styled.div`
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
  transform: ${({ inAttr: isIn, dir }) => {
    if (isIn === false) { return 'translate3d(0, 0, 0); opacity: 0; overflow: hidden'; }
    else {
      if (dir === 'left') return `translate3d(-100%, 0, 0)`
      if (dir === 'right') return `translate3d(100%, 0, 0)`
      if (dir === 'top') return `translate3d(0, -100%, 0)`
      if (dir === 'bottom') return `translate3d(0, 100%, 0)`
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

  ${({ offsetTop }) => offsetTop && `padding-top: ${offsetTop}px`};
  ${({ offsetBottom }) => offsetBottom && `padding-bottom: ${offsetBottom}px`};
  ${({ offsetLeft }) => offsetLeft && `padding-left: ${offsetLeft}px`};
  ${({ offsetRight }) => offsetRight && `padding-right: ${offsetRight}px`};
`;

class CompactSlide extends React.Component {
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
      anchor,
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
      <CompactSlideUI
        timeout={timeout}
        className="CompactSlideUI"
        inAttr={inAttr}
        dir={direction}
        anchor={anchor}
        offsetTop={offsetTop}
        offsetBottom={offsetBottom}
        offsetLeft={offsetLeft}
        offsetRight={offsetRight}
        style={styleProp}
        {...handlers}
      >
       <div> { children } </div>
      </CompactSlideUI>
    );
  }
}

CompactSlide.propTypes = {
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

CompactSlide.defaultProps = {
  timeout: {
    enter: 225,
    exit: 195,
  },
  direction: 'right',
  offsetBottom: 0,
  offsetTop: 0,
  offsetLeft: 0,
  offsetRight: 0,
};

export default CompactSlide;
