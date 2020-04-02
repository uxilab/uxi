// @flow
import React from 'react';
// import isEqual from 'lodash/isEqual'
import styled, { css } from 'styled-components';
import ResizeHandler from './ResizeHandler';
import SortHandler from './SortHandler';
import ButtonMenuMultiLevel from '../Menu/ButtonMenu/ButtonMenuMultiLevel'; // eslint-disable-line no-unused-vars
import { UnstyledButton } from '../Button/UnstyledButton1';
import Options from '../Icons/Options';
import { Flex } from '../Layout/Flex';
import Checkmark from '../Icons/Checkmark';

import type { SortDirection } from './DataGrid';

const headerCellHeight = 48;

/* eslint-disable no-nested-ternary */
const ThUI = styled.th`
  box-sizing: border-box;
  height: ${headerCellHeight}px;
  padding: 0;
  text-align: left;
  border: 1px solid #cecece;
  position: relative;
  transition: all 0ms cubic-bezier(.5,1,.5,1);
  text-transform: none;
  font-weight: 600;
  color: ${({ theme: { palette } }) => palette.midDarkGrey};
  background: ${({ theme: { palette } }) => (palette.white)};
  &:hover {
    transition: all 0ms cubic-bezier(.5,1,.5,1);
    ${ResizeHandler} {
      transition: all 280ms cubic-bezier(.5,1,.5,1);
      opacity: ${({ isResizing, isBeingResized }) => (isResizing ? (isBeingResized ? 0.7 : 0) : 0.2)};
      width: 6px;
      /* &:hover {
        &, &:after {
          opacity:.7;
          transition: all 280ms cubic-bezier(.5,1,.5,1);
        }
      } */
    }
  }

  &:hover ${ResizeHandler},
  &:not(:hover) ${ResizeHandler} {
      transition: all 280ms cubic-bezier(.5,1,.5,1);
      ${({ isBeingResized }) => (isBeingResized ? css`opacity: 0.7 !important;` : '')};
      ${({ isBeingResized }) => (isBeingResized ? css`width: 6px;` : '')};
      /* &:hover, &:not(:hover) {
        &, &:after {
          &
          ${({ isBeingResized }) => (isBeingResized ? css`opacity:.7;` : '')};
          transition: all 280ms cubic-bezier(.5,1,.5,1);
        }
      } */
  }
  /* &:last-child:hover ${ResizeHandler}:after,
  &:last-child:not(:hover) ${ResizeHandler}:after {
    content: '◂❘';
    margin-right: 0;
    transform: translateX(0%);
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

class Th extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  componentDidMount() {
    const { property } = this.props;

    if (this.ref.current && this.ref.current.getBoundingClientRect) {
      const bRect = this.ref.current.getBoundingClientRect() || {};
      const { width = 0 } = bRect;
      const { setInitialSize } = this.props;
      // if (setInitialSize/*  && display === 'block' */) {
      // otherwise we are ricking a cyclic deps with the useREsizebs and the extraCol
      if (setInitialSize && property !== 'toString') {
        setInitialSize(width);
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    const {
      isBeingResized,
      isResizing,
      isReordering,
      model = [],
      isBeingResizedBySibling,
      selected = [],
      // setInitialSize,
      // allowInlinePropertySelection,
    } = this.props;
    const {
      isResizing: willBeResizing,
      isReordering: willBeReordering,
      model: nextModel = [],
      selected: nextSelected = [],
      // setInitialSize: nextSetInitialSize,
    } = nextProps;

    // if (!allowInlinePropertySelection) {
    //   return true
    // }

    // if (setInitialSize !== nextSetInitialSize) {
    //   return true;
    // }

    if (isBeingResized || isBeingResizedBySibling) {
      return true;
    }

    if (selected.join(',') !== nextSelected.join(',')) {
      return true;
    }

    if (nextModel.map(x => !x.hide).join(',') !== model.map(x => !x.hide).join(',')) {
      return true;
    }

    if (nextModel.map(x => x.property).join(',') !== model.map(x => x.property).join(',')) {
      return true;
    }

    if (
      (!isResizing && willBeResizing)
      || (isResizing && !willBeResizing)
    ) {
      return true;
    }

    if (
      (isReordering === null && willBeReordering !== null && isReordering !== willBeReordering)
      || (isReordering !== null && willBeReordering === null && isReordering !== willBeReordering)
    ) {
      return true;
    }

    return false;
  }
  /*

  */

  // componentDidUpdate(prevProps) {
  //   const { display, isResizing, model = [], property } = this.props;
  //   const { isResizing: wasResizing, model: prevModel = [] } = prevProps;
  //   // const a = prevModel.find(m => m.property === property) || {};
  //   const modelForThisProp = model.find(m => m.property === property) || {};
  //   // const wasJustAdded = (!b.hide && a.hide);


  //   // eslint-disable-next-line no-shadow
  //   const curr = model.filter(x => !x.hide).map(({ property = '' } = {}) => property);
  //   // eslint-disable-next-line no-shadow
  //   const prev = prevModel.filter(x => !x.hide).map(({ property = '' } = {}) => property);

  //   const shouldCheckIntrinsicWidth = (
  //     ((wasResizing && !isResizing) && display === 'table')
  //     || (curr.join(',') !== prev.join(','))
  //   );

  //   if (shouldCheckIntrinsicWidth) {
  //     if (this.ref.current && this.ref.current.getBoundingClientRect) {
  //       const { width } = modelForThisProp;
  //       const bRect = this.ref.current.getBoundingClientRect() || {};
  //       const { width: intrinsicWidth = 0 } = bRect;

  //       if (intrinsicWidth !== width) {
  //         const { setInitialSize } = this.props;
  //         if (setInitialSize) {
  //           setInitialSize(intrinsicWidth);
  //         }
  //       }
  //     }
  //   }
  // }

  render() {
    const {
      cRectHeight,
      allowInlinePropertySelection,
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
      resizable,
      onResizeStart,
      onResizeStop,
      children,
      property,
      index,
      dragId,

      reorderable,

      model = [],
      showColumn,
      hideColumn,

      isReordering,
      onDragTableHeaderStart,
      onDragTableHeaderMove,
      onDropTableHeader,
      setColumOrder,
      isLast,
      display,
      isCheckboxCell,
    } = this.props;

    const styles = {
      width: columnWidth,
      minWidth: columnWidth,
      maxWidth: columnWidth,
      ...style,
    };

    const isBeingReordered = isReordering === index;

    // eslint-disable-next-line no-nested-ternary
    // const anchor = property === 'toString'
    //   ? 'right'
    //   : index === model
    //         .filter(m => m.property !== 'toString')
    //         .filter(x => !x.hide).length - 1 ? 'right' : 'left';

    return (
      <ThUI
        ref={this.ref}
        isResizing={isResizing}
        isBeingResized={isBeingResized}
        isBeingReordered={isBeingReordered}
        style={styles}
        isReordering={isReordering}
        isFirst={index === 0}
      >
        <ThInnerWrapper
          canDrag={property !== 'toString'}
          reorderable={reorderable}
          isResizing={isResizing}
          onDragTableHeaderStart={onDragTableHeaderStart}
          onDragTableHeaderMove={onDragTableHeaderMove}
          onDropTableHeader={onDropTableHeader}
          index={index}
          setColumOrder={setColumOrder}
          dragId={dragId}
          columnWidth={columnWidth}
          resizable={resizable}
        >
          {
            !isCheckboxCell && !isResizing && allowInlinePropertySelection
              ? (
                <Flex
                  style={{
                    minWidth: '1px',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    flexGrow: 999,
                    flexShrink: 999,
                  }}
                >
                  <ButtonMenuMultiLevel
                    style={{ alignItems: 'stretch', display: 'flex', width: '100%', boxSizing: 'border-box' }}
                    // anchor={index === model
                    // .filter(m => m.property !== 'toString')
                    // .filter(x => !x.hide).length - 1 ? 'right' : 'left'
                    // }
                    // anchor={anchor}
                    anchor={'left'}
                    buttonWrapperStyle={{
                      position: 'inherit',
                      height: '100%',
                      width: '100%',
                      alignItems: 'stretch',
                      display: 'flex',
                    }}
                    BoxWrapperUIStyle={{
                      width: 'auto',
                      zIndex: 1,
                    }}
                    menuDescriptor={
                      model.filter(m => m.property !== 'toString').map((m) => {
                        const modelDef = model.find(mo => m.property === mo.property);
                        const isActive = !m.hide;
                        const onClick = () => {
                          if (model.length > 1) {
                            if (isActive) {
                              hideColumn(m.property);
                            } else {
                              showColumn(m.property);
                            }
                          }
                        };
                        return {
                          label: modelDef ? modelDef.displayName : m.displayName,
                          onClick,
                          icon: isActive ? <Checkmark /> : <Flex style={{ width: '22px' }} />,
                        };
                      })
                    }
                    button={
                      <Flex
                        style={{ width: '100%', minWidth: '1px', justifyContent: 'flex-start', flexGrow: 999, flexShrink: 999, cursor: 'pointer' }}
                      >
                        {children}
                      </Flex>
                    }
                  />
                </Flex>
              )
              : (
                <Flex
                  style={{ width: '100%', minWidth: '1px', justifyContent: 'flex-start', flexGrow: 999, flexShrink: 999, cursor: 'pointer' }}
                >
                  {children}
                </Flex>
              )
          }
          {!isCheckboxCell && sortable && (property !== 'toString')
            ? (
              <SortHandler
                style={{ flexGrow: 1, flexShrink: 0 }}
                sortable={sortable}
                sortDirection={sortDirection}
                onSortChange={onSortChange}
              />
            )
            : null
          }
          {
            !isCheckboxCell && menuDescriptor !== undefined
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
                      height: '100%',
                      alignItems: 'stretch',
                      display: 'flex',
                    }}
                    BoxWrapperUIStyle={{
                      width: 'auto',
                      zIndex: 1,
                    }}
                    menuDescriptor={isResizing ? [] : menuDescriptor}
                    button={<UnstyledButton style={{ width: '32px', height: '100%', display: 'flex', alignItems: 'stretch' }} icon={<Options />} />}
                  />
                </Flex>
              )
              : null
          }
          {
            !isCheckboxCell && menuDescriptor === undefined && menu !== undefined
              ? menu
              : null
          }
          {
            !isCheckboxCell && resizable
              ? (
                <div
                  style={{
                    transition: 'none',
                    zIndex: 1,
                    position: 'absolute',
                    width: isBeingReordered ? '100%' : '0',
                    height: cRectHeight - 18, // scrollbars
                    right: 0,
                    background: 'rgba(255, 255, 255, 0.5)',
                  }}
                >&nbsp;</div>
              )
              : null
          }

          {
            !isCheckboxCell && resizable
              ? (
                <div
                  style={{
                    transition: 'none',
                    position: 'absolute',
                    width: '1px',
                    height: cRectHeight - 18, // scrollbars
                    right: 0,
                    background: isReordering ? '#cecece' : 'transparent',
                  }}
                >&nbsp;</div>
              )
              : null
          }

        </ThInnerWrapper>
        {!isCheckboxCell && (property !== 'toString') && resizable && (isLast ? display !== 'table' : true) && isReordering === null
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
      </ThUI>
    );
  }
}


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
