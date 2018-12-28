import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import styled from 'styled-components';
import { UnstyledButton } from '../Button';
import UnstyledButtonBeta from '../Button/UnstyledButton1';

const ItemsWrapper = styled.div`
  ${({ theme: { transition } }) => transition.defaultAll};
`;

const PopOverArrow = styled.div`
  /* overflow: ${({ isPopOver }) => (isPopOver ? 'visible' : 'hidden')}; */
  /* clip: rect(0px 20px 10px 0px); */

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
    /* clip-path: polygon(0 0, 100% 0, 100% 100%); */
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
  // itemsWrapperString: `
  //   z-index: 1,
  //   min-width: 180px,
  //   background: white,
  //   position: absolute,
  //   overflow: hidden,
  //   border: 1px solid #cecece,
  //   border-color: transparent,
  //   margin-top: 1px,
  //   border-radius: 3px,
  //   transition: max-height .3s ease-out, opacity .3,8s ease-out,
  //   opacity: 0,
  //   display: flex,
  //   flex-direction: column,
  // `,
};

// eslint-disable-next-line react/prefer-stateless-function
export class DropDown extends PureComponent {
  static propTypes = {
    main: PropTypes.node,
    inertMain: PropTypes.bool,
    items: PropTypes.array,
  }

  static defaultProps = {
    main: <div />,
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
      initalStyleValue: null,
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleWindowScroll = this.handleWindowScroll.bind(this);
    this.attachListeners = this.attachListeners.bind(this);
    this.detachListeners = this.detachListeners.bind(this);
  }

  // componentWillMount() {
  // this.isControlled = this.props.isOpen !== undefined;
  // if (!this.isControlled) {
  //   // not controlled, use internal state
  //   this.setState({
  //     isOpen: this.props.defaultChecked !== undefined ? this.props.defaultChecked : false,
  //   });
  // }
  // }

  componentDidMount() {
    const { style, mainScrollingElementSelector } = this.props;

    this.htmlNodeRef = document;
    if (mainScrollingElementSelector) {
      const htmlNodeRef = document.querySelector(mainScrollingElementSelector);
      if (htmlNodeRef) {
        this.htmlNodeRef = htmlNodeRef;
      }
    }

    this.setState({
      initalStyleValue: style,
    });

    const isOpen = this.isOpenControlled ? this.props.isOpen : this.state.isOpen;

    if (isOpen) {
      this.attachListeners();
    }
  }

