/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * TODO: Some of thos compos still use context or import the theme directly, fix it
 */
export type ThemeComponentProps = {
  style: Object;
  isDark: Boolean,
  fromParentStyle: Object;
}

// call context uxiTheme
// check theme component to see it uses the good one this.context.uxiTheme

class ThemeComponent<P:ThemeComponentProps> extends Component<P> {
  static contextTypes = {
    uxiTheme: PropTypes.object.isRequired,
    isFixedWidth: PropTypes.func,
    isDarkTheme: PropTypes.func.isRequired,
    isDarkThemeFromTheme: PropTypes.func,
  };

  static childContextTypes = {
    isDarkThemeFromTheme: PropTypes.func,
  };

  getChildContext() {
    return {
      isDarkThemeFromTheme: this.isDarkThemeFromTheme.bind(this),
    };
  }

  getSubStylePseudoElement(name: string, subStyleName: string, pseudoElementName: string) {
    const theme = this.context.uxiTheme;
    const result = {};

    result[`:${pseudoElementName}`] = theme[`${name}:${subStyleName}:${pseudoElementName}`] || {};

    return result;
  }

  getPseudoElement(name: string, pseudoElement: string) {
    const theme = this.context.uxiTheme;
    const result = {};
    const pseudoElementStyle = theme[`${name}:${pseudoElement}`] || {};

    result[`:${pseudoElement}`] = pseudoElementStyle;

    return result;
  }

  getSubStyle(name: string, subStyleName: string, stylesFromComponent: Object = {}) {
    const theme = this.context.uxiTheme;
    const themeForComponent = theme[`${name}:${subStyleName}`] || {};

    return Object.assign({}, themeForComponent, stylesFromComponent);
  }

  getStyle(name: string, stylesFromComponent: Object = {}) {
    const { style, fromParentStyle } = this.props;
    const theme = this.context.uxiTheme;
    const themeForComponent = theme[name] || {};

    return Object.assign({}, themeForComponent, stylesFromComponent, (fromParentStyle || {}), (style || {}));
  }

  isDarkThemeFromTheme() {
    const { isDark } = this.props;
    const isDarkFromRoot = this.context.isDarkTheme();
    const isDarkFromTheme = this.context.isDarkThemeFromTheme ? this.context.isDarkThemeFromTheme() : false;

    return isDark || isDarkFromRoot || isDarkFromTheme;
  }
}

export default ThemeComponent;
