import styled from 'styled-components';

/* eslint-enable indent */
export const getButtonUI = (ButtonCommonMixin, ButtonBaseMixin) => styled.button.attrs({
  onMouseOut: () => ({ target }) => {
    console.log('oumouseout button');
    target.blur && target.blur();
  },
})`
  line-height: 1;
  ${ButtonCommonMixin};
  ${ButtonBaseMixin};
`;
export const getButtonLinkUI = (ButtonCommonMixin, ButtonBaseMixin) => styled.a.attrs({
  onMouseOut: () => ({ target }) => {
    console.log('oumouseout a');
    target.blur && target.blur();
  },
})`
  line-height: 1;
  ${ButtonCommonMixin};
  ${ButtonBaseMixin};
  text-decoration: none;
  &:hover { text-decoration: none }
`;
export const getButtonDivUI = (ButtonCommonMixin, ButtonBaseMixin) => styled.div.attrs({
  onMouseOut: () => ({ target }) => {
    console.log('oumouseout div');
    target.blur && target.blur();
  },
})`
  line-height: 1;
  ${ButtonCommonMixin};
  ${ButtonBaseMixin};
  & a:hover {
    text-decoration: none;
  }
`;
