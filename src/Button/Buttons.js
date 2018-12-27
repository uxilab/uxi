import styled from 'styled-components';

/* eslint-enable indent */
export const getButtonUI = (ButtonCommonMixin, ButtonBaseMixin) => styled.button`
  line-height: 1;
  ${ButtonCommonMixin};
  ${ButtonBaseMixin};
`;
export const getButtonLinkUI = (ButtonCommonMixin, ButtonBaseMixin) => styled.a`
  line-height: 1;
  ${ButtonCommonMixin};
  ${ButtonBaseMixin};
  text-decoration: none;
  &:hover { text-decoration: none }
`;
export const getButtonDivUI = (ButtonCommonMixin, ButtonBaseMixin) => styled.div`
  line-height: 1;
  ${ButtonCommonMixin};
  ${ButtonBaseMixin};
  & a:hover {
    text-decoration: none;
  }
`;
