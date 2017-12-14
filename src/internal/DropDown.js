import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';

const styles = {
  wrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  triggerWrapper: {
    cursor: 'pointer',
  },
  itemsWrapper: {
    zIndex: 1,
    minWidth: '180px',
    background: 'white',
    position: 'absolute',
    overflow: 'hidden',
    border: '1px solid #cecece',
    borderColor: 'transparent',
    marginTop: '1px',
    borderRadius: '3px',
    transition: 'height .2s, max-height .2s, opacity .2s ease-out',
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
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
    const { itemsStyle } = this.props;
    if (!mainRef || !itemsRef || !mainRef.getBoundingClientRect) { return {}; }

    let itemsHeight;
    if (itemsStyle && 'maxHeight' in itemsStyle) {
      itemsHeight = itemsStyle.maxHeight;
    } else {
      itemsHeight = [...itemsRef.children]
        .reduce((acc, el) => acc + el.getBoundingClientRect().height, 0);
    }

    const cRectMain = mainRef.getBoundingClientRect();
    const res = {
      maxHeight: isOpen ? itemsHeight : 0,
      position: 'absolute',
      top: cRectMain.height,
      borderColor: isOpen ? '#cecece' : 'transparent',
      opacity: isOpen ? 1 : 0,
      // opacity: 1,
      pointerEvents: isOpen ? 'all' : 'none',
    };

    // FLIP :
    // const initialStyle = itemsRef.getAttribute('style');
    // itemsRef.setAttribute('style', `${styles.itemsWrapperString}; top: ${cRectMain.height}; position: absolute`);
    // itemsRef.setAttribute('style', `${styles.itemsWrapperString}; top: ${cRectMain.bottom}; position: fixed`);

    return {
      ...res,
      position: isOpen ? 'fixed' : 'absolute',
      top: isOpen ? cRectMain.bottom : cRectMain.height,
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
    this.setState({ isOpen: !this.state.isOpen });
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
        main,
        items: itemsBefore,
        // style,
        itemsStyle,
        // mainStyle,
        // isOpen,
      },
      state: {
        isOpen,
      },
    } = this;

    const dropDownMain = React.cloneElement(main,
      {
        ref: ref => this.storeMainRef(ref),
      });

    const items = React.Children.map(itemsBefore, child => React.cloneElement(child, {
      style: {
        ...child.props.style,
        ':hover': {
          backgroundColor: '#bebebe',
        },
      },
    }));

    const cleanedItemsStyle = {
      ...itemsStyle,
      // maxHeight: isOpen && itemsStyle ? itemsStyle.maxHeight : 0,
      ...(isOpen && itemsStyle && 'maxHeight' in itemsStyle
        ? { maxHeight: itemsStyle.maxHeight }
        : {}
      ),
      ...(!isOpen ? { maxHeight: 0 } : {}
      ),
    };

    return (
      <span style={{ ...styles.wrapper/* , ...style */ }}>
        <span tabIndex={0} role="menu" style={styles.triggerWrapper} onClick={this.handleToggleVisibility} >
          <span style={styles.triggerInnerWrapper}>
            {dropDownMain}
          </span>
        </span>
        <div
          style={{ ...styles.itemsWrapper, ...this.getDynamicItemsStyles(), ...cleanedItemsStyle }}
          ref={ref => this.storeItemsRef(ref)}
        >
          {items}
        </div>
      </span>
    );
  }
}

export default enhanceWithClickOutside(DropDown);
