import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Table = styled.table`
  width: 100%;
  border-collapse: ${({ borderCollapse }) => borderCollapse || 'collapse'};
  overflow-x: auto;
  display: ${({ display }) => display};
`;

Table.propTypes = {
  borderCollapse: propTypes.oneOf(['collapse', 'separate']),
  display: propTypes.arrayOf(['table', 'block']),
}

Table.defaultProps = {
  borderCollapse: 'collapse',
  display: 'table',
}


export default (props) => <Table {...props} />
