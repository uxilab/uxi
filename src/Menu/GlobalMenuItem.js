import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import styled, { keyframes } from 'styled-components';
import defaults, { buttonReset, GlobalMenuItemBase } from './defaults';
import { PropsMapperMediaQueriesHOC } from '../internal/PropsMapperMediaQueriesHOC';

const {
  borderThickness,
  breakpoint,
} = defaults;

const getIconColor = ({ isSelected, isActive }) => {
  if (isActive) {
    return '#fff';
  }

  if (isSelected) {
    return '#0ea4a5';
  }

  return '#c2c2c2';
};

const fadeIn = keyframes`
  0%   { opacity: 0 }
  100% { opacity: 1 }
`;

const GlobalMenuItemDiv = styled.button`
  ${buttonReset};

  animation: ${fadeIn} ${({ theme }) => `${theme.transition.default}`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isSelected, theme: { palette } }) =>
    (isSelected ? palette.accent.light : '#c2c2c2')
  };
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 auto;
  /* padding: ${`16px 0 16px ${borderThickness}`}; */
  padding: 16px 0;
  position: relative;
  border-right: ${({ isSelected, isActive }) => (isSelected || isActive ?
    `${borderThickness} solid #0ea4a5` : `0 solid transparent`)
  };
  background: ${({ isSelected, theme: { palette }  }) => palette.primary.main};
  /* background: ${({ isActive, isSelected, theme: { palette }  }) => (
    isSelected
      ? (isActive
        ? palette.primary.main
        : palette.primary.light // child is slelected, means we can navigate there
      )
      : 'none'
  )}; */
  transition: ${({ theme: { transition } }) => transition.defaultAll};

  &:hover {
    transition: inherit;
    color: ${({ theme: { palette } }) => palette.pureWhite };
    background: ${({ isActive, isSelected, theme: { palette } }) => (
      /* (isSelected ? palette.primary.main : palette.primary.light) */
      isSelected
        ? (isActive
          ? palette.primary.main
          : palette.primary.light // child is slelected, means we can navigate there
        )
        : palette.primary.light
    )};
    svg {
      fill: #fff;
    }
  }

  &:focus {
    transition: inherit;
    color: ${({ isActive, theme: { palette } }) => (
      isActive ? 'inherit' : palette.pureWhite
    )};

    background: ${({ isActive, isSelected, theme: { palette } }) => (
      (isSelected ? palette.primary.main : palette.primary.light)
    )};
    color: ${({ isSelected, isActive, theme: { palette } }) =>
      (isSelected || isActive) ? palette.accent.light : palette.pureWhite
    };
    svg {
      fill: ${({ isSelected, isActive, theme: { palette } }) =>
        (isSelected || isActive) ? palette.accent.light : palette.pureWhite
      };
    }
  }
  /*
  prevent click issue
  TODO find bvetter solutino
   */
  /* &:focus:hover
  ,&:focus:active
  ,&:hover:active
  ,&:focus:not(:hover)
  {
    background: ${({ isActive, isSelected, theme: { palette } }) => (
      isSelected ? palette.primary.main : palette.primary.main
    )} !important
  }; */

  svg {
    fill: ${props => (getIconColor(props))};
  }

  @media (min-width: ${breakpoint}) {
    justify-content: start;
    padding: ${`16px 0 16px ${borderThickness}`};
    padding: 16px;
  }

  /** a11y */
  ${GlobalMenuItemBase}
`;

const LabelDiv = styled.div`
  display: none;
  @media (min-width: ${breakpoint}) {
    padding-left: 10px;
    display: block;

    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const NewInfo = styled.div`
    background-color: rgb(216, 27, 96);
    border-radius: 16px;
    line-height: 16px;
    color: #fff;
    width: 16px;
    height: 16px;
    font-size: 12px;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translate(0, -50%);
`;

const GlobalMenuItem = props => {
  const {
    isSelected,
    Icon,
    index,
    hasNew,
    label,
    onClick,
    isActive,
    primaryColor,
  } = props;

  let containerStyle;
  let isNewContent;

  if (hasNew) {
    isNewContent = (<NewInfo>!</NewInfo>);
  }

  // render the tooltip inert above window width of 699px
  const rules = [{
    minWidth: 700,
    mapper: ({ trigger }) => ({
      trigger: [],
      visible: false, // inject inexisting props
    }),
  }];

  return (
    <PropsMapperMediaQueriesHOC
      debounceDelay={400}
      rules={rules}
      trigger={['hover']}
    >
      <Tooltip placement="right" overlay={<span>{label}</span>}>
        <GlobalMenuItemDiv
          primaryColor={primaryColor}
          isSelected={isSelected}
          isActive={isActive}
          key={`mainMenuItemContainer-${index}`}
          style={containerStyle}
          onClick={onClick}
        >
          <Icon />
          <LabelDiv> {label} </LabelDiv>
          {isNewContent}
        </GlobalMenuItemDiv>
      </Tooltip>
    </PropsMapperMediaQueriesHOC>
  );
}

GlobalMenuItem.displayName = 'GlobalMenuItem';

GlobalMenuItem.propTypes = {
  isSelected: PropTypes.bool,
  Icon: PropTypes.any,
  index: PropTypes.string,
  hasNew: PropTypes.bool,
  label: PropTypes.node,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  primaryColor: PropTypes.string,
};

export default GlobalMenuItem;
