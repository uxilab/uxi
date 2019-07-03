import React from 'react';
import styled from 'styled-components';
import MlMenu from './MlMenu';
import TextEllipsis from '../../Text/TextEllipsis';


const MlMenuItemUI = styled.li`
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
  max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};

  position: relative;

  &:not(:hover) {
    z-index: 100;
  }

  & > a {
    line-height: 1.3;
    display: flex;
    align-items: center;
    padding: 8px;
    color: ${({ theme: { palette } }) => palette.darkGrey};
    background: white;
    text-decoration: none;
    &:hover, &:focus {
      background: ${({ theme: { palette } }) => palette.midDarkGrey};
      color: white;
      text-decoration: none;
    }
    &:not(:only-child) {
      &:after {
        content: '▸';
        display: block;
        width: 8px;
      }
    }
    & > svg {
      margin-right: 6px;
    }
  }


  &, & a {
    border-radius: 0;
  }

  &:first-child, &:first-child > a {
    border-radius: ${({ theme: { radius } }) => `${radius} ${radius} 0 0`};
  }

  &:last-child, &:last-child > a {
    border-radius: ${({ theme: { radius } }) => `0 0 ${radius} ${radius}`};
  }

  &:first-child:last-child, &:first-child:last-child > a {
    border-radius: ${({ theme: { radius } }) => radius};
  }

`;

const MlMenuItem = (props) => {
  const {
    label,
    icon,
    onClick,
    children,
    type,
  } = props;

  const finalIcon = React.isValidElement(icon)
    ? React.cloneElement(icon, { size: 16, paddingRight: '4px' })
    : null;

  return (
    <MlMenuItemUI>
      <a href="#">
        {finalIcon}
        <TextEllipsis style={{ flexGrow: 999 }}>{label}</TextEllipsis>
      </a>
      {
        (children && children.length)
          ? <MlMenu menuDescriptor={children} />
          : null
      }
    </MlMenuItemUI>
  );
};

export default MlMenuItem;
