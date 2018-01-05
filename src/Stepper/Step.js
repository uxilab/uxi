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
  background-color: ${({ theme, type }) =>
    (type === 'success' ? theme.palette.accent.main : theme.palette.lightGrey)}
`;

const StepWrapperUI = styled.div`
  user-select: none;
  display: flex;
  flex-grow: 3;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;
  background: white;
  background: ${({ active }) => (active ? 'white' : 'inherit')};
  ${({ disabled }) => (disabled ? 'background: white' : '')};
  &:hover {
    background: ${({ disabled }) => (disabled ? 'inherit' : '#efefef')};
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  /* this next line is a tad too agressive: */
  /* pointer-events: ${({ disabled }) => (disabled ? 'none' : 'inherit')}; */
  border-radius: 3px;
`;

const ChildrenWrapper = styled.div`
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  margin-left: 4px;
  display: flex;
  flex-flow: ${({ nowrap }) => (nowrap ? 'inherit' : 'row wrap')};
  justify-content: ${({ nowrap }) => (!nowrap ? 'center' : 'inherit')};
  text-align: ${({ nowrap }) => (!nowrap ? 'center' : '')};
`;

const Step = (
  { active, disabled, completed, stricltyLinear, children, step, nowrap },
) => {
  let progressBadge = null;
  if (active) {
    progressBadge = <Badge type="success" style={{ marginRight: '4px' }} >{step}</Badge>;
  } else if (stricltyLinear && completed) {
    progressBadge = <Done size="20" color={palette.semantic.success} style={{ opacity: 0.4, marginRight: '4px' }} />;
  } else if (completed) {
    progressBadge = <Done size="20" color={palette.semantic.success} style={{ marginRight: '4px' }} />;
  } else {
    progressBadge = <Badge style={{ marginRight: '4px' }} >{step}</Badge>;
  }

  return (
    <StepWrapperUI active={active} disabled={disabled} completed={completed} >
      <ChildrenWrapper disabled={disabled} nowrap={nowrap}>
        {progressBadge}
        {children}
      </ChildrenWrapper>
    </StepWrapperUI>
  );
};

export default Step;
