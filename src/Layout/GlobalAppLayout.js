import React from 'react';
import styled from 'styled-components';
import { flexCSSString, flexLeftColCSSString, appLayoutCSSString } from './';
import defaults from '../Menu/defaults'; // eslint-disable-line import/no-named-as-default

// TODO: would using flexbasis allow for auto transitionalbe layout ?


const {
  breakpoint,
  menuWidth,
  bigMenuWidth,
} = defaults;
/**
 * the only reason we"'re forcing width
 * is because the content lower down the tree
 * is not worry of being accessible within a small are enough
 * the 'calc(100vw - ${(big)menuWidth})' should be remove eventually
*/
const FlexLeftColExtended = styled.div`
  ${() => flexLeftColCSSString};
  ${() => flexCSSString};
  width: 100vh;
  min-width: 100vh;
  max-width: 100vh;
  justify-content: flex-start;
  align-items: stretch;
`;

const AppLayoutExtended = styled.div`
  ${props => appLayoutCSSString};
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;
  width: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column nowrap;
  &>* {}
  &>*:first-child() { }
  &>*:nth-child(2) {
    flex-grow: 9;
    overflow-y: auto; /* applies to same elem as line 49 */
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
  }
  /* TODO: make the entire cluedin content mobile first! */
  &>* { width: calc(100vw - ${menuWidth}) }
  @media (min-width: ${breakpoint}) {
    &>* { width: calc(100vw - ${bigMenuWidth}) }
  }
`;

const InnerAppLayoutUI = styled.div`
  ${appLayoutCSSString};
  & > *:nth-child(1) {
    flex-grow: 99;
    flex-shrink: 0;
  }
  & > *:nth-child(2) {
    flex-grow: 1;
    flex-shrink: 0;
  }
`;

const FlexLeftColumnInnerWrapper = styled.div`
  min-height: 100%;
  box-shadow: 0 53px 1px 2px rgba(72, 72, 72, 0.27), 0 53px 1px 2px rgba(32, 32, 32, 0.22);
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  box-shadow: 0 0 1px 2px rgba(72, 72, 72, .27), 0 0 1px 2px rgba(32, 32, 32, 0.22);
  z-index: 1;
`;

const errorMsg = `GlobalAppLayout will only work with all those props:
  - globalMenu,
  - globalHeader,
  - globalContent,
  - globalFooter
`;

const GlobalAppLayout = (props) => {
  const {
    menu,
    header,
    content,
    footer,
    children,
    wrapperStyle,
    innerWrapperStyle,
  } = props;

  if (!(menu && header && content && footer)) {
    console.error(errorMsg);
    return <div />;
  }

  return (
    <FlexLeftColExtended className="uxi_FlexLeftColExtended" style={{ ...wrapperStyle }}>
      <FlexLeftColumnInnerWrapper>{menu}</FlexLeftColumnInnerWrapper>
      <AppLayoutExtended style={{ ...innerWrapperStyle }}>
        <HeaderWrapper>{header}</HeaderWrapper>
        <InnerAppLayoutUI className="uxi_GAL-main-scrolling-element" >
          {content}
          {footer}
        </InnerAppLayoutUI>
      </AppLayoutExtended>
      {children}
    </FlexLeftColExtended>
  );
};

GlobalAppLayout.displayName = 'GlobalAppLayout';

export default GlobalAppLayout;
