import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GlobalMenuDiv = styled.div`
  position: fixed;
  top: 0;
  text-align: center;
  bottom: 0;
  left: 0;
  width: 75px;
  background-color: ${({ backgroundColor }) => (backgroundColor || '#1C313F')};
  border-right: 1px solid ${({ backgroundColor }) => (backgroundColor || '#1C313F')};
  z-index: 3;
`;

const GlobalMenuContainer = ({ backgroundColor, children }) => (
  <GlobalMenuDiv backgroundColor={backgroundColor}>{children}</GlobalMenuDiv>
);

GlobalMenuContainer.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
};

export default GlobalMenuContainer;
