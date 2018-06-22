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

const UnstyledButton = ({ children, style, onClick, inline, wrapperStyles, ...attr }) => {
  'r';

  if (inline) {
    return (
      <div style={{ minWidth: '100%', minHeight: '100%', ...wrapperStyles }}>
        <UnstyledButtonUI {...attr} onClick={onClick} style={style}>
          {children}
        </UnstyledButtonUI>
      </div>
    );
  }

  return (
    <div style={{ minWidth: '100%', minHeight: '100%', display: 'flex', ...wrapperStyles }}>
      <UnstyledButtonUI {...attr} onClick={onClick} style={style}>
        {children}
      </UnstyledButtonUI>
    </div>
  );
};

export default UnstyledButton;
