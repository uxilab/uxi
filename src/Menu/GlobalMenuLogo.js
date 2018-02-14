import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import styled from 'styled-components';
import defaults, { buttonReset, GlobalMenuItemBase } from './defaults';
import { PropsMapperMediaQueriesHOC } from '../internal/PropsMapperMediaQueriesHOC';

const {
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


const GlobalMenuLogoDiv = styled.button`
  ${buttonReset};

  z-index: 99;
  height: 48px; /* harcoding height because */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isSelected, isActive, theme }) =>
    (isSelected || isActive)
      ? theme.palette.pureWhite
      : theme.palette.lightGrey
  };
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 auto;
  padding: 8px 0;
  position: relative;
  background: ${({ theme: { palette } }) => palette.primary.main || '#1b3c4f'};
  transition: ${({ theme: { transition } }) => transition.defaultAll};

  &:hover {
    color: ${({ theme: { palette } }) => palette.pureWhite};
    background: ${({ isActive, isSelected, theme: { palette } }) =>
    (!isActive && !isSelected ? palette.primary.light : palette.primary.dark)
    };
    transition: inherit;
    svg {
      fill: #fff;
    }
  }
  &:focus {
    color: ${({ theme: { palette } }) => palette.pureWhite};
    transition: inherit;
    background: ${({ isActive, isSelected, theme: { palette } }) =>
      (!isActive && !isSelected ? palette.primary.light : palette.primary.dark)
    };
    svg {
      fill: #fff;
    }
  }


  svg {
    fill: ${props => (getIconColor(props))};
  }
  @media (min-width: ${breakpoint}) {
    justify-content: flex-start;
    padding: 0 16px;
  }

  /** a11y */
  ${GlobalMenuItemBase}
`;

const LabelDiv = styled.div`
  display: none;
  width: 52px;
  @media (min-width: ${breakpoint}) {
    display: block;
    padding-left: 3px;
  }
`;

const GlobalMenuLogo = ({
  icon,
  label,
  onClick,
  primaryColor,
  logoTooltipLabel,
  isActive,
}) => {
  let containerStyle;
  let isNewContent;


  // render the tooltip inert above window width of 699px
  const rules = [{
    minWidth: 700,
    mapper: ({ trigger }) => ({ trigger: [] }),
  }];

  return (
    <PropsMapperMediaQueriesHOC rules={rules} trigger={['hover']} debounceDelay={400} >
      <Tooltip placement="right" overlay={<span>{logoTooltipLabel || label || ''}</span>}>
        <GlobalMenuLogoDiv
          primaryColor={primaryColor}
          key={`mainMenuItemContainer-${label}`}
          style={containerStyle}
          onClick={onClick}
          isActive={isActive}
        >
          {icon}
          <LabelDiv> {label} </LabelDiv>
        </GlobalMenuLogoDiv>
      </Tooltip>
    </PropsMapperMediaQueriesHOC>
  );
};

GlobalMenuLogo.displayName = 'GlobalMenuLogo';

GlobalMenuLogo.propTypes = {
  isSelected: PropTypes.bool,
  icon: PropTypes.any,
  index: PropTypes.string,
  hasNew: PropTypes.bool,
  label: PropTypes.node,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  primaryColor: PropTypes.string,
};

export default GlobalMenuLogo;
