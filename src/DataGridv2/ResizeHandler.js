// @flow
import styled, { css } from 'styled-components';

/* eslint-disable no-nested-ternary */
const ResizeHandler = styled.div.attrs((props) => {
  console.log('ResizeHandler isResizing', props.isResizing);

  return {
    // children: '',
    onMouseDown: function onMouseDown(e) {
      console.log('ResizeHandler onMouseDown');
      e.stopPropagation();
      props.onResizeStart(e, props.index);
    },
    // onMouseUp: function onMouseDown(e) {
    //   console.log('ResizeHandler onMouseUp');
    //   props.onResizeStop(/* e, props.index */);
    //   e.stopPropagation();
    // },
    // onClick: function onMouseDown(e) {
    //   console.log('ResizeHandler onMouseUp');
    //   props.onResizeStop(/* e, props.index */);
    //   e.stopPropagation();
    // },
  };
})`
  ${({ resizable }) => (resizable
    ? css`display: block; visibility: visible; pointer-events: all;`
    : css`display: none; visibility: none; pointer-events: none;`
    // eslint-disable-next-line indent
  )};
  position: absolute;
  right: 0;
  top: 0;
  height: calc(100% + 32px);
  height: 100%;
  width: 0px;
  width: 3px;
  max-width: 6px;
  background: grey;
  opacity: 0;
  cursor: ${({ isResizing }) => (isResizing ? 'inherit' : 'col-resize')};
  /* &, &:hover {
    ${({ isResizing, isBeingResized }) => (isResizing ? (isBeingResized ? '' : 'opacity: 0 !important') : '')};
  } */
  &:hover {
    opacity: ${({ isResizing, isBeingResized }) => (isResizing ? (isBeingResized ? 0.7 : 0) : 0.2)};
    &:after {
      transition: all 280ms cubic-bezier(.5,1,.5,1);
      opacity: .7;
    }
  }
  transition: all 280ms cubic-bezier(.5,1,.5,1);
  &:after {
    transition: all 280ms cubic-bezier(.5,1,.5,1);
    content: '◂❘▸';
    position: absolute;
    right: 0;
    top: calc(100% - 4px);
    margin-right: 50%;
    transform: translateX(50%);
    width: auto;
    opacity: 0;
  }
  /* &:hover &:after {
    transition: all 280ms cubic-bezier(.5,1,.5,1);
    opacity: .7;
  } */
`;
/* eslint-disable-enable no-nested-ternary */

ResizeHandler.displayName = 'ResizeHandler';

export default ResizeHandler;
