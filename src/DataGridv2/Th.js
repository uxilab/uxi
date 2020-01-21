// @flow
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ResizeHandler from './ResizeHandler';
import SortHandler from './SortHandler';
import type { SortDirection } from './DataGrid';


type ThProps = {
  children?: Node | Array<Node>,
  index?: number,

  resizable?: boolean,
  onResizeStart?: Function,

  // eslint-disable-next-line max-len
  onSortChange: (property: string, sortDirection: SortDirection, newSortDirections: Array<SortDirection>) => {},
  sortable: bool,
  sortDirection: SortDirection,
}

const ThInnerWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  white-space: nowrap;
  padding: 0 8px;
`;

/* eslint-disable react/no-children-prop */
const mapChildren = (props: ThProps) => ({
  ...props,
  // TODO use fragment
  children: (
    <ThInnerWrapper>
      {props.children}
      {props.sortable
        ? <SortHandler
          sortable={props.sortable}
          sortDirection={props.sortDirection}
          onSortChange={props.onSortChange}
        />
        : null
      }
      {props.resizable
        ? <ResizeHandler resizable={props.resizable} onResizeStart={props.onResizeStart} />
        : null
      }
    </ThInnerWrapper>
  ),
});

const Th = styled.th.attrs(mapChildren)`
  padding: 0;
  text-align: left;
  border: 1px solid #cecece;
  position: relative;
  transition: all 280ms cubic-bezier(.5,1,.5,1);
  text-transform: uppercase;
  color: ${({ theme: { palette } }) => palette.midDarkGrey};
  background: ${({ theme: { palette } }) => palette.white};
  /* font-size: 13px;
  color: ${({ theme }) => theme.palette.midDarkGrey}; */
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
  &:last-child,
  &:last-of-type:hover,
  &:last-child:hover {
    ${ResizeHandler} {
      display: none;
      visibility: hidden;
      pointer-events: none;
    }
  }
`;

Th.propTypes = {
  light: PropTypes.bool,
  index: PropTypes.number,
  resizable: PropTypes.bool,
  onResizeStart: PropTypes.func,
};

Th.defaultProps = {
  /* eslint-disable no-unused-vars */
  onResizeStart: () => {},
  // eslint-disable-next-line max-len
  onSortChange: (property: string, sortDirection: SortDirection, newSortDirections: Array<SortDirection>) => {},
  /* eslint-disable no-unused-vars */
};


export default Th;
