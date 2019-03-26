import { css } from 'styled-components';

export const appLayoutStylesCSString = css`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  & > * {
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;
  }
  & > *:nth-child(2) {
    flex-grow: 99;
    flex-shrink: 1;
    overflow-y: auto;
  }
`.join('');

export default null;
