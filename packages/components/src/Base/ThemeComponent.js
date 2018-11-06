import React, { Component } from 'react';
import PropTypes from 'prop-types';


// call context uxiTheme
// check theme component to see it uses the good one this.context.uxiTheme

class ThemeComponent extends Component {
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

  getSubStylePseudoElement(name, subStyleName, pseudoElementName) {
    const theme = this.context.uxiTheme;
    const result = {};

    result[`:${pseudoElementName}`] = theme[`${name}:${subStyleName}:${pseudoElementName}`] || {};

    return result;
  }

  getPseudoElement(name, pseudoElement) {
    const theme = this.context.uxiTheme;
    const result = {};
    const pseudoElementStyle = theme[`${name}:${pseudoElement}`] || {};

    result[`:${pseudoElement}`] = pseudoElementStyle;

    return result;
  }

  getSubStyle(name, subStyleName, stylesFromComponent) {
    const theme = this.context.uxiTheme;
    const themeForComponent = theme[`${name}:${subStyleName}`] || {};

    return Object.assign({}, themeForComponent, stylesFromComponent);
  }

  getStyle(name, stylesFromComponent) {
    const { style, fromParentStyle } = this.props;
    const theme = this.context.uxiTheme;
    const themeForComponent = theme[name] || {};

    return Object.assign(
      {},
      themeForComponent,
      stylesFromComponent,
      (fromParentStyle || {}),
      (style || {})
    );
  }

  isDarkThemeFromTheme() {
    const { isDark } = this.props;
    const isDarkFromRoot = this.context.isDarkTheme();
    const isDarkFromTheme = this.context.isDarkThemeFromTheme
      ? this.context.isDarkThemeFromTheme()
      : false;

    return isDark || isDarkFromRoot || isDarkFromTheme;
  }
}

export default ThemeComponent;
