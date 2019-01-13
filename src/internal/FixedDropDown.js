import React, { Component } from 'react';
import styled from 'styled-components';

/* eslint-disable indent */
const BoxWrapperUI = styled.div`
  z-index: 99;
  position: fixed;
  top: ${({ top }) => top}px;
  max-height: 0;
  border-radius: ${({ theme: { radius } }) => radius};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  transition-duration: ${({ isOpen, theme: { transition } }) => (isOpen
    ? transition.durationIn
    : transition.durationOut
  )};
  max-height: ${({ isOpen, height }) => (isOpen ? height : 0)}px;
  overflow: ${({ isOpen }) => (isOpen ? 'auto' : 'hidden')};
  ${({ isOpen, theme }) => (isOpen
    ? `box-shadow: ${theme.outlineShadow}; outline: ${theme.outline}`
    : '')
  };
`;
/* eslint-enble indent */

class FixedDropDown extends Component {
  constructor(props) {
    super(props);

    this.ref = null;
    this.triggerRef = null;

    this.isControlled = this.props.isOpen !== undefined;

    this.state = {
      isOpen: this.isControlled ? this.props.isOpen : false,
      scrollOffset: 0,
      top: 0,
      height: 0,
    };

    this.update = this.update.bind(this);
    this.storeRef = this.storeRef.bind(this);
    this.storeTriggerRef = this.storeTriggerRef.bind(this);
    this.findScrollingContextRef = this.findScrollingContextRef.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  componentWillUnmount() {
    this.scrollingContextRef = null;

    this.cancelRAF();
  }

  findScrollingContextRef() {
    if (!this.scrollingContextRef) {
      this.scrollingContextRef = this.props.mainScrollingElementSelector
        ? document.querySelector(this.props.mainScrollingElementSelector)
        : window;
    }
  }

  toggleVisibility() {
    if (!this.isControlled) {
      this.setState({
        ...this.state,
        isOpen: !this.state.isOpen,
      }, () => { this.update(); });
    } /* else {
      const { onToggleVisibility } = this.props;
      if (onToggleVisibility) {
        onToggleVisibility();
      }
    } */
  }

  update() {
    const isOpen = this.isControlled ? this.props.isOpen : this.state.isOpen;

    if (isOpen) {
      this.findScrollingContextRef();
      if (this.ref && this.scrollingContextRef && this.triggerRef) {
        const rect = this.ref.getBoundingClientRect();
        const triggerRect = this.triggerRef.getBoundingClientRect();
        const newState = {
          ...this.state,
          height: rect.height,
          top: triggerRect.bottom,
          scrollOffset: this.scrollingContextRef.scrollTop,
        };
        this.setState(newState);

        this.rafRef = requestAnimationFrame(this.update);
      }
    } else {
      this.cancelRAF();
    }
  }

  cancelRAF() {
    if (this.rafRef) {
      window.cancelAnimationFrame(this.rafRef);
      this.rafRef = null;
    }
  }

  storeTriggerRef(node) {
    this.triggerRef = node;
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
      // rect,
      height,
      top,
      // scrollOffset,
    } = this.state;

    const isOpen = this.isControlled ? this.props.isOpen : this.state.isOpen;

    const { props: childrenProps = {} } = children;


    const TriggerWithHandler = React.cloneElement(trigger, {
      onClick: (...a) => {
        this.toggleVisibility(...a);
        if (trigger.props && trigger.props.onClick) {
          trigger.props.onClick(...a);
        }
      },
    });

    return (
      <div style={{ position: 'relative' }}>
        <div ref={this.storeTriggerRef}>
          {TriggerWithHandler}
        </div>
        <BoxWrapperUI
          isOpen={isOpen}
          height={height}
          top={top}
          style={{
            ...((childrenProps.style && childrenProps.style.width)
              ? { width: childrenProps.style.width }
              : {}
            ),
          }}
        >
          <div ref={this.storeRef}>
            {children}
          </div>
        </BoxWrapperUI>
      </div>
    );
  }
}

export default FixedDropDown;
