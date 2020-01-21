// @flow
import React from 'react';
import styled from 'styled-components';
import { buttonResetStylesCSSString } from '../Button/buttonResetStyles';
import type { ThProps } from './Th';

const Triangle = styled.svg.attrs(props => ({
  focusable: 'false',
  viewBox: '0 0 500 500',
  width: '10px',
  height: '10px',
  children: <polygon points="250,110 100,450 400,450" />,
}))`
  /* fill: ${({ theme }) => theme.palette.midDarkGrey}; */
  fill: inherit;
`;


const SortHandler = styled.button.attrs((props: ThProps) => ({
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
  width: 28px;
  cursor: pointer;


  ${Triangle}:first-child,
  ${Triangle}:last-child {
    display: inherit;
  }

  ${Triangle}:first-child {
    /* content: '▾';
    content: '▴'; */
  }
  ${Triangle}:last-child {
    /* content: '▾';
    content: '▴'; */
    transform: rotate(180deg);
  }
`;


export default props => (
  <SortHandler {...props} >
    <Triangle />
    <Triangle />
  </SortHandler>
);
