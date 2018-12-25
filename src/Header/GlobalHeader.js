import React, { Component } from 'react';
import styled from 'styled-components';

// import ThemeComponent from '../Base/ThemeComponent';
import GlobalHeaderStyle from './GlobalHeader.style';

const Header = styled.header`
  top: 0;
  right: 0;
  z-index: 3;
  height: 48px;
  margin: 0 auto;
  padding: 0;
  position: absolute;
  left: 0;
  background-color: ${({ theme: { palette }}) => palette.primary.main};
  /* color: ${({ theme: { palette }}) => palette.white}; */
`;

class GlobalHeader extends Component {
  render() {
    const { children, isContained } = this.props;
    // const isDark = this.isDarkThemeFromTheme();
    // const isContainedResult = isContained ? true : this.context.isFixedWidth();

    // const globalHeaderMergedStyle = this.getStyle('GlobalHeader', GlobalHeaderStyle.header);

    // const finalStyles = {
    //   paddingLeft: this.context.uxiTheme.padding.breathPadding,
    //   paddingRight: this.context.uxiTheme.padding.breathPadding,
    //   height: this.context.uxiTheme.dimensions.mainHeaderHeight,
    //   ...this.context.uxiTheme.fontsAndColor.fontsAndColor,
    // };

    // if (isContainedResult) {
    //   return (
    //     <header style={mergedStyle}>
    //       <div className="uxi_container">
    //         {children}
    //       </div>
    //     </header>
    //   );
    // }
    return (
      <Header style={{ height: '80px' }}>
        {children}
      </Header>
    );
  }
}

export default GlobalHeader;
