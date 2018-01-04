import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StepConnector from './StepConnector';

const StepperWrapperUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: ${({ nowrap }) => (nowrap ? 'nowrap' : 'wrap')};
`;

/* eslint-disable */
class Stepper extends Component {
  render() {
    const {
      activeStep,
      children,
      nonLinear,
      connector: connectorProp,
      nowrap,
    } = this.props

    const childrenArray = React.Children.toArray(children)
    const steps = childrenArray.map((step, index) => {
      const stepIndex = (index + 1)
      const isLast = childrenArray.length === index + 1
      const props = {
        last: isLast,
        active: false,
        ...step.props,
        nonLinear,
        index,
        step: stepIndex,
      }
      if (activeStep === stepIndex) {
        props.active = true
      }
      if (!nonLinear) {
        props.disabled = (stepIndex > activeStep ? true : false)
      }
      if (!nonLinear) {
        props.completed = (stepIndex < activeStep ? true : false)
      }

      const connector = connectorProp
        ? React.cloneElement(connectorProp)
        : null;

      return [
        connector && index > 0 &&
        React.cloneElement(connector, { key: `connect-${stepIndex - 1}-to-${stepIndex}`}),
        React.cloneElement(step, props)
      ]
    })

    return (
      <StepperWrapperUI nowrap={nowrap}>
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
