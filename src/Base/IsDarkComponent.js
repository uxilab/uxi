import React, { PropTypes, Component } from 'react';

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
