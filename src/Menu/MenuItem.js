import React from 'react';
import ThemeComponent from '../base/ThemeComponent';
import MenuItemStyle from './MenuItem.style';

class MenuItem extends ThemeComponent {
  render() {
    const { children, onClick } = this.props;
    const mainItemMergedStyle = this.getStyle('MenuItem', MenuItemStyle.root);
    
    return (
      <li style={mainItemMergedStyle} onClick={onClick ? onClick : ()=>{}}>
        {children}
      </li>
    );
  }
}

export default MenuItem;
