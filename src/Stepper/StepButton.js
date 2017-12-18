import React, { Component } from 'react';
import styled from 'styled-components';

const StepButtonUI = styled.div`
  display: flex;
  /* align-items: center; */
`;

/* eslint-disable */
class StepButton extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default StepButtonUI;
