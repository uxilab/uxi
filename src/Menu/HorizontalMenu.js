import React from 'react';
import { Style } from 'radium';
import ThemeComponent from '../Base/ThemeComponent';
import HorizontalMenuStyle from './HorizontalMenu.style';
import styled from 'styled-components';

const root = styled.ul`

`;

class HorizontalMenu extends ThemeComponent {
  render() {
    const { children, isMain } = this.props;
    const globalHeaderMergedStyle = this.getStyle('HorizontalMenu', HorizontalMenuStyle.root);
    const isDark = this.context.isDarkTheme();

    const menuItems = React.Children.map(children, (child, menuNumber) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          style: {
            display: 'inline-block',
            height: isMain ? this.context.uxiTheme.dimensions.mainHeaderHeight : '40px',
            lineHeight: isMain ? this.context.uxiTheme.dimensions.mainHeaderHeight : '40px',
          },
          key: `menuItem-${menuNumber}`,
        });
      }
      return child;
    });

    return (
      <ul className="uxi-horizontal-menu" style={globalHeaderMergedStyle}>
        <Style
          scopeSelector=".uxi-horizontal-menu"
          rules={{
            '.uxi-menu-item a': Object.assign({}, isDark ? this.context.uxiTheme.link.linkOnBgDark : this.context.uxiTheme.link.linkOnBgLight, {
              display: 'block',
              paddingLeft: this.context.uxiTheme.padding.defaultPadding,
              paddingRight: this.context.uxiTheme.padding.defaultPadding,
              fontSize: '14px',
              transition: 'color 0.5s ease',
            }),
            '.uxi-menu-item a:hover': isDark ? this.context.uxiTheme.link.linkOnBgDarktHover : this.context.uxiTheme.link.linkOnBgLightHover,
          }}
        />
        {menuItems}
      </ul>
    );
  }
}

export default HorizontalMenu;
