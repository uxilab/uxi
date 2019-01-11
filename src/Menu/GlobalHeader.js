import React from 'react';
import styled from 'styled-components';
import { FlexRightCol } from '../Layout';

const GlobalHeaderUI = styled.div`
  /* height: 48px; */
  background: ${({ theme: { palette } }) => palette.primary.main};
  width: 100%;
  /* overflow: hidden; */
`;

export const GlobalHeader = (props) => {
  const {
    menu,
    search,
    children,
    style,
  } = props;

  return (
    <GlobalHeaderUI style={style}>
      <FlexRightCol>
        <div>{search}</div>
        <div>{menu}</div>
      </FlexRightCol>
      {children}
    </GlobalHeaderUI>
  );
};

GlobalHeader.dispalyName = 'GlobalHeader';

export default GlobalHeader;
