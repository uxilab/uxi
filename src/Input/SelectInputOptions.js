import React from 'react';
import styled from 'styled-components';
import {Separator} from '../Menu';

const OptionsUI = styled.div`
  cursor: pointer;
  padding: 2px 2px 2px 6px;
  background: white;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  display: flex;
  width: 100%;
  min-height: 32px;
  & > * { width: 100% }
  &:hover,
  &:focus {
    background-color: #f4f4f4;
  };
  &:active {
    background-color: #fff;
  };
`;

const Options = props => {
  const {
    onEsc,
    onClick,
    ...rest
  } = props

  return <OptionsUI
    {...rest}
    onClick={onClick}
    onKeyUp={(e) => {
      console.log('e.key', e.key)
      console.log('e.key === "Escape"', e.key === "Escape")
      if (e.key === 'Escape') {
        if (onEsc) {
          console.log('calling onEsc')
          onEsc()
        }
      } else if (e.key === ' ' || e.key === 'Enter' ) {
        if (onClick) {
          console.log('calling onClick')
          console.log('e', e)
          console.log('e.currentTarget.dataset.index', e.currentTarget.dataset.index)
          const fakeEvent = {
            currentTarget: {
              dataset: { index: e.currentTarget.dataset.index }
            }
          }
          onClick(fakeEvent)
        }
      }
    }}
    aria-hidden={props.isOpen ? false : true}
    tabIndex={props.isOpen ? 0 : -1}
  />
  // console.log(props.children.type)
  // console.log('props.children.type', props.children.type)
  // return (props.children.type === Separator
  //   ? <OptionsUI {...props} aria-hidden={true} tabIndex={-1} />
  //   : <OptionsUI {...props} aria-hidden={props.isOpen ? false : true} tabIndex={props.isOpen ? 0 : -1} />
  // )
};

Options.displayName = 'Options';

export default Options;
