import React from 'react'
import styled from 'styled-components'

const ResizeHandler = styled.div`
  ${({ resizable }) => resizable
    ? 'display: block: visibility: visible; pointer-events: all;'
    : 'display: none; visibility: none; pointer-events: none;'
    // eslint-disable-next-line indent
  };
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 0px;
  background: grey;
  opacity: 0;
`;

const Th = styled.th.attrs((props) => ({
  ...props,
  // TODO use fragment
  children: [
    props.children,
    <ResizeHandler
      resizable={props.resizable}
      onMouseDown={function (e) {
        props.onResizeStart(e, props.index)
      }}
    />,
  ],
}))`
  padding: 0;
  text-align: left;
  border: 1px solid #cecece;
  position: relative;
  transition: all 280ms cubic-bezier(.5,1,.5,1);

  &:hover {
    transition: all 280ms cubic-bezier(.5,1,.5,1);
    ${ResizeHandler} {
      transition: all 280ms cubic-bezier(.5,1,.5,1);
      opacity: .8;
      width: 6px;
      cursor: col-resize;
    }
  }

  &:last-of-type,
  &:last-of-type:hover {
    ${ResizeHandler} {
      display: none;
    }
  }
`;


export default Th
