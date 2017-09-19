import React, { Component, PropTypes } from 'react';
import { theme } from '../index';
import getTheme from './getTheme';
import { Style } from 'radium';
import { Helmet } from 'react-helmet';

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
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,600,700" rel="stylesheet" />
        </Helmet>
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
