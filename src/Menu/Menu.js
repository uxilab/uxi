import React from 'react';
import styled from 'styled-components';
import TextEllipsis from '../Text/TextEllipsis';
import Separator from './Separator';


const MenuItem = styled.li`
  a {
    color: ${({ theme: { palette } }) => palette.darkGrey};
    background: white;
    text-decoration: none;
    &:hover, &:focus {
      background: ${({ theme: { palette } }) => palette.darkGrey};
      color: white;
      text-decoration: none;
    }
  }
`;

const MenuWrapperUI = styled.div`
  --itemWidth: 190px;


  &, & * {
    box-sizing: border-box;
  }

  ul {
    box-sizing: border-box;
    border: 1px solid #cecece;
    box-shadow: ${({ theme }) => `${theme.outlineShadow}`};
    background: white;
  }

  ul {
    width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
    max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
  }
  li {
    width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'calc(var(--itemWidth) - 2px)')};
    max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'calc(var(--itemWidth) - 2px)')};
  }

  &, ul {
    border-radius: ${({ theme: { radius } }) => radius};
  }

  li, li a {
    border-radius: 0;
  }

  li:first-child, li:first-child > a {
    border-radius: ${({ theme: { radius } }) => `${radius} ${radius} 0 0`};
  }

  li:last-child, li:last-child > a {
    border-radius: ${({ theme: { radius } }) => `0 0 ${radius} ${radius}`};
  }

  li:first-child:last-child, li:first-child:last-child > a {
    border-radius: ${({ theme: { radius } }) => radius};
  }

  a {
    &, &:hover, &:focus { }
    width: 100%;
    padding: 8px;
    display: flex;
    & > *:first-child { padding-right: 6px; flex-grow: 1 }
    & > *:nth-child(2) { flex-grow: 999999; }
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
    transform: translate(100%, 0%);
    &:before {
      content: '';
      display: block;
      width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
      height: 100%;
      position: absolute;
      left: calc(var(--itemWidth) * -1);
    }
  }

  li:not(:hover) {
    z-index: 100;
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

export const handleMenuLevel = (menuItemDescriptor = {}) => {
  console.log('menuItemDescriptor', menuItemDescriptor);
  const { type, children, label, onClick = () => {}, icon } = menuItemDescriptor;
  const isSeparator = menuItemDescriptor.type === 'SEPARATOR';
  return (isSeparator
    ? <Separator label={label} />
    : <MenuItem key={label} >
      <a // eslint-disable-line jsx-a11y/href-no-hash
        href="#"
        onClick={(ev) => {
          console.log('GD clicked ', onClick);
          onClick(ev);
        }}
      >
        {icon}
        <TextEllipsis>{label}</TextEllipsis>
      </a>
      {
        (children && children.length)
          ? <ul>{children.map(handleMenuLevel)}</ul>
          : null
      }
    </MenuItem>
  );
};


const Menu = (props) => {
  const {
    menuDescriptor,
    isFullWidth,
  } = props;

  console.log('menuDescriptor', menuDescriptor);

  return (
    <MenuWrapperUI isFullWidth={isFullWidth}>
      <ul>
        {
          menuDescriptor.map(handleMenuLevel)
        }
      </ul>
    </MenuWrapperUI>
  );
};

export default Menu;
