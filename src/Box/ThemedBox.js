import React from 'react';

import ThemeComponent from '../Base/ThemeComponent';
import ThemedBoxStyle from './ThemedBox.style';

class ThemeBox extends ThemeComponent {
  render() {
    const { children/* , isContained */ } = this.props;
    const isDark = this.isDarkThemeFromTheme();

    const globalHeaderMergedStyle = this.getStyle('GlobalHeader', {});

    const mergedStyle = Object.assign({}, globalHeaderMergedStyle, {
      paddingLeft: this.context.uxiTheme.padding.breathPadding,
      paddingRight: this.context.uxiTheme.padding.breathPadding,
      height: this.context.uxiTheme.dimensions.mainHeaderHeight,
      ...this.context.uxiTheme.fontsAndColor.fontsAndColor,
    }, isDark ? ThemedBoxStyle.dark : ThemedBoxStyle.light);

    return (
      <div style={mergedStyle}>
        {children}
      </div>
    );
  }
}

export default ThemeBox;
