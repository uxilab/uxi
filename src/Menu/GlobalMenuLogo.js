import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import styled from 'styled-components';
import defaults from './defaults';
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


const GlobalMenuLogoDiv = styled.div`
  height: 48px; /* harcoding height because */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#c2c2c2')};
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 auto;
  padding: 12px 0;
  position: relative;
  background: ${({ theme: { palette } }) => palette.primary.dark};
  transition: color ${({ theme: { transition } }) => transition.default};
  &:hover {
    *:not(svg) {
      color: ${({ theme: { palette } }) => palette.pureWhite};
      transition: color ${({ theme: { transition } }) => transition.default};
    }
    svg {
      fill: #fff;
      /* svg already trnasitionn automatically */
    }
  }
  svg {
    fill: ${props => (getIconColor(props))};
  }
  @media (min-width: ${breakpoint}) {
    padding: 16px;
    justify-content: flex-start;
  }
`;

const LabelDiv = styled.div`
  display: none;
  @media (min-width: ${breakpoint}) {
    display: block;
    padding-left: 10px;
  }
`;

const GlobalMenuLogo = ({
  Icon,
  label,
  onClick,
  primaryColor,
  logoTooltipLabel,
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
        >
          <Icon />
          <LabelDiv> {label} </LabelDiv>
        </GlobalMenuLogoDiv>
      </Tooltip>
    </PropsMapperMediaQueriesHOC>
  );
};

GlobalMenuLogo.displayName = 'GlobalMenuLogo';

GlobalMenuLogo.propTypes = {
  isSelected: PropTypes.bool,
  Icon: PropTypes.any,
  index: PropTypes.string,
  hasNew: PropTypes.bool,
  label: PropTypes.node,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  primaryColor: PropTypes.string,
};

export default GlobalMenuLogo;
