// @flow
import React from 'react';
import styled, { css } from 'styled-components';


type TableProps = {
  borderCollapse?: 'collapse' | 'separate',
  display?: 'table' | 'block',
  light?: boolean,
}

// Table.propTypes = {
//   borderCollapse: PropTypes.oneOf(['collapse', 'separate']),
//   display: PropTypes.arrayOf(['table', 'block']),
//   light: PropTypes.bool,
// }


const Table = styled.table`
  width: 100%;
  border-collapse: ${({ borderCollapse }) => borderCollapse || 'collapse'};
  overflow-x: auto;
  display: ${({ display }) => display};
  ${({ isResizing }) => (isResizing ? css`user-select: none` : '')};
`;


Table.defaultProps = {
  borderCollapse: 'collapse',
  display: 'table',
  light: undefined,
};

export default (props: TableProps) => <Table {...props} />;
