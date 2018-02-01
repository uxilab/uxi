import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * TODO: Some of thos compos still use context or import the theme directly, fix it
 */
class IsDarkComponent extends Component {
  static childContextTypes = {
    isDarkTheme: PropTypes.func,
  };

  getChildContext() {
    return {
      isDarkTheme: this.isDarkTheme.bind(this),
    };
  }

  isDarkTheme() {
    const { isDark } = this.props;

    return isDark;
  }
}

export default IsDarkComponent;
