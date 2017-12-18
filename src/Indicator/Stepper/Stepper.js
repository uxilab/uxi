import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StepConnector from './StepConnector';

const StepperWrapperUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

/* eslint-disable */
class Stepper extends Component {
  render() {
    const {
      activeStep,
      children,
      nonLinear,
      connector: connectorProp,
    } = this.props

    const childrenArray = React.Children.toArray(children)
    const steps = childrenArray.map((step, index) => {
      const isLast = childrenArray.length === index + 1
      const props = {
        last: isLast,
        active: false,
        ...step.props,
        nonLinear,
      }
      if (activeStep === index) {
        props.active = true
      }
      if (!nonLinear) {
        props.disabled = (index > activeStep ? true : false)
      }
      if (!nonLinear) {
        props.completed = (index < activeStep ? true : false)
      }

      const connector = connectorProp
        ? React.cloneElement(connectorProp)
        : null;

      return [
        connector && index > 0 &&
        React.cloneElement(connector, { key: `connect-${index - 1}-to-${index}`}),
        React.cloneElement(step, props)
      ]
    })

    return (
      <StepperWrapperUI>
        {steps}
      </StepperWrapperUI>
    );
  }
}

Stepper.propTypes = {
  connector: PropTypes.func,
}

Stepper.defaultProps = {
  connector: <StepConnector />
}

export default Stepper;
