/* @flow */
/* eslint-disable brace-style */
import React from 'react';
import styled from 'styled-components';
import { buttonResetStylesCSSString } from './buttonResetStyles';

/* eslint-disable indent */
const UnstyledButtonUI = styled.button.attrs({
  tabIndex: ({ inert }) => (inert ? -1 : undefined),
})`
  ${buttonResetStylesCSSString};
  &, &:hover, & *, &:hover * {}
  border: none;
  background: transparent;
  color: inherit
  padding: 0 4px;
  font-size: inherit;
  min-width: 100%;
  min-height: 100%;
  &:focus {
    ${({ disabled, inert, theme }) => (!inert && !disabled
      // ? 'outline: none; box-shadow: 0 0 10px #719ECE;'
      ? `box-shadow: ${theme.outlineShadow}; outline: ${theme.outline}`
      : '')
    };
  }
`;
/* eslint-enable indent */
// TODO investigzte: inert unstyledButon doesn't make any sense

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
