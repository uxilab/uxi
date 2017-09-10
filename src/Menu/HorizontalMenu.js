import React from 'react';
import ThemeComponent from '../base/ThemeComponent';
import HorizontalMenuStyle from './HorizontalMenu.style';

class HorizontalMenu extends ThemeComponent {
  render() {
    const { children, isMain } = this.props;
    const globalHeaderMergedStyle = this.getStyle('HorizontalMenu', HorizontalMenuStyle.root);

    const menuItems = React.Children.map(children, (child, menuNumber) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          style: {
            display: 'inline-block',
            paddingLeft: this.context.theme.padding.defaultPadding,
            paddingRight: this.context.theme.padding.defaultPadding,
            height: isMain ? this.context.theme.dimensions.mainHeaderHeight : '40px',
            lineHeight: isMain ? this.context.theme.dimensions.mainHeaderHeight: '40px',
          },
          key: `menuItem-${menuNumber}`,
        });
      }
    });
    
    return (
      <ul style={globalHeaderMergedStyle}>
        {menuItems}
      </ul>
    )    
  }
}

export default HorizontalMenu;
