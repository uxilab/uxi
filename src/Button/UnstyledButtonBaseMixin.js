
import { css } from 'styled-components';
// import { getTypeColor } from './utils';

/* eslint-disable indent */
export const UnstyledButtonBaseMixin = css`;
  background-color: transparent;
  border-color: transparent;
  font-size: inherit;
  text-transform: none;
  &, button {
    margin: 0;
    padding: 0;
    border: none;
  }
  button div, & div {
    margin: 0;
  }
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center
  }
}
`;

export default UnstyledButtonBaseMixin;
