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
  & { outline: none; }
  z-index: 99;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 auto;
  padding: 16px 0;
  &:hover, &:focus {
    transition: inherit;
  }

  @media (min-width: ${defaults.breakpoint}) {
    justify-content: start;
    padding: ${`16px 0 16px ${defaults.borderThickness}`};
    padding: 16px 24px;
  }

`;

export default defaults;
