import React from 'react';
import styled, { keyframes } from 'styled-components';
import defaults, { buttonReset, GlobalMenuItemBase } from './defaults';
import { darken } from '../Theme/colorManipulator';

const {
  breakpoint,
  borderThickness,
} = defaults;

const getAccessibilityRules = ({ isParentSelected }) => {
  if (isParentSelected) {
    return 'pointer-events: all; visibility: visible';
  }
  return 'pointer-events: none; visibility: collapse';
};

const fadeIn = keyframes`
  0%   { opacity: 0 }
  100% { opacity: 1 }
`;


const GlobalMenuSubItemDiv = styled.button`
  ${buttonReset};
  display: flex;

  z-index: 98;
  position: relative;

  animation: ${fadeIn} ${({ theme }) => `${theme.transition.default}`};

  & > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }


  overflow: hidden;
  color: #9a9fa5;
  text-align: left;
  padding: 16px 32px 4px 32px;
  padding: ${({ isParentSelected }) => isParentSelected ? '16px 4px 16px 32px' : '0 32px' };
  cursor: pointer;
  background: ${({ theme: { palette } }) => darken(palette.primary.dark) };
  color: ${({ isSelected, theme: { palette } }) => (
    isSelected ? palette.accent.light : palette.lightGrey
)};

  a,
  /* TODO fix tihs .root a situation */
  .root & a { 
    color: ${({ isSelected, isActive, theme: { palette } }) => (
      isSelected || isActive ? palette.accent.light : palette.lightGrey
    )}
  };
  height: 0px;
  max-height: 0px;
  max-height: ${({ isParentSelected }) => isParentSelected ? '60px' : '0px' };
  height: ${({ isParentSelected }) => isParentSelected ? 'auto' : '0px' };
  transition: ${({ theme }) => theme.transition.defaultAll};

  border-right: ${({ isSelected }) => isSelected ?
    `${borderThickness} solid #0ea4a5` : `0 solid transparent`
  };

  & a, & a:hover {
    text-decoration: none;
    color: #fff;

  }


  &:focus {
    & a { color: #fff; }
    transition: inherit;
    background: ${({ isSelected, theme: { palette } }) =>
      (isSelected ? palette.primary.dark : palette.primary.light)
    };
    color: ${({ isSelected, isActive, theme: { palette } }) =>
      (isSelected || isActive) ? palette.accent.light : palette.pureWhite
    };
  }

  &:hover, &:hover:focus, &:hover:not(:focus) {
    /* color: #fff; */
    color: ${({ isSelected, isActive, theme: { palette }}) => (
      isSelected || isActive ? palette.accent.light : palette.pureWhite
    )};

    background: ${({ isSelected, isActive, theme: { palette }}) => (
      isSelected || isActive ? darken(palette.primary.dark) : palette.primary.light
    )};
    & a {
       color: ${({ isSelected, isActive, theme: { palette } }) => (
        isSelected || isActive ? palette.accent.light : palette.pureWhite
      )};
     }
  }


@media (max-width: ${breakpoint}) {
    display:none;
  }

  /** a11y */
  ${GlobalMenuItemBase};
  ${props => getAccessibilityRules(props)};
`;

const GlobalMenuSubItem = ({ content, onClick, isSelected, isParentSelected }) => {
  const attributes = {
    ...(!isParentSelected
      ? { tabIndex: -1, 'aria-hidden': 'true', role: 'navigation' }
      : { tabIndex: 0, 'aria-hidden': 'false', role: 'navigation' }
    ),
  };

  return (
    <GlobalMenuSubItemDiv
      onClick={onClick}
      isParentSelected={isParentSelected}
      isSelected={isSelected}
      {...attributes}
    >
      {content}
    </GlobalMenuSubItemDiv>
  );
};

GlobalMenuSubItem.displayName = 'GlobalMenuSubItem';

export default GlobalMenuSubItem;
