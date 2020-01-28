import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable indent */
const BoxWrapperUI = styled.div`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'collapse')}
  z-index: 99;
  position: absolute;
  max-height: 0;
  top: 100%;
  ${({ fullWidthContent }) => (fullWidthContent ? 'width: 100%' : '')};

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

  ${({ anchor }) => (anchor === 'right' // eslint-disable-line no-nested-ternary
    ? 'right: 0'
    : anchor === 'outterLeft' ? 'left: 100%' : '')
  };
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
    overflow-x: ${({ visibleOverflow }) => (visibleOverflow ? 'visible' : 'hidden')};
    overflow-y: ${({ visibleOverflow }) => (visibleOverflow ? 'visible' : 'hidden')};
  }
  &, & > div {
    overflow-x: ${({ visibleOverflow, isOpen }) => (isOpen // eslint-disable-line no-nested-ternary
      ? (visibleOverflow ? 'visible' : 'hidden')
      : 'hidden')
    };
    overflow-y: ${({ visibleOverflow, isOpen }) => (isOpen // eslint-disable-line no-nested-ternary
      ? (visibleOverflow ? 'visible' : 'hidden')
      : 'hidden')
    };
  }

  /* TODO shoadow and focus stylesshould be managed by component orchestrating a dropDown2 */
  &:focus, &:focus-within {
    ${({ /* isOpen,  */theme }) => (
      `box-shadow: ${theme.outlineShadow2}; outline: ${theme.outline}`
    )};
  };
  ${({ theme, forceShadow, isOpen }) => forceShadow && isOpen &&
    `box-shadow: ${theme.outlineShadow2}; outline: ${theme.outline}`
  };
`;
/* eslint-enble indent */

class DropDown2 extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element,
    onTriggerWrapperRef: PropTypes.func,
    onChildrenWrapperRef: PropTypes.func,
    trigger: PropTypes.element,
    anchor: PropTypes.oneOf(['left', 'right', 'outterLeft']),
  }

  static defaultProps = {
    isOpen: undefined,
    fullWidthContent: false,
    onTriggerWrapperRef: () => {},
    onChildrenWrapperRef: () => {},
    trigger: <div />,
    children: <div />,
    anchor: 'left',
    BoxWrapperUIStyle: {},
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
    if (
      React.Children.count(this.props.children) !== React.Children.count(prevProps.childrenProps)
    ) {
      this.update();
    } else if (this.props.children !== prevProps.childrenProps) {
      // this.update();
    }
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
      const newHeight = this.ref.getBoundingClientRect().height;
      if (newHeight !== this.state.height) {
        this.setState({
          height: newHeight,
        });
      }

      // this.rafRef = requestAnimationFrame(this.update);
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
      fullWidthContent,
      forceShadow,
      visibleOverflow,
      buttonWrapperStyle,
      BoxWrapperUIStyle,
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
          ...buttonWrapperStyle,
        }}
        ref={this.storeWrapperRef}
      >
        <span data-drop-down-trigger>
          {TriggerWithHandler}
        </span>
        <BoxWrapperUI
          visibleOverflow={visibleOverflow}
          forceShadow={forceShadow}
          fullWidthContent={fullWidthContent}
          data-box-wrapper-ui
          onScroll={(e) => {
            e.stopPropagation();
          }}
          anchor={anchor}
          isFullWidth={isFullWidth}
          isOpen={isOpen}
          maxHeight={height}
          childrenWith={(childrenProps.style && childrenProps.style.width) || null}
          style={BoxWrapperUIStyle}
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
