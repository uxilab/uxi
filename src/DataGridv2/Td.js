// @flow
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';


const TdUI = styled.td`
`;

type TdProps = {
    light?: boolean,
}

const Td = (props: TdProps) => <TdUI {...props} />;

Td.propTypes = {
  light: PropTypes.bool,
};

Td.defaultProps = {
  light: undefined,
};

export default Td;
