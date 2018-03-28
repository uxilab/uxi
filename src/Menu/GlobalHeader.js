import React from 'react';
import { FlexRightCol } from '../Layout';
import styled from 'styled-components';

const GlobalHeaderUI = styled.div`
  /* height: 48px; */
  background: ${({ theme: {  palette } }) => palette.primary.main};
  width: 100%;
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
