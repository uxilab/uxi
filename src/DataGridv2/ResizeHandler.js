// @flow
import styled, { css } from 'styled-components';


const ResizeHandler = styled.div.attrs(props => ({
  onMouseDown: function onMouseDown(e) {
    props.onResizeStart(e, props.index);
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
  height: 100%;
  width: 0px;
  max-width: 6px;
  background: grey;
  opacity: 0;
`;


export default ResizeHandler;
