import React from 'react';
import PropTypes from 'prop-types';

import ThemeComponent from '../Base/ThemeComponent';
import GlobalHeaderStyle from './GlobalHeader.style';

class GlobalHeader extends ThemeComponent {
  render() {
    const { children, isContained } = this.props;
    const isDark = this.isDarkThemeFromTheme();
    const isContainedResult = isContained ? true : this.context.isFixedWidth();

    const globalHeaderMergedStyle = this.getStyle('GlobalHeader', GlobalHeaderStyle.header);

    const mergedStyle = Object.assign({}, globalHeaderMergedStyle, {
      paddingLeft: this.context.uxiTheme.padding.breathPadding,
      paddingRight: this.context.uxiTheme.padding.breathPadding,
      height: this.context.uxiTheme.dimensions.mainHeaderHeight,
      ...this.context.uxiTheme.fontsAndColor.fontsAndColor,
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
