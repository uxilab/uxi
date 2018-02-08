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


// border-radius: ${({ isSelected }) => (isSelected ? '50px' : '0')};

const GlobalMenuLogoDiv = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#c2c2c2')};
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 auto 32px auto;
  padding: 7px 30px;
  position: relative;
  /* border-right: ${({ isSelected }) => (isSelected ? '3px solid #0ea4a5' : '3px solid transparent')}; */
  background: ${({ theme: { palette } }) => {
  console.log('palette', palette);
  return palette.primary.dark;
  }
  };
  /* border-bottom: 1px solid #162834; */
  &:hover {
    background: ${({ isSelected }) => (isSelected ? '#1b3c4f' : '#1b3c4f')};
    svg {
      fill: #fff;
    }
  }
  svg {
    fill: ${props => (getIconColor(props))};
    margin-top: 9px;
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
        <div>
          <Icon />
        </div>
        <LabelDiv>
          {label}
        </LabelDiv>
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