  componentWillReceiveProps(nextProps) {
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
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items.length !== this.props.items.length) {
      // setTimeout(() => this.forceUpdate(), 1);
    } else if (prevProps.items !== this.props.items) {
      // setTimeout(() => this.forceUpdate(), 1);
    }
  }

  componentWillUnmount() {
    this.detachListeners();
  }

  getDynamicItemsStyles() {
    const { isOpen: isOpenState, mainRef, itemsRef } = this.state;
    const { itemsStyle, anchor, isFullWidth, isPopOver, isOpen: isOpenProp } = this.props;

    const isOpen = this.isOpenControlled ? isOpenProp : isOpenState;

    if (!mainRef || !itemsRef || !mainRef.getBoundingClientRect) { return {}; }

    let itemsHeight;
    if (itemsStyle && 'maxHeight' in itemsStyle) {
      itemsHeight = itemsStyle.maxHeight;
    } else {
      itemsHeight = [...itemsRef.children]
        .reduce((acc, el) => acc + el.getBoundingClientRect().height, 0);
    }

    const cRectMain = mainRef.getBoundingClientRect();
    const cRectItems = itemsRef.getBoundingClientRect();
    const ItemsTop = cRectMain.bottom;
    const ItemsLeft = cRectMain.left;// - (cRectItems.width - cRectMain.width);
    const width = cRectMain.width;

    let left = 'sdrgqerg';
    const right = '';
    if (anchor === 'left') {
      left = `${ItemsLeft}px`;
    } else if (anchor === 'right') {
      left = `${ItemsLeft - (cRectItems.width - cRectMain.width)}px`;
    }
    /*
    else if (anchor === 'bottom') {
    } else if (anchor === 'top') {
    }
    */

    const top = isPopOver
      ? (ItemsTop + 20)
      : ItemsTop;

    const res = {
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


    return {
      ...res,
    };
  }

  attachListeners() {
    window.addEventListener('resize', this.handleWindowResize);
    if (this.props.mainScrollingElementSelector) {
      if (this.htmlNodeRef) {
        this.htmlNodeRef.addEventListener('scroll', this.handleWindowScroll);
      }
    } else {
      window.addEventListener('scroll', this.handleWindowScroll);
    }
  }

  detachListeners() {
    window.removeEventListener('resize', this.handleWindowResize);
    if (this.props.mainScrollingElementSelector) {
      if (this.htmlNodeRef) {
        this.htmlNodeRef.removeEventListener('scroll', this.handleWindowScroll);
      }
    } else {
      window.removeEventListener('scroll', this.handleWindowScroll);
    }
  }

  handleWindowResize() {
    // this.forceUpdate();
    if (!this.isOpenControlled) {
      this.setState({ isOpen: false });
    }
  }
  handleWindowScroll() {
    // this.forceUpdate();
    if (!this.isOpenControlled) {
      this.setState({ isOpen: false });
    }
  }

  handleClickOutside() {
    const { isOpen: isOpenState } = this.state;
    const { onIsOpenChange, isOpen: isOpenProp } = this.props;

    const isOpen = this.isOpenControlled ? isOpenProp : isOpenState;

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
    if (this.props.main.props.onClick) {
      this.props.main.props.onClick(e);
    }


    const { isOpen } = this.state;
    const { onIsOpenChange } = this.props;
    const nextOpenState = !isOpen;
    this.setState(
      { isOpen: nextOpenState },
      () => {
        if (onIsOpenChange) {
          onIsOpenChange(nextOpenState);
        }
      }
    );

    if (!this.isOpenControlled) {
      if (nextOpenState) {
        this.attachListeners();
      } else {
        this.detachListeners();
      }
    }
  }

  storeMainRef(ref) {
    const mainRef = ReactDOM // eslint-disable-line react/no-find-dom-node
      .findDOMNode(ref);
      // .getBoundingClientRect(); // outputs <h3> coordinates

    this.setState({ mainRef });
  }

  storeItemsRef(ref) {
    const { onItemRef } = this.props;

    const itemsRef = ReactDOM // eslint-disable-line react/no-find-dom-node
      .findDOMNode(ref);

    this.setState({ itemsRef });

    if (onItemRef) {
      onItemRef(itemsRef);
    }
  }

  render() {
    const {
      props: {
        isFullWidth,
        anchor,
        main,
        inertMain,
        items: itemsBefore,
        style,
        itemsStyle,
        triggerWrapperStyle,
        isPopOver,
        // handleDropDownChange,
        // mainStyle,
        isOpen: isOpenProp,
      },
      state: {
        isOpen: isOpenState,
        shouldFocusTrigerrer,
      },
    } = this;

    const isOpen = isOpenProp || isOpenState;


    // quikc dirty check
    // if (!(main && main.prototype && main.prototype.render)) {
    //   console.warn('The `main` element of DropDown cannot be stateless, because it needs a ref')
    // }

    const dropDownMain = React.cloneElement(main,
      {
        ref: ref => this.storeMainRef(ref),
        // this next line is useless
        // onClick: () => {
        //   this.handleToggleVisibility();
        //   if (main.props.onClick) {
        //     main.props.onClick();
        //   }
        // },
      });
    // const dropDownMainDOMNode = ReactDOM.findDOMNode(dropDownMain);


    const items = React.Children.map(itemsBefore, child => child && React.cloneElement(child, {
      style: {
        ...(child && child.props.style ? child.props.style : {}),
        ':hover': {
          backgroundColor: '#bebebe',
        },
      },
      onClose: () => { this.handleToggleVisibility(); },
    }));

    const cleanedItemsStyle = {
      ...itemsStyle,
      // maxHeight: isOpen && itemsStyle ? itemsStyle.maxHeight : 0,
      ...(isOpen && itemsStyle && 'maxHeight' in itemsStyle
        ? { maxHeight: itemsStyle.maxHeight }
        : {}
      ),
      // ...(!isOpen ? { maxHeight: 0 } : {} ),
    };

    if (isPopOver) {
      // find the close btn
    }

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
          onClick={this.handleToggleVisibility}
          {...tabIndexButtonattr}
        >
          <div style={styles.triggerInnerWrapper}>
            {dropDownMain}
          </div>
        </UnstyledButton>

        {/* <UnstyledButtonBeta
            inert={inertMain}
            data-drop-down-main
            role={inertMain === false ? undefined : 'menu'}
            isFullWidth={isFullWidth}
            style={{ ...styles.triggerWrapper, ...triggerWrapperStyle }}
            onClick={this.handleToggleVisibility}
            {...tabIndexButtonattr}
          >
            <div style={styles.triggerInnerWrapper}>
              {dropDownMain}
            </div>
          </UnstyledButtonBeta> */}

        <ItemsWrapper
          data-is-the-one="true"
          data-drop-down-items
          // aria-hidden={isOpen ? false : true}
          // autoFocus={isOpen}
          // tabIndex={isOpen ? 1 : -1}
          isPopOver={isPopOver}
          style={{ ...styles.itemsWrapper, ...GDDynamicstyles, ...cleanedItemsStyle }}
          ref={ref => this.storeItemsRef(ref)}
        >
          {isPopOver && <PopOverArrow isPopOver={isPopOver} anchor={anchor} />}
          {/* {items} */}
          {
            React.Children.map(items, child => child && React.cloneElement(child, {
              ...(child.props || {}),
              onClick: (e) => {
                this.handleToggleVisibility();
                if (child.props && child.props.onClick) {
                  child.props.onClick(e);
                }
              },
              //   tabIndex: isOpen ? 0 : -1,
              //   'aria-hidden': isOpen
              //     ? (child.type === Separator ? false : true)
              //     : false
            }))
          }
        </ItemsWrapper>
      </WrapperUI>
    );
  }
}

export default enhanceWithClickOutside(DropDown);
