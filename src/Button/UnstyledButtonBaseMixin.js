
import { css } from 'styled-components';
import { getTypeColor } from './utils';

/* eslint-disable indent */
export const UnstyledButtonBaseMixin = css`;
  background-color: transparent;
  border-color: transparent;
  color: ${({ theme, type, disabled }) => (
  // eslint-disable-next-line no-nested-ternary
    disabled
      ? theme.palette.grey
    : (type ? getTypeColor(theme, type) : theme.palette.darkGrey)
)};

  /* those next line overwritte the '.root a' selector rules from uxi NON-StyledComponent theme/css
  * TODO: remove the overwrite once the .root a rules doesn't interfere anymore */
  * { color: inherit }
  svg { fill: ${({ theme, type, disabled }) => (
    // eslint-disable-next-line no-nested-ternary
    disabled
      ? theme.palette.grey
    : (type ? getTypeColor(theme, type) : theme.palette.darkGrey)
)}}

  &:hover {
    border-color: transparent;
    color: ${() => '#ffffff'};
    background-color: ${({ type, theme }) => (type ? getTypeColor(theme, type) : theme.palette.grey)};
    * { color: inherit; }
    svg { fill: ${({ type }) => (type ? '#ffffff' : '#ffffff')}
  }

  &:hover {
    ${({ disabled, theme: { palette } }) => (disabled ? `background-color: transparent; color: ${palette.grey}` : '')};
    ${({ disabled }) => (disabled ? 'border-color: transparent;' : '')};
    svg {
      ${({ disabled, theme: { palette } }) => (disabled ? `fill: ${palette.grey}` : '')};
    }
  }
  svg {
    ${({ disabled, theme: { palette } }) => (disabled ? `fill: ${palette.grey}` : '')};
  }
}
`;

export default UnstyledButtonBaseMixin;
