import React from 'react';
import styled from 'styled-components';
import ThemeComponent from '../Base/ThemeComponent';
import HorizontalMenuStyle from './HorizontalMenu.style';

const Root = styled.div`
  margin: 0;
  padding: 0;
  div.uxi-menu-item {
    padding-left: 15px;
    padding-right:15px;
    display: inline-block;
    fontSize: 14px;
    transition: color 0.5s ease;
    height: 40px;
    lineHeight: 40px;
    cursor: pointer;
    box-sizing:border-box;
    color: ${props => (props.menuColor)};
    margin: 0 6px;
    &:hover {
      color: ${props => (props.menuColorHover)};
      border-bottom: 3px solid #ccc;
    }
  }
  div.uxi-menu-item.uxi-active {
    border-bottom: 3px solid ${props => (props.menuColorHover)};
    color: ${props => (props.menuColorHover)};
  }
  div.uxi-menu-item.uxi-active:hover {
    border-bottom: 3px solid #ccc;
  }
  div.uxi-menu-item a {
    text-decoration: none;
    color: ${props => (props.menuColor)};
    &:hover {
      color: ${props => (props.menuColorHover)};
    }
  }
`;

class HorizontalMenu extends ThemeComponent {
  render() {
    const { children, isMain } = this.props;
    const globalHeaderMergedStyle = this.getStyle('HorizontalMenu', HorizontalMenuStyle.root);
    const isDark = this.isDarkThemeFromTheme();

    const menuItems = React.Children.map(children, (child, menuNumber) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          fromParentStyle: {
            height: isMain ? this.context.uxiTheme.dimensions.mainHeaderHeight : '40px',
            lineHeight: isMain ? this.context.uxiTheme.dimensions.mainHeaderHeight : '40px',
          },
          key: `menuItem-${menuNumber}`,
        });
      }
      return child;
    });

    return (
      <Root
        className="uxi-horizontal-menu"
        style={globalHeaderMergedStyle}
        menuColor={
          isDark ?
            this.context.uxiTheme.link.linkOnBgDark.color :
            this.context.uxiTheme.link.linkOnBgLight.color
        }
        menuColorHover={
          isDark ?
            this.context.uxiTheme.link.linkOnBgDarktHover.color :
            this.context.uxiTheme.link.linkOnBgLightHover.color
        }
      >
        {menuItems}
      </Root>
    );
  }
}

export default HorizontalMenu;
