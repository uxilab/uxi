// @flow
import styled, { css } from 'styled-components';

/* eslint-disable no-nested-ternary */
const ResizeHandler = styled.div.attrs(props => ({
  onMouseDown: function onMouseDown(e) {
    e.stopPropagation();
    props.onResizeStart(e, props.property);
  },
}))`
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
  width: 6px;
  max-width: 6px;
  background: grey;
  opacity: 0;
  &, &:hover, &:active {
    cursor: col-resize;
  }
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
`;
/* eslint-disable-enable no-nested-ternary */

ResizeHandler.displayName = 'ResizeHandler';

export default ResizeHandler;
