import React from 'react';
import styled from 'styled-components';

const OptionsUI = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 2px 2px 2px 6px;
  background: white;

  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
  & * {
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }

  user-select: none;
  display: flex;
  width: 100%;
  min-height: 32px;
  border: 1px solid transparent;
  &:hover,
  &:focus {
    outline: none;
    background-color: #cecece;
    /* &:not(:first-child) { border-top-color: #a3a3a3; }
    &:not(:last-child) { border-bottom-color: #a3a3a3; } */
  };
  &:active {
    background-color: #fff;
  };
`;

const Options = (props) => {
  const {
    onEsc,
    onClick,
    style,
    ...rest
  } = props;

  return (<OptionsUI
    {...rest}
    style={style}
    onClick={(e) => {
      if (e.target.blur) {
        e.target.blur();
      }
      if (onClick) {
        onClick(e);
      }
    }}
    onKeyUp={(e) => {
      // if (e.target === document.body) {
      // e.preventDefault()
      // e.stopPropagation()
      // }

      if (e.key === 'Escape') {
        e.target.blur();
        e.target.tabIndex = -1;


        if (onEsc) {
          onEsc();
        }
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.target.blur();
        e.target.tabIndex = -1;

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
    aria-hidden={!(props.isOpen === false)}
    tabIndex={props.isOpen ? 0 : -1}
  />);
  // console.log(props.children.type)
  // console.log('props.children.type', props.children.type)
  // return (props.children.type === Separator
  //   ? <OptionsUI {...props} aria-hidden={true} tabIndex={-1} />
  // : <OptionsUI
  //   {...props}
  //   aria-hidden={props.isOpen ? false : true}
  //   tabIndex={props.isOpen ? 0 : -1}
  // />
  // )
};

Options.displayName = 'Options';

export default Options;
