import React, { PureComponent } from 'react';
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
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  getDynamicItemsStyles() {
    const { isOpen, mainRef, itemsRef } = this.state;
    if (!mainRef || !itemsRef || !mainRef.getBoundingClientRect) { return {}; }

    const itemsHeight = [...itemsRef.children]
      .reduce((acc, el) => acc + el.getBoundingClientRect().height, 0);

    const res = {
      maxHeight: isOpen ? itemsHeight : 0,
      position: 'absolute',
      top: mainRef.getBoundingClientRect().height,
      borderColor: isOpen ? '#cecece' : 'transparent',
      opacity: isOpen ? 1 : 0,
    };

    const cRect = itemsRef.getBoundingClientRect();

    return {
      ...res,
      position: isOpen ? 'fixed' : 'absolute',
      top: isOpen ? cRect.top : res.top,
    };
    // return res;
  }

  componentDidUnmount() {
    window.removeEventListener('resize', this.handleWindowResize, 100);
  }

  handleWindowResize() {
    const { isOpen } = this.state;
    if (isOpen) {
      this.setState({ isOpen: false });
    }
    // console.log('handleWindowResize');
    // console.log(this);
    // const {
    //   windowWidth,
    //   windowHeight,
    // } = this.state;

    // if (window.innerWidth !== windowWidth || window.innerHeight !== windowHeight) {
    //   this.forceUpdate();
    // }
  }
  handleClickOutside() {
    console.log('click outside');
    const { leaveOpenOnClickOutside } = this.props;
    if (!leaveOpenOnClickOutside) {
      this.setState({
        isOpen: false,
      });
    }
  }

  handleToggleVisibility() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  storeMainRef(ref) {
    this.setState({ mainRef: ref });
  }

  storeItemsRef(ref) {
    this.setState({ itemsRef: ref });
  }

  render() {
    console.log('render dropdown');
    const {
      props: { main, items },
    } = this;

    const dropDownMain = React.cloneElement(main,
      { ref: ref => this.storeMainRef(ref) });

    return (
      <span style={styles.wrapper}>
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
