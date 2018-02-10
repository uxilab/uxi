import React from 'react';
import styled from 'styled-components';

/**
 * This comp takes 3 children and make a simple
 * fully responsive, always at least full-height/width
 * vertical header-content-footer layout
 *
 * If you want to use it for the entire viewport,
 * it's up to you to make the space around available
 * e.g. remove body margin, make the html and body full height...
 *
 * same goes if you want it not to spen wider that a ertain width or height
 * you need to constrict/constrain the available space yourself
 */

// TODO: would using flexbasis allow for auto transitionalbe layout ?
const AppLayout = styled.div`
  height: 100%;
	display: flex;
	flex-flow: column nowrap;
  position: relative;
	&>* {
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 0;
  }
	&>*:nth-child(2) {
    flex-grow: 99;
    flex-shrink: 1;
    overflow-y: auto;
  }
`;

AppLayout.displayName = 'AppLayout';

export default AppLayout;
