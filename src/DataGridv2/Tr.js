import styled, { css } from 'styled-components';

const Tr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid hsla(0, 0%, 88%, 1);
  }
  background: white;
  &:nth-child(2n) {
    background: hsla(0, 0%, 99.25%, 1);
  }

  &:nth-child(1n) {
    ${({ selected }) => (selected ? css`background: hsla(0, 0%, 95%, 1);` : '')};
    &:hover {
      /* background: hsla(0, 0%, 95%, 1); */
      background: ${({ theme: { palette } }) => `${palette.accent.light.replace('rgb(', 'rgba(').replace(')', ', .1)')}`};
    }
  }
`;

Tr.displayName = 'Tr';


export default Tr;
