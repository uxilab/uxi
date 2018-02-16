import React from 'react';
import styled from 'styled-components';
import WidgetHeader from './WidgetHeader';
import { Loader } from '../Motion';

const WidgetWrapper = styled.div`
  border: 1px solid #ececec;
  box-sizing: border-box;
`;

const WidgetContainer = styled.div`
  min-height: 80px;
`;

const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(241, 241, 240);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height:80px;
`;

// empty
// SubHeader
const Widget = ({
  children,
  title,
  isLoading,
  isLoadingMore,
  menu,
  emptyText,
}) => (
  <WidgetWrapper>
    {
      title &&
      (
        <WidgetHeader
          title={title}
          isLoading={isLoadingMore}
          menu={menu}
        />
      )
    }
    <WidgetContainer>
      { !isLoading && !emptyText && children}
      { isLoading && <LoaderWrapper><Loader /></LoaderWrapper>}
      { !isLoading && emptyText && <EmptyWrapper>{emptyText}</EmptyWrapper>}
    </WidgetContainer>
  </WidgetWrapper>
);

export default Widget;
