import React from 'react';
import styled from 'styled-components';
import { UnstyledButton } from '../../Button/UnstyledButton1';
import MlMenuSeparator from './MlMenuSeparator';
import { buttonResetStylesCSSString } from '../../Button/buttonResetStyles';
import MlMenu from './MlMenu';
import TextEllipsis from '../../Text/TextEllipsis';

/* eslint-disable indent */
const MlMenuItemUI = styled.li`
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
  max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
  position: relative;
  display: flex;

  & *:not(ul) {
    border-radius: 0 !important;
  }
  & > * {
    width: 100%;
  }

  &:not(:hover) {
    z-index: 100;
  }

  /** handle variance between links and buttons */
  button.MlMenuItem-interactive-elem {
    ${buttonResetStylesCSSString};
    background: white;
    text-align: left;
    max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
    width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
    padding: 8px;
  }
  a.MlMenuItem-interactive-elem {
    width: 100%;
    display: inline-block;
    background: white;
  }

  & .MlMenuItem-interactive-elem {
    font-size: 14px;
    line-height: 1.3;
    display: flex;
    align-items: center;
    padding: 8px;
    text-decoration: none;
    &:focus, &:hover {
      ${({ disabled, theme }) => (!disabled
        ? `box-shadow: ${theme.outlineShadow}; outline: ${theme.outline}`
        : '')
      };
      color: ${({ theme }) => theme.focusHighlightText};
      background-color: ${({ theme }) => theme.focusHighlight};
      text-decoration: none;
    }
    & > div > svg {
      margin-right: 6px;
    }
  }



  &, & .MlMenuItem-interactive-elem {
    border-radius: 0;
  }

  &:first-child, &:first-child > .MlMenuItem-interactive-elem,
  &:first-child, &:first-child > div > div > div > .MlMenuItem-interactive-elem {
    border-radius: ${({ theme: { radius } }) => `${radius} ${radius} 0 0`} !important;
  }

  &:last-child, &:last-child > .MlMenuItem-interactive-elem,
  &:last-child, &:last-child > div > div > div > .MlMenuItem-interactive-elem {
    border-radius: ${({ theme: { radius } }) => `0 0 ${radius} ${radius}`} !important;
  }

  &:first-child:last-child, &:first-child:last-child > .MlMenuItem-interactive-elem,
  &:first-child:last-child, &:first-child:last-child > div > div > div > .MlMenuItem-interactive-elem {
    border-radius: ${({ theme: { radius } }) => radius} !important;
  }

`;
/* eslint-enable indent */

const MlMenuItem = (props) => {
  const {
    label,
    icon,
    onClick = () => {},
    children,
    type,
    Link,
    to,
    href,
    target,
    isFullWidth,
    onSelfClose,
  } = props;

  const finalIcon = React.isValidElement(icon)
    ? React.cloneElement(icon, { size: 16, paddingRight: '4px' })
    : null;

  const InteractiveComp = Link && to
    ? Link
    : UnstyledButton;

  const interactiveCompProp = {
    onClick,
    to,
    href,
    target,
  };

  const hasChildren = children && children.length;

  const isSeparator = type === 'SEPARATOR';

  if (isSeparator) {
    return <MlMenuSeparator {...(label ? { label } : {})} />;
  }
  return (
    <MlMenuItemUI isFullWidth={isFullWidth} >
      <InteractiveComp
        isFullWidth
        className="MlMenuItem-interactive-elem"
        {...interactiveCompProp}
      >
        {finalIcon}
        <TextEllipsis style={{ flexGrow: 999 }}>{label}</TextEllipsis>
        { hasChildren
          ? '▸'
          : null
        }
      </InteractiveComp>
      {
        (hasChildren)
          ? <MlMenu menuDescriptor={children} onSelfClose={onSelfClose} />
          : null
      }
    </MlMenuItemUI>
  );
};

export default MlMenuItem;
