import styled from 'styled-components';
import { ButtonCommonMixin } from './ButtonCommonMixin';
import { ButtonBaseMixin } from './ButtonBaseMixin';
import { FlatButtonBaseMixin } from './FlatButtonBaseMixin';
import { OutlineButtonBaseMixin } from './OutlineButtonBaseMixin';
import { UnstyledButtonBaseMixin } from './UnstyledButtonBaseMixin';

const attrs = ({ onMouseOut }) => ({
  onMouseOut: (onMouseOut ||
    (({ target, currentTarget }) => {
      if (document && document.activeElement && document.activeElement === target) {
        if (target.blur) target.blur();
      } else if (
        document
        && document.activeElement
        && document.activeElement === currentTarget
      ) {
        if (currentTarget.blur) currentTarget.blur();
      } else if (document && target.contains(document.activeElement)) {
        if (document.activeElement && document.activeElement.blur) {
          document.activeElement.blur();
        }
      } else if (document && currentTarget.contains(document.activeElement)) {
        if (document.activeElement && document.activeElement.blur) {
          document.activeElement.blur();
        }
      }
    })
  ),
});

export const ButtonUI = styled.button.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${ButtonBaseMixin};
`;

export const FlatButtonUI = styled.button.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${FlatButtonBaseMixin};
`;
export const OutlineButtonUI = styled.button.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${OutlineButtonBaseMixin};
`;
export const UnstyledButtonUI = styled.button.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${UnstyledButtonBaseMixin};
`;
/* eslint-enable indent */
export const getButtonUI = (buttonType) => {
  if (buttonType === 'FlatButton') return FlatButtonUI;
  if (buttonType === 'OutlineButton') return OutlineButtonUI;
  if (buttonType === 'UnstyledButton') return UnstyledButtonUI;
  return ButtonUI;
};


export const ButtonLinkUI = styled.a.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${ButtonBaseMixin};
  text-decoration: none;
  &:hover { text-decoration: none }
`;
export const FlatButtonLinkUI = styled.a.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${FlatButtonBaseMixin};
  text-decoration: none;
  &:hover { text-decoration: none }
`;
export const OutlineButtonLinkUI = styled.a.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${OutlineButtonBaseMixin};
  text-decoration: none;
  &:hover { text-decoration: none }
`;
export const UnstyledButtonLinkUI = styled.a.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${UnstyledButtonBaseMixin};
  text-decoration: none;
  &:hover { text-decoration: none }
`;
export const getButtonLinkUI = (buttonType) => {
  if (buttonType === 'FlatButton') return FlatButtonLinkUI;
  if (buttonType === 'OutlineButton') return OutlineButtonLinkUI;
  if (buttonType === 'UnstyledButton') return UnstyledButtonLinkUI;
  return ButtonLinkUI;
};


export const ButtonDivUI = styled.div.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${ButtonBaseMixin};
  & a:hover {
    text-decoration: none;
  }
`;
export const FlatButtonDivUI = styled.div.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${FlatButtonBaseMixin};
  & a:hover {
    text-decoration: none;
  }
`;
export const OutlineButtonDivUI = styled.div.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${OutlineButtonBaseMixin};
  & a:hover {
    text-decoration: none;
  }
`;
export const UnstyledButtonDivUI = styled.div.attrs(props => ({
  ...attrs(props),
}))`
  line-height: 1;
  ${ButtonCommonMixin};
  ${UnstyledButtonBaseMixin};
  & a:hover {
    text-decoration: none;
  }
`;
export const getButtonDivUI = (buttonType) => {
  if (buttonType === 'FlatButton') return FlatButtonDivUI;
  if (buttonType === 'OutlineButton') return OutlineButtonDivUI;
  if (buttonType === 'UnstyledButton') return UnstyledButtonDivUI;
  return ButtonDivUI;
};
