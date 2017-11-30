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
    transition: 'max-height .2s ease-out',
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
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }


  getDynamicItemsStyles() {
    const { isOpen, mainRef, itemsRef } = this.state;
    if (!mainRef || !itemsRef || !mainRef.getBoundingClientRect) { return {}; }

    const itemsHeight = [...itemsRef.children].reduce((acc, el) => acc + el.getBoundingClientRect().height, 0);
    const res = {
      maxHeight: isOpen ? itemsHeight : 0,
      top: mainRef.getBoundingClientRect().height,
      borderColor: isOpen ? '#cecece' : 'transparent',
    };
    return res;
  }

  handleClickOutside() {
    const { closeOnClickOutside } = this.props;
    console.log('click outside');
    if (closeOnClickOutside) {
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
