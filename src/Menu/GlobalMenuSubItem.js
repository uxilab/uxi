import React from 'react';
import styled from 'styled-components';
import defaults from './defaults';

const {
  breakpoint,
} = defaults;

const GlobalMenuSubItemDiv = styled.div`
  color: #9a9fa5;
  text-align: left;
  padding: 15px 30px;
  cursor: pointer;
  background: #162733;
  border-bottom: 1px solid #1d313f;
  display: ${({ isParentSelected }) => (isParentSelected ? 'block' : 'none')};
  color: ${({ isSelected }) => (isSelected ? '#0ea4a5' : 'none')};
  &:hover {
    color: #fff;
  }
  @media (max-width: ${breakpoint}) {
    display:none;
  }
`;

const GlobalMenuSubItem = ({ label, onClick, isSelected, isParentSelected }) => (
  <GlobalMenuSubItemDiv
    onClick={onClick}
    isParentSelected={isParentSelected}
    isSelected={isSelected}
  >
    {label}
  </GlobalMenuSubItemDiv>
);

export default GlobalMenuSubItem;
