import React, { Component, PropTypes } from 'react';
import { theme } from '../index';
import getTheme from './getTheme';
import { Style } from 'radium';

class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.element,
    theme: PropTypes.object,
    extendTheme: PropTypes.object,
  };

  static childContextTypes = {
    theme: PropTypes.object.isRequired,
  };

  getChildContext() {
    return {
      theme: this.props.theme || getTheme(this.props.extendTheme),
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div className="uxi-root">
        <Style
          rules={theme.wrapper}
        />
        <Style
          scopeSelector=".uxi-root"
          rules={theme.root}
        />
        {children}
      </div>
    );
  }
}

export default ThemeProvider;
