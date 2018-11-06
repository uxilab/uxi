import React from 'react';
import styled from 'styled-components';

const StepConnectorWrapperUI = styled.div`
  max-height: 20px;
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

const StepConnector = () => (
  <StepConnectorWrapperUI>
    <StepConnectorIndicatorUI />
  </StepConnectorWrapperUI>
);

export default StepConnector;
