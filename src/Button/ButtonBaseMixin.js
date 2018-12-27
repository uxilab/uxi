
import { css } from 'styled-components';
import { getTypeColor } from './utils';
import ButtonBaseStyles from './ButtonBaseStyles';

/* eslint-disable indent */
export const ButtonBaseMixin = css`;
  background-color: ${({ theme, type }) => getTypeColor(theme, type)};
  border-color: ${({ theme, type }) => (type ? getTypeColor(theme, type) : theme.palette.lightGrey)};
  color: ${({ theme, type }) => (type ? '#fff' : theme.palette.darkGrey)};

  /* those next line overwritte the '.root a' selector rules from uxi NON-StyledComponent theme/css
  * TODO: remove the overwrite once the .root a rules doesn't interfere anymore */
  * { color: inherit }
  svg { fill: ${({ theme, type }) => (type ? '#fff' : theme.palette.darkGrey)};}

  &:hover {
    border-color: ${({ theme, type }) => (type ? getTypeColor(theme, type) : theme.palette.grey)};
    color: ${({ theme, type }) => (type ? getTypeColor(theme, type) : theme.palette.darkGrey)};
    background-color: ${({ type, theme }) => (type ? '#fff' : theme.palette.lightGrey)};
    * { color: inherit }
    svg { fill: ${({ theme, type }) => (type ? getTypeColor(theme, type) : theme.palette.darkGrey)};}
  }

  /* DISABLED STYLES: (overrides types styles) */
  cursor: ${({ disabled }) => (disabled ?
    'normal' : 'pointer')};

  ${({ disabled, theme }) => (disabled ?
    `background-color: ${theme.palette.lightGrey};
    color: ${theme.palette.grey};` : '')}

  ${({ disabled }) => (disabled ?
    'border-color: transparent;' : '')};

  svg {
    ${({ disabled, theme: { palette } }) => (disabled ? `fill: ${palette.grey}` : '')};
  }

  &:hover {
    ${({ disabled, theme: { palette } }) => (disabled ?
    `background-color: ${palette.lightGrey}; color: ${palette.grey}` : '')};
    ${({ disabled }) => (disabled ? 'border-color: transparent;' : '')};
    svg {
      ${({ disabled, theme: { palette } }) => (disabled ? `fill: ${palette.grey}` : '')};
    }
  }
}
`;

export default ButtonBaseMixin;
