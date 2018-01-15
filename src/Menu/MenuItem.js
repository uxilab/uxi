import React from 'react';
import ThemeComponent from '../Base/ThemeComponent';
import MenuItemStyle from './MenuItem.style';

class MenuItem extends ThemeComponent {
  static defaultProps = {
    onClick: () => {},
  };

  render() {
    const { children, onClick, isActive, icon } = this.props;
    const mainItemMergedStyle = this.getStyle('MenuItem', MenuItemStyle.root);
    const className = isActive ? 'uxi-menu-item uxi-active' : 'uxi-menu-item';
    const iconExtra = {
      marginRight: '10px',
      padding: '5px',
    };

    const iconContent = (
      <div style={{ width: '24px', ...iconExtra }}>
        {icon}
      </div>
    );

    if (!icon) {
      return (
        <div
          role="listitem"
          className={className}
          style={mainItemMergedStyle}
          onClick={onClick}
        >
          {children}
        </div>
      );
    }

    return (
      <div
        role="listitem"
        className={className}
        style={mainItemMergedStyle}
        onClick={onClick}
      >
        <div style={{ display: 'flex' }}>
          {iconContent}
          <div style={{ flex: 1 }}>{children}</div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
