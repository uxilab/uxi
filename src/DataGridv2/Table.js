// @flow
import React from 'react';
import styled from 'styled-components';


type TableProps = {
  borderCollapse?: 'collapse' | 'separate',
  display?: 'table' | 'block',
}

const TableUi = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: ${({ borderCollapse }) => borderCollapse || 'collapse'};
  overflow-x: auto;
  display: ${({ display }) => display};
  ${({ isResizing }) => (isResizing ? 'user-select: none' : '')};
`;


const Table = (props: TableProps) => <TableUi {...props} />;


Table.defaultProps = {
  borderCollapse: 'collapse',
  display: 'table',
};

Table.displayName = 'Table';


export default Table;
