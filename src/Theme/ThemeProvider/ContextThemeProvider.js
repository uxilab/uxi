import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * TODO: Some of thos compos still use context or import the theme directly, fix it
 */
// import { theme } from '../index';
import getTheme from './getTheme';
import { getThemeWithCustomPalette } from '../utils';

export class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.element,
    theme: PropTypes.object,
    extendTheme: PropTypes.object,
    isContained: PropTypes.bool,
    palette: PropTypes.object,
  };

  static defaultProps = {
    children: null,
    theme: {},
    extendTheme: {},
    isContained: false,
    palette: {},
  };

  static childContextTypes = {
    uxiTheme: PropTypes.object.isRequired,
    isFixedWidth: PropTypes.func,
    isDarkTheme: PropTypes.func.isRequired,
  };

  getChildContext() {
    const theTheme = this.props.palette
      ? getThemeWithCustomPalette(this.props.palette)
      : this.props.theme || getTheme(this.props.extendTheme);

    return {
      uxiTheme: theTheme,
      isFixedWidth: this.isFixedWidth.bind(this),
      isDarkTheme: this.isDarkTheme.bind(this),
    };
  }

  isDarkTheme() { // eslint-disable-line class-methods-use-this
    return false;
  }

  isFixedWidth() {
    const { isContained } = this.props;
    return isContained;
  }

  render() {
    const { children } = this.props;

    return (
      <div className="uxi-root">
        {children}
      </div>
    );
  }
}

export default ThemeProvider;
