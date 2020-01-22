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
    if (PopStateEvent.onClick) {
      props.onClick(...a);
    }
    props.onSortChange();
  },
}))`
  ${buttonResetStylesCSSString};

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 32px;
  cursor: pointer;


  ${Triangle}:first-child,
  ${Triangle}:last-child {
    display: inherit;
  }

  ${Triangle}:first-child {
    /* content: '▾';
    content: '▴'; */
    ${({ sortDirection, theme: { palette } }) => (sortDirection === SORTS.ASC ? css`fill: ${palette.accent.main}` : '')};
  }
  ${Triangle}:last-child {
    /* content: '▾';
    content: '▴'; */
    ${({ sortDirection, theme: { palette } }) => (sortDirection === SORTS.DESC ? css`fill: ${palette.accent.main}` : '')};
    transform: rotate(180deg);
  }
`;


export default props => (
  <SortHandlerButton {...props} >
    <Triangle />
    <Triangle />
  </SortHandlerButton>
);
