import { css } from 'styled-components';

export const defaults = {
  menuWidth: '68px',
  bigMenuWidth: '180px',
  borderThickness: '4px',
  breakpoint: '960px',
};

export const buttonReset = css`
  border: none;
  background: transparent;
  border-radius: 0;
  font: inherit;
`;


export const GlobalMenuItemBase = css`
  /** a11y */
  &:focus { outline: ${({ isActive, isSelected }) => (
    (isActive || isSelected) ? 'none' : '1px solid inherit')}
  };
  /* &:active { filter: saturate(120%) brightness(120%) } */
  &:hover,
  &:active,
  &:hover:active,
  &:focus:active,
  { outline: none; }
`;

export default defaults
