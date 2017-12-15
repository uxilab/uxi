import React from 'react';
import styled from 'styled-components';

const lt = (x, a, b, c, d) => (x - a) / (b - c) * (d - c) + c;

const ProgressWrapperUI = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  max-width: ${({ width }) => (width !== undefined ? `${width}px` : 'auto')};
  background: ${({ theme }) => theme.palette.lightGray};
`;

const ProgressIndicatorUI = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${({ value }) => `${value}%`};
  background: ${({ theme }) => theme.palette.accent.main};
`;

const ProgressBar = ({ min, max, value, width }) => (
  <ProgressWrapperUI width={width}>
    <ProgressIndicatorUI value={lt(value, min, max, 0, 100)} />
  </ProgressWrapperUI>
);

export default ProgressBar;
