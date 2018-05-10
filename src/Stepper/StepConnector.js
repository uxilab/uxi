import React, { Component } from 'react';
import styled from 'styled-components';

const StepConnectorWrapperUI = styled.div`
  height: 100%;
  position: relative;
  flex-grow: 2;
  flex-shrink: 9;
  padding: 8px;
`;

const StepConnectorIndicatorUI = styled.div`
  height: 1px;
  background: lightgrey;
  position: absolute;
  left: -5px;
  right: -5px;
`;

const StepConnector = ({ children }) => (
  <StepConnectorWrapperUI>
    <StepConnectorIndicatorUI />
  </StepConnectorWrapperUI>
);

export default StepConnector;
