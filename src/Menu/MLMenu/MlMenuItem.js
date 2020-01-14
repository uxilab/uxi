import React from 'react';
import styled from 'styled-components';
import { UnstyledButton } from '../../Button';
import MlMenuSeparator from './MlMenuSeparator';
import { buttonResetStylesCSSString } from '../../Button/buttonResetStyles';
import MlMenu from './MlMenu';
import TextEllipsis from '../../Text/TextEllipsis';


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
    text-align: left;
    /* background-color: white; */
    max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
    width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
    padding: 8px;
    /* color: inherit !important;
    background-color: inherit !important; */
  }
  a.MlMenuItem-interactive-elem {
    width: 100%;
    display: inline-block;
  }

  /* a.MlMenuItem-interactive-elem:not(:only-child) {
    &:after {
      content: '▸';
      display: block;
      width: 8px;
    }
  }
  & > *:not(a):not(:only-child) {
    &:after {
      content: '▸';
      display: block;
      width: 8px;
    }
  } */

  & .MlMenuItem-interactive-elem {
    font-size: 14px;
    line-height: 1.3;
    display: flex;
    align-items: center;
    padding: 8px;
    color: ${({ theme: { palette } }) => palette.darkGrey} !important;
    background-color: white !important;
    text-decoration: none;
    &:hover, &:focus {
      background-color: ${({ theme: { palette } }) => palette.midDarkGrey} !important;
      color: white !important;
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
          ? <MlMenu menuDescriptor={children} />
          : null
      }
    </MlMenuItemUI>
  );
};

export default MlMenuItem;
