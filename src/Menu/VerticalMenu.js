import React from 'react';
import { Style } from 'radium';
import ThemeComponent from '../Base/ThemeComponent';
import VerticalMenuStyle from './VerticalMenu.style';
import { lighten } from '../Theme/colorManipulator';

class VerticalMenu extends ThemeComponent {
  render() {
    const { children } = this.props;
    const verticalMergedStyle = this.getStyle('VerticalMenu', VerticalMenuStyle.root);

    const menuItems = React.Children.map(children, (child, menuNumber) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          style: {
            display: 'block',
            height: '40px',
            lineHeight: '40px',
            padding: '0 15px',
            cursor: 'pointer',
          },
          key: `menuItem-${menuNumber}`,
        });
      }
      return child;
    });

    return (
      <ul className="uxi-vertical-menu" style={verticalMergedStyle}>
        <Style
          scopeSelector=".uxi-vertical-menu"
          rules={{
            '.uxi-menu-item': {
              borderRight: '5px solid transparent',
            },
            '.uxi-menu-item:hover': {
              background: lighten(this.context.uxiTheme.palette.accent.main, 0.9),
              borderRight: '4px solid transparent',
            },
            '.uxi-menu-item a': {
              color: this.context.uxiTheme.palette.neutral.dark,
              textDecoration: 'none',
              display: 'block',
            },
            '.uxi-menu-item a:hover': {
              color: this.context.uxiTheme.palette.primary,
            },
            '.uxi-menu-item.uxi-active': {
              background: lighten(this.context.uxiTheme.palette.accent.main, 0.9),
              borderRight: `4px solid ${this.context.uxiTheme.palette.accent.main}`,
              color: this.context.uxiTheme.palette.accent.dark,
            },
            '.uxi-menu-item.uxi-active:hover': {
              background: lighten(this.context.uxiTheme.palette.accent.main, 0.7),
              borderRight: `4px solid ${this.context.uxiTheme.palette.accent.main}`,
              color: this.context.uxiTheme.palette.neutral.darker,
            },
            '.uxi-menu-item.uxi-active a': {
              color: this.context.uxiTheme.palette.accent.dark,
            },
          }}
        />
        {menuItems}
      </ul>
    );
  }
}

export default VerticalMenu;
