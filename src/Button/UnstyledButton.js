/* @flow */
/* eslint-disable brace-style */
import React from 'react';
import styled from 'styled-components';


const UnstyledButtonUI = styled.button`
  border: none;
  padding: 0;
  font-size: inherit;
  background: transparent;
  min-width: 100%;
  min-height: 100%;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px #719ECE;
  }
`;

const UnstyledButtonDivUI = UnstyledButtonUI.withComponent('div');

const UnstyledButton = ({ children, style, onClick, inline, wrapperStyles, inert, ...attr }) => {
  'r';

  const UnstyledButtonComponent = inert
    ? UnstyledButtonDivUI
    : UnstyledButtonUI;

  if (inline) {
    return (
      <div style={{ minWidth: '100%', minHeight: '100%', ...wrapperStyles }}>
        <UnstyledButtonComponent {...attr} onClick={onClick} style={style}>
          {children}
        </UnstyledButtonComponent>
      </div>
    );
  }

  return (
    <div style={{ minWidth: '100%', minHeight: '100%', display: 'flex', ...wrapperStyles }}>
      <UnstyledButtonComponent {...attr} onClick={onClick} style={style}>
        {children}
      </UnstyledButtonComponent>
    </div>
  );
};

export default UnstyledButton;
