import React, { Component, PropTypes } from 'react';
import { theme } from '../index';
import getTheme from './getTheme';
import { Style, StyleRoot } from 'radium';
import { Helmet } from 'react-helmet';

class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.element,
    theme: PropTypes.object,
    extendTheme: PropTypes.object,
    isContained: PropTypes.bool,
  };

  static childContextTypes = {
    theme: PropTypes.object.isRequired,
    isFixedWidth: PropTypes.func,
  };

  getChildContext() {
    return {
      theme: this.props.theme || getTheme(this.props.extendTheme),
      isFixedWidth: this.isFixedWidth.bind(this),
    };
  }

  isFixedWidth() {
    const { isContained } = this.props;

    return isContained;
  }

  render() {
    const { children } = this.props;


    return (
      <StyleRoot>
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
            rules={Object.assign({}, theme.root, theme.fixedWidth)}
          />
          {children}
        </div>
      </StyleRoot>
    );
  }
}

export default ThemeProvider;
