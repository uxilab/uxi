import React from 'react';
import ThemeComponent from '../Base/ThemeComponent';
import MenuItemStyle from './MenuItem.style';

class MenuItem extends ThemeComponent {
  static defaultProps = {
    onClick: () => {},
  };

  render() {
    const { children, onClick, isActive } = this.props;
    const mainItemMergedStyle = this.getStyle('MenuItem', MenuItemStyle.root);
    const className = isActive ? 'uxi-menu-item uxi-active' : 'uxi-menu-item';

    return (
      <li
        className={className}
        style={mainItemMergedStyle}
        onClick={onClick}
      >
        {children}
      </li>
    );
  }
}

export default MenuItem;
