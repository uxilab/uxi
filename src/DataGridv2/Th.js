// @flow
import React, { /* useRef, useEffect */ } from 'react';
// import { useDrag, useDrop } from 'react-dnd';
import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';
import ResizeHandler from './ResizeHandler';
import SortHandler from './SortHandler';
import ButtonMenuMultiLevel from '../Menu/ButtonMenu/ButtonMenuMultiLevel'; // eslint-disable-line no-unused-vars
import Options from '../Icons/Options';
import { Flex } from '../Layout/Flex';
import { UnstyledButton } from '../Button/UnstyledButton1';
import type { SortDirection } from './DataGrid';

const headerCellHeight = 48;

// type ThProps = {
//   children: Node | Array<Node>,
//   // index?: number,

//   isResizing?: Boolean,
//   resizable?: Boolean,
//   onResizeStart?: Function,

// eslint-disable-next-line max-len
//   onSortChange: (property: string, sortDirection: SortDirection, newSortDirections: Array<SortDirection>) => {},
//   sortable: bool,
//   sortDirection: SortDirection,
// }

// const ThUI = styled.th.attrs(mapChildren)`
/* eslint-disable no-nested-ternary */
const ThUI = styled.th`
  box-sizing: border-box;
  height: ${headerCellHeight}px;
  padding: 0;
  text-align: left;
  border: 1px solid #cecece;
  position: relative;
  transition: all 280ms cubic-bezier(.5,1,.5,1);
  text-transform: none;
  font-weight: 600;
  color: ${({ theme: { palette } }) => palette.midDarkGrey};
  background: ${({ theme: { palette } }) => (palette.white)};
  &:hover {
    transition: all 280ms cubic-bezier(.5,1,.5,1);
    ${ResizeHandler} {
      transition: all 280ms cubic-bezier(.5,1,.5,1);
      opacity: ${({ isResizing, isBeingResized }) => (isResizing ? (isBeingResized ? 0.7 : 0) : 0.2)};
      width: 6px;
      &:hover {
        &, &:after {
          opacity:.7;
          transition: all 280ms cubic-bezier(.5,1,.5,1);
        }
      }
    }
  }

  &:hover ${ResizeHandler},
  &:not(:hover) ${ResizeHandler} {
      transition: all 280ms cubic-bezier(.5,1,.5,1);
      ${({ isBeingResized }) => (isBeingResized ? css`opacity: 0.7 !important` : '')};
      ${({ isBeingResized }) => (isBeingResized ? css`width: 6px` : '')};
      &:hover, &:not(:hover) {
        &, &:after {
          ${({ isBeingResized }) => (isBeingResized ? css`opacity:.7;` : '')};
          transition: all 280ms cubic-bezier(.5,1,.5,1);
        }
      }
      /* width: 6px;
      &:hover {
        &, &:after {
          opacity:.7;
          transition: all 280ms cubic-bezier(.5,1,.5,1);
        }
      } */
    }

  /* &:last-of-type,
  &:last-child,
  &:last-of-type:hover,
  &:last-child:hover {
    ${ResizeHandler} {
      display: none;
      visibility: hidden;
      pointer-events: none;
    }
  } */

  *[data-drop-down-trigger] {
    height: 100%;
    display: flex;
    align-items: stretch;
    & > div {
      height: 100% !important;
    }
  }

  /* drag anddrop hovered styles  */
  ${({ highlighted, theme }) => (highlighted
    ? css`background: ${theme.palette.accent.light.replace(')', ', .6)')};` : ''
  )};

`;
/* eslint-enable no-nested-ternary */

// const Th = (props: ThProps) => {
class Th extends React.Component {
  shouldComponentUpdate(nextProps/* , nextState */) {
    const {
      isBeingResized,
      isResizing,
    } = this.props;
    const {
      isResizing: willBeResizing,
    } = nextProps;

    if (isBeingResized) {
      return true;
    }

    if (
      (!isResizing && willBeResizing)
      || (isResizing && !willBeResizing)
    ) {
      return true;
    }

    return false;
  }

