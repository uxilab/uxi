
import { css } from 'styled-components';
import ButtonBaseStyles from './ButtonBaseStyles';

/* eslint-disable indent */
export const ButtonCommonMixin = css`;
  /* STATIC BASE STYLES: */
  ${ButtonBaseStyles};

  border-radius: ${({ theme: { radius } }) => radius};
  cursor: pointer;

  /* ICON POSITION: */
  flex-direction: ${({ iconPosition }) => {
    if (iconPosition && iconPosition === 'after') { return 'row-reverse'; }
    return 'row';
  }};

  /* FULL WIDTH STYLES: */
  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%' : '')};
`;

export default ButtonCommonMixin;
