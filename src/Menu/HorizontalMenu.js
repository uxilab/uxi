import React from 'react';
import { Style } from 'radium';
import ThemeComponent from '../Base/ThemeComponent';
import HorizontalMenuStyle from './HorizontalMenu.style';

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
            height: isMain ? this.context.theme.dimensions.mainHeaderHeight : '40px',
            lineHeight: isMain ? this.context.theme.dimensions.mainHeaderHeight : '40px',
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
            '.uxi-menu-item a': Object.assign({}, isDark ? this.context.theme.link.linkOnBgDark : this.context.theme.link.linkOnBgLight, {
              display: 'block',
              paddingLeft: this.context.theme.padding.defaultPadding,
              paddingRight: this.context.theme.padding.defaultPadding,
              fontSize: '14px',
              transition: 'color 0.5s ease',
            }),
            '.uxi-menu-item a:hover': isDark ? this.context.theme.link.linkOnBgDarktHover : this.context.theme.link.linkOnBgLightHover,
          }}
        />
        {menuItems}
      </ul>
    );
  }
}

export default HorizontalMenu;
