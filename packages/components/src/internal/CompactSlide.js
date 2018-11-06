// @inheritedComponent Transition

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable */
const SlideUI = styled.div`
  overflow-y: auto; /*  not sure about this -df */
  /* height: 100%; */ /*  not sure about this -df */

  z-index: 200;
  transition: all 1s linear;
  transition: all ${({ inAttr: isIn, timeout, timeout: { enter, exit }, theme: { transition } }) => isIn
    ? transition.durationIn + transition.easing
    : transition.durationOut + transition.easing
  };
  position: fixed;
  top: 0;
  bottom: 0;

  /* ${({ dir }) => {dir === 'left' || dir === 'right' ? 'height: 100vh' : 'width: 100vw' }}; */
  ${({ anchor }) => {
    if (anchor === 'top') return 'top: 0; bottom: auto; left: 50%'
    if (anchor === 'top-left') return 'top: 0; bottom: auto; left: 0'
    if (anchor === 'top-right') return 'top: 0; bottom: auto; right: 0'

    if (anchor === 'bottom') return 'top: auto; bottom: 0; left: 50%'
    if (anchor === 'bottom-left') return 'top: auto; bottom: 0; left: 0'
    if (anchor === 'bottom-right') return 'top: auto; bottom: 0; right: 0'
  }};

  transform: ${({ inAttr: isIn, dir, anchor }) => {
    let x = 0
    let y = 0
    let z = 0

    if (isIn === false) {
      if (dir === 'left')   { x = 100 }
      if (dir === 'right')  { x = -100 }
      if (dir === 'top')    { y = 100 }
      if (dir === 'bottom') { y = -100 }

      // take care of h centering top and bottom anchored ones

    }

    if (anchor === 'top' || anchor === 'bottom') {
      x -= 50
    }


    /* else {
      if (dir === 'left') return 'translate3d(0, 0, 0)'
      if (dir === 'right') return 'translate3d(0, 0, 0)'
      if (dir === 'top') return 'translate3d(0, 0, 0)'
      if (dir === 'bottom') return 'translate3d(0, 0, 0)'
    } */
    return `translate3d(${x ? x+'%' : x}, ${y ? y+'%' : y}, 0)`
  }};

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
        anchor={anchor}
        {...handlers}
      >
        { children }
      </SlideUI>
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
  direction: 'right'
};

export default CompactSlide;
