// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { buttonResetStylesCSSString } from '../Button/buttonResetStyles';
import { SORTS } from './DataGrid';
import type { ThProps } from './Th';


const Triangle = styled.svg.attrs(props => ({
  ...props,
  focusable: 'false',
  viewBox: '0 0 500 500',
  width: '10px',
  height: '10px',
  children: <polygon points="250,110 100,450 400,450" />,
}))`
  fill: ${({ theme }) => theme.palette.midDarkGrey};
`;


const SortHandlerButton = styled.button.attrs((props: ThProps) => ({
  onClick: (...a) => {
    if (props.onClick) {
      props.onClick(...a);
    }
    props.onSortChange();
  },
  onSortChange: undefined,
}))`
  ${buttonResetStylesCSSString};

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 100%;
  cursor: pointer;


  ${Triangle}:first-child,
  ${Triangle}:last-child {
    display: inherit;
  }

  ${Triangle}:first-child {
    ${({ sortDirection, theme: { palette } }) => (sortDirection === SORTS.ASC ? css`fill: ${palette.accent.main};` : '')};
  }
  ${Triangle}:last-child {
    ${({ sortDirection, theme: { palette } }) => (sortDirection === SORTS.DESC ? css`fill: ${palette.accent.main};` : '')};
    transform: rotate(180deg);
  }
`;

const SortHandler = props => (
  <SortHandlerButton {...props} >
    <Triangle />
    <Triangle />
  </SortHandlerButton>
);

SortHandler.displayName = 'SortHandler';


export default SortHandler;
