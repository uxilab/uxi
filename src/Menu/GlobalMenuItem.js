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


const GlobalMenuItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#c2c2c2')};
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 auto;
  padding: 8px 0;
  position: relative;
  border-right: ${({ isSelected }) => (isSelected ? '3px solid #0ea4a5' : '3px solid transparent')};
  background: ${({ isSelected }) => (isSelected ? '#1b3c4f' : 'none')};
  border-bottom: 1px solid ${({ theme: { palette } }) => palette.primary.dark };
  transition: color ${({ theme: { transition } }) => transition.duration + ' ' + transition.easing + ' ' + transition.delay};
  &:hover {
    background: ${({ isSelected }) => (isSelected ? '#1b3c4f' : '#1b3c4f')};
    *:not(svg) {
      color: ${({ theme: { palette } }) => palette.pureWhite };
      transition: color ${({ theme: { transition } }) => transition.duration + ' ' + transition.easing + ' ' + transition.delay};
    }
    svg {
      fill: #fff;
    }
  }
  svg {
    fill: ${props => (getIconColor(props))};
  }
  @media (min-width: 700px) {
    justify-content: start;
    padding: 8px 32px;
  }
`;

const LabelDiv = styled.div`
  display: none;
  @media (min-width: 700px) {
    padding-left: 10px;
    display: block;
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

const GlobalMenuItem = ({
  isSelected,
  Icon,
  index,
  hasNew,
  label,
  onClick,
  isActive,
  primaryColor,
}) => {
  let containerStyle;
  let isNewContent;

  if (hasNew) {
    isNewContent = (<NewInfo>!</NewInfo>);
  }

  return (
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
  );
};

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
