
import { css } from 'styled-components';
// import { getTypeColor } from './utils';

/* eslint-disable indent */
export const UnstyledButtonBaseMixin = css`;
  background-color: transparent;
  border-color: transparent;
  font-size: inherit;
  &, button {
    margin: 0;
    padding: 0;
    border: none;
  }
  button div, & div {
    margin: 0;
  }
}
`;

export default UnstyledButtonBaseMixin;
