import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable indent */
const BoxWrapperUI = styled.div.attrs({
  // tabIndex: ({ isOpen }) => (isOpen ? '0' : '-1'),
})`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'collapse')}
  z-index: 99;
  position: absolute;
  max-height: 0;
  border-radius: ${({ theme: { radius } }) => radius};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  transition-duration: ${({ isOpen, theme: { transition } }) => (isOpen
    ? transition.durationIn
    : transition.durationOut
  )};
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : '0px')};
  overflow: ${({ isOpen }) => (isOpen ? 'auto' : 'hidden')};

  &:focus, &:focus-within {
    ${({ /* isOpen,  */theme }) => (/* isOpen */ true
      ? `box-shadow: ${theme.outlineShadow}; outline: ${theme.outline}`
      : '')
    };
  }
`;
/* eslint-enble indent */

class DropDown2 extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element,
  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.ref = null;

    this.isControlled = this.props.isOpen !== undefined;

    this.state = {
      isOpen: this.isControlled ? this.props.isOpen : false,
      height: 0,
    };

    this.update = this.update.bind(this);
    this.storeRef = this.storeRef.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.storeWrapperRef = this.storeWrapperRef.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    if (this.isControlled) {
      if (prevProps.isOpen !== this.props.isOpen) {
        if (this.props.isOpen) {
          this.focusContent();
        } else {
          this.focusTrigger();
        }
        // this.toggleVisibility();
      }
    }
  }

  componentWillUnmount() {
    this.scrollingContextRef = null;

    window.cancelAnimationFrame(this.rafRef);
  }

  focusTrigger() {
    // return;
    let focusTarget = this.wrapperRef;

    if (focusTarget) {
      if (
        this.wrapperRef
        && this.wrapperRef.querySelector
        && this.wrapperRef.querySelector('button')
      ) {
        focusTarget = this.wrapperRef.querySelector('button');
      } else if (
        this.wrapperRef
        && this.wrapperRef.firstChild
        && this.wrapperRef.firstChild.focus
      ) {
        focusTarget = this.wrapperRef.firstChild;
      }
        console.log('trigger focusTarget=', this.wrapperRef.firstChild);

      if (focusTarget.focus) {
        setTimeout(() => {
          focusTarget.focus();
        }, 10);
      }
    }
  }

  focusContent() {
    if (
      this.ref
      && this.ref.firstChild
      && this.ref.firstChild.firstChild
      && this.ref.firstChild.firstChild.focus
    ) {
      console.log('content focusTarget=', this.wrapperRef.firstChild);
      setTimeout(() => {
        this.ref.firstChild.firstChild.focus();
      }, 10);
    }
  }

  toggleVisibility() {
    if (!this.isControlled) {
      const nextIsOpen = !this.state.isOpen;
      const cb = nextIsOpen
        ? this.focusTrigger
        : this.focusContent;

      this.setState({ isOpen: nextIsOpen }, cb);
    }
  }

  update() {
    if (this.ref) {
      this.setState({
        height: this.ref.getBoundingClientRect().height,
      });

      this.rafRef = requestAnimationFrame(this.update);
    }
  }

  storeWrapperRef(node) {
    this.wrapperRef = node;
    this.update();
  }

  storeRef(node) {
    this.ref = node;
    this.update();
  }

  render() {
    const {
      trigger,
      children,
    } = this.props;

    const {
      height,
    } = this.state;

    const isOpen = this.isControlled ? this.props.isOpen : this.state.isOpen;

    const { props: childrenProps = {} } = children;


    const TriggerWithHandler = React.cloneElement(trigger, {
      ...((trigger && trigger.props) || {}),
      onClick: (...a) => {
        this.toggleVisibility(...a);
        if (trigger.props && trigger.props.onClick) {
          trigger.props.onClick(...a);
        }
      },
    });

    return (
      <div style={{ position: 'relative' }} ref={this.storeWrapperRef} >
        {TriggerWithHandler}
        <BoxWrapperUI
          isOpen={isOpen}
          maxHeight={height}
          style={{
            ...((childrenProps.style && childrenProps.style.width)
              ? { width: childrenProps.style.width }
              : {}
            ),
          }}
        >
          <div ref={this.storeRef}>
            {React.Children.only(children)}
          </div>
        </BoxWrapperUI>
      </div>
    );
  }
}

export default DropDown2;
