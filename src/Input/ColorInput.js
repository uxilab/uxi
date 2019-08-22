import React from 'react';
import styled from 'styled-components';
import { buttonResetStylesCSSString } from '../Button/buttonResetStyles';
import { Datacleaning } from '../Icons';
import Button from '../Button'; // eslint-disable-line

const ColorInputUI = styled.input.attrs(({ onChange }) => ({
  children: null,
  type: 'color',
  onChange: (e) => {
    onChange(e, e.target.value);
  },
}))`
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
