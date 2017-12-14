import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Style, StyleRoot } from 'radium';
import { Helmet } from 'react-helmet';
import { theme } from '../index';
import getTheme from './getTheme';
import { getThemeWithCustomPalette } from '../index';

export class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.element,
    theme: PropTypes.object,
    extendTheme: PropTypes.object,
    isContained: PropTypes.bool,
    palette: PropTypes.object,
  };

  static childContextTypes = {
    uxiTheme: PropTypes.object.isRequired,
    isFixedWidth: PropTypes.func,
  };

  getChildContext() {
    const theTheme = this.props.palette
      ? getThemeWithCustomPalette(this.props.palette)
      : this.props.theme || getTheme(this.props.extendTheme);

    return {
      uxiTheme: theTheme,
      isFixedWidth: this.isFixedWidth.bind(this),
    };
  }

  isFixedWidth() {
    const { isContained } = this.props;

    return isContained;
  }

  render() {
    const { children } = this.props;

    const theTheme = this.props.palette
      ? getThemeWithCustomPalette(this.props.palette)
      : this.props.theme || getTheme(this.props.extendTheme);


    return (
      <StyleRoot>
        <div className="uxi-root">
          <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,600,700" rel="stylesheet" />
          </Helmet>
          {children}
        </div>
      </StyleRoot>
    );
  }
}

export default ThemeProvider;
