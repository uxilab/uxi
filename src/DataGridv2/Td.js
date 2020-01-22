// @flow
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';


const TdUI = styled.td`
  box-sizing: border-box;
  height: 58px;
  padding: 8px;
`;

type TdProps = {
}

const Td = (props: TdProps) => <TdUI {...props} />;

Td.propTypes = {
  light: PropTypes.bool,
};

Td.defaultProps = {
  light: undefined,
};

export default Td;
