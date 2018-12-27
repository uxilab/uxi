import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaults from './defaults'; // eslint-disable-line import/no-named-as-default

const {
  menuWidth: defaultMenuWidth,
  bigMenuWidth: defaultBigMenuWidth,
  breakpoint: defaultBreakpoint,
} = defaults;

const getPosition = ({ attachToViewport }) => (
  attachToViewport
    ? ('position: fixed;' +
      'top: 0;' +
      'bottom: 0;' +
      'left: 0'
    )
    : ''
);
const GlobalMenuDiv = styled.div`
  /** create context to allow being above
    * menuPanel in z-index stack order */
    /* position: */
    /* ${props => getPosition(props)}; */


  height: 100%;
  height: 100vh;
  height: ${({ attachToViewport }) => (attachToViewport ? '100vh' : '100%')};
  text-align: center;
  width: ${({ menuWidth }) => menuWidth};
  background-color: ${({ theme: { palette: { primary: { dark } } } }) => (dark || '#15303f')};
  /* z-index: 99; need to be applied on children */
  transition:  ${({ theme: { transition } }) => transition.default};
  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    width: ${({ bigMenuWidth }) => bigMenuWidth};
    transition:  ${({ theme: { transition } }) => transition.default};
  }
`;

const GlobalMenuContainer = ({
  children,
  attachToViewport,
  innerStyle,
  breakpoint,
  menuWidth,
  bigMenuWidth,
}) => (
  <div style={{ position: 'relative' }}>
    <GlobalMenuDiv
      attachToViewport={attachToViewport}
      style={innerStyle}
      breakpoint={breakpoint}
      menuWidth={menuWidth}
      bigMenuWidth={bigMenuWidth}
    >
      {children}
    </GlobalMenuDiv>
  </div>
);

GlobalMenuContainer.propTypes = {
  children: PropTypes.node,
};

GlobalMenuContainer.defaultProps = {
  children: null,
  breakpoint: defaultBreakpoint,
  menuWidth: defaultMenuWidth,
  bigMenuWidth: defaultBigMenuWidth,
};

export default GlobalMenuContainer;
