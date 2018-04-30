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
      linear,
      strictlyLinear,
      connector: connectorProp,
      nowrap,
      style,
    } = this.props

    const childrenArray = React.Children.toArray(children)
    const steps = childrenArray.map((step, index) => {
      const stepIndex = (index + 1)
      const isLast = childrenArray.length === index + 1
      const props = {
        last: isLast,
        active: false,
        ...step.props,
        linear,
        strictlyLinear,
        index,
        step: stepIndex,
      }
      if (activeStep === stepIndex) {
        props.active = true
      }
      if (linear) {
        props.disabled = (stepIndex > activeStep ? true : false)
      }
      if (strictlyLinear) {
        props.disabled = (stepIndex !== activeStep ? true : false)
      }
      if (linear || strictlyLinear) {
        props.completed = (stepIndex < activeStep ? true : false)
      }

      const connector = connectorProp
        ? React.cloneElement(connectorProp)
        : null;

      return [
        (
          connector && index > 0 &&
          React.cloneElement(connector, { key: `connect-${stepIndex - 1}-to-${stepIndex}` })
        ),
        React.cloneElement(step, {
          ...props,
          children: React.cloneElement(props.children, {
            ...props.children.props,
            // remove event handler for disabled step button:
            onClick: (props.disabled ? () => {} : props.children.props.onClick)
           }),
        })
      ]
    })

    return (
      <StepperWrapperUI nowrap={nowrap} style={style} >
        {steps}
      </StepperWrapperUI>
    );
  }
}

Stepper.propTypes = {
  connector: PropTypes.object,
}

Stepper.defaultProps = {
  connector: <StepConnector />
}

export default Stepper;
