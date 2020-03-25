// @flow
import React, { useRef, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled, { css } from 'styled-components';
import ButtonMenuMultiLevel from '../Menu/ButtonMenu/ButtonMenuMultiLevel'; // eslint-disable-line no-unused-vars

const ThInnerWrapperUI = styled.div`
  display: flex;ç
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
    onDragTableHeaderMove,
    onDropTableHeader,
    setColumOrder,
    index,
    dragId,
    reorderable,
  } = props;

  const ref = useRef(null);
  // const ref = this.ref;

  const [dropCollectedProps, drop] = useDrop({
    accept: 'my-foobar-type',
    hover(item, monitor) {
      if (!ref.current || isResizing) {
        return;
      }
      const dragIndex = item.index;
      const itemDragId = item.dragId;
      const hoverIndex = index;
      const itemHoverId = dragId;
      // if (dragIndex === hoverIndex) {
      //   return;
      // }
      if (itemDragId === itemHoverId) {
        return;
      }

      // Don't replace items with themselves
      // if (dragIndex === hoverIndex) {
      //   return;
      // }
      // Determine rectangle on screen
      const { left, width } = ref.current.getBoundingClientRect();
      // Get vertical middle
      // const hoverMiddleY =
      //   (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Get horizontal middle
      const hoverMiddleX = (width) / 2;
      // Determine mouse position
      const { x = 0 } = monitor.getClientOffset();
      // Get pixels to the top

      const isDragingRight = dragIndex < hoverIndex;

      const hoverClientX = x - left;

      // Only perform the move when the mouse has crossed half of the items width
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging right
      // console.log('dragIndex', dragIndex);
      // console.log('hoverIndex', hoverIndex);
      // console.log('hoverClientX', hoverClientX);
      // console.log('hoverMiddleX', hoverMiddleX);

      // return

      if (isDragingRight && hoverClientX > hoverMiddleX) {
        // console.log('switched orrder because was draggin right')
        // console.log('dragIndex', dragIndex);
        // console.log('hoverIndex', hoverIndex);
        // console.log('hoverClientX', hoverClientX);
        // console.log('hoverMiddleX', hoverMiddleX);
        // console.log('–––––––––––––––––––––––')
        // onDragTableHeaderMove(hoverIndex);
        setColumOrder([itemDragId, itemHoverId]);
        // eslint-disable-next-line
        item.index = hoverIndex;
        // return;
      }

      // Dragging left

      if (dragIndex > hoverIndex && hoverClientX < hoverMiddleX) {
        // console.log('switched orrder because was dragging left')
        // console.log('dragIndex', dragIndex);
        // console.log('hoverIndex', hoverIndex);
        // console.log('hoverClientX', hoverClientX);
        // console.log('hoverMiddleX', hoverMiddleX);
        // console.log('–––––––––––––––––––––––')
        // onDragTableHeaderMove(hoverIndex);
        setColumOrder([itemDragId, itemHoverId]);
        // eslint-disable-next-line
        item.index = hoverIndex;
        // return;
      }

      // Time to actually perform the action
      // moveCard(dragIndex, hoverIndex);
      // onDropTableHeader(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // eslint-disable-next-line
        // item.index = hoverIndex;
    },
    collect: (monitor) => {
      if (!ref.current || isResizing) {
        return {};
      }

      // const hovered = monitor.isOver();
      // console.log('hovered', hovered);

      return {
        // isDragging: monitor.isDragging(),
        highlighted: monitor.canDrop(),
        hovered: monitor.isOver(),
        // canDrop: monitor.canDrop(),
      };
    },
  });
  // const { highlighted, hovered } = dropCollectedProps;

  const [dragCollectedProps, drag] = useDrag({
    item: { type: 'my-foobar-type', dragId, index },
    begin: (monitor) => {
      if (!ref.current || isResizing) {
        return;
      }
      onDragTableHeaderStart(index, ref);
    },
    end: (monitor) => {
      // onDropTableHeader(monitor.index);
      onDropTableHeader(/* isReorderingHovered */);
    },
    // collect: (monitor) => {
    //   if (!ref.current || isResizing) {
    //     return {};
    //   }
    //   return {
    //     isDragging: monitor.isDragging(),
    //     // canDrop: monitor.canDrop(),
    //     // hovered: monitor.isOver(),
    //   }
    //   ;
    // },
  });


  // const { isDragging } = dragCollectedProps;
  // const opacity = isDragging ? 0 : 1;

  // useEffect(() => {
  //   if (isResizing) {
  //     drop(ref);
  //     return () => {
  //       if (reorderable) {
  //         drag(drop(ref));
  //       }
  //     };
  //   }
  //   if (reorderable) {
  //     drag(drop(ref));
  //   }
  //   return () => {
  //     drop(ref);
  //   };
  // }, [isResizing]);


  drag(drop(ref));

  if (isResizing) {
    drop(ref);
  }

  return (
    <ThInnerWrapperUI
      {...props}
      ref={isResizing ? null : ref}
    />
  );
};

ThInnerWrapper.displayName = 'ThInnerWrapper';


export default ThInnerWrapper;
