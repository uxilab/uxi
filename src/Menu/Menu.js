import React from 'react';
import styled from 'styled-components';
import TextEllipsis from '../Text/TextEllipsis';


const MenuItem = styled.li`
  a {
    color: ${({ theme: { palette } }) => palette.darkGrey};
    background: white;
  }
`;

const MenuWrapperUI = styled.div`
  --itemWidth: 160px;

  /* border: 1px solid rebeccapurple;
  padding: 32px; */

  &, & * {
    box-sizing: border-box;
  }

  ul, li {
    max-width: var(--itemWidth);
  }

  a {
    &, &:hover, &:focus { text-decoration: none; color: inherit }
    width: 100%;
    padding: 8px;
    /* background: lightblue; */
    display: flex;
    & > *:first-child { flex-grow: 999999; }
  }



  a:not(:only-child) {
    &:after {
      content: '▸';
      display: block;
      width: 8px;
    }
  }
  li { position: relative;  display: flex; }

  li > ul { display: none; }

  li > ul {
    position: absolute;
    right: 0;
    transform: translateX(100%);
    transform: translate(100%, -50%);
    &:before {
      content: '';
      display: block;
      width: var(--itemWidth);
      height: 100%;
      position: absolute;
      left: calc(var(--itemWidth) * -1);
    }
  }

  li:not(:hover) {
    z-index: 100;
  }

  li:hover > a,
  li:focus-within > a {
    filter: invert(100%);
  }

  li:hover > ul,
  li:focus-within > ul {
    display: block;
    width: var(--itemWidth);

    & {
      z-index: 1;
      &:before {
        z-index: 0;
      }
      &:hover {
        z-index: 99;
      }
    }

  }

  ul li a:hover { z-index: 9999 }
`;

const handleMenuLevel = (menuItemDescriptor) => {
  const { children, label } = menuItemDescriptor;
  return (
    <MenuItem key={label}>
      <a href="#"><TextEllipsis>{label}</TextEllipsis></a>
      {
        (children && children.length)
          ? <ul>{children.map(handleMenuLevel)}</ul>
          : null
      }
    </MenuItem>
  );
}


const Menu = (props) => {
  const { menuDescriptor } = props;

  return (
    <MenuWrapperUI>
      <ul>
        {
          menuDescriptor.map(handleMenuLevel)
        }
      </ul>
    </MenuWrapperUI>
  );
};

export default Menu;
