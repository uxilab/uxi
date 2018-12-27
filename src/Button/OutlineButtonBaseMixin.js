
import { css } from 'styled-components';
import { getTypeColor } from './utils';

/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
export const OutlineButtonBaseMixin = css`;
  background-color: transparent;
  color: ${({ theme, type, disabled }) => (
  // eslint-disable-next-line no-nested-ternary
    disabled
      ? theme.palette.grey
    : (type ? getTypeColor(theme, type) : theme.palette.darkGrey)
  )};
  border-color: ${({ disabled, theme, type }) => (
    disabled
      ? theme.palette.grey
      : type
        ? getTypeColor(theme, type)
        : theme.palette.lightGrey
  )};
  & {
    color: ${({ disabled, theme, type }) => (
      disabled
        ? theme.palette.grey
        : type
          ? `${getTypeColor(theme, type)}`
          : theme.palette.lightGrey
    )};
  }

  /* those next line overwritte the '.root a' selector rules from uxi NON-StyledComponent theme/css
  * TODO: remove the overwrite once the .root a rules doesn't interfere anymore */
  * { color: inherit }
  svg { fill: ${({ theme, type, disabled }) => (
    // eslint-disable-next-line no-nested-ternary
    disabled
      ? theme.palette.grey
    : (type ? getTypeColor(theme, type) : theme.palette.lightGrey)
  )}}

  &:hover {
    & {
      color: ${({ disabled, theme }) => (
        disabled
          ? theme.palette.grey
          : '#fff'
      )};
    }
    background-color: ${({ disabled, type, theme }) => (
      disabled
        ? 'transparent'
        : type ? getTypeColor(theme, type) : theme.palette.grey
    )};
    * { color: inherit; }
    svg { fill: ${({ type }) => (type ? '#ffffff' : '#ffffff')}
  }

  svg {
    ${({ disabled, theme: { palette } }) => (disabled ? `fill: ${palette.grey}` : '')};
  }
}
`;

export default OutlineButtonBaseMixin;
