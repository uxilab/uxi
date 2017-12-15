import React from 'react';
import styled from 'styled-components';

const lt = (x, a, b, c, d) => (x - a) / (b - c) * (d - c) + c;

const ProgressBarWrapperUI = styled.div`
  /* ${({ width }) => (width !== undefined ? `width: ${width}px` : 'auto')}; */
  display: inline-block;
  display: flex;
  align-items: center;
  flex-direction: ${({ labelPosition }) => {
    if (labelPosition === 'left') { return 'row-reverse'; }
    if (labelPosition === 'top') { return 'column-reverse'; }
    if (labelPosition === 'bottom') { return 'column'; }
    return 'inherit';
  }};
  justify-content: ${({ labelPosition }) => {
    if (labelPosition === 'left') { return 'flex-end'; }
    if (labelPosition === 'top') { return 'flex-end'; }
    if (labelPosition === 'bottom') { return 'flex-start'; }
    return 'flex-start';
  }};
`;

const ProgressIndicatorWrapperUI = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 4px;
  max-width: ${({ width }) => (width !== undefined ? `${width}px` : 'auto')};
  background: ${({ theme }) => theme.palette.lightGray};
  margin: ${({ labelPosition }) => {
    if (labelPosition === 'left') { return '0'; }
    if (labelPosition === 'top') { return '4px 0 0 0'; }
    if (labelPosition === 'bottom') { return 0; }
    return '0 6px 0 0';
  }};
`;

const LabelWrapperUI = styled.div`
  display: inline-block;
    margin: ${({ labelPosition }) => {
    if (labelPosition === 'left') { return '0 6px 0 0'; }
    if (labelPosition === 'top') { return 0; }
    if (labelPosition === 'bottom') { return '4px 0 0 0'; }
    return '0';
  }};
`;

const ProgressIndicatorUI = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${({ value }) => `${value}%`};
  background: ${({ theme }) => theme.palette.accent.main};
`;


const ProgressBar = ({ min, max, value, width, label, labelPosition }) => (
  <ProgressBarWrapperUI labelPosition={labelPosition} width={width}>
    <ProgressIndicatorWrapperUI width={width} labelPosition={labelPosition}>
      <ProgressIndicatorUI value={lt(value, min, max, 0, 100)} />
    </ProgressIndicatorWrapperUI>
    <LabelWrapperUI labelPosition={labelPosition} >
      {label}
    </LabelWrapperUI>
  </ProgressBarWrapperUI>
);
export default ProgressBar;
