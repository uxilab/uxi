import React from 'react';
import styled from 'styled-components';

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

const ActionWrapper = styled.div`
  cursor:pointer;
  width:100%;
  position:relative;
  min-height:180px;
  display: flex;
  align-items: left;
  justify-content: center;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 5px;
  border-style: solid;
  border-color: ${({ theme, type }) => (type ? getTypeColor(theme, type) : theme.palette.lightGrey)};
  padding:24px;
  flex-direction:column;
  box-sizing:border-box;
  &:hover svg {
    fill: ${({ theme, type }) => (type ? getLightTypeColor(theme, type) : theme.palette.lightGrey)} !important;
  }
  &:hover {
    background: #f2f2f2;
    border-color: ${({ theme, type }) => (type ? getLightTypeColor(theme, type) : theme.palette.lightGrey)};
  }
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const ActionIconWrapper = styled.div`
  svg {
    width: 60px !important;
    height:60px !important;
    fill: ${({ theme, type }) => (type ? getTypeColor(theme, type) : theme.palette.lightGrey)} !important;
  }
`;

const ActionDisplayNameWrapper = styled.div`
  color: #2F2F32;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Open sans', sans-serif;
  margin-top:20px;
  flex-grow: 99;
  display: flex;
  align-items: center;
`;

const Action = ({ menuDescriptor, disabled, type = 'primary' }) => (
  <ActionWrapper onClick={menuDescriptor.onClick} disabled={disabled} type={type}>
    <ActionIconWrapper type={type}>
      {menuDescriptor.icon}
    </ActionIconWrapper>
    <ActionDisplayNameWrapper>
      {menuDescriptor.displayName}
    </ActionDisplayNameWrapper>
  </ActionWrapper>
);

export default Action;
