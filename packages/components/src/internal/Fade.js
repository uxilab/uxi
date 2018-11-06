import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import transitions from './transitions';

const reflow = node => node.scrollTop;

/**
 * The Fade transition is used by the Modal component.
 * It's using [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
class Fade extends React.Component {
  handleEnter = (node) => {
    node.style.opacity = '0'; // eslint-disable-line no-param-reassign
    reflow(node);

    if (this.props.onEnter) {
      this.props.onEnter(node);
    }
  };

  handleEntering = (node) => {
    const { timeout } = this.props;
    node.style.transition = transitions.create('opacity', { // eslint-disable-line no-param-reassign
      duration: typeof timeout === 'number' ? timeout : timeout.enter,
    });
    node.style.webkitTransition = transitions.create('opacity', { // eslint-disable-line no-param-reassign
      duration: typeof timeout === 'number' ? timeout : timeout.enter,
    });
    node.style.opacity = '1'; // eslint-disable-line no-param-reassign

    if (this.props.onEntering) {
      this.props.onEntering(node);
    }
  };

  handleExit = (node) => {
    const { timeout } = this.props;
    node.style.transition = transitions.create('opacity', { // eslint-disable-line no-param-reassign
      duration: typeof timeout === 'number' ? timeout : timeout.exit,
    });
    node.style.webkitTransition = transitions.create('opacity', { // eslint-disable-line no-param-reassign
      duration: typeof timeout === 'number' ? timeout : timeout.exit,
    });
    node.style.opacity = '0'; // eslint-disable-line no-param-reassign

    if (this.props.onExit) {
      this.props.onExit(node);
    }
  };

  render() {
    const {
      appear,
      children,
      onEnter,
      onEntering,
      onExit,
      style: styleProp,
      ...other
    } = this.props;

    const style = { ...styleProp };

    // For server side rendering.
    /* if (!this.props.in || appear) {
      style.opacity = '0';
    } */

    return (
      <Transition
        appear={appear}
        style={style}
        onEnter={this.handleEnter}
        onEntering={this.handleEntering}
        onExit={this.handleExit}
        {...other}
      >
        {children}
      </Transition>
    );
  }
}

Fade.propTypes = {
  appear: PropTypes.bool,
  children: PropTypes.element,
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onExit: PropTypes.func,
  style: PropTypes.object,
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  ]),
};

Fade.defaultProps = {
  appear: true,
  timeout: {
    enter: 225,
    exit: 195,
  },
  children: null,
  onEnter: () => {},
  onEntering: () => {},
  onExit: () => {},
  style: {},
};

export default Fade;
