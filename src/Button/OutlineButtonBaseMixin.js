
import { css } from 'styled-components';
import { getTypeColor } from './utils';

/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
export const OutlineButtonBaseMixin = css`;
  background-color: transparent;
  color: ${({ theme, type, disabled }) => (
  // eslint-disable-next-line no-nested-ternary
    disabled
      ? theme.palette.lightGrey
      : (type ? getTypeColor(theme, type) : theme.palette.darkGrey)
  )};
  border-color: ${({ disabled, theme, type }) => (
    disabled
      ? theme.palette.lightGrey
      : type
        ? getTypeColor(theme, type)
        : theme.palette.darkGrey
  )};
  & {
    color: ${({ disabled, theme, type }) => (
      disabled
        ? theme.palette.lightGrey
        : type
          ? `${getTypeColor(theme, type)}`
          : theme.palette.darkGrey
    )};
  }

  /* those next line overwritte the '.root a' selector rules from uxi NON-StyledComponent theme/css
  * TODO: remove the overwrite once the .root a rules doesn't interfere anymore */
  * { color: inherit }
  svg { fill: ${({ theme, type, disabled }) => (
    // eslint-disable-next-line no-nested-ternary
    disabled
      ? theme.palette.lightGrey
      : (type ? getTypeColor(theme, type) : theme.palette.darkGrey)
  )}}

  &:hover {
    & {
      color: ${({ disabled, theme }) => (
        disabled
          ? theme.palette.lightGrey
          : '#fff'
      )};
      border-color: ${({ disabled, theme }) => (
        disabled
          ? theme.palette.lightGrey
          : theme.palette.grey
      )};
    }
    background-color: ${({ disabled, type, theme }) => (
      disabled
        ? 'transparent'
        : type ? getTypeColor(theme, type) : theme.palette.grey
    )};
    * { color: inherit; }
    svg { fill: ${({ type, disabled, theme }) => (disabled ? theme.palette.lightGrey : (type ? getTypeColor(theme, type) : '#fff'))}
  }

  /* svg {
    fill: ${({ type, disabled, theme }) => (
      disabled
        ? theme.palette.lightGrey
        : type ? getTypeColor(theme, type) : theme.palette.darkGrey
    )};
  } */
}
`;

export default OutlineButtonBaseMixin;
