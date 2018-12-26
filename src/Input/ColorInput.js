import React from 'react';
import styled from 'styled-components';
import { buttonResetStylesCSSString } from '../Button/buttonResetStyles';
import ButtonBaseStyles from '../Button/ButtonBaseStyles';
import { Datacleaning } from '../Icons';
import Button from '../Button';

const ColorInputUI = styled.input.attrs({
  children: null,
  type: 'color',
  onChange: ({ onChange }) => (e) => {
    onChange(e, e.target.value);
  },
})`
  ${buttonResetStylesCSSString};
  &:focus {
    outline: none;
  }
  /* width: 40px; */
  height: 20px;

  /* @-moz-document url-prefix() {
  h1, p{
    color:pink;
  } */
}
`;

// const Label = styled.label`
//   ${ButtonBaseStyles};
//   ${buttonResetStylesCSSString};
//   /* &:focus {
//     outline: inherit;
//   } */
// `;

const ColorInput = props => (
  <Button
    inert
    icon={<Datacleaning />}
  >
    <ColorInputUI {...props} />
  </Button>
);

export default ColorInput;
