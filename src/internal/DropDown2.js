import React, { Component } from 'react';
import styled from 'styled-components';

/* eslint-disable indent */
const BoxWrapperUI = styled.div`
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
  ${({ isOpen, theme }) => (isOpen
    ? `box-shadow: ${theme.outlineShadow}; outline: ${theme.outline}`
    : '')
  };
`;
/* eslint-enble indent */

class DropDown2 extends Component {
  constructor(props) {
    super(props);

    this.ref = null;

    this.isControlled = this.props.isOpen !== undefined;

    this.state = {
      isOpen: this.isControlled ? this.props.isOpen : false,
      // scrollOffset: 0,
      // rect: {
      // top: 0,
      // left: 0,
      // right: 0,
      // bottom: 0,
      height: 0,
      // width: 0,
      // },
    };

    this.update = this.update.bind(this);
    this.storeRef = this.storeRef.bind(this);
    // this.findScrollingContextRef = this.findScrollingContextRef.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  componentWillUnmount() {
    this.scrollingContextRef = null;

    window.cancelAnimationFrame(this.rafRef);
  }

  // findScrollingContextRef() {
  //   if (!this.scrollingContextRef) {
  //     this.scrollingContextRef = this.props.mainScrollingElementSelector
  //       ? document.querySelector(this.props.mainScrollingElementSelector)
  //       : window;
  //   }
  // }

  toggleVisibility() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  update() {
    // this.findScrollingContextRef();
    if (this.ref/*  && this.scrollingContextRef */) {
      this.setState({
        height: this.ref.getBoundingClientRect().height,
        // rect: this.ref.getBoundingClientRect(),
        // scrollOffset: this.scrollingContextRef.scrollTop,
      });

      this.rafRef = requestAnimationFrame(this.update);
    }
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
      isOpen,
      height,
    } = this.state;

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
            {children}
          </div>
        </BoxWrapperUI>
      </div>
    );
  }
}

export default DropDown2;
