import React from 'react';
import ThemeComponent from '../base/ThemeComponent';
import GlobalHeaderStyle from './GlobalHeader.style.js';

class GlobalHeader extends ThemeComponent {
  render() {
    const { children } = this.props;
    const globalHeaderMergedStyle = this.getStyle('GlobalHeader', GlobalHeaderStyle.header);
    
    const mergedStyle = Object.assign({}, globalHeaderMergedStyle, {
      paddingLeft: this.context.theme.padding.breathPadding,
      paddingRight: this.context.theme.padding.breathPadding,
      height: this.context.theme.dimensions.mainHeaderHeight,
      ...this.context.theme.fontsAndColor.fontsAndColor,
    });

    return (
      <header style={mergedStyle}>
        {children}
      </header>
    );
  }
}

export default GlobalHeader;
