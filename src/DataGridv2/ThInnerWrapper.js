// @flow
import React, { useRef, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { useDrag, useDrop } from 'react-dnd';
import styled, { css } from 'styled-components';


const ThInnerWrapperUI = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  white-space: nowrap;
  padding: 0 0 0 16px;
  width: 100%;
  width: auto;
  box-sizing : border-box;
  ${({ resizable }) => (resizable ? css`padding-right: 8px;` : '')};
  height: 100%;
  width: calc(100% - 8px);
`;


const ThInnerWrapper = (props) => {
  const {
    isResizing,
    onDragTableHeaderStart,
    onDropTableHeader,
    setColumOrder,
    index,
    dragId,
    reorderable,
  } = props;

  const ref = useRef(null);


  const [, drop] = useDrop({
    accept: 'my-foobar-type',
    hover: debounce(
      (item, monitor) => {
        if (!ref.current || isResizing) {
          return;
        }

        const dragIndex = item.index;
        const itemDragId = item.dragId;
        const hoverIndex = index;
        const itemHoverId = dragId;

        if (itemDragId === itemHoverId) {
          return;
        }

        const { left, width } = ref.current.getBoundingClientRect();

        const hoverMiddleX = (width) / 2;
        const { x = 0 } = monitor.getClientOffset();

        const isDragingRight = dragIndex < hoverIndex;

        const hoverClientX = x - left;

        if (
          (isDragingRight && hoverClientX > hoverMiddleX)
        || (hoverClientX < hoverMiddleX)
        ) {
          setColumOrder([itemDragId, itemHoverId]);
          // Note: we're mutating the monitor item here!
          // Generally it's better to avoid mutations,
          // but it's good here for the sake of performance
          // to avoid expensive index searches.
          // eslint-disable-next-line no-param-reassign
          item.index = hoverIndex;
        }
      },
      16, { maxWait: 32, leading: true, trailing: true }),
  });

  const [, drag] = useDrag({
    item: { type: 'my-foobar-type', dragId, index },
    begin: (/* monitor */) => {
      if (!ref.current || isResizing) {
        return;
      }
      onDragTableHeaderStart(index, ref);
    },
    end: (/* monitor */) => {
      onDropTableHeader();
    },
  });


  // disable DnD when we resize, and to be sure call drop
  useEffect(() => {
    if (isResizing) {
      drop(ref);
      return () => {
        if (reorderable) {
          drag(drop(ref));
        }
      };
    }
    if (reorderable) {
      drag(drop(ref));
    }
    return () => {
      drop(ref);
    };
  }, [isResizing]);


  return (
    <ThInnerWrapperUI
      {...props}
      ref={isResizing ? null : ref}
    />
  );
};

ThInnerWrapper.displayName = 'ThInnerWrapper';


export default ThInnerWrapper;
