// @inheritedComponent Transition

import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import EventListener from 'react-event-listener';
import debounce from 'lodash/debounce';
import Transition from 'react-transition-group/Transition';
import transitions from './transitions';

const GUTTER = 24;

// Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `translate3d(0, 0, 0)`.`
function getTranslateValue(props, node) {
  const { direction } = props;
  const rect = node.getBoundingClientRect();

  let transform;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    const computedStyle = window.getComputedStyle(node);
    transform =
      computedStyle.getPropertyValue('-webkit-transform') ||
      computedStyle.getPropertyValue('transform');
  }

  let offsetX = 0;
  let offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    const transformValues = transform
      .split('(')[1]
      .split(')')[0]
      .split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    return `translateX(100vw) translateX(-${rect.left - offsetX}px)`;
  } else if (direction === 'right') {
    return `translateX(-${rect.left + rect.width + GUTTER - offsetX}px)`;
  } else if (direction === 'up') {
    return `translateY(100vh) translateY(-${rect.top - offsetY}px)`;
  }

  // direction === 'down
  return `translate3d(0, ${0 - (rect.top + rect.height)}px, 0)`;
}

export function setTranslateValue(props, node) {
  const transform = getTranslateValue(props, node);

  if (transform) {
    node.style.transform = transform;
    node.style.webkitTransform = transform;
  }
}

const reflow = node => node.scrollTop;

class Slide extends React.Component {
  /* state = {
    // We use this state to handle the server-side rendering.
    firstMount: true,
  };
*/
  componentDidMount() {
    // state.firstMount handle SSR, once the component is mounted, we need
    // to properly hide it.
    if (!this.props.in) {
      // We need to set initial translate values of transition element
      // otherwise component will be shown when in=false.
      this.updatePosition();
    }
  }
  /*
  componentWillReceiveProps() {
    this.setState({
      firstMount: false,
    });
  } */
  /*
  componentDidUpdate(prevProps) {
    if (prevProps.direction !== this.props.direction && !this.props.in) {
      // We need to update the position of the drawer when the direction change and
      // when it's hidden.
      this.updatePosition();
    }
  } */
  /*
  componentWillUnmount() {
    this.handleResize.cancel();
  } */

  transition = null;

  updatePosition() {
    const element = findDOMNode(this.transition);
    if (element instanceof HTMLElement) {
      element.style.visibility = 'inherit';
      setTranslateValue(this.props, element);
    }
  }

  /* handleResize = debounce(() => {
    // Skip configuration where the position is screen size invariant.
    if (this.props.in || this.props.direction === 'down' || this.props.direction === 'right') {
      return;
    }

    const node = findDOMNode(this.transition);
    if (node instanceof HTMLElement) {
      setTranslateValue(this.props, node);
    }
  }, 166); */

  handleEnter = (node) => {
    console.log('Enter');
    setTranslateValue(this.props, node);
    reflow(node);
  };

  handleEntering = (node) => {
    console.log('Entering');
    const transitionValue = transitions.create('transform', {
      duration: 225,
      easing: transitions.easing.easeOut,
    });

    node.style.transition = transitionValue;
    node.style.transform = 'translate3d(0, 0, 0)';
  };

  /* handleExit = (node) => {
    const { timeout } = this.props;
    const transitionValue = transitions.create('transform', {
      duration: typeof timeout === 'number' ? timeout : timeout.exit,
      easing: transitions.easing.sharp,
    });

    console.log('Exit');
    console.log(transitionValue);


    node.style.transition = transitionValue;
    setTranslateValue(this.props, node);

    if (this.props.onExit) {
      this.props.onExit(node);
    }
  }; */

  /* handleExited = (node) => {
    // No need for transitions when the component is hidden
    node.style.transition = '';
    node.style.webkitTransition = '';

    if (this.props.onExited) {
      this.props.onExited(node);
    }
  };
*/
  render() {
    const {
      children,
      onEnter,
      onEntering,
      onExit,
      onExited,
      style: styleProp,
      ...other
    } = this.props;

    const style = { ...styleProp };

    /* if (!this.props.in && this.state.firstMount) {
      style.visibility = 'hidden';
    } */

    //  <EventListener target="window" onResize={this.handleResize}>
    return (

      <Transition
        onEnter={this.handleEnter}
        onEntering={this.handleEntering}
        onExit={this.handleExit || null}
        onExited={this.handleExited || null}
        appear
        {...other}
        ref={(node) => {
          this.transition = node;
        }}
      >
        {children}
      </Transition>
    );
  }
}

Slide.propTypes = {
  children: PropTypes.element,
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
  in: PropTypes.bool,
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
};

export default Slide;
