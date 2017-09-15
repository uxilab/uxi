import React from 'react';
import { Style } from 'radium';
import ThemeComponent from '../Base/ThemeComponent';
import VerticallMenuStyle from './VerticallMenu.style';
import { lighten } from '../Theme/colorManipulator';

class VerticallMenu extends ThemeComponent {
  render() {
    const { children } = this.props;
    const verticalMergedStyle = this.getStyle('VerticallMenu', VerticallMenuStyle.root);

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
              background: lighten(this.context.theme.palette.primary, 0.9),
              borderRight: `2px solid transparent ${lighten(this.context.theme.palette.primary, 0.9)}`,
            },
            '.uxi-menu-item a': {
              color: this.context.theme.palette.darkGrey,
              textDecoration: 'none',
              display: 'block',
            },
            '.uxi-menu-item a:hover': {
              color: this.context.theme.palette.primary,
            },
            '.uxi-menu-item.uxi-active': {
              background: lighten(this.context.theme.palette.primary, 0.9),
              borderRight: `2px solid ${this.context.theme.palette.primary}`,
            },
            '.uxi-menu-item.uxi-active:hover': {
              background: lighten(this.context.theme.palette.primary, 0.85),
              borderRight: `2px solid ${lighten(this.context.theme.palette.primary, 0.1)}`,
              color: this.context.theme.palette.darkGrey,
            },
            '.uxi-menu-item.uxi-active a': {
              color: this.context.theme.palette.primary,
            },
          }}
        />
        {menuItems}
      </ul>
    );
  }
}

export default VerticallMenu;