  render() {
    const {
      ThInnerWrapper,
      style,
      columnWidth,
      sortable,
      sortDirection,
      onSortChange,
      menuDescriptor,
      menu,
      isResizing,
      isBeingResized,
      // resizingColumnIndexes = [],
      resizable,
      onResizeStart,
      onResizeStop,
      children,

      index,
      // dragId,

      reorderable,
    // isReordering,
    // isReorderingHovered,
    // onDragTableHeaderStart,
    // onDragTableHeaderMove,
    // onDropTableHeader,

    } = this.props;
    // } = props;
    console.log('Th isResizing', isResizing);

    /*
  const ref = useRef(null);

  const [dropCollectedProps, drop] = useDrop({
    accept: 'my-foobar-type',
    hover(item, monitor) {
      if (!ref.current || isResizing) {
        return;
      }
      console.log('hover monitor canDrop', monitor.canDrop());
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      // if (dragIndex === hoverIndex) {
      //   return;
      // }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      // const hoverMiddleY =
      //   (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Get horizontal middle
      const hoverMiddleX =
        (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      // console.log('hoverMiddleX', hoverMiddleX);
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      // console.log('clientOffset', clientOffset);

      const hoverClientX = clientOffset.x - hoverBoundingRect.left;

      // Only perform the move when the mouse has crossed half of the items width
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging right

      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        onDragTableHeaderMove(hoverIndex);
        return;
      }

      // Dragging left

      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        onDragTableHeaderMove(hoverIndex);
        return;
      }

      // Time to actually perform the action
      // moveCard(dragIndex, hoverIndex);
      // console.log('useDrop onDropTableHeader()', dragIndex, hoverIndex);
      // onDropTableHeader(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // eslint-disable-next-line
      item.index = hoverIndex;
    },
    collect: (monitor) => {
      if (!ref.current || isResizing) {
        return {};
      }

      return {
      // console.log('useDrag collect: monitor', monitor);
      // isDragging: monitor.isDragging(),
        highlighted: monitor.canDrop(),
        hovered: monitor.isOver(),
      // canDrop: monitor.canDrop(),
      };
    },
  });
  const { highlighted, hovered } = dropCollectedProps;

  const [dragCollectedProps, drag] = useDrag({
    item: { type: 'my-foobar-type', dragId, index },
    begin: (monitor) => {
      if (!ref.current || isResizing) {
        return;
      }
      // console.log('useDrag begin: monitor', monitor);
      // console.log('useDrag begin: monitor', monitor.getItem());
      onDragTableHeaderStart(index, ref);
    },
    end: (monitor) => {
      // onDropTableHeader(monitor.index);
      onDropTableHeader(isReorderingHovered);
    },
    collect: (monitor) => {
      if (!ref.current || isResizing) {
        return {};
      }
      return {
      // console.log('useDrag collect: monitor', monitor);
        isDragging: monitor.isDragging(),
      // canDrop: monitor.canDrop(),
      // hovered: monitor.isOver(),
      }
      ;
    },
  });

  console.log('dragCollectedProps', dragCollectedProps);
  console.log('dropCollectedProps', dropCollectedProps);

  const { isDragging } = dragCollectedProps;
  const opacity = isDragging ? 0 : 1;

  useEffect(() => {
    if (isResizing) {
      drop(ref)
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
      drop(ref)
    };
  }, [isResizing]);

  // drag(drop(ref));

  */

    return (
      <ThUI
        isResizing={isResizing}
        isBeingResized={isBeingResized}
        style={{
          width: columnWidth,
          minWidth: columnWidth,
          maxWidth: columnWidth,
          // opacity,
          ...style,
        }}
        isReordering={reorderable !== null}
        // highlighted={hovered}
        isFirst={index === 0}
      >
        <ThInnerWrapper columnWidth={columnWidth} resizable={resizable} >
          <Flex
            style={{ minWidth: '1px', justifyContent: 'flex-start', flexGrow: 999, flexShrink: 999, cursor: reorderable ? 'ew-resize' : 'normal' }}
          // eslint-disable-next-line no-nested-ternary
          // ref={reorderable ? !isResizing ? ref : undefined : undefined}
          >
            {children}
          </Flex>
          {sortable
            ? <SortHandler
              style={{ flexGrow: 1, flexShrink: 0 }}
              sortable={sortable}
              sortDirection={sortDirection}
              onSortChange={onSortChange}
            />
            : null
          }
          {
            menuDescriptor !== undefined
              ? (
                <Flex
                  style={{
                    marginLeft: 'auto',
                    alignItems: 'stretch',
                    flexGrow: 1,
                    flexShrink: 0,
                  }}
                >
                  <ButtonMenuMultiLevel
                    style={{ alignItems: 'stretch', display: 'flex' }}
                    anchor={'right'}
                    buttonWrapperStyle={{
                      position: 'inherit',
                      // fuck: 'eslint',
                      height: '100%',
                      alignItems: 'stretch',
                      display: 'flex',
                    }}
                    BoxWrapperUIStyle={{
                      width: 'auto',
                      zIndex: 1,
                    }}
                    menuDescriptor={menuDescriptor}
                    button={<UnstyledButton style={{ width: '32px', height: '100%', display: 'flex', alignItems: 'stretch' }} icon={<Options />} />}
                  />
                </Flex>
              )
              : null
          }
          {
            menuDescriptor === undefined && menu !== undefined
              ? menu
              : null
          }
          {resizable
            ? (
              <ResizeHandler
                isResizing={isResizing}
                resizable={resizable}
                onResizeStart={onResizeStart}
                onResizeStop={onResizeStop}
              />
            )
            : null
          }
        </ThInnerWrapper>
      </ThUI>
    );
  }
} // class closing


Th.defaultProps = {
  style: {},
  onResizeStart: () => {},
  /* eslint-disable no-unused-vars */
  // eslint-disable-next-line max-len
  onSortChange: (property: string, sortDirection: SortDirection, newSortDirections: Array<SortDirection>) => {},
  isResizing: false,
  resizable: false,
};

Th.displayName = 'Th';

export default Th;
