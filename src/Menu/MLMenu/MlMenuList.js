import React from 'react';
import styled from 'styled-components';
import MlMenuItem from './MlMenuItem';


const MlMenuListUI = styled.ul`
  --itemWidth: 190px;
  --itemHeight: 34px;

  * {
    box-sizing: border-box;
    transition: none !important; /* svg needs the authority */
    /* transition: ${({ theme: { transition } }) => transition.defaultAll}; */
  }

  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
  min-width: var(--itemWidth);
  max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
  /* border: 1px solid #cecece; */
  box-shadow: ${({ theme }) => `${theme.outlineShadow}`};
  border-radius: ${({ theme: { radius } }) => radius};

  li > & { display: none; }

  li > & {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(100%);
    &:before {
      content: '';
      display: block;
      width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'var(--itemWidth)')};
      height: 100%;
      position: absolute;
      left: calc(var(--itemWidth) * -1);
      transform: translateY(var(--itemHeight));
    }
  }

  li:hover > &,
  li:focus-within > & {
    display: block;
    width: var(--itemWidth);
    & {
      z-index: 1;
      &:before { z-index: 0; }
      &:hover { z-index: 99; }
      &:hover * { z-index: 99; }
      &:hover > * { z-index: 100; }
    }
  }

`;

const MlMenuList = (props) => {
  const {
    menuDescriptor,
    isFullWidth,
    onSelfClose,
  } = props;

  return (
    <MlMenuListUI isFullWidth={isFullWidth} >
      {
        (menuDescriptor || []).map((itemDescriptor) => {
          const { onClick: consumerOnClick } = itemDescriptor;
          const onClickHandler = (...a) => {
            if (itemDescriptor.children === undefined) {
              onSelfClose();
            }
            return consumerOnClick(...a);
          };

          return (
            <MlMenuItem
              isFullWidth={isFullWidth}
              {...itemDescriptor}
              onClick={onClickHandler}
              // {...(itemDescriptor.children !== undefined
              // ? {} : { onClick: () => { itemDescriptor.onClick; } })
              // }
            />
          );
        })
      }
    </MlMenuListUI>
  );
};

export default MlMenuList;
