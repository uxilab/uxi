import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import defaults, { buttonReset } from './defaults';
import { darken } from '../Theme/colorManipulator';

const {
  breakpoint: defaultBreakpoint,
} = defaults;

const getAccessibilityRules = ({ isParentSelected }) => {
  if (isParentSelected) {
    return 'pointer-events: all; visibility: visible';
  }
  return 'pointer-events: none; visibility: collapse';
};

/* eslint-disable indent */
const LinkDecorator = styled.div`
  ${buttonReset};

  & a {

    ${buttonReset};
    display: flex;

    z-index: 98;
    position: relative;

    & > * {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    border-bottom:  ${({ isLastSubItem, theme: { palette } }) =>
      (isLastSubItem ? '0px' : `.1px solid ${darken(palette.accent.dark, 0.5)}`)
    };


    overflow: hidden;
    color: #9a9fa5;
    text-align: left;
    padding: 16px 32px 4px 32px;
    padding: ${({ isParentSelected }) => (isParentSelected ? '16px 4px 16px 32px' : '0 32px')};
    cursor: pointer;
    background: ${({ theme: { palette } }) => darken(palette.primary.dark)};
    color: ${({ isSelected, isActive, theme: { palette } }) => (
      isSelected || isActive ? palette.accent.light : palette.lightGrey
    )};

    &,
    /* TODO fix tihs .root a situation */
    .root & {
      color: ${({ isSelected, isActive, theme: { palette } }) => (
        isSelected || isActive ? palette.accent.light : palette.lightGrey
      )}
    };
    height: 0px;
    max-height: 0px;
    max-height: ${({ isParentSelected }) => (isParentSelected ? '60px' : '0px')};
    height: ${({ isParentSelected }) => (isParentSelected ? 'auto' : '0px')};
    transition: ${({ theme }) => theme.transition.defaultAll};

    &, &:hover {
      text-decoration: none;
      color: #fff;
    }

    &:focus {
      & { color: #fff; }
      transition: inherit;
      background: ${({ isSelected, theme: { palette } }) =>
        (isSelected ? palette.primary.dark : palette.primary.light)
      };
      color: ${({ isSelected, isActive, theme: { palette } }) =>
        ((isSelected || isActive) ? palette.accent.light : palette.pureWhite)
      };
    }

    &:hover, &:hover:focus, &:hover:not(:focus) {
      /* color: #fff; */
      color: ${({ isSelected, isActive, theme: { palette } }) => (
        isSelected && isActive ? palette.accent.light : palette.pureWhite
      )};

      background: ${({ isSelected, isActive, theme: { palette } }) => (
        isSelected && isActive ? darken(palette.primary.dark) : palette.primary.light
      )};
      & {
        color: ${({ isSelected, isActive, theme: { palette } }) => (
        isSelected && isActive ? palette.accent.light : palette.pureWhite
      )};
      }
    }


    @media (max-width: ${({ breakpoint }) => breakpoint}) {
      display:none;
    }

    /** a11y */
    ${props => getAccessibilityRules(props)};
  }
`;
/* eslint-enable indent */

