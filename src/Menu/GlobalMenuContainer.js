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
  background-color: ${({ theme: { palette: { primary: { main } } } }) => (main || '#1d313f')};
  border-right: 1px solid ${({ theme: { palette: { primary: { main } } } }) => (main || '#1d313f')};
  z-index: 3;
  @media (min-width: 700px) {
    width: 200px;
  }
`;

const GlobalMenuContainer = ({ backgroundColor, children }) => (
  <GlobalMenuDiv>{children}</GlobalMenuDiv>
);

GlobalMenuContainer.propTypes = {
  children: PropTypes.node,
};

export default GlobalMenuContainer;
