import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * TODO: Some of thos compos still use context or import the theme directly, fix it
 */
import { theme } from '../Theme';

/* eslint-disable react/prefer-stateless-function */
class Text extends Component {
  static contextTypes = {
    isDarkTheme: PropTypes.func,
  };

  render() {
    const { type = 'body', children, style = {} } = this.props;
    const typeLowerCase = type.toLowerCase();
    const isDark = this.context.isDarkTheme ? this.context.isDarkTheme() : false;
    const correctStyling = isDark ? theme.fontsAndColor.dark[typeLowerCase] : theme.fontsAndColor.light[typeLowerCase];
    const defaultStyle = isDark ? theme.fontsAndColor.dark.body : theme.fontsAndColor.light.body;

    const mergedStyle = Object.assign({}, correctStyling || defaultStyle, style);

    if (type === 'paragraph') {
      return (
        <p style={mergedStyle}>
          {children}
        </p>
      );
    }

    return (
      <span style={mergedStyle}>
        {children}
      </span>
    );
  }
}

export default Text;
