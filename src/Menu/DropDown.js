import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = {
  wrapper: {
    position: 'relative',
  },
  triggerWrapper: {
    cursor: 'pointer',
  },
  triggerInnerWrapper: {
    // pointerEvents: 'none',
  },
  itemsWrapper: {
    position: 'absolute',
    overflow: 'hidden',
  },
};

const getDynamicItemsStyle = isOpen => ({
  maxHeight: isOpen ? '999px' : 0,
});

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

  handleToggleVisibility() {
    console.log('handleToggleVisibility');
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const {
      props: { main, items },
      state: { isOpen },
    } = this;

    return (
      <span style={styles.wrapper}>
        <span tabIndex={0} role="menu" style={styles.triggerWrapper} onClick={this.handleToggleVisibility} >
          <span style={styles.triggerInnerWrapper}>
            {main}
          </span>
        </span>
        <div style={{ ...styles.itemsWrapper, ...getDynamicItemsStyle(isOpen) }}>
          { items }
        </div>
      </span>
    );
  }
}

export default DropDown;
