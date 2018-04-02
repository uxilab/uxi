/* @flow */
/* eslint-disable brace-style */
import React, { Component } from 'react';
import styled from 'styled-components';
import Ripples from '../Motion/Ripples';


const UnstyledButtonUI = styled.button`
  border: none;
  padding: 0;
  font-size: inherit;
  background: transparent;
  min-width: 100%;
  min-height: 100%;
`;

const UnstyledButton = ({ children, style, onClick, inline }) => {
  'r';

  if (inline) {
    return (
      <div style={{ minWidth: '100%', minHeight: '100%' }}>
        <UnstyledButtonUI onClick={onClick} style={style}>
          {children}
        </UnstyledButtonUI>
      </div>
    );
  }

  return (
    <div style={{ minWidth: '100%', minHeight: '100%', display: 'flex' }}>
      <UnstyledButtonUI onClick={onClick} style={style}>
        {children}
      </UnstyledButtonUI>
    </div>
  );
};

export default UnstyledButton;
