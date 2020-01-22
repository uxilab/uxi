// @flow
import React from 'react';
import styled from 'styled-components';


type TableProps = {
  borderCollapse?: 'collapse' | 'separate',
  display?: 'table' | 'block',
}

// Table.propTypes = {
//   borderCollapse: PropTypes.oneOf(['collapse', 'separate']),
//   display: PropTypes.arrayOf(['table', 'block']),
//   light: PropTypes.bool,
// }


const TableUi = styled.table`
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

export default Table;