const GlobalMenuSubItemDiv = styled.a`
  ${buttonReset};
  display: flex;

  z-index: 98;
  position: relative;

  & > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  border-bottom:  ${({ isLastSubItem, theme: { palette } }) =>
    (isLastSubItem ? '0px' : `.1px solid ${darken(palette.accent.dark, 0.5)}`)
};

  overflow: hidden;
  color: #9a9fa5;
  text-align: left;
  padding: 16px 32px 4px 32px;
  padding: ${({ isParentSelected }) => (isParentSelected ? '16px 4px 16px 32px' : '0 32px')};
  cursor: pointer;
  background: ${({ theme: { palette } }) => darken(palette.primary.dark)};
  color: ${({ isSelected, isActive, theme: { palette } }) => (
    isSelected || isActive ? palette.accent.light : palette.lightGrey
  )};

  &,
  /* TODO fix tihs .root a situation */
  .root & {
    color: ${({ isSelected, isActive, theme: { palette } }) => (
    isSelected || isActive ? palette.accent.light : palette.lightGrey
  )}
  };
  height: 0px;
  max-height: 0px;
  max-height: ${({ isParentSelected }) => (isParentSelected ? '60px' : '0px')};
  height: ${({ isParentSelected }) => (isParentSelected ? 'auto' : '0px')};
  transition: ${({ theme }) => theme.transition.defaultAll};

  &, &:hover {
    text-decoration: none;
    color: #fff;
  }

  &:focus {
    & { color: #fff; }
    transition: inherit;
    background: ${({ isSelected, theme: { palette } }) =>
    (isSelected ? palette.primary.dark : palette.primary.light)
};
    color: ${({ isSelected, isActive, theme: { palette } }) =>
    ((isSelected || isActive) ? palette.accent.light : palette.pureWhite)
};
  }

  &:hover, &:hover:focus, &:hover:not(:focus) {
    /* color: #fff; */
    color: ${({ isSelected, isActive, theme: { palette } }) => (
    isSelected && isActive ? palette.accent.light : palette.pureWhite
  )};

    background: ${({ isSelected, isActive, theme: { palette } }) => (
    isSelected && isActive ? darken(palette.primary.dark) : palette.primary.light
  )};
    & {
       color: ${({ isSelected, isActive, theme: { palette } }) => (
    isSelected && isActive ? palette.accent.light : palette.pureWhite
  )};
     }
  }


  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    display:none;
  }

  /** a11y */
  ${props => getAccessibilityRules(props)};
`;

const GlobalMenuItemButton = GlobalMenuSubItemDiv.withComponent('button');


class GlobalMenuSubItem extends Component {
  /*
  shouldComponentUpdate(nextProps) {
    const {
      isActive,
      // isSelected,
      isParentSelected,
    } = this.props;

    if (isActive !== nextProps.isActive) {
      return true;
    }
    if (isParentSelected !== nextProps.isParentSelected) {
      return true;
    }
    // if (isSelected !== nextProps.isSelected) {
    //   return true;
    // }
    return false;
  }
  */

  render() {
    const {
    // content,
      onClick,
      isSelected,
      isActive,
      isParentSelected,
      isFirstSubItem,
      isLastSubItem,
      primaryColor,
      label,
      Link,
      to,
      href,
      breakpoint,
    } = this.props;

    let linkProps = {};
    if (Link !== undefined) {
    // const GlobalMenuItemDivFinal = Link; // shadow
      linkProps = { to };
    } else if (href) {
      linkProps = { href };
    }

    // const attributes = {
    //   ...(!isParentSelected
    //     ? { tabIndex: -1, 'aria-hidden': 'true', role: 'navigation' }
    //     : { tabIndex: 0, 'aria-hidden': 'false', role: 'navigation' }
    //   ),
    // };

    let resContent = (
      <GlobalMenuItemButton
        breakpoint={breakpoint}
        isFirstSubItem={isFirstSubItem}
        isLastSubItem={isLastSubItem}
        primaryColor={primaryColor}
        isSelected={isSelected}
        isActive={isActive}
        key={`mainMenuItemContainer-${label}`}
        // style={containerStyle}
        {...linkProps}
        onClick={onClick}
        isParentSelected={isParentSelected}
      >
        {label}
      </GlobalMenuItemButton>
    );

    if (Link) {
      resContent = (
        <LinkDecorator
          breakpoint={breakpoint}
          isFirstSubItem={isFirstSubItem}
          isLastSubItem={isLastSubItem}
          primaryColor={primaryColor}
          isSelected={isSelected}
          isActive={isActive}
          key={`mainMenuItemContainer-${label}`}
          isParentSelected={isParentSelected}
        // style={containerStyle}
        >
          <Link
            {...linkProps}
            onClick={onClick}
          >
            {label}
          </Link>
        </LinkDecorator>
      );
    }

    return resContent;
  }
}


GlobalMenuSubItem.displayName = 'GlobalMenuSubItem';

GlobalMenuSubItem.defaultProps = {
  breakpoint: defaultBreakpoint,
};

export default GlobalMenuSubItem;
