import React, { Component } from 'react';
import styled from 'styled-components';
import { Done } from '../Icons';
import { palette } from '../Theme';

const Badge = styled.div`
  box-sizing: border-box;
  color: #ffffff ;
  color: ${({ theme }) => theme.palette.pureWhite};
  overflow: hidden;
  font-size: 13px;
  border-radius: 7px;
  border-radius: 50%;
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  min-width: 20px;
  width: 20px;
  min-height: 20px;
  max-height: 20px;
  margin-right: 4px;
  padding: 0;
  /* padding: 0.4em 0.3em; */
  background-color: ${({ theme, type }) =>
    (type === 'success' ? theme.palette.accent.main : theme.palette.lightGrey)}
`;

const StepWrapperUI = styled.div`
  display: flex;
  flex-grow: 3;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;
  /* clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 49%, 0% 0%); */
  background: white;
  background: ${({ active }) => (active ? 'white' : 'inherit')};
  ${({ disabled }) => (disabled ? 'background: white' : '')};
  &:hover {
    background: #efefef;
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 3px;
`;

const ChildrenWrapper = styled.div`
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

const Step = ({ active, disabled, completed, nonLinear, index, children }) => {
  // eslint-disable-next-line no-nested-ternary
  const progressBadge = active
    // ? <Radioinput style={{ marginRight: '4px' }} size="20" color={palette.accent.main} />
    ? <Badge type="success" style={{ marginRight: '4px' }}>{index}</Badge>
    : (!nonLinear && completed
      ? <Done size="20" color={palette.semantic.success} style={{ marginRight: '4px' }} />
      : <Badge style={{ marginRight: '4px' }}>{index}</Badge>
    );

  return (
    <StepWrapperUI active={active} disabled={disabled} completed={completed} >
      {progressBadge}
      <ChildrenWrapper disabled={disabled}>
        {children}
      </ChildrenWrapper>
    </StepWrapperUI>
  );
};

export default Step;