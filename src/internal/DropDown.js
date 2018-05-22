import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import { Separator } from '../Menu';
import { UnstyledButton } from '../Button';
import styled from 'styled-components';

const ItemsWrapper = styled.div``;

const PopOverArrow = styled.div`
  /* overflow: ${({ isPopOver }) => isPopOver ? 'visible' : 'hidden' }; */
  /* clip: rect(0px 20px 10px 0px); */

  clip: rect(-8px 38px 11px -8px);

  position: absolute;
  width: 20px;
  height: 20px;
  min-height: 29px;
  background: transparent;
  top: -11px;
  ${({ anchor }) => anchor === 'right' ? 'right: 20px;' : 'left: 20px;' };

  &:after {
    ${({ isPopOver }) => isPopOver ? 'content: ""' : '' };
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
  ${({ isFullWidth }) => isFullWidth ? 'width: 100%' : '' };
`


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
    zIndex: 1,
    minWidth: '100px',
    background: 'white',
    position: 'absolute',
    // overflow: 'hidden',
    border: '1px solid #cecece',
    borderColor: 'transparent',
    marginTop: '1px',
    borderRadius: '3px',
    transition: 'height .2s, max-height .2s, opacity .2s ease-out',
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
    items: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      windowWidth: (window.innerWidth),
      windowHeight: (window.innerHeight),
      initalStyleValue: null,
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleWindowScroll = this.handleWindowScroll.bind(this);
  }

  componentWillMount() {
    this.isControlled = this.props.isOpen !== undefined;
    // if (!this.isControlled) {
    //   // not controlled, use internal state
    //   this.setState({
    //     isOpen: this.props.defaultChecked !== undefined ? this.props.defaultChecked : false,
    //   });
    // }
  }

  componentDidMount() {
    const { style } = this.props;
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('scroll', this.handleWindowScroll);
    this.setState({
      initalStyleValue: style,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== undefined) {
      this.setState({
        isOpen: nextProps.isOpen,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  getDynamicItemsStyles() {
    const { isOpen, mainRef, itemsRef } = this.state;
    const { itemsStyle, anchor, isFullWidth, isPopOver } = this.props;
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
    const ItemsLeft = cRectMain.left - (cRectItems.width - cRectMain.width);
    const width = cRectMain.width;

    let left = '';
    const right = '';
    if (anchor === 'left') {
    } else if (anchor === 'right') {
      left = `${ItemsLeft}px`;
    } else if (anchor === 'bottom') {
    } else if (anchor === 'top') {
    }

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


  handleWindowResize() {
    this.forceUpdate();
  }
  handleWindowScroll() {
    this.forceUpdate();
  }
  handleClickOutside() {
    const { isOpen } = this.state;
    if (isOpen) {
      const { leaveOpenOnClickOutside } = this.props;
      if (!leaveOpenOnClickOutside) {
        this.setState({
          isOpen: false,
        });
      }
    }
  }

  handleToggleVisibility() {
    const { onIsOpenChange } = this.props;
    const isOpen = !this.state.isOpen
    console.log('handleToggleVisibility in dropdown')
    if (this.props.main.props.onClick) { this.props.main.props.onClick(); }
    this.setState(
      { isOpen, },
      () => {
        if (onIsOpenChange) {
          onIsOpenChange(isOpen)
        }
      }
    );

  }

  storeMainRef(ref) {
    const mainRef = ReactDOM // eslint-disable-line react/no-find-dom-node
      .findDOMNode(ref);
      // .getBoundingClientRect(); // outputs <h3> coordinates

    this.setState({ mainRef });
  }

  storeItemsRef(ref) {
    const itemsRef = ReactDOM // eslint-disable-line react/no-find-dom-node
      .findDOMNode(ref);

    this.setState({ itemsRef });
  }

  render() {
    const {
      props: {
        isFullWidth,
        anchor,
        main,
        items: itemsBefore,
        style,
        itemsStyle,
        isPopOver,
        handleDropDownChange,
        // mainStyle,
        // isOpen,
      },
      state: {
        isOpen,
      },
    } = this;

    // quikc dirty check
    // if (!(main && main.prototype && main.prototype.render)) {
    //   console.warn('The `main` element of DropDown cannot be stateless, because it needs a ref')
    // }

    const dropDownMain = React.cloneElement(main,
      {
        ref: ref => this.storeMainRef(ref),
        // this next line is useless
        onClick: () => {
          this.handleToggleVisibility();
          if (main.props.onClick) {
            main.props.onClick()
          }
        },
      });
    // const dropDownMainDOMNode = ReactDOM.findDOMNode(dropDownMain);


    const items = React.Children.map(itemsBefore, child => React.cloneElement(child, {
      style: {
        ...(child && child.props.style ? child.props.style : {}),
        ':hover': {
          backgroundColor: '#bebebe',
        },
      },
      onClose: () => { this.handleToggleVisibility(); console.log('onclose from dropdown') }
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

    return (
      <WrapperUI style={style} isFullWidth={isFullWidth}>
        <UnstyledButton
          role="menu"
          isFullWidth={isFullWidth}
          style={styles.triggerWrapper}
          onClick={this.handleToggleVisibility}
        >
          <div style={styles.triggerInnerWrapper}>
            {dropDownMain}
          </div>
        </UnstyledButton>
        <ItemsWrapper
          // aria-hidden={isOpen ? false : true}
          // autoFocus={isOpen}
          // tabIndex={isOpen ? 1 : -1}
          isPopOver={isPopOver}
          style={{ ...styles.itemsWrapper, ...this.getDynamicItemsStyles(), ...cleanedItemsStyle }}
          ref={ref => this.storeItemsRef(ref)}
        >
          {isPopOver && <PopOverArrow isPopOver={isPopOver} anchor={anchor} />}
          {/* {items} */}
          {
            React.Children.map(items, (child) => {
              // console.log('child.type', child.type)
              return React.cloneElement(child, {
                ...child.props,
              //   tabIndex: isOpen ? 0 : -1,
              //   'aria-hidden': isOpen
              //     ? (child.type === Separator ? false : true)
              //     : false
              })
            })
          }
        </ItemsWrapper>
      </WrapperUI>
    );
  }
}

export default enhanceWithClickOutside(DropDown);
