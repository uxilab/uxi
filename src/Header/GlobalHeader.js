import React from 'react';
import PropTypes from 'prop-types';

import ThemeComponent from '../Base/ThemeComponent';
import GlobalHeaderStyle from './GlobalHeader.style';

class GlobalHeader extends ThemeComponent {
  static childContextTypes = {
    isDarkTheme: PropTypes.func,
  };

  static contextTypes = {
    theme: PropTypes.object,
    isFixedWidth: PropTypes.func,
  };

  getChildContext() {
    return {
      isDarkTheme: this.isDarkTheme.bind(this),
    };
  }

  isDarkTheme() {
    const { isDark } = this.props;

    return isDark;
  }

  render() {
    const { children, isContained } = this.props;
    const isDark = this.isDarkTheme();
    const isContainedResult = isContained ? true : this.context.isFixedWidth();

    const globalHeaderMergedStyle = this.getStyle('GlobalHeader', GlobalHeaderStyle.header);

    const mergedStyle = Object.assign({}, globalHeaderMergedStyle, {
      paddingLeft: this.context.theme.padding.breathPadding,
      paddingRight: this.context.theme.padding.breathPadding,
      height: this.context.theme.dimensions.mainHeaderHeight,
      ...this.context.theme.fontsAndColor.fontsAndColor,
    }, isDark ? GlobalHeaderStyle.dark : GlobalHeaderStyle.light);

    if (isContainedResult) {
      return (
        <header style={mergedStyle}>
          <div className="uxi_container">
            {children}
          </div>
        </header>
      );
    }
    return (
      <header style={mergedStyle}>
        {children}
      </header>
    );
  }
}

export default GlobalHeader;
