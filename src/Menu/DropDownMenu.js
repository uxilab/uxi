import React from 'react';
import styled from 'styled-components';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import DropDown from './DropDown';
import { MenuItem } from '../Menu';
import Separator from './Separator';
import ThemeComponent from '../Base/ThemeComponent';
import { lighten } from '../Theme/colorManipulator';

const DropDownMenuUI = styled.div`
  & a {
    display: inline-block;
    width: 100%;
    color: ${({ theme, isDark }) => (isDark ? theme.link.linkOnBgDark : theme.link.linkOnBgLight)};
  }
  & .uxi-menu-item {
    padding: 2px;
    &:hover {
      background-color: ${({ theme }) => lighten(theme.palette.accent.main, 0.9)};
      a {
        color: ${({ theme, isDark }) => (isDark ? theme.link.linkOnBgLightHover : theme.link.linkOnBgDarkHover)};
      }
    }
  }
`;

// const DropDownMenu = ({ children, button }) => {
class DropDownMenu extends ThemeComponent {
  render() {
    const { children, button } = this.props;
    // const isDark = this.context.isDarkTheme();
    const { isDark } = this.props;
    const items = [];

    React.Children.forEach(children, (child) => {
      if (child.type === Separator) {
        items.push(child);
        return;
      } else if (child.type === MenuItem) {
        items.push(React.cloneElement(child, {
          className: `${child.props.className} uxi-menu-item`,
        }));
        return;
      }
      items.push(<MenuItem className="uxi-menu-item">{child}</MenuItem>);
    });

    return (
      <DropDownMenuUI isDark={isDark}>
        <DropDown
          main={button}
          items={items}
        />
      </DropDownMenuUI>
    );
  }
}


export default DropDownMenu;
