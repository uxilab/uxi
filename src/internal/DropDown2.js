import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable indent */
const BoxWrapperUI = styled.div.attrs({})`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'collapse')}
  z-index: 99;
  position: absolute;
  max-height: 0;
  top: 100%;

  /**
    * fix flex scroll bar issue on IE */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* &, & > div,  */& > div > div {
      /* width: 100%; */
      ${({ childrenWith }) => (childrenWith
        ? `width: ${childrenWith};`
        : 'width: calc(100% - 24px);' /* 24 px => IE crollBar width */
      )};
    }
  };
  ${({ anchor }) => (anchor === 'right' ? 'right: 0' : '')};
  /* width: 100%; */
  ${({ isFullWidth }) => isFullWidth && 'width: 100%'};
  border-radius: ${({ theme: { radius } }) => radius};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  transition-duration: ${({ isOpen, theme: { transition } }) => (isOpen
    ? transition.durationIn
    : transition.durationOut
  )};
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : '0px')};

  &, & > div {
    overflow-x: hidden;
    overflow-y: hidden;
  }


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
    onTriggerWrapperRef: PropTypes.func,
    onChildrenWrapperRef: PropTypes.func,
    trigger: PropTypes.element,
    anchor: PropTypes.oneOf(['left', 'right']),
  }

  static defaultProps = {
    isOpen: undefined,
    onTriggerWrapperRef: () => {},
    onChildrenWrapperRef: () => {},
    trigger: <div />,
    children: <div />,
    anchor: 'left',
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

  componentWillUnmount() {
    this.scrollingContextRef = null;

    window.cancelAnimationFrame(this.rafRef);
  }

  toggleVisibility() {
    if (!this.isControlled) {
      const nextIsOpen = !this.state.isOpen;

      this.setState({ isOpen: nextIsOpen });
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
    if (this.props.onTriggerWrapperRef) {
      this.props.onTriggerWrapperRef(node);
    }
    this.update();
  }

  storeRef(node) {
    this.ref = node;
    if (this.props.onChildrenWrapperRef) {
      this.props.onChildrenWrapperRef(node);
    }
    this.update();
  }

  render() {
    const {
      trigger,
      children,
      isFullWidth,
      anchor,
    } = this.props;

    const {
      height,
    } = this.state;

    const isOpen = this.isControlled ? this.props.isOpen : this.state.isOpen;

    const { props: childrenProps = {} } = children;


    const TriggerWithHandler = React.cloneElement(trigger, {
      ...((trigger && trigger.props) || {}),
      // 'data-drop-down-trigger': true,
      onClick: (...a) => {
        this.toggleVisibility(...a);
        if (trigger.props && trigger.props.onClick) {
          trigger.props.onClick(...a);
        }
      },
    });

    return (
      <div
        style={{
          position: 'relative',
          ...(!isFullWidth ? { display: 'inline-block' } : {}),
        }}
        ref={this.storeWrapperRef}
      >
        <span data-drop-down-trigger>
          {TriggerWithHandler}
        </span>
        <BoxWrapperUI
          data-Box-Wrapper-UI
          onScroll={(e) => {
            e.stopPropagation();
          }}
          anchor={anchor}
          isFullWidth={isFullWidth}
          isOpen={isOpen}
          maxHeight={height}
          childrenWith={(childrenProps.style && childrenProps.style.width) || null}
        >
          <div ref={this.storeRef} data-drop-down-content>
            {React.Children.only(children)}
          </div>
        </BoxWrapperUI>
      </div>
    );
  }
}

export default DropDown2;
