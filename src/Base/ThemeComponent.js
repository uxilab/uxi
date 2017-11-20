/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export type ThemeComponentProps = {
  style: Object;
}

// call context uxiTheme
// check theme component to see it uses the good one this.context.uxiTheme

class ThemeComponent<P:ThemeComponentProps> extends Component<P> {
  static contextTypes = {
    uxiTheme: PropTypes.object.isRequired,
    isDarkTheme: PropTypes.func,
  };

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
    const { style } = this.props;
    const theme = this.context.uxiTheme;
    const themeForComponent = theme[name] || {};

    return Object.assign({}, (style || {}), themeForComponent, stylesFromComponent);
  }
}

export default ThemeComponent;
