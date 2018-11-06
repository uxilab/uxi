import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import LayoutObject from './Layout.style';

class LayoutProvider extends Component {
  getChildContext() {
    const { layouts } = this.props;

    return {
      layouts,
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {/* <Style rules={LayoutObject} /> */}
        {children}
      </div>
    );
  }
}

LayoutProvider.childContextTypes = {
  layouts: PropTypes.array,
};

export default LayoutProvider;
