import React from 'react';
import styled, { keyframes } from 'styled-components';
import defaults, { buttonReset, GlobalMenuItemBase } from './defaults';

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


const GlobalMenuSubItemDiv = styled.div`
  ${buttonReset};

  animation: ${fadeIn} ${({ theme }) => `${theme.transition.default}`};

  overflow: hidden;
  color: #9a9fa5;
  text-align: left;
  padding: 16px 32px;
  padding: ${({ isParentSelected }) => isParentSelected ? '16px 32px' : '0 32px' };
  cursor: pointer;
  background: ${({ theme: { palette } }) => palette.primary.dark };
  color: ${({ isSelected }) => (isSelected ? '#0ea4a5' : 'none')};
  height: 0px;
  max-height: 0px;
  max-height: ${({ isParentSelected }) => isParentSelected ? '60px' : '0px' };
  height: ${({ isParentSelected }) => isParentSelected ? 'auto' : '0px' };
  transition: ${({ theme }) => theme.transition.defaultAll};

  border-right: ${({ isSelected }) => isSelected ?
    `${borderThickness} solid #0ea4a5` : `0 solid transparent`
  };

  &:hover {
    color: #fff;
    background: ${({ theme: { palette }}) => palette.primary.light};
  }

  &:focus {
    transition: inherit;
    background: ${({ isSelected, theme: { palette } }) =>
      (isSelected ? palette.primary.dark : palette.primary.light)
    };
    color: ${({ isSelected, isActive, theme: { palette } }) =>
      (isSelected || isActive) ? palette.accent.light : palette.pureWhite
    };
  }


@media (max-width: ${breakpoint}) {
    display:none;
  }

  /** a11y */
  ${GlobalMenuItemBase};
  ${props => getAccessibilityRules(props)};
`;

const GlobalMenuSubItem = ({ label, onClick, isSelected, isParentSelected }) => {
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
      {label}
    </GlobalMenuSubItemDiv>
  );
};

export default GlobalMenuSubItem;
