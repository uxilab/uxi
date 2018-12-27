import { css } from 'styled-components';

export const buttonResetstyles = {
  border: 'none',
  padding: 0,
  fontSize: 'inherit',
  background: 'transparent',
  borderRadius: 0,
};

export const buttonResetStylesCSSString = css`
  border: none;
  padding: 0;
  font-size: inherit;
  background: transparent;
  border-radius: 0;
  cursor: pointer;

  /* &:focus { */
    /* outline: none; */
    /* box-shadow: 0 0 10px #719ECE; */
  /* } */
`.join('\n');
