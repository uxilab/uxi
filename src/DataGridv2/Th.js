// @flow
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ResizeHandler from './ResizeHandler';
import SortHandler from './SortHandler';
import ButtonMenuMultiLevel from '../Menu/ButtonMenu/ButtonMenuMultiLevel'; // eslint-disable-line no-unused-vars
import Options from '../Icons/Options';
import { Flex } from '../Layout/Flex';
import { UnstyledButton } from '../Button/UnstyledButton1';
import type { SortDirection } from './DataGrid';


type ThProps = {
  children?: Node | Array<Node>,
  index?: number,

  isResizing?: Boolean,
  resizable?: Boolean,
  onResizeStart?: Function,

  // eslint-disable-next-line max-len
  onSortChange: (property: string, sortDirection: SortDirection, newSortDirections: Array<SortDirection>) => {},
  sortable: bool,
  sortDirection: SortDirection,
}

/* eslint-disable react/no-children-prop */
const mapChildren = (props: ThProps = {}) => ({
  ...props,
  // TODO use fragment
  children: (
    <props.ThInnerWrapper>
      {props.children}
      {props.sortable
        ? <SortHandler
          sortable={props.sortable}
          sortDirection={props.sortDirection}
          onSortChange={props.onSortChange}
        />
        : null
      }
      {
        props.menuDescriptor !== undefined
          ? (
            <Flex style={{ marginLeft: 'auto', alignItems: 'stretch' }}>
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
                menuDescriptor={props.menuDescriptor}
                button={<UnstyledButton style={{ width: '32px', height: '100%', display: 'flex', alignItems: 'stretch' }} icon={<Options />} />}
              />
            </Flex>
          )
          // ? '•••'
          : null
      }
      {
        props.menuDescriptor === undefined && props.menu !== undefined
          ? props.menu
          : null
      }
      {props.resizable
        ? (
          <ResizeHandler
            isResizing={props.isResizing}
            resizable={props.resizable}
            onResizeStart={props.onResizeStart}
          />
        )
        : null
      }
    </props.ThInnerWrapper>
  ),
});

const Th = styled.th.attrs(mapChildren)`
  box-sizing: border-box;
  height: 58px;
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

  *[data-drop-down-trigger] {
    height: 100%;
    display: flex;
    align-items: stretch;
    & > div {
      height: 100% !important;
    }
  }
`;

Th.propTypes = {
  isResizing: PropTypes.bool,
  light: PropTypes.bool,
  index: PropTypes.number,
  resizable: PropTypes.bool,
  onResizeStart: PropTypes.func,
};

Th.defaultProps = {
  isResizing: undefined, /* eslint-disable no-unused-vars */
  onResizeStart: () => {},
  // eslint-disable-next-line max-len
  onSortChange: (property: string, sortDirection: SortDirection, newSortDirections: Array<SortDirection>) => {},
  /* eslint-disable no-unused-vars */
};


export default Th;