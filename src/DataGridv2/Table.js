// @flow
import React from 'react';
import styled from 'styled-components';


type TableProps = {
  borderCollapse?: 'collapse' | 'separate',
}

const TableUi = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: ${({ borderCollapse }) => borderCollapse || 'collapse'};
  overflow-x: auto;
  ${({ isResizing, isReordering }) => (isResizing || isReordering ? 'user-select: none' : '')};
`;


const Table = (props: TableProps) => <TableUi {...props} />;

Table.defaultProps = {
  borderCollapse: 'collapse',
};

Table.displayName = 'Table';


export default Table;
