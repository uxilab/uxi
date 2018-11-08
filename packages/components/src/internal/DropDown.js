import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import styled from 'styled-components';
import { UnstyledButton } from '../Button';
import debounce from 'lodash.debounce'

const ItemsWrapper = styled.div`
  ${({ theme: { transition } }) => transition.defaultAll};
`;

const PopOverArrow = styled.div`
  clip: rect(-8px 38px 11px -8px);
  position: absolute;
  width: 20px;
  height: 20px;
  min-height: 29px;
  background: transparent;
  top: -11px;
  ${({ anchor }) => (anchor === 'right' ? 'right: 20px;' : 'left: 20px;')};

  &:after {
    ${({ isPopOver }) => (isPopOver ? 'content: ""' : '')};
    display: block;
    width: 20px;
    height: 20px;
    /* min-height: 20px; */
    position: absolute;
    /* top: -10px;
    left: 20px; */
    box-sizing: border-box;
    background: white;
    transform: rotate(-45deg);
    transform-origin: center center;
    border-style: solid;
    border-color: rgb(206, 206, 206);
    border-width: 1px;
  }
`;

const WrapperUI = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%' : '')};
`;


/**
 * DropDown
 *
 * default to right aligning the droped down part
 */
const styles = {
  triggerWrapper: {
    cursor: 'pointer',
  },
  itemsWrapper: {
    zIndex: 9,
    minWidth: '100px',
    background: 'white',
    position: 'absolute',
    border: '1px solid #cecece',
    borderColor: 'transparent',
    marginTop: '1px',
    borderRadius: '3px',
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  triggerInnerWrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'stretch',
  },
};

// eslint-disable-next-line react/prefer-stateless-function
export class DropDown extends Component {
  static propTypes = {
    main: PropTypes.node,
    inertMain: PropTypes.bool,
    items: PropTypes.array,
  }

  static defaultProps = {
    main: null,
    items: [],
    inertMain: false,
    anchor: 'left',
  }

  constructor(props) {
    super(props);

    this.isOpenControlled = this.props.isOpen !== undefined;

    this.state = {
      isOpen: this.isOpenControlled ? this.props.isOpen : false,
      windowWidth: (window.innerWidth),
      windowHeight: (window.innerHeight),
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.handleWindowResize = debounce(this.handleWindowResize, 50).bind(this);
    this.handleWindowScroll = debounce(this.handleWindowScroll, 50).bind(this);
    this.attachListeners = this.attachListeners.bind(this);
    this.detachListeners = this.detachListeners.bind(this);
    this.mainRef = React.createRef();
    this.itemsRef = React.createRef();
  }

  getOpenState() {
    return this.isOpenControlled ? this.props.isOpen : this.state.isOpen;
  }

  getDomElementToListenTo() {
    const { mainScrollingElementSelector } = this.props;
    const elToListen = window;

    if (mainScrollingElementSelector) {
      const htmlNodeRef = document.querySelector(mainScrollingElementSelector);
      if (htmlNodeRef) {
        elToListen = htmlNodeRef;
      }
    }

    return elToListen;
  }

  componentDidMount() {
    const { style } = this.props;

    this.htmlNodeRef = this.getDomElementToListenTo();

    console.log('componentDidMount');

    const isOpen = this.getOpenState();

    if (isOpen) {
      this.attachListeners();
    }
  }
/*
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');

    const { onIsOpenChange } = this.props;

    if (nextProps.isOpen !== undefined) {
      this.setState({
        isOpen: nextProps.isOpen,
      }, () => {
        if (onIsOpenChange) {
          onIsOpenChange(nextProps.isOpen);
        }
      });
    }
  }*/
/*
  componentDidUpdate(
    { isOpen: prevIsOpen },
  ) {
    const { isOpen: nextWillOpen } = this.props;
    console.log('componentDidUpdate');

    const willBeOpen = willBeOpenState || willBeOpenProps;
    let shouldFocusTrigerrer = false;

    if (!willBeOpen) {
      shouldFocusTrigerrer = true;
    }

    this.setState({
      shouldFocusTrigerrer,
    });
  }

  componentWillUpdate(
    { isOpen: willBeOpenProps },
    { isOpen: willBeOpenState }
  ) {

    console.log('componentWillUpdate');

    const willBeOpen = willBeOpenState || willBeOpenProps;
    let shouldFocusTrigerrer = false;

    if (!willBeOpen) {
      shouldFocusTrigerrer = true;
    }

    this.setState({
      shouldFocusTrigerrer,
    });
  }
*/
  /*
  componentDidUpdate(prevProps) {
    if (prevProps.items.length !== this.props.items.length) {
      setTimeout(() => this.forceUpdate(), 1);
    } else if (prevProps.items !== this.props.items) {
      setTimeout(() => this.forceUpdate(), 1);
    }
  }*/

  componentWillUnmount() {

    console.log('componentWillUnmount');

    this.detachListeners();
  }

  getDynamicItemsStyles() {
    const {
      mainRef,
      itemsRef
    } = this;

    const {
      itemsStyle,
      anchor,
      isFullWidth,
      isPopOver,
    } = this.props;

    const isOpen = this.getOpenState();

    if (
      !mainRef ||
      !itemsRef ||
      !itemsRef.current ||
      !mainRef.current ||
      !mainRef.current.getBoundingClientRect
    ) {
      return {};
    }

    let itemsHeight;
    if (itemsStyle && 'maxHeight' in itemsStyle) {
      itemsHeight = itemsStyle.maxHeight;
    } else {
      itemsHeight = [...itemsRef.current.children]
        .reduce((acc, el) => acc + el.getBoundingClientRect().height, 0);
    }

    const cRectMain = mainRef.current.getBoundingClientRect();
    const cRectItems = itemsRef.current.getBoundingClientRect();
    const ItemsTop = cRectMain.bottom;
    const ItemsLeft = cRectMain.left;// - (cRectItems.width - cRectMain.width);
    const width = cRectMain.width;

    let left = '';
    const right = '';
    if (anchor === 'left') {
      left = `${ItemsLeft}px`;
    } else if (anchor === 'right') {
      left = `${ItemsLeft - (cRectItems.width - cRectMain.width)}px`;
    }

    const top = isPopOver
      ? (ItemsTop + 20)
      : ItemsTop;

    return {
      maxHeight: isOpen ? itemsHeight : 0,
      width: isFullWidth ? `${width}px` : 'auto',
      left,
      right,
      top,
      borderColor: isOpen ? '#cecece' : 'transparent',
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'all' : 'none',
      position: 'fixed',
    };
  }

  attachListeners() {
    window.addEventListener('resize', this.handleWindowResize);
    this.htmlNodeRef.addEventListener('scroll', this.handleWindowScroll);
  }

  detachListeners() {
    window.removeEventListener('resize', this.handleWindowResize);
    this.htmlNodeRef.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowResize() {
    console.log('resize');
    this.setState(this.state);
  }

  handleWindowScroll() {
    console.log('scroll');
    this.setState(this.state);
  }

  shouldComponentUpdate({ isOpen: nextIsOpen, main: nextMain, items: nextItems}) {
    const isOpen = this.getOpenState();
    const { main, items } = this.props;

    return (nextIsOpen !== isOpen || nextMain !== main || items !== nextItems );
  }

  handleClickOutside() {
    const { onIsOpenChange } = this.props;

    const isOpen = this.getOpenState();

    if (isOpen) {
      const newOpen = false;
      const { leaveOpenOnClickOutside } = this.props;
      if (!leaveOpenOnClickOutside) {
        this.setState({
          isOpen: newOpen,
        }, () => {
          if (onIsOpenChange) {
            onIsOpenChange(newOpen);
          }
        });
      }
      this.detachListeners();
    }
  }

  handleToggleVisibility(e) {
    /*if (this.props.main.props.onClick) {
      this.props.main.props.onClick(e);
    }*/

    const { onIsOpenChange } = this.props;
    const isOpen = this.getOpenState();

    const nextOpenState = !isOpen;
    this.setState({
        isOpen: nextOpenState
    });

    if (onIsOpenChange) {
      onIsOpenChange(nextOpenState);
    }

    //think this check on controlled is unecessary but OK
    //if (!this.isOpenControlled) {
      if (nextOpenState) {
        this.attachListeners();
      } else {
        this.detachListeners();
      }
   // }
  }

  setupMainElement() {
    const { main } = this.props;

    return React.cloneElement(main, {
      ref: this.mainRef,
      //onClick: () => {
        //alert('setupMainElement Button');
        //this.handleToggleVisibility();
        //if (main.props.onClick) {
          //main.props.onClick();
        //}
      //},
    });
  }

  setupItems() {
    const { items } = this.props;

    return React.Children.map(items, child => React.cloneElement(child, {
      ...child.props,
      style: {
        ...(child && child.props.style ? child.props.style : {}),
        ':hover': {
          backgroundColor: '#bebebe',
        },
      },
      onClose: () => {
        this.handleToggleVisibility();
      },
    }));
  }

  render() {
    const {
      isFullWidth,
      anchor,
      inertMain,
      style,
      itemsStyle,
      triggerWrapperStyle,
      isPopOver,
      isOpen: isOpenProp,
    } = this.props;

    const {
      isOpen: isOpenState,
      shouldFocusTrigerrer,
    } = this.state;

    const isOpen = isOpenProp || isOpenState;

    const dropDownMain = this.setupMainElement();
    const decoratedItems = this.setupItems();

    const cleanedItemsStyle = {
      ...itemsStyle,
      ...(isOpen && itemsStyle && 'maxHeight' in itemsStyle
        ? { maxHeight: itemsStyle.maxHeight }
        : {}
      ),
    };

    console.log('re-render')

    const tabIndexButtonattr = (shouldFocusTrigerrer ? { tabIndex: inertMain ? '-1' : '0' } : {});
    const GDDynamicstyles = this.getDynamicItemsStyles();

    return (
      <WrapperUI style={style} isFullWidth={isFullWidth}>
        <UnstyledButton
          inert={inertMain}
          data-drop-down-main
          role={inertMain === false ? undefined : 'menu'}
          isFullWidth={isFullWidth}
          style={{ ...styles.triggerWrapper, ...triggerWrapperStyle }}
          onClick={() => {
            this.handleToggleVisibility();
          }}
          {...tabIndexButtonattr}
        >
          <div style={styles.triggerInnerWrapper}>
            {dropDownMain}
          </div>
        </UnstyledButton>
        <ItemsWrapper
          data-drop-down-items
          isPopOver={isPopOver}
          style={{ ...styles.itemsWrapper, ...GDDynamicstyles, ...cleanedItemsStyle }}
          innerRef={this.itemsRef}
        >
          {isPopOver && <PopOverArrow isPopOver={isPopOver} anchor={anchor} />}
          {decoratedItems}
        </ItemsWrapper>
      </WrapperUI>
    );
  }
}

export default enhanceWithClickOutside(DropDown);
