import { css } from 'styled-components';

export const defaults = {
  menuWidth: '68px',
  bigMenuWidth: '216px',
  borderThickness: '4px',
  breakpoint: '960px',
};

export const buttonReset = css`
  box-sizing: border-box;
  width: 100%;
  border: none;
  background: transparent;
  border-radius: 0;
  font: inherit;
`;


export const GlobalMenuItemBase = css`
  /** a11y */

  /* No need for ugly outline, we update background color on interaction */
  /* &:focus { outline: ${({ isActive, isSelected }) => (
    (isActive || isSelected) ? 'none' : '1px solid inherit')}
  }; */

  /* &:active { filter: saturate(120%) brightness(120%) } */

  /* &:hover,
  &:active,
  &:hover:active,
  &:focus:active,
  { outline: none; } */
  & { outline: none; }
`;

export default defaults;
