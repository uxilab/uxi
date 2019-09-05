import React from 'react';
import styled from 'styled-components';
import Widget from '../Widget'; // eslint-disable-line import/no-named-as-default
/*
const getTypeColor = ({ palette }, type) => {
  if (palette.semantic[type]) { return palette.semantic[type]; }
  if (type === 'primary') { return palette.accent.main; }
  if (type === 'secondary') { return palette.primary.main; }
  return '#fff';
};

const getLightTypeColor = ({ palette }, type) => {
  if (palette.semantic[type]) { return palette.semantic[type]; }
  if (type === 'primary') { return palette.accent.light; }
  if (type === 'secondary') { return palette.primary.light; }
  return '#fff';
};
 */

const ActionWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  position: relative;
  min-height: 180px;
  display: flex;
  align-items: left;
  justify-content: center;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 5px;
  border-style: solid;
  border-color: currentColor;
  padding: 24px;
  flex-direction: column;
  box-sizing: border-box;
`;

const ActionIconWrapper = styled.div`
  svg {
    width: 60px !important;
    height:60px !important;
    fill: currentColor
  }
`;

const ActionDisplayNameWrapper = styled.div`
  color: currentColor;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Open sans', sans-serif;
  margin-top:20px;
  flex-grow: 99;
  display: flex;
  align-items: center;
`;

const Action = ({
  menuDescriptor,
  style,
  Link = () => null,
  to = '#',
  target,
}) => (
  <Widget>
    <Link to={to} target={target}>
      <ActionWrapper
        onClick={menuDescriptor.onClick}
        style={style}
      >
        <ActionIconWrapper>
          {menuDescriptor.icon}
        </ActionIconWrapper>
        <ActionDisplayNameWrapper>
          {menuDescriptor.displayName}
        </ActionDisplayNameWrapper>
      </ActionWrapper>
    </Link>
  </Widget>
);

export default Action;
