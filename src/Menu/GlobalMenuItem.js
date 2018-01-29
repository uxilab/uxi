import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import styled from 'styled-components';

const getIconColor = ({ isSelected, isActive }) => {
  if (isActive) {
    return '#fff';
  }

  if (isSelected) {
    return '#343434';
  }

  return '#c2c2c2';
};

const GlobalMenuItemDiv = styled.div`
  color: ${({ isSelected }) => (isSelected ? '#212121' : '#c2c2c2')};
  width: 42px;
  height: 42px;
  cursor: pointer;
  margin: 15px auto 0 auto;
  position: relative;
  background: ${({ isSelected }) => (isSelected ? '#c2c2c2' : 'none')};;
  border-radius: ${({ isSelected }) => (isSelected ? '50px' : '0')};
  &:hover {
    background: ${({ primaryColor }) => (primaryColor)};
    border-radius: 50px;
    svg {
      fill: #fff;
    }
  }
  svg {
    fill: ${props => (getIconColor(props))};
    margin-top: 9px;
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
    top: 0;
    right: 0;
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
        {isNewContent}
      </GlobalMenuItemDiv>
    </Tooltip>
  );
};

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
