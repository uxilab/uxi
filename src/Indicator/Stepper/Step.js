import React, { Component } from 'react';
import styled from 'styled-components';

const StepWrapperUI = styled.div`
  display: flex;
  flex-grow: 3;
  justify-content: center;
  padding: 8px;
  /* clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 49%, 0% 0%); */
  background: white;
  background: ${({ active }) => (active ? 'white' : 'inherit')};
  ${({ disabled }) => (disabled ? 'background: white' : '')};
  &:hover {
    background: #cecece;
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  ${({ completed }) => (completed ? 'color: green' : '')};
  border-radius: 3px;
`;

/* eslint-disable */
// class Step extends Component {
//   render() {
//     const { active, disabled, completed } = this.props
//     return (
//       <StepWrapperUI
//         active={active}
//         disabled={disabled}
//         completed={completed}
//       >
//         {this.props.children}
//       </StepWrapperUI>
//     );
//   }
// }

export default StepWrapperUI;

// export default StepWrapperUI;
