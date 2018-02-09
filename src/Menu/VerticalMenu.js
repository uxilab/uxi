import React from 'react';
import styled from 'styled-components';
import ThemeComponent from '../Base/ThemeComponent';
import { lighten } from '../Theme/colorManipulator';
import defaults from './defaults';

const {
  borderThickness,
} = defaults;

const VerticalMenuUI = styled.ul`
  & {
    .uxi-menu-item {
      border-right: 5px solid transparent;
    }
    .uxi-menu-item:hover {
      background:  ${({ theme: { palette } }) => lighten(palette.accent.main, 0.9)} ;
      border-right: ${borderThickness} solid transparent;
    }
    .uxi-menu-item a {
      color:  ${({ theme: { palette } }) => palette.neutral.dark} ;
      text-decoration: none;
      display: block;
    }
    .uxi-menu-item a:hover {
      color:  ${({ theme: { palette } }) => palette.accent.light} ;
    }
    .uxi-menu-item.uxi-active {
      background:  ${({ theme: { palette } }) => lighten(palette.accent.main, 0.9)} ;
      border-right:  ${({ theme: { palette } }) => `${borderThickness} solid ${palette.accent.main}`} ;
      color:  ${({ theme: { palette } }) => palette.accent.dark} ;
    }
    .uxi-menu-item.uxi-active:hover {
      background:  ${({ theme: { palette } }) => lighten(palette.accent.main, 0.7)} ;
      color:  ${({ theme: { palette } }) => palette.neutral.darker} ;
    }
    .uxi-menu-item.uxi-active a {
      color:  ${({ theme: { palette } }) => palette.accent.dark} ;
    }
  }
`;

class VerticalMenu extends ThemeComponent {
  render() {
    const { children, style } = this.props;
    const verticalMergedStyle = this.getStyle('VerticalMenu', {});

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
      <VerticalMenuUI style={{ ...verticalMergedStyle, ...style }}>
        {menuItems}
      </VerticalMenuUI>
    );
  }
}

export default VerticalMenu;
