import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaults from './defaults';

const {
  menuWidth,
  bigMenuWidth,
  breakpoint,
} = defaults;

const GlobalMenuDiv = styled.div`
  /*
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  */
  height: 100%;
  height: 100vh;
  text-align: center;
  width: ${menuWidth};
  background-color: ${({ theme: { palette: { primary: { main } } } }) => (main || '#1d313f')};
  z-index: 99;
  transition:  ${({ theme: { transition } }) => transition.default};
  @media (min-width: ${breakpoint}) {
    width: ${bigMenuWidth};
    transition:  ${({ theme: { transition } }) => transition.default};
  }
`;

const GlobalMenuContainer = ({ backgroundColor, children }) => (
  <GlobalMenuDiv>{children}</GlobalMenuDiv>
);

GlobalMenuContainer.propTypes = {
  children: PropTypes.node,
};

export default GlobalMenuContainer;
