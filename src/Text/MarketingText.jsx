import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { theme } from '../Theme';

class MarketingText extends Component {
  static contextTypes = {
    isDarkTheme: PropTypes.func,
  };

  render() {
    const { type = 'body', children, style = {} } = this.props;
    const typeLowerCase = type.toLowerCase();
    const isDark = this.context.isDarkTheme ? this.context.isDarkTheme() : false;
    const correctStyling = isDark ? theme.marketingText.dark[typeLowerCase] : theme.marketingText.light[typeLowerCase];
    const defaultStyle = isDark ? theme.marketingText.dark.body : theme.marketingText.light.body;

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

export default MarketingText;
