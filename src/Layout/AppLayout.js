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
 */

const AppLayout = styled.div`
  min-height: 100%;
	display: flex;
	flex-flow: column nowrap;
	&>* { box-sizing: border-box }
	&>*:nth-child(2) { flex-grow: 999	}
`;

AppLayout.displayName = 'AppLayout';

export default AppLayout
