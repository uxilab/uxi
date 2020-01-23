// @flow
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import TdInnerWrapper from './TdInnerWrapper';


const TdUI = styled.td.attrs(props => ({
  ...props,
  // children: <TdInnerWrapper>{props.children}</TdInnerWrapper>,
}))`
  box-sizing: border-box;
  height: 58px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* padding: 8px; */
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
