import React from 'react';
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
          fromParentStyle: {
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
        {menuItems}
      </ul>
    );
  }
}

export default VerticalMenu;
