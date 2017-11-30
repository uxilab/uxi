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
  triggerInnerWrapper: {
    // pointerEvents: 'none',
  },
  itemsWrapper: {
    zIndex: 1,
    minWidth: '160px',
    background: 'white',
    position: 'absolute',
    overflow: 'hidden',
    border: '1px solid #cecece',
    borderColor: 'transparent',
    borderTop: 'none',
    borderTopColor: 'transparent !important',
    transition: 'max-height .2s ease-out, opacity .2s ease-out',
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class DropDown extends PureComponent {
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
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleWindowScroll = this.handleWindowScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('scroll', this.handleWindowScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  getDynamicItemsStyles() {
    console.log('getDynamicItemsStyles');
    const { isOpen, mainRef, itemsRef } = this.state;
    if (!mainRef || !itemsRef || !mainRef.getBoundingClientRect) { return {}; }

    const itemsHeight = [...itemsRef.children]
      .reduce((acc, el) => acc + el.getBoundingClientRect().height, 0);

    const cRectMain = mainRef.getBoundingClientRect();

    // const cRectMain = ReactDOM // eslint-disable-line react/no-find-dom-node
    //   .findDOMNode(mainRef)
    //   .getBoundingClientRect(); // outputs <h3> coordinates
    console.log('cRectMain', cRectMain);

    const res = {
      maxHeight: isOpen ? itemsHeight : 0,
      position: 'absolute',
      top: cRectMain.height,
      borderColor: isOpen ? '#cecece' : 'transparent',
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'all' : 'none',
    };

    // FLIP :
    const initialStyle = itemsRef.getAttribute('style');
    itemsRef.setAttribute('style', `${initialStyle}; top: ${cRectMain.height}; position: absolute`);
    itemsRef.setAttribute('style', `${initialStyle}; top: ${cRectMain.bottom}; position: fixed`);

    console.log('supposed top value =', isOpen ? cRectMain.bottom : cRectMain.height);
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
    console.log('click outside');
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
    console.log('render dropdown');
    const {
      props: { main, items, style },
    } = this;

    const dropDownMain = React.cloneElement(main,
      {
        ref: (ref) => {
          console.log('ref', ref);
          // handle case where we d'ont have a direct dom elemnt
          // like a raidum decorated compo
          // if (ref && ref.props) {
          //   const elementRef = ref.props.children;
          //   console.log('elementRef', elementRef);
          //   return this.storeMainRef(elementRef);
          // }
          return this.storeMainRef(ref);
        },
      });

    return (
      <span style={{ ...styles.wrapper, ...style }}>
        <span tabIndex={0} role="menu" style={styles.triggerWrapper} onClick={this.handleToggleVisibility} >
          <span style={styles.triggerInnerWrapper}>
            {dropDownMain}
          </span>
        </span>
        <div
          style={{ ...styles.itemsWrapper, ...this.getDynamicItemsStyles() }}
          ref={ref => this.storeItemsRef(ref)}
        >
          {items}
        </div>
      </span>
    );
  }
}

export default enhanceWithClickOutside(DropDown);
