// @flow
import React, { /* useRef, useEffect */ } from 'react';
import isEqual from 'lodash/isEqual';
// import { useDrag, useDrop } from 'react-dnd';
import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';
import ResizeHandler from './ResizeHandler';
import SortHandler from './SortHandler';
import ButtonMenuMultiLevel from '../Menu/ButtonMenu/ButtonMenuMultiLevel'; // eslint-disable-line no-unused-vars
import { UnstyledButton } from '../Button/UnstyledButton1';
// import ButtonMenu from '../Menu/ButtonMenu/ButtonMenu';
// import ButtonMenuItem from '../Menu/ButtonMenu/ButtonMenuItem';
import Options from '../Icons/Options';
import Hamburger from '../Icons/Hamburger';
import { Flex } from '../Layout/Flex';
// import Checkbox from '../Input/Checkbox';
// import Checkboxoutline from '../Icons/Checkboxoutline';
import Checkmark from '../Icons/Checkmark';

import type { SortDirection } from './DataGrid';


const ExtraModelButtonWrapper = styled.div`
  padding: 4px;
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  height: 100%;
  transition: all 280ms cubic-bezier(.5,1,.5,1);
  width: 0px;
  max-width: 0px;
  opacity: 0;
  & > *, & > * span[data-drop-down-trigger] {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    height: 100%;
  }
  span[data-drop-down-trigger] {
    align-items: center;
  }
`;

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
    ${ExtraModelButtonWrapper} {
      transition: all 280ms cubic-bezier(.5,1,.5,1);
      width: 32px;
      max-width: 32px;
      opacity: 1;
    }
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
      ${({ isBeingResized }) => (isBeingResized ? css`opacity: 0.7 !important;` : '')};
      ${({ isBeingResized }) => (isBeingResized ? css`width: 6px;` : '')};
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
    ? css`background: ${theme.palette.accent.light.replace(')', ', .6)')};` : ';'
  )};
  ;
`;
/* eslint-enable no-nested-ternary */

// const Th = (props: ThProps) => {
class Th extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  // componentDidMount() {
  //   if (this.ref.current && this.ref.current.getBoundingClientRect) {
  //     const bRect = this.ref.current.getBoundingClientRect() || {};
  //     const { width = 0 } = bRect;
  //     // const { setInitialSize } = this.props;
  //     // if (setInitialSize) {
  //     //   setInitialSize(width);
  //     // }
  //   }
  // }

  shouldComponentUpdate(nextProps/* , nextState */) {
    const {
      isBeingResized,
      isResizing,
      model,
      // setInitialSize,
    } = this.props;
    const {
      isResizing: willBeResizing,
      model: nextModel,
      // setInitialSize: nextSetInitialSize,
    } = nextProps;

    // if (setInitialSize !== nextSetInitialSize) {
    //   return true;
    // }

    if (!isEqual(nextModel, model)) {
      return true;
    }

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
      property,
      index,
      // dragId,

      reorderable,

      model = [],
      // setColumnsOrder,
      showColumn,
      hideColumn,
      // setColumnsSizes,
      // availProps = [],
      // data = [],

    // isReordering,
    // isReorderingHovered,
    // onDragTableHeaderStart,
    // onDragTableHeaderMove,
    // onDropTableHeader,

    } = this.props;
    // } = props;

    console.log('th props.property', property);
    /*
    const ref = useRef(null);

    const [dropCollectedProps, drop] = useDrop({
      accept: 'my-foobar-type',
      hover(item, monitor) {
        if (!ref.current || isResizing) {
          return;
        }
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
        // Determine mouse position
        const clientOffset = monitor.getClientOffset();
        // Get pixels to the top

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
          isDragging: monitor.isDragging(),
        // canDrop: monitor.canDrop(),
        // hovered: monitor.isOver(),
        }
        ;
      },
    });


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
        ref={this.ref}
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

          <ExtraModelButtonWrapper>

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
              menuDescriptor={
                model.map((m) => {
                  const modelDef = model.find(mo => m.property === mo.property);
                  const isActive = m.show;
                  const onClick = () => {
                    if (model.length > 1) {
                      if (isActive) {
                        hideColumn(m.property);
                        // setColumnsOrder(model.filter(mo => mo.property !== m.property));
                      } else {
                        showColumn(m.property);
                        /* const tmpModel = [...model];
                        const atIndex = availProps.findIndex(p => p.property === m.property);
                        tmpModel.splice(atIndex, 0, { ...m });
                        setColumnsOrder([
                          tmpModel,
                          { ...m },
                        ]);
                        setColumnsSizes((columnsSizes) => {
                          const newColsSizes = [...columnsSizes];
                          newColsSizes.splice(atIndex, 0, { ...m });

                          return newColsSizes;
                        }); */
                        // setColumnsSizes(columnsSizes => [...columnsSizes, 240]);
                        // setColumnsOrder(state => [
                        //   ...state,
                        //   { ...m },
                        // ]);
                      }
                    }
                  };
                  return {
                    label: modelDef ? modelDef.displayName : m.displayName,
                    onClick,
                    // icon: <Checkbox checked={isActive} />,
                    icon: isActive ? <Checkmark /> : <Flex style={{ width: '22px' }} />,
                  };

                  // return (
                  //   <div>
                  //     <UnstyledButton onClick={onClick}>
                  //       <Flex>
                  //         <Checkbox
                  //           checked={isActive}
                  //           // onChange={}
                  //         />
                  //         {modelDef ? modelDef.displayName : m.displayName}
                  //       </Flex>
                  //     </UnstyledButton>
                  //   </div>
                  // );
                })
              }
              button={<UnstyledButton style={{ width: '32px', height: '100%', display: 'flex', alignItems: 'stretch' }} icon={<Hamburger size={16} />} />}
            />

            { /*
              <ButtonMenu
                button={<Hamburger size={14} />}
              >
                {
                  availProps.map((m) => {
                    const modelDef = model.find(mo => m.property === mo.property);
                    const isActive = !!modelDef;
                    const onClick = () => {
                      if (model.length > 1) {
                        if (isActive) {
                          setColumnsOrder(model.filter(mo => mo.property !== m.property));
                        } else {
                          setColumnsOrder([
                            ...model,
                            { ...m },
                          ]);
                        }
                      }
                    };
                    return (
                      <div>
                        <UnstyledButton onClick={onClick}>
                          <Flex>
                            <Checkbox
                              checked={isActive}
                              // onChange={}
                            />
                            {modelDef ? modelDef.displayName : m.displayName}
                          </Flex>
                        </UnstyledButton>
                      </div>
                    );
                  })
                }
              </ButtonMenu>
            */ }
          </ExtraModelButtonWrapper>
          {resizable
            ? (
              <ResizeHandler
                property={property}
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
