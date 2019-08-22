import React from 'react';
import styled from 'styled-components';

export const OptionsUI = styled.div.attrs(({ isOpen }) => ({
  role: 'option',
  tabIndex: isOpen === true ? 0 : -1,
}))`
  ${({ isOpen }) => (isOpen !== undefined
    ? `visibility: ${isOpen ? 'visible' : 'collapse'}`
    : '')
};

  box-sizing: border-box;
  cursor: pointer;
  padding: 2px 2px 2px 6px;
  /* background: white; */

  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
  & * {
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
    transition: none;
  }

  user-select: none;
  display: flex;
  width: 100%;
  min-height: 32px;
  border: 1px solid transparent;

  /* color: inherit; */
  /* background-color: white; */

  &:hover,
  &:focus {
    outline: none;
    color: white;
    background: #595959;
    /* background-color: #cecece; */
  };

  /* &:active {
    background-color: #fff;
  }; */
`;

const Options = (props) => {
  const {
    onClick,
    style,
    isOpen,
    ...rest
  } = props;

  return (<OptionsUI
    {...rest}
    isOpen={isOpen}
    style={style}
    onClick={(e) => {
      if (onClick) {
        onClick(e);
      }
    }}
    onKeyDown={(e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        if (onClick) {
          const fakeEvent = {
            currentTarget: {
              dataset: { index: e.currentTarget.dataset.index },
            },
          };
          onClick(fakeEvent);
        }
      }
    }}
  />);
};

Options.displayName = 'Options';

export default Options;
