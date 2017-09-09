import React from 'react';
import ThemeComponent from '../base/ThemeComponent';
import GlobalHeaderStyle from './GlobalHeader.style.js';

class GlobalHeader extends ThemeComponent {
  render() {
    const { children } = this.props;

    return (
      <header style={this.getStyle('GlobalHeader', GlobalHeaderStyle.header)}>
        {children}
      </header>
    );
  }
}
export default GlobalHeader;
