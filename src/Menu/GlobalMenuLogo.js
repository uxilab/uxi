import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import styled from 'styled-components';

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
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#c2c2c2')};
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 auto;
  padding: 8px 32px;
  position: relative;
  background: ${({ theme: { palette } }) => palette.primary.dark };
  transition: color ${({ theme: { transition }}) => transition.duration + ' ' + transition.easing + ' ' + transition.delay};
  &:hover {
    *:not(svg) {
      color: ${({ theme: { palette } }) => palette.pureWhite };
      transition: color ${({ theme: { transition }}) => transition.duration + ' ' + transition.easing + ' ' + transition.delay};
    }
    svg {
      fill: #fff;
      /* svg already trnasitionn automatically */
    }
  }
  svg {
    fill: ${props => (getIconColor(props))};
  }
  @media (max-width: 700px) {
    padding: 7px 0;
    justify-content: center;
  }
`;

const LabelDiv = styled.div`
  padding-left: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

const GlobalMenuLogo = ({
  Icon,
  label,
  onClick,
  primaryColor,
}) => {
  let containerStyle;
  let isNewContent;


  return (
    <Tooltip placement="right" overlay={<span>{label}</span>}>
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
