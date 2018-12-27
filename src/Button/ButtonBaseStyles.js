import { css } from 'styled-components';

const ButtonBaseStyles = css`
  /* outline: 0 !important; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  box-sizing: border-box;
  min-height: 32px;
  /* border-radius: 2px; */
  user-select: none;
  transition: all 0.38s ease-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  svg {
    min-width: 26px;
    width: 26px;
    max-width: 26px;
    min-height: 26px;
    height: 26px;
    max-height: 26px;
  }
  &:focus {
    /* outline: -webkit-focus-ring-color auto 5px; */
    /* outline: rgba(35, 35, 35, .4) auto 5px; */
    /* box-shadow: 0 0 3pt 2pt red; */
    /* outline: ${({ theme: { outline } }) => outline};
    box-shadow: ${({ theme: { outlineShadow } }) => outlineShadow}; */

    ${({ disabled, inert, theme }) => (!inert || !disabled
      // ? 'outline: none; box-shadow: 0 0 10px #719ECE;'
      ? `bowShadow: ${theme.outlineShadow}; outline: ${theme.outline}`
      : '')
    };

  }
`;

export default ButtonBaseStyles;
